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
    projectList = document.querySelector("#project-list");
    todoList = document.querySelector("#todo-list");
    todoForm = document.querySelector("#add-todo-form");
    projectForm = document.querySelector("#add-project-form");
    constructor(application) {
        this.application = application;



        this.displayProjects();
        this.displayTodos(this.application.activeProject);
    }

    displayProjects() {
        console.log(this);
        this.application.projects.forEach(project => {
            const projectListItem = document.createElement("li");
            projectListItem.textContent = project.name;
            projectListItem.addEventListener("click", () => {
                this.application.setActiveProject(project);
                this.displayTodos(project);
            });
            this.projectList.appendChild(projectListItem);
        });
    }

    displayTodos(project) {
        this.todoList.innerHTML = "";
        project.todos.forEach(todo => {
            let todoP = document.createElement("p");
            todoP.textContent = `
                Title: ${todo.title}\n
                Description: ${todo.description}\n
                Due Date: ${todo.dueDate}\n
                Priority: ${todo.priority}\n
                Notes: ${todo.notes}\n
            `;
            this.todoList.appendChild(todoP);
        });
    }

    handleUserInput() {
        let addProjectButton = document.querySelector("#add-project-button");
        addProjectButton.addEventListener("click", () => {
            this.projectForm.style.display = "block";
        });

        let addTodoButton = document.querySelector("#add-todo-button");
        addTodoButton.addEventListener("click", () => {
            // show form
            this.todoForm.style.display = "block";
        });

        this.projectForm.addEventListener("submit", (e) => {
           // prevent default
              e.preventDefault();
            // add project to project list
            const projectName = document.querySelector("#project-name").value;
            const project = this.application.createProject(projectName);
            const projectListItem = document.createElement("li");
            projectListItem.textContent = project.name;
            projectListItem.addEventListener("click", () => {
                this.application.setActiveProject(project);
                this.displayTodos(project);
            }
            );
            this.projectList.appendChild(projectListItem);
            this.projectForm.style.display = "none";

        });

        this.todoForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // add todo to todo list
            const title = document.querySelector("#todo-title").value;
            const description = document.querySelector("#todo-description").value;
            const dueDate = document.querySelector("#todo-due-date").value;
            const priority = document.querySelector("#todo-priority").value;
            const notes = document.querySelector("#todo-notes").value;
            const completed = false;
            const todo = new Todo(
                title,
                description,
                dueDate,
                priority,
                notes,
                completed
            );
            this.application.addTodoToActiveProject(todo);
            this.displayTodos(this.application.activeProject);
            this.todoForm.style.display = "none";

        })
    }
}


const app = new Application();
const uiManager = new UIManager(app);
uiManager.handleUserInput();
