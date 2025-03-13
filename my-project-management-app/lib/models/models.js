// Project Model
const Project = {
    projectId: String, // UUID (change from Number to String if using UUID)
    projectName: String,
    description: String,
    createdBy: String, // UUID from SuperTokens
    startDate: Date,
    dueDate: Date,
    status: String,
};

// Task Model
const Task = {
    taskId: String, // UUID (change from Number to String if using UUID)
    taskName: String,
    description: String,
    projectId: String, // UUID (change from Number to String)
    assignedTo: String, // UUID from SuperTokens
    priority: String,
    dueDate: Date,
    status: String,
};

// Attachment Model
const Attachment = {
    attachmentId: String, // UUID (change from Number to String if using UUID)
    taskId: String, // UUID (change from Number to String)
    fileUrl: String,
    fileName: String,
    uploadedBy: String, // UUID from SuperTokens
};

// Message Model
const Message = {
    messageId: String, // UUID (change from Number to String if using UUID)
    senderId: String, // UUID from SuperTokens
    receiverId: String, // UUID from SuperTokens
    projectId: String, // UUID (change from Number to String)
    messageText: String,
};

// Project Membership Model
const ProjectMembership = {
    projectId: String, // UUID (change from Number to String)
    userId: String, // UUID from SuperTokens
    role: String,
};

// Exporting all models
export { Project, Task, Attachment, Message, ProjectMembership };