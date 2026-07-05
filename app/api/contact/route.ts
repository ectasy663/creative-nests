import { NextResponse } from 'next/server'
import { saveSubmission } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body
    
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }
    
    const submission = saveSubmission({ name, email, subject: subject || 'No Subject', message })
    return NextResponse.json({ success: true, submission })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
