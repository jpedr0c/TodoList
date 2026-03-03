lucide.createIcons();

const tasks = [];
let lastId = 0;
let isEditingTask = false;
let currentFilter = "all";

const btnNewTask = document.getElementById("btnNewTask");
const btnCancel = document.getElementById("btnCancel");
const btnSubmit = document.getElementById("btnSubmit");
const btnCloseModal = document.getElementById("btnCloseModal");
const modalTitle = document.getElementById("modalTitle");
const taskModal = document.getElementById('taskModal');
const taskForm = document.getElementById('taskForm');
const tasksList = document.getElementById('tasksList');
const taskTitle = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
const taskCategory = document.getElementById('taskCategory');
const taskStatus = document.getElementById('taskStatus');
const taskPriority = document.getElementById('taskPriority');
const emptyState = document.getElementById('emptyState');
const tabs = document.querySelectorAll('.tab');

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
        taskStatus.value = 'todo';
    }
    if (taskPriority) {
        taskPriority.value = 'media';
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

function createTaskCard(task) {
    const statusLabel = {
        todo: "A Fazer",
        doing: "Em Progresso",
        done: "Concluído"
    }

    const priorityLabel = {
        baixa: "Baixa",
        media: "Média",
        alta: "Alta"
    }
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
              <span class="task-badge status ${task.status}">${statusLabel[task.status]}</span>
              <span class="task-badge priority ${task.priority}">${priorityLabel[task.priority]}</span>
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
    if (currentFilter === 'all') {
        return tasks;
    }

    return tasks.filter(task => task.status.toLowerCase() === currentFilter);
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));

        tab.classList.add('active');

        currentFilter = tab.dataset.filter;

        renderTasks();
    });
});

function updateBadges() {
    document.getElementById('badgeAll').textContent = tasks.length;
    document.getElementById('badgeTodo').textContent = tasks.filter(t => t.status === 'todo').length;
    document.getElementById('badgeDoing').textContent = tasks.filter(t => t.status === 'doing').length;
    document.getElementById('badgeDone').textContent = tasks.filter(t => t.status === 'done').length;
}

function deleteTask(id) {
    const confirmed = confirm("Deseja realmente excluir esta tarefa?");
    if (!confirmed){
        return;
    }

    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        return;
    }

    tasks.splice(index, 1);

    saveTask();
    renderTasks();
}

function addDeleteEvents() {
    const deleteButtons = document.querySelectorAll(".task-action-btn.delete");

    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            const taskId = Number(button.dataset.id);
            deleteTask(taskId);
        });
    });
}

function renderTasks() {
    const filteredTasks = getFilteredTasks();

    if (filteredTasks.length === 0) {
        tasksList.style.display = 'none';
        emptyState.classList.add('show');
        updateBadges();
        return;
    }

    tasksList.style.display = 'flex';
    emptyState.classList.remove('show');

    tasksList.innerHTML = filteredTasks
        .map(task => createTaskCard(task))
        .join('');

    lucide.createIcons();
    updateBadges();
    addDeleteEvents();
}