export const portfolioData = {
  personal: {
    name: 'Dipesh Rawool',
    title: 'Full Stack Developer & AI Engineer',
    email: 'rawooldipesh0@gmail.com',
    phone: '+91 8928984857',
    location: 'Kharghar, Navi Mumbai 410210',
    linkedin: 'https://linkedin.com/in/dipesh-rawool',
    github: 'https://github.com/rawooldipesh',
    summary: `Full Stack Developer with hands-on experience building production-level applications 
    using Python, Django, FastAPI, React, and Next.js. Built and deployed a live school management 
    platform at Zedpea Technologies. Published research paper at ICETES-2026. Currently building 
    AI-powered applications with RAG architecture and LLM integration. Seeking a role where I can 
    apply full stack and AI skills to real-world product challenges.`,
  },

  skills: {
    programmingLanguages: ['Python', 'JavaScript', 'Java', 'SQL'],
    backend: ['Django', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'SQLAlchemy'],
    frontend: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
    databases: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB'],
    aiMl: ['NumPy', 'Pandas', 'scikit-learn', 'NLP', 'TF-IDF', 'Word2Vec', 'OpenAI API', 'RAG'],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
  },

  experience: [
    {
      title: 'Software Development Intern',
      company: 'Zedpea Infotech',
      location: 'Navi Mumbai',
      startDate: '07/2025',
      endDate: '12/2025',
      type: 'Internship',
      bullets: [
        'Contributed to development of TRIKLES, a school management web and mobile platform serving educational institutions',
        'Developed and maintained various frontend modules using React and Angular with REST API integration',
        'Built dynamic Question Creation module with CRUD operations',
        'Implemented Timetable Creation module with conflict detection and multi-class scheduling support',
        'Developed Payment module UI with modular, backend-integrable components',
        'Collaborated using Git and GitHub for version control and code reviews',
      ],
    },
  ],

  projects: [
    {
      title: 'Price Intelligence Dashboard',
      date: '06/2024',
      tech: ['FastAPI', 'PostgreSQL', 'React', 'BeautifulSoup'],
      category: 'Full Stack',
      featured: true,
      github: '',
      live: '',
      description: 'A full-stack price intelligence tool that scrapes product prices from sites using BeautifulSoup and stores historical data in PostgreSQL.',
      bullets: [
        'Built FastAPI backend with async endpoints, Pydantic validation, JWT authentication, and auto-generated Swagger docs',
        'Created React dashboard with Recharts visualizations displaying price trends, changes, and product comparisons over time',
        'Directly relevant to AI-driven pricing platforms and freight rate intelligence systems',
      ],
    },
    {
      title: 'Mental Health Chatbot — Emotion Detection & Sentiment Analysis',
      date: '07/2025',
      tech: ['React Native', 'Python', 'OpenAI API', 'NLP'],
      category: 'AI/ML',
      featured: true,
      github: '',
      live: '',
      description: 'A conversational chatbot that detects user emotions and sentiment to provide contextual mental health support.',
      bullets: [
        'Integrated OpenAI API for dialogue generation with custom emotion-detection preprocessing layer',
        'Achieved sentiment classification accuracy through NLP pipeline',
        'Research paper presented at ICETES-2026 International Conference',
      ],
    },
    {
      title: 'ATS Score Checker',
      date: '01/2025',
      tech: ['Python', 'scikit-learn', 'TF-IDF', 'Word2Vec', 'Flask'],
      category: 'AI/ML',
      featured: true,
      github: '',
      live: '',
      description: 'Machine learning model to evaluate resumes and predict Applicant Tracking System scores against job descriptions.',
      bullets: [
        'Built ML model using NLP techniques TF-IDF and Word2Vec to evaluate resumes against job descriptions',
        'Achieved 85-90% prediction accuracy for ATS-compatibility scoring',
        'Developed Flask-based web interface for resume upload and instant feedback',
      ],
    },
    {
      title: 'Healthy Snacks Website',
      date: '07/2024',
      tech: ['React.js', 'CSS', 'JavaScript'],
      category: 'Frontend',
      featured: false,
      github: '',
      live: '',
      description: 'Fully functional e-commerce web app with product listing, filtering, cart, and checkout features.',
      bullets: [
        'Built complete frontend with React.js including product listing, filtering, cart management',
        'Implemented checkout flow with form validation',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Engineering — IT Engineering',
      institution: 'Mumbai University / AC Patil College Of Engineering',
      location: 'Navi Mumbai',
      startDate: '08/2022',
      endDate: '05/2026',
      cgpa: '8.12',
      highlights: ['Minor Honours: Artificial Intelligence & Machine Learning'],
    },
  ],

  achievements: [
    'Research Paper presented at ICETES-2026 International Conference (CSI)',
    'Aavishkar 2025 — University of Mumbai Inter-Collegiate Research Convention (Zonal Round)',
  ],
}