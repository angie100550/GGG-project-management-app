import db from "../db"

const getAllTasks = async () => {
    try {
        const tasks = await db.query('SELECT task_id, task_name, project_id FROM tasks');
        return tasks;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw new Error('Could not retrieve tasks.');
    }
}

const getTask = async (tid: number) => {
    try {
        const tasks = await db.query(`SELECT task_id, task_name, project_id FROM tasks WHERE task_id = ${tid}`);
        return tasks;
    } catch (error) {
        console.error('Error fetching task:', error);
        throw new Error('Could not retrieve task.');
    }
}

const createTask = async (task_name: string, description: string, project_id: string, assigned_to: number) => {
    try {
        const tasks = await db.query(`INSERT INTO tasks (task_name, description, project_id, full_name)
                                      VALUES (${task_name}, ${description}, ${project_id}, ${project_id}, ${assigned_to})`);
        return tasks;
    } catch (error) {
        console.error('Error creating task:', error);
        throw new Error('Could not create tasks.');
    }
}

const deleteTask = async (tid: number) => {
    try {
        const tasks = await db.query(`DELETE FROM tasks WHERE task_id = ${tid}`);
        return tasks;
    } catch (error) {
        console.error('Error deleting task:', error);
        throw new Error('Could not delete tasks.');
    }
}