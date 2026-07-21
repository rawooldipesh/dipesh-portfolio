const response = await fetch('http://localhost:3000/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: 'Tell me more about the Price Intelligence Dashboard project',
    conversationHistory: [
      { role: 'user', content: 'Tell me about yourself' },
      { role: 'assistant', content: 'I am Dipesh Rawool, a full stack developer...' }
    ]
  })
})

const data = await response.json()
console.log(data.response)