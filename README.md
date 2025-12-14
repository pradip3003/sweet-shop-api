# Sweet Shop API 

Simple REST API Developed with Ruby on Rails (API mode). Manages a sweet shop.
This project is centered on handling user authentication, sweet handling, etc.
---
#  Features
- User Registration & Login
- Handling Passwords with BCrypt
- Show available sweets
- Include New Sweets
- Simple role-based structure (user/admin ready)
---
##  Tech Stack
- Ruby 3.x
- Ruby on Rails 8 (API mode)
- SQLite Database
- BCrypt for password encryption
---

##  API Endpoints

###  Authentication

**Register User**  
`POST /api/auth/register`

**Login User**  
`POST /api/auth/login`

---

### 🍭 Sweets

**Get all sweets**  
`GET /api/sweets`

**Create a new sweet**  
`POST /api/sweets`

---
##  How to Run Locally


bundle install
rails db:migrate
rails s

Server will start at:
 http://localhost:3000
---
## My AI Usage

I actively used AI tools as part of my development workflow, following the project’s AI usage policy and maintaining full ownership of the final implementation.

AI Tools Used

ChatGPT – for architectural guidance, debugging support, and code explanations.

(Optional: add if used) GitHub Copilot – for boilerplate suggestions and faster coding.

How I Used AI

I used ChatGPT to understand the project requirements and break them down into backend and frontend milestones.

I took guidance on designing RESTful APIs for the Sweet Shop Management System.

AI helped me debug frontend–backend interaction issues, especially around API routing, ports, and data persistence.

I used AI assistance to identify problems in state management and API integration in React and to fix incorrect assumptions about static UI vs dynamic data.

AI was also used to review and improve code quality, error handling, and overall structure.
