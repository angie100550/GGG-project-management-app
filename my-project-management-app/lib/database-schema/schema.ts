import { pgTable, serial, varchar, timestamp, uuid, integer } from 'drizzle-orm/pg-core';

// Users Table
export const users = pgTable('users', {
    user_id: uuid('user_id').primaryKey(),          // Unique identifier for the user (UUID)
    full_name: varchar('full_name', { length: 255 }).notNull(), // User's full name
    email: varchar('email', { length: 255 }).unique().notNull(), // User's email (unique)
});

// Projects Table
export const projects = pgTable('projects', {
    project_id: serial('project_id').primaryKey(),     // Unique project ID
    project_name: varchar('project_name', { length: 255 }).notNull(), // Name of the project
    description: varchar('description'),                  // Detailed description of the project
    created_by: uuid('created_by').notNull(),           // Foreign key to users table (UUID from SuperTokens)
    start_date: timestamp('start_date'),                 // Start date of the project
    due_date: timestamp('due_date'),                     // Due date of the project
    status: varchar('status', { length: 50 }).default('active'), // Status (e.g., active, completed, on hold)
});

// Tasks Table
export const tasks = pgTable('tasks', {
    task_id: serial('task_id').primaryKey(),            // Unique task ID
    task_name: varchar('task_name', { length: 255 }).notNull(), // Name of the task
    description: varchar('description'),                  // Description of the task
    project_id: integer('project_id').notNull(),         // Foreign key to projects table (INTEGER)
    assigned_to: uuid('assigned_to'),                     // Foreign key to users table (UUID from SuperTokens)
    priority: varchar('priority', { length: 50 }).default('medium'), // Priority of the task (e.g., low, medium, high)
    due_date: timestamp('due_date'),                      // Due date for the task
    status: varchar('status', { length: 50 }).default('pending'), // Task status (e.g., pending, in progress, completed)
});

// Attachments Table
export const attachments = pgTable('attachments', {
    attachment_id: serial('attachment_id').primaryKey(), // Unique attachment ID
    task_id: integer('task_id').notNull(),               // Foreign key to tasks table (INTEGER)
    file_url: varchar('file_url', { length: 255 }).notNull(), // URL to the file
    file_name: varchar('file_name', { length: 255 }).notNull(), // Name of the file
    uploaded_by: uuid('uploaded_by').notNull(),          // Foreign key to users table (UUID from SuperTokens)
});

// Messaging Table
export const messages = pgTable('messages', {
    message_id: serial('message_id').primaryKey(),       // Unique message ID
    sender_id: uuid('sender_id').notNull(),               // Foreign key to users table (UUID from SuperTokens)
    receiver_id: uuid('receiver_id').notNull(),           // Foreign key to users table (UUID from SuperTokens)
    project_id: integer('project_id'),                    // Foreign key to projects table (optional, INTEGER)
    message_text: varchar('message_text').notNull(),      // Message content
});

// Project Membership Table
export const project_memberships = pgTable('project_memberships', {
    project_id: integer('project_id').notNull(),          // Foreign key to projects table (INTEGER)
    user_id: uuid('user_id').notNull(),                   // Foreign key to users table (UUID from SuperTokens)
    role: varchar('role', { length: 50 }).default('member'), // Role of the user within the project (e.g., member, admin)
}, {
    primaryKey: ['project_id', 'user_id'],                // Composite primary key
});

// Export all tables
export const schema = {
    users,
    projects,
    tasks,
    attachments,
    messages,
    project_memberships,
};
