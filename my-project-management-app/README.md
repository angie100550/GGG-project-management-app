## Project Goal

To create a platform for users to plan projects and track tasks. Users want to get things done and organize work. This platform enables users to plan, communicate, and track the completion of tasks with other users on their team.  

### **Main Features**
1. **Authentication** – Users authenticate to create accounts and execute tasks within the platform.  
2. **Projects + Tasks** – Users can post tasks and projects with file attachments.  
3. **Messaging** – Users can message each other to further enrich planning and execution.  

---

## Roadmap

### **V1.0.0**

#### **Epic 1: Auth Frontend**
- [ ] Create Account Form  
- [ ] Login Form  
- [ ] Homepage  

#### **Epic 2: Auth Backend**
- [ ] Account Endpoint  
- [ ] Login Endpoint  
- [ ] Database  

---

### **V2.0.0**

#### **Epic 3: User Accounts**
- [ ] User Profile Page  
- [ ] User Profile Endpoints  
- [ ] Group Projects + Tasks by User  

#### **Epic 4: Projects + Tasks**
- [ ] Task Page  
- [ ] Project Page  
- [ ] Task + Project Endpoints  

---

### **V3.0.0**

#### **Epic 5: Messaging**
- [ ] Messaging Feed  
- [ ] Messaging Endpoints  
- [ ] Notifications  

#### **Epic 6: Photo Upload**
- [ ] Files for Projects + Tasks  
- [ ] Photos for Profiles  
- [ ] Endpoints and Storage  



## 🗂️ Project Structure

Here’s an overview of the project folder structure and what goes in each part. This will help you know where to place your code when you’re working on different parts of the app.

### **app/**  
The **app/** folder contains the main files for both the frontend and backend.  
- **api/**: Contains your backend logic for API routes.
  - **auth/**: Contains the login and registration API routes.
  - **users/**: Handles user-related routes like updating user information.
  - **tasks/**: Contains routes for creating and getting tasks.

- **components/**: Contains React components for your UI.
  - **Homepage/**: The homepage of the app (your `index.tsx`).
  - **LoginForm/**: The login form component.
  - **Header/** and **Footer/**: The header and footer components used across pages.

- **styles/**: Contains your CSS styles for different parts of the app.
  - **globals.css**: Global styles that apply to the entire app.
  - **homepage.css**: Styles specific to the homepage.
  - **login.css**: Styles specific to the login page.

### **lib/**  
This folder contains shared utilities such as database connections and queries.
- **db.ts**: Contains the logic for connecting to the PostgreSQL database.
- **queries/**: Stores SQL query logic for various features.
  - **auth.ts**: Handles SQL queries for authentication (e.g., register, login).
  - **users.ts**: Queries for managing users.
  - **tasks.ts**: Queries for managing tasks (e.g., create, retrieve tasks).

### **pages/**  
The **pages/** folder contains your page components. These are the entry points to different views in your app.
- **_app.tsx**: This file wraps all other components, including setup for global providers (like Next.js).
- **index.tsx**: The homepage of the app.
- **login.tsx**: The login page component.
- **register.tsx**: The registration page component.

### **public/**  
The **public/** folder stores static assets such as images, icons, or other media.
- **logo.png**: The logo of your project (you can replace this with your actual logo).

### **.env.local**  
Contains environment variables like database credentials. Make sure not to share this file publicly.

---

If you’re unsure where to add a new feature or file, you can check this structure and find the most appropriate folder. This will keep the project organized and make it easier for you and your teammates to work on it.


## 🛠️ Technologies Used  

Next.js, TypeScript, CSS Modules, SuperTokens, PostgreSQL, Drizzle 





