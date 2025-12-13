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

```bash
bundle install
rails db:migrate
rails s

Server will start at:
 http://localhost:3000
