Sweet Shop Management System
============================

This is a simple full-stack project developed using Ruby on Rails (API mode) as the backend technology and React.js as the frontend technology.

The project is used for authentication in a sweet shop, managing a list of sweets, and providing a basic dashboard interface.

------------------------------------------------------------------

FEATURES

- User registration and login
- Handling passwords using BCrypt
- View available sweets
- Add new sweets
- Simple role-based setup (user/admin ready)
- Frontend dashboard developed using React.js

------------------------------------------------------------------

TECH STACK

Backend:
- Ruby 3.x
- Ruby on Rails 8 (API mode)
- SQLite database
- BCrypt for password encryption

Frontend:
- React.js
- Component-based user interface
- Basic dashboard structure

------------------------------------------------------------------

PROJECT STRUCTURE

sweet-shop-api
- app/            (Ruby on Rails backend)
- config/
- db/
- frontend/       (React frontend)
  - src/
  - public/
  - package.json
- screenshots/
- README.md

------------------------------------------------------------------

API ENDPOINTS

Authentication:
- Register user
  POST /api/auth/register

- Login user
  POST /api/auth/login

Sweets:
- Get all sweets
  GET /api/sweets

- Create a new sweet
  POST /api/sweets

------------------------------------------------------------------

HOW TO RUN LOCALLY

Backend:
bundle install
rails db:migrate
rails s

Backend runs on:
http://localhost:3001

Frontend:
cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:3000

------------------------------------------------------------------

FRONTEND STATUS

The frontend user interface is built using React.js.
Currently, hardcoded data is used for UI demonstration purposes.
The API integration structure is present but could not be finalized due to time constraints.

------------------------------------------------------------------

SCREENSHOTS

Screenshots related to backend execution, API responses, and frontend user interface
are available inside the screenshots folder.

------------------------------------------------------------------

AI USAGE

AI tools were used during the development process while maintaining full ownership of the final implementation.

AI Tools Used:
- ChatGPT for architectural guidance, debugging support, and code explanations
- GitHub Copilot (optional) for boilerplate code suggestions

How AI Was Used:
- Understanding project requirements
- Designing REST APIs
- Fixing frontend and backend issues
- Code restructuring and error handling
- Reviewing overall project quality

------------------------------------------------------------------

NOTES

Due to limited time constraints, complete frontend and backend integration could not be achieved.
However, both backend and frontend are independently functional and demonstrate full-stack development understanding.



