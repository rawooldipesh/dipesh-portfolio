import { askAgent } from '@/lib/ai'

export async function POST(request) {
  try {
    const body = await request.json()
    const { message, conversationHistory } = body

    if (!message) {
      return Response.json({
        success: false,
        message: 'Message is required'
      }, { status: 400 })
    }

    const response = await askAgent(message, conversationHistory || [])

    return Response.json({
      success: true,
      response: response
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json({
      success: false,
      message: error.message
    }, { status: 500 })
  }
}