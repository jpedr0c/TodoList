lucide.createIcons();

const tasks = [];
let lastId = 0;
let isEditingTask = false;

let btnNewTask = document.getElementById("btnNewTask");
let btnCancel = document.getElementById("btnCancel");
let btnSubmit = document.getElementById("btnSubmit");
let btnCloseModal = document.getElementById("btnCloseModal");
let modalTitle = document.getElementById("modalTitle");
let taskModal = document.getElementById('taskModal');
let taskForm = document.getElementById('taskForm');
let tasksList = document.getElementById('tasksList');
let taskTitle = document.getElementById('taskTitle');
let taskDescription = document.getElementById('taskDescription');
let taskCategory = document.getElementById('taskCategory');
let taskStatus = document.getElementById('taskStatus');
let taskPriority = document.getElementById('taskPriority');
let emptyState = document.getElementById('emptyState');

btnNewTask.addEventListener("click", () => openNewTaskModal());
btnCancel.addEventListener("click", () => closeModal());
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    if (isEditingTask) {
        console.log("Editando a tarefa");
    } else {
        createTask();
    }
});
btnCloseModal.addEventListener("click", () => closeModal());

function handleOutsideClick(e) {
    if (e.target === taskModal) {
        closeModal();
    }
}

function closeModalOutsideClick() {
    taskModal.removeEventListener('click', handleOutsideClick);
    taskModal.addEventListener('click', handleOutsideClick);
}

closeModalOutsideClick();

function closeModal() {
    taskModal.classList.remove('show');
    taskForm.reset();
}

function openNewTaskModal() {
    modalTitle.textContent = 'Nova Tarefa';
    taskForm.reset();

    if (taskStatus) {
        taskStatus.value = 'A fazer';
    }
    if (taskPriority) {
        taskPriority.value = 'Média';
    }

    taskModal.classList.add('show');

    if (taskTitle){
        taskTitle.focus();
    }
}

function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    emptyState.classList.remove("show");
}

function generateId() {
    lastId = lastId + 1;
    return lastId;
}

function createTask() {
    const newTask = {
        id: generateId(),
        title: taskTitle.value.trim(),
        description: taskDescription ? taskDescription.value.trim() : '',
        category: taskCategory.value.trim(),
        status: taskStatus.value,
        priority: taskPriority.value,
        createdAt: new Date().toISOString()
    };

    if (!newTask.title || !newTask.category) {
        alert("Preencha o título e a categoria da tarefa.");
        return;
    }

    tasks.push(newTask);

    saveTask();
    renderTasks();
    closeModal();
}

function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
        emptyState.classList.remove("show");
        tasks.push(...JSON.parse(storedTasks));
    } else {
        emptyState.classList.add("show");
    }
}

loadTasks();
renderTasks();
// localStorage.clear();

function createTaskCard(task) {
    return `
        <div class="task-card" data-id="${task.id}">
          <div class="task-header">
            <i data-lucide="circle" data-id="${task.id}"></i>
            <div class="task-content">
              <h3 class="task-title">${task.title}</h3>
              <p class="task-description">${task.description}</p>
            </div>
          </div>
          <div class="task-footer">
            <div class="task-badges">
              <span class="task-badge status">${task.status}</span>
              <span class="task-badge priority">${task.priority}</span>
              <span class="task-badge category">${task.category}</span>
            </div>
            <div class="task-actions">
              <button class="task-action-btn edit" data-id="${task.id}" title="Editar">
                <i data-lucide="square-pen"></i>
              </button>
              <button class="task-action-btn delete" data-id="${task.id}" title="Excluir">
                <i data-lucide="trash-2"></i>
              </button>
            </div>
          </div>
        </div>
    `;
}

function getFilteredTasks() {
    return tasks;
}

function renderTasks() {
    const filteredTasks = getFilteredTasks();

    if (filteredTasks.length === 0) {
        tasksList.style.display = 'none';
        emptyState.classList.add('show');
        return;
    }

    tasksList.style.display = 'flex';
    emptyState.classList.remove('show');

    tasksList.innerHTML = filteredTasks
        .map(task => createTaskCard(task))
        .join('');

    lucide.createIcons();
}