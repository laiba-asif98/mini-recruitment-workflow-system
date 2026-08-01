# Mini Recruitment Workflow System

## Overview

Mini Recruitment Workflow System is a full-stack web application developed as an internship assignment. It helps recruiters manage candidates and track their recruitment process from application to final selection.

The project is built with React.js for the frontend and Express.js for the backend using mock data.

---

## Features

### Frontend

- Responsive Login Page
- Dashboard with statistics cards
- Recruitment Pipeline
- Candidate List
- Search candidates by name or email
- Filter candidates by recruitment status
- Pagination
- Candidate Details Page
- Update Candidate Status
- Recruiter Notes
- Recruitment Timeline
- Assignment Details
- Loading State
- Error State
- Empty State
- Reusable Components

### Backend

- Express.js REST API
- Mock Data
- Get All Candidates
- Get Candidate By ID
- Add Candidate
- Update Candidate
- Delete Candidate
- CORS Enabled
- JSON Request Handling

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- React Hook Form
- Zod
- CSS

### Backend

- Node.js
- Express.js

---

## Project Structure

```
Mini Recruitment Workflow System
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── routes
│   │   ├── constants
│   │   └── styles
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── data
│   └── server.js
│
├── README.md
└── AI_USAGE.md
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/candidates | Get all candidates |
| GET | /api/candidates/:id | Get candidate by ID |
| POST | /api/candidates | Add candidate |
| PATCH | /api/candidates/:id | Update candidate |
| DELETE | /api/candidates/:id | Delete candidate |

---

## Installation

### Clone Repository

```bash
git clone https://github.com/laiba-asif98/mini-recruitment-workflow-system.git
```

---

### Backend

```bash
cd backend
npm install
npm start
```

Runs on

```
http://localhost:5000
```

---

### Frontend

```bash
cd frontend
npm install
npm start
```

Runs on

```
http://localhost:3000
```

---

## Future Improvements

- JWT Authentication
- PostgreSQL Database
- Resume Upload
- Email Notifications
- Role Based Authentication
- Deployment using Vercel and Render

---

## AI Usage

AI tools were used for:

- Learning concepts
- Debugging errors
- Improving code quality
- UI refinement
- Documentation guidance

All generated code was reviewed, modified, integrated, tested, and verified before submission.

---

## Author

**Laiba Asif**

GitHub:
https://github.com/laiba-asif98
