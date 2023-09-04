import "./styles.css";
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
        this.activeProject = this.createProject("Default Project");
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
        console.log(this.application.projects);
    }

    displayTodos(project) {
        console.log(project.todos);
    }

    handleUserInput() {
        // Implement event handlers for user actions (e.g., button clicks, form submissions)
        // Update the application data and call UIManager methods to update the UI
    }
    // Other DOM-related methods
}

const app = new Application();
const uiManager = new UIManager(app);

let todo1 = new Todo(
    "Title 1",
    "Description 1",
    "Due Date 1",
    "Priority 1",
    "Notes 1",
    false
);
let todo2 = new Todo(
    "Title 2",
    "Description 2",
    "Due Date 2",
    "Priority 2",
    "Notes 2",
    false
);

app.addTodoToActiveProject(todo1);
app.addTodoToActiveProject(todo2);

let project1 = app.createProject("Project 1");

project1.addTodo(
    new Todo(
        "Title 3",
        "Description 3",
        "Due Date 3",
        "Priority 3",
        "Notes 3",
        false
    )
);
app.setActiveProject(project1);

uiManager.displayProjects();
uiManager.displayTodos(app.activeProject);
