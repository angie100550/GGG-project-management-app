import db from "../db"

const getAllUsers = async () => {
    try {
        const users = await db.query('SELECT user_id, username, email FROM users');
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Could not retrieve users.');
    }
}

const getUser = async (uid: number) => {
    try {
        const users = await db.query(`SELECT user_id, username, email FROM users WHERE user_id = ${uid}`);
        return users;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Could not retrieve user.');
    }
}

const createUser = async (username: string, email: string, passwordHash: string, fullName: string) => {
    try {
        const users = await db.query(`INSERT INTO users (username, email, password_hash, full_name)
                                      VALUES (${username}, ${email}, ${passwordHash}, ${fullName})`);
        return users;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Could not create users.');
    }
}

const deleteUser = async (uid: number) => {
    try {
        const users = await db.query(`DELETE FROM users WHERE user_id = ${uid}`);
        return users;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw new Error('Could not delete users.');
    }
}