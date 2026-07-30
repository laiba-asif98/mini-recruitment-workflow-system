# Mini Recruitment Workflow System

A responsive recruitment workflow application built with React and a basic Express.js backend. The project allows recruiters to manage candidates, track recruitment progress, and simulate a real-world hiring workflow using mock APIs.

---

## Features

- User Login Interface
- Dashboard with recruitment statistics
- Candidate List
- Search Candidates
- Filter Candidates by Status
- Pagination
- Candidate Details
- Add New Candidate
- Responsive Design
- Mock API Integration
- Basic Express.js Backend

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- React Hook Form
- Zod
- Axios
- CSS
- React Icons

### Backend

- Node.js
- Express.js
- CORS

---

## Project Structure

```
Mini Recruitment Workflow System
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   ├── styles
│   ├── routes
│   └── utils
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

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

---

### Install Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

### Install Backend

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

## API Endpoints

### Get All Candidates

```
GET /api/candidates
```

### Get Candidate By ID

```
GET /api/candidates/:id
```

### Add Candidate

```
POST /api/candidates
```

---

## Future Improvements

- Authentication
- Database Integration
- File Upload
- Candidate Resume Management
- Assignment Management
- Recruiter Authentication
- Email Notifications

---

## Author

**Laiba Asif**