import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    default: false,  // track if you've read the message
  },
}, {
  timestamps: true,
})

const Message = mongoose.models.Message || new mongoose.model('Message', MessageSchema)

export default Message