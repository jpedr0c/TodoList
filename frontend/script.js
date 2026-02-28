lucide.createIcons();

let btnNewTask = document.getElementById("btnNewTask");
let btnCancel = document.getElementById("btnCancel");
let btnCloseModal = document.getElementById("btnCloseModal");
let modalTitle = document.getElementById("modalTitle");
let taskModal = document.getElementById('taskModal');
let taskForm = document.getElementById('taskForm');
let taskTitle = document.getElementById('taskTitle');
let taskDescription = document.getElementById('taskDescription');
let taskStatus = document.getElementById('taskStatus');
let taskPriority = document.getElementById('taskPriority');


btnNewTask.addEventListener("click", () => openNewTaskModal());
btnCancel.addEventListener("click", () => closeModal());
btnCloseModal.addEventListener("click", () => closeModal());

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