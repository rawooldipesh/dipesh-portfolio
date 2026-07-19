import connectDB from '@/lib/mongodb'
import Project from '@/lib/models/Project'

export async function GET() {
  try {
    await connectDB()
    
    const projects = await Project.find({}).sort({ featured: -1, date: -1 })
    
    return Response.json({
      success: true,
      data: projects,
      count: projects.length
    })

  } catch (error) {
    return Response.json({
      success: false,
      message: error.message
    }, { status: 500 })
  }
}