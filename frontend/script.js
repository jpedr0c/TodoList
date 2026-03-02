lucide.createIcons();

const tasks = [];
let lastId = 0;

let btnNewTask = document.getElementById("btnNewTask");
let btnCancel = document.getElementById("btnCancel");
let btnSubmit = document.getElementById("btnSubmit");
let btnCloseModal = document.getElementById("btnCloseModal");
let modalTitle = document.getElementById("modalTitle");
let taskModal = document.getElementById('taskModal');
let taskForm = document.getElementById('taskForm');
let taskTitle = document.getElementById('taskTitle');
let taskDescription = document.getElementById('taskDescription');
let taskCategory = document.getElementById('taskCategory');
let taskStatus = document.getElementById('taskStatus');
let taskPriority = document.getElementById('taskPriority');


btnNewTask.addEventListener("click", () => openNewTaskModal());
btnCancel.addEventListener("click", () => closeModal());
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    createTask();
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
        taskStatus.value = 'TODO';
    }
    if (taskPriority) {
        taskPriority.value = 'MEDIA';
    }

    taskModal.classList.add('show');

    if (taskTitle){
        taskTitle.focus();
    }
}

function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
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

    closeModal();
    saveTask();
}

function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
        tasks.push(...JSON.parse(storedTasks));
    }
}

loadTasks();