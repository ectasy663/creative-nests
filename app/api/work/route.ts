import { NextResponse } from 'next/server'
import { getProjects, getProjectBySlug, createProject } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')
    
    if (slug) {
      const project = getProjectBySlug(slug)
      if (!project) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 })
      }
      return NextResponse.json(project)
    }
    
    const projects = getProjects()
    return NextResponse.json(projects)
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
    
    createProject(body)
    return NextResponse.json({ success: true, project: body })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
