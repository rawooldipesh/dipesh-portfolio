import connectDB from '@/lib/mongodb'
import Message from '@/lib/models/Message'

export async function POST(request) {
  try {
    await connectDB()

    const body = await request.json()
    const { name, email, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return Response.json({
        success: false,
        message: 'All fields are required'
      }, { status: 400 })
    }

    // Save to MongoDB
    const newMessage = await Message.create({ name, email, message })

    return Response.json({
      success: true,
      message: 'Message saved successfully',
      data: newMessage
    })

  } catch (error) {
    return Response.json({
      success: false,
      message: error.message
    }, { status: 500 })
  }
}