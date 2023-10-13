# Sci-Connect API Documentation
### Live Demo of Sci-Connect Website: https://sci-connect.netlify.app/

Welcome to the Sci-Connect API documentation. This API serves as the backend for Sci-Connect, a platform for managing science-related activities, users, and bookings.
## Architecture Diagram
![Architecture Diagram](https://i.imgur.com/NkKlYm1.png)

## Getting Started

### Prerequisites

Make sure you have Node.js, MongoDB, and npm (Node Package Manager) installed on your system.

### Installation
1. Clone the repo
```sh
git clone
```
2. Install NPM packages
```sh
npm install
```
3. Run the server
```sh
npm start
```

## API Endpoints

### User Routes

#### `POST /api/register`

Register a new user. 

**Required Fields:** 
- `username`
- `password`

#### `POST /api/login`

Login an existing user. 

**Required Fields:**
- `username`
- `password`

#### `GET /api/user/:id`

Get user details by ID.

### Activity Routes

#### `GET /api/activity/:id`

Get activity details by ID.

#### `POST /api/activity`

Create a new activity. 

**Required Fields:**
- `name`
- `description`
- `date`
- `location`
- `time`

#### `GET /api/activities`

Get a list of all activities.

### Booking Routes

#### `POST /api/book-activity`

Book an activity. 

**Required Fields:**
- `activityId`
- `fullname`
- `contactNumber`
- `dateOfActivity`
- `locationOfActivity`
- `timeOfActivity`
- `venueOfActivity`

#### `GET /api/bookings`

Get a list of all bookings.

---

**Sci-Connect API** - Empowering seamless management of science-related activities and bookings.
