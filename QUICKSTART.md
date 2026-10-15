# 🚀 WebChem Quick Start Guide

## After Deployment - Getting Your Backend Running

### Prerequisites Setup (One-time only)

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Choose LTS version (v20.x or higher)
   - Verify installation: `node --version`

2. **Install MongoDB** (Choose ONE option)

   **Option A: MongoDB Atlas (Cloud - Recommended for beginners)**
   - Go to: https://www.mongodb.com/cloud/atlas
   - Create free account
   - Create a free cluster (M0)
   - Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/webchem`)
   
   **Option B: Local MongoDB**
   - Download from: https://www.mongodb.com/try/download/community
   - Install with default settings
   - MongoDB will run on: `mongodb://localhost:27017/webchem`

### Installation & Setup

```bash
# 1. Navigate to your project
cd C:\Users\ranja\OneDrive\Documents\GitHub\webchem

# 2. Install all dependencies
npm install

# 3. Create your .env file
copy .env.example .env

# 4. Edit .env file (use Notepad)
notepad .env
```

**Edit these values in .env:**
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING_HERE
JWT_SECRET=change_this_to_any_random_long_string_12345
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:8080
```

### Running the Application

**Terminal 1 - Backend API:**
```bash
cd C:\Users\ranja\OneDrive\Documents\GitHub\webchem
npm run dev
```
✅ Backend runs on: http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd C:\Users\ranja\OneDrive\Documents\GitHub\webchem
npx live-server --port=8080
```
✅ Frontend runs on: http://localhost:8080

### Testing Your API

**1. Health Check**
Open browser: http://localhost:5000/health

**2. API Documentation**
Open browser: http://localhost:5000/api

**3. Test Registration** (using curl or Postman)
```bash
curl -X POST http://localhost:5000/api/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\"username\":\"testuser\",\"email\":\"test@example.com\",\"password\":\"password123\"}"
```

**4. Test Login**
```bash
curl -X POST http://localhost:5000/api/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"test@example.com\",\"password\":\"password123\"}"
```

### Available API Endpoints

#### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user (requires token)
- `PUT /api/auth/update-profile` - Update profile (requires token)
- `POST /api/auth/logout` - Logout

#### Lessons
- `GET /api/lessons` - Get all lessons
- `GET /api/lessons/:id` - Get single lesson
- `GET /api/lessons/path/:pathId` - Get lessons by path

#### Progress
- `GET /api/progress` - Get user progress (requires token)
- `PUT /api/progress/:lessonId` - Update progress (requires token)
- `GET /api/progress/stats` - Get user statistics (requires token)

#### Reactions
- `GET /api/reactions` - Get all reactions
- `GET /api/reactions/:id` - Get single reaction
- `GET /api/reactions/type/:type` - Get by type

#### Chemistry Tools
- `POST /api/tools/molar-mass` - Calculate molar mass
- `POST /api/tools/ph-calculator` - Calculate pH
- `POST /api/tools/balance-equation` - Balance equation
- `POST /api/tools/stoichiometry` - Calculate stoichiometry
- `POST /api/tools/concentration-converter` - Convert units

### Troubleshooting

**Problem: "Cannot find module 'express'"**
```bash
npm install
```

**Problem: "MongoDB connection error"**
- Check your MONGODB_URI in .env
- If using Atlas, whitelist your IP address
- If using local MongoDB, ensure it's running

**Problem: "Port 5000 already in use"**
- Change PORT in .env to 5001 or another number
- Or stop the process using that port

**Problem: "CORS error in browser"**
- Check FRONTEND_URL in .env matches your frontend URL
- Ensure both frontend and backend are running

### Next Steps

1. ✅ Get backend running locally
2. ✅ Test API endpoints with Postman or curl
3. ✅ Connect frontend to new backend API
4. 🔨 Build remaining features (3D viewer, virtual lab, etc.)
5. 🚀 Deploy to production (Heroku, Railway, or Vercel)

### Useful Commands

```bash
# Start development server (auto-restart on changes)
npm run dev

# Start production server
npm start

# Run tests (when implemented)
npm test

# Check for errors
npm run lint
```

### Development Tips

1. Keep backend terminal running while developing
2. API will auto-restart when you edit files (thanks to nodemon)
3. Check terminal for errors if API calls fail
4. Use Postman or Thunder Client (VS Code) for API testing

### Need Help?

- Check the logs in your terminal
- Read ARCHITECTURE.md for system design
- Read README.md for full documentation
- GitHub Issues: https://github.com/smrutiranjandev0p/webchem/issues

---

**🎉 You're all set! Happy coding!**

*Built with ❤️ for chemistry learners worldwide*
