import { NextResponse } from 'next/server'
import { getServices, getServiceBySlug, createService } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')
    
    if (slug) {
      const service = getServiceBySlug(slug)
      if (!service) {
        return NextResponse.json({ error: 'Service not found' }, { status: 404 })
      }
      return NextResponse.json(service)
    }
    
    const services = getServices()
    return NextResponse.json(services)
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    if (!body.title || !body.slug) {
      return NextResponse.json({ error: 'Missing title or slug' }, { status: 400 })
    }
    
    createService(body)
    return NextResponse.json({ success: true, service: body })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
