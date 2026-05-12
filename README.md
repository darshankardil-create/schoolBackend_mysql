# School Management API

A Node.js and MySQL-based RESTful API designed to manage school data. It allows users to add new schools and retrieve a list of schools sorted by proximity to a specific geographic location using the Haversine formula.

**Live URL:** [https://schoolbackend-mysql.onrender.com/schoolapi](https://schoolbackend-mysql.onrender.com/schoolapi)

## Features

* **Add School:** Store school details including name, address, latitude, and longitude.
* **List Schools:** Retrieve schools sorted by distance from a provided user location.
* **Data Integrity:** Validates empty strings, missing fields, and prevents duplicate entries.
* **Database:** Automatic table schema creation on startup.

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **ORM/Driver:** mysql2/promise
* **Deployment:** Render

## Directory Structure

```
└── ./
    ├── src
    │   ├── mysqlconfig
    │   │   ├── config.js
    │   │   └── schema.js
    │   ├── controller.js
    │   └── routes.js
    └── app.js
```

## API Endpoints

### 1. Add School

* **URL:** /schoolapi/addSchool
* **Method:** POST
* **Payload Example:**
{
"name": "Global International School",
"address": "123 Education Lane, NY",
"latitude": 40.7128,
"longitude": -74.0060
}
* **Response:** 200 OK on success.

### 2. List Schools

* **URL:** /schoolapi/listSchools
* **Method:** GET
* **Query Parameters:** latitude, longitude
* **Example:** /schoolapi/listSchools?latitude=40.7306&longitude=-73.9352
* **Response:** 200 OK with a sorted JSON list of schools including distance.

### 3. Clear All Data

* **URL:** /schoolapi/clearall
* **Method:** DELETE
* **Response:** 200 OK upon clearing the database table.

## Setup and Installation

1. **Clone the repository.**
2. **Install dependencies:** `npm install`
3. **Configure Environment Variables:** Create a .env file with `MYSQLURL` and `EXPRESSPORT`.
4. **Run the application:** `node app.js`

## Validation Rules

* All fields (name, address, latitude, longitude) are mandatory.
* Fields cannot be empty strings.
* The combination of name, address, latitude, and longitude must be unique.
