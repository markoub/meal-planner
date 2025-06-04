# Meal Prep & Calorie Tracker MVP
## Product Requirements Document

**Version:** 1.0 MVP  
**Platform:** Web Application  
**Timeline:** 2-3 months development  

---

## Product Overview

A simple web application that allows users to track their daily food intake, monitor calories, and plan basic meals. The MVP focuses on core functionality to validate the concept and gather user feedback.

## Target User
Health-conscious individuals who want to track their food intake and plan meals without complexity. Primary age range: 25-45.

---

## Core Features

### 1. User Management
**Essential functionality for user accounts and personalization**

- User registration with email/password
- Login/logout functionality  
- Basic profile setup (age, weight, height, activity level)
- Daily calorie goal calculation
- Password reset via email

### 2. Food Database & Logging
**Simple food tracking system**

- Pre-populated food database (500+ common foods)
- Search foods by name
- Log foods with portion sizes
- Edit/delete logged entries
- View daily food log

### 3. Calorie Tracking
**Basic nutrition monitoring**

- Daily calorie counter with progress bar
- Weekly calorie summary
- Simple charts showing daily intake vs goals
- Basic macronutrient breakdown (carbs, protein, fat)

### 4. Simple Meal Planning
**Basic meal organization**

- Weekly meal calendar view
- Add planned meals to specific days
- Copy meals between days
- Generate simple shopping list from planned meals

### 5. Basic Dashboard
**Central hub for user data**

- Current day overview (calories, meals planned)
- Weekly weight logging
- Simple progress charts
- Quick-add favorite foods

---

## Technical Stack

### Frontend (Next.js)
- **Framework:** Next.js 14 with TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context/useState
- **HTTP Client:** Axios
- **Charts:** Chart.js or Recharts

### Backend (FastAPI)
- **Framework:** FastAPI with Python 3.9+
- **Database:** PostgreSQL
- **Authentication:** JWT tokens
- **ORM:** SQLAlchemy
- **Deployment:** Docker containers

### Infrastructure
- **Database:** PostgreSQL (cloud-hosted)
- **Hosting:** Vercel (frontend) + Railway/Heroku (backend)
- **File Storage:** Local storage for MVP

---

## Database Schema (Core Tables)

### Users
- id, email, password_hash, first_name, last_name
- age, weight, height, activity_level, daily_calorie_goal
- created_at, updated_at

### Foods
- id, name, calories_per_100g, protein, carbs, fat
- brand, description

### Food_Logs
- id, user_id, food_id, date, quantity, meal_type
- created_at

### Meal_Plans
- id, user_id, date, meal_type, food_id, planned_quantity

### Weight_Logs
- id, user_id, weight, date

---

## User Stories (MVP)

### Authentication
- As a user, I can register with email and password
- As a user, I can log in to access my data
- As a user, I can set up my basic profile and goals

### Food Tracking
- As a user, I can search for foods in the database
- As a user, I can log foods I've eaten with portions
- As a user, I can see my daily calorie progress
- As a user, I can view my food log for any day

### Meal Planning
- As a user, I can plan meals for the upcoming week
- As a user, I can copy planned meals to different days
- As a user, I can generate a shopping list from my meal plan

### Progress Tracking
- As a user, I can log my weight weekly
- As a user, I can see basic charts of my calorie intake
- As a user, I can view my progress over time

---

## UI/UX Requirements

### Design Principles
- Clean, minimalist interface
- Mobile-responsive design
- Fast loading times
- Intuitive navigation

### Key Pages
1. **Dashboard** - Daily overview and quick actions
2. **Food Log** - Daily food entries and search
3. **Meal Planner** - Weekly calendar view
4. **Progress** - Charts and weight tracking
5. **Profile** - User settings and goals

### Navigation
- Top navigation bar with main sections
- Breadcrumb navigation for sub-pages
- Quick-add buttons for common actions

---

## Implementation Plan

### Phase 1 (Week 1-2): Foundation
- Set up Next.js and FastAPI projects
- Database design and setup
- Basic authentication system
- User registration/login pages

### Phase 2 (Week 3-4): Core Features
- Food database and search
- Food logging functionality
- Basic calorie tracking
- Dashboard creation

### Phase 3 (Week 5-6): Meal Planning
- Meal planning calendar
- Shopping list generation
- Progress tracking pages

### Phase 4 (Week 7-8): Polish & Deploy
- UI/UX improvements
- Testing and bug fixes
- Deployment setup
- Basic documentation

---

## Success Metrics

### Technical
- Page load time < 2 seconds
- 99% uptime
- Responsive design works on mobile/desktop

### User
- User completes registration flow
- User logs food for 3+ consecutive days
- User creates at least one meal plan
- User retention > 40% after 1 week

---

## Out of Scope (Future Features)

- Mobile apps
- Barcode scanning
- Photo food logging
- Social features
- Premium subscriptions
- Advanced analytics
- Recipe database
- Grocery store integration

---

## Risk Mitigation

**Technical Risks:**
- Keep database schema simple and extensible
- Use established libraries and frameworks
- Regular backups of user data

**Product Risks:**
- Focus on core functionality first
- Gather user feedback early
- Keep feature scope minimal for MVP

---

## Budget Estimate

### Development (2-3 months)
- Developer time: $15,000-25,000
- Cloud hosting: $50-100/month
- Domain and SSL: $100/year
- Development tools: $200/month

### Total MVP Cost: ~$20,000-30,000

---

## Next Steps

1. Finalize technical architecture
2. Set up development environment
3. Create detailed wireframes
4. Begin Phase 1 development
5. Plan user testing strategy