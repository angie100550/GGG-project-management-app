import db from '../db'; // Import Drizzle DB instance
import { users as usersTable } from '../database-schema/schema'; // Import the users schema and rename it
import { eq } from 'drizzle-orm';

// Get all users
const getAllUsers = async () => {
    try {
        const allUsers = await db.select().from(usersTable).execute();
        return allUsers;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Could not retrieve users.');
    }
}

// Fetch a user profile by user ID
export const getUserProfileById = async (userId: string) => { // Ensure userId is of type string
    try {
        const user = await db.select().from(usersTable).where(eq(usersTable.user_id, userId)).execute(); // Use userId
        return user[0]; // Return the first user found
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw new Error('Could not retrieve user profile.');
    }
};

// Create a new user profile
export const createUserProfile = async (userId: string, fullName: string, email: string) => {
    try {
        const user = await db.insert(usersTable).values({
            user_id: userId,    // Ensure this matches the expected field
            full_name: fullName, // Use full_name instead of username
            email: email         // Include email
        });
        return user;
    } catch (error) {
        console.error('Error creating user profile:', error);
        throw new Error('Could not create user profile.');
    }
};

// Update user profile
export const updateUserProfile = async (userId: string, fullName?: string, email?: string) => {
    try {
        const updatedUser = await db.update(usersTable).set({ 
            ...(fullName && { full_name: fullName }), 
            ...(email && { email }) 
        }).where(eq(usersTable.user_id, userId)).execute();
        return updatedUser;
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw new Error('Could not update user profile.');
    }
};

// Delete a user profile
export const deleteUserProfile = async (userId: string) => {
    try {
        const user = await db.delete(usersTable).where(eq(usersTable.user_id, userId)).execute();
        return user;
    } catch (error) {
        console.error('Error deleting user profile:', error);
        throw new Error('Could not delete user profile.');
    }
};
