// has title, description, dueDate, priority, notes, completed;
class Todo {
    constructor(title, description, dueDate, priority, notes, completed) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completed = completed;
    }

    markComplete() {
        this.completed = true;
    }
}

// project class
class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todo) {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }
}

class Application {
    constructor() {
        this.projects = [];
        this.activeProject = "Project 1";
    }

    createProject(name) {
        const project = new Project(name);
        this.projects.push(project);
        return project;
    }

    setActiveProject(project) {
        this.activeProject = project;
    }

    addTodoToActiveProject(todo) {
        if (this.activeProject) {
            this.activeProject.addTodo(todo);
        }
    }
}

class UIManager {
    constructor(application) {
        this.application = application;
    }

    displayProjects() {
        // Implement logic to render projects in the DOM
    }

    displayTodos(project) {
        // Implement logic to render todos for a project in the DOM
    }

    handleUserInput() {
        // Implement event handlers for user actions (e.g., button clicks, form submissions)
        // Update the application data and call UIManager methods to update the UI
    }
    // Other DOM-related methods
}

const app = new Application();
const uiManager = new UIManager(app);

