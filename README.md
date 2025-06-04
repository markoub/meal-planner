# Meal Planner

A comprehensive meal planning application to help you track your daily food intake, monitor calories, and plan healthy meals with ease.

## Project Structure

```
meal-planner/
├── frontend/          # Next.js 14 with TypeScript and Tailwind CSS
├── backend/           # FastAPI with Python
├── testing/           # Playwright E2E tests
├── PRD.md            # Product Requirements Document
└── README.md         # This file
```

## Tech Stack

### Frontend
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Development**: Hot reload and fast refresh

### Backend
- **Framework**: FastAPI with Python 3.9+
- **Database**: PostgreSQL (planned)
- **Authentication**: JWT tokens (planned)
- **API Documentation**: Auto-generated with Swagger/OpenAPI

### Testing
- **E2E Testing**: Playwright
- **Browser Support**: Chromium, Firefox, WebKit

## Setup Instructions

### Prerequisites
- Node.js 18+ 
- Python 3.9+
- npm or yarn

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup
```bash
cd backend
# Create virtual environment (if not already created)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn main:app --reload
```

The backend API will be available at `http://localhost:8000`
API documentation: `http://localhost:8000/docs`

### Testing Setup
```bash
cd testing
npm install
npx playwright install

# Run tests
npm test

# Run tests with UI
npm run test:ui
```

## Development Workflow

1. Start the backend server: `cd backend && uvicorn main:app --reload`
2. Start the frontend development server: `cd frontend && npm run dev`
3. Run tests: `cd testing && npm test`

## Features (Planned)

- 🥗 **Food Tracking**: Log daily food intake with portion sizes
- 📊 **Calorie Monitoring**: Track calories with progress visualization
- 📅 **Meal Planning**: Weekly meal calendar and planning
- 🛒 **Shopping Lists**: Generate lists from meal plans
- 📈 **Progress Tracking**: Weight logging and progress charts
- 👤 **User Management**: Registration, login, and profile management

## API Endpoints

### Health Check
- `GET /` - Welcome message
- `GET /health` - Health check endpoint

More endpoints will be added as features are implemented.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run tests to ensure everything works
4. Create a pull request

## License

This project is licensed under the MIT License.
