import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  // this field must exist
  },
  date: {
    type: String,
  },
  tech: {
    type: [String],  // array of strings
    default: [],
  },
  category: {
    type: String,
    enum: ['Full Stack', 'AI/ML', 'Frontend', 'Backend'],  // only these values allowed
  },
  featured: {
    type: Boolean,
    default: false,
  },
  github: {
    type: String,
    default: '',
  },
  live: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    required: true,
  },
  bullets: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true,  // automatically adds createdAt and updatedAt fields
})

// This line prevents Mongoose from creating duplicate models
// in Next.js serverless environment where modules can be re-imported
const Project = mongoose.models.Project || new mongoose.model('Project', ProjectSchema)

export default Project