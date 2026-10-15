# WebChem - Complete Chemistry Learning Platform

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

> A comprehensive, full-stack chemistry learning platform with interactive tools, 3D molecular visualization, virtual lab, AI tutor, and social learning features.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env and add your MongoDB connection string

# Start the server
npm run dev
```

Backend runs on: http://localhost:5000
API documentation: http://localhost:5000/api

## 🌟 Features

### ✅ Implemented
- ✅ Node.js/Express backend with MongoDB
- ✅ JWT authentication & user management
- ✅ Progress tracking with achievements
- ✅ Chemistry calculation tools API
- ✅ Lesson & reaction database
- ✅ RESTful API endpoints

### 🚧 Coming Soon
- 3D Molecular Visualization (Three.js)
- Virtual Chemistry Lab Simulator
- Interactive Periodic Table
- AI Chemistry Tutor
- Quiz Engine
- PWA & Mobile App

## 📁 Project Structure

```
webchem/
├── backend/          # Node.js/Express server
├── frontend/         # Client-side application
├── database/         # Seeds and migrations
├── docs/            # Documentation
└── tests/           # Test suites
```

## 🔌 API Endpoints

- **Auth**: `/api/auth` - Registration, login, profile
- **Lessons**: `/api/lessons` - Browse and retrieve lessons
- **Progress**: `/api/progress` - Track learning progress
- **Reactions**: `/api/reactions` - Chemical reactions database
- **Tools**: `/api/tools` - Chemistry calculators

## 📝 Documentation

- [Quick Start Guide](QUICKSTART.md) - Get up and running
- [Architecture](ARCHITECTURE.md) - System design (coming soon)
- [API Documentation](docs/API.md) - Endpoint reference (coming soon)

## 👨‍💻 Author

**Smruti Ranjan**
- GitHub: [@smrutiranjandev0p](https://github.com/smrutiranjandev0p)
- Email: ranjansmrutibehera@gmail.com

## 📄 License

MIT License - see LICENSE file for details

---

**Built with ❤️ for chemistry learners worldwide**
