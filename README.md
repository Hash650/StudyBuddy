# Study Buddy

**Study Buddy** is an AI-powered academic companion app designed to help students organize, learn, and collaborate more effectively.

This repository serves as the **main entry point** to the project.

---

## Repositories

- [Frontend (React Native)](https://github.com/hayyanhaider0/studybuddy-frontend)  
  Mobile application built using React Native and Expo.

- [Backend (Spring Boot)](https://github.com/hayyanhaider0/studybuddy-backend)  
  REST API backend powered by Spring Boot.

---

## Project Structure

This repository contains **only this README** for navigation purposes.  
All source code and development work happen in the linked frontend and backend repositories.

---

## Current Progress

- **User authentication** is complete.
- **Frontend UI** for user login is complete.
- **Frontend UI** for notebooks, chapters, canvases, and amending them is complete.
- **In development:**  
  - Password reset flow  
  - Notebook, chapter, and canvas management in backend

---

## Quick Start

1. **Create a parent folder and clone the frontend and backend:**

```bash
mkdir StudyBuddy
cd StudyBuddy
git clone https://github.com/hayyanhaider0/studybuddy-frontend.git frontend
git clone https://github.com/hayyanhaider0/studybuddy-backend.git backend
```

2. **Run the frontend (Expo):**

```bash
cd frontend
npx expo start
```

> **Note:** The frontend uses `app.json` for backend URL configuration.
> No `.env` file is needed for the frontend at this time.

3. **Set up the backend environment:**

Create an `.env` file or configure `application.properties` in:

```
backend/src/main/resources/
```

### Required environment variables (if using `.env`):

```bash
MONGODB_URI= # Database URI
STUDY_BUDDY_USERNAME= # Gmail username for verification emails
STUDY_BUDDY_PASSWORD= # Gmail password or app password
JWT_SECRET= # Secret key for JWT auth
```

For more details, refer to the [backend repository](https://github.com/hayyanhaider0/studybuddy-backend).

4. **Run the backend (Spring Boot):**

```bash
cd ../backend
mvn spring-boot:run # Use ./mvnw spring-boot:run on Windows if needed
```

---

## License

This project is licensed under the **MIT License**.
