import { NextResponse } from 'next/server'
import { getBlogPosts, getBlogPostBySlug, createBlogPost } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')
    
    if (slug) {
      const post = getBlogPostBySlug(slug)
      if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 })
      }
      return NextResponse.json(post)
    }
    
    const posts = getBlogPosts()
    return NextResponse.json(posts)
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Simple validation
    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json({ error: 'Missing title, slug, or content' }, { status: 400 })
    }
    
    createBlogPost(body)
    return NextResponse.json({ success: true, post: body })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
