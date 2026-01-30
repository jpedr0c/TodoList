package com.todolist.app;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class TaskManager {
    private List<Task> tasks;
    private int nextId;

    public TaskManager() {
        this.tasks = new ArrayList<>();
        this.nextId = 1;
    }

    public void addTask(String name,
                        String description,
                        LocalDate endDate,
                        int priority,
                        String category,
                        TaskStatus status) {

        Task newTask = new Task(
                nextId,
                name,
                description,
                endDate,
                priority,
                category,
                status
        );

        nextId++;

        int position = tasks.size();

        for (int i = 0; i < tasks.size(); i++) {
            if (newTask.getPriority() < tasks.get(i).getPriority()){
                position = i;
                break;
            }
        }

        tasks.add(position, newTask);
    }

    public void removeTaskById(int id) {
        for (int i = 0; i < tasks.size(); i++) {
            if (tasks.get(i).getId() == id) {
                System.out.println("Tarefa removida: " + tasks.get(i));
                tasks.remove(i);
                return;
            }
        }

        System.out.println("Tarefa com ID " + id + " não encontrada.");
    }

    public void listAllTasks() {
        if (tasks.isEmpty()) {
            System.out.println("Nenhuma tarefa cadastrada.");
            return;
        }

        for (Task task : tasks) {
            System.out.println(task);
        }
    }

    public void listTasksByCategory(String category){
        boolean isFound = false;

        for (Task task : tasks){
            if (task.getCategory().equalsIgnoreCase(category)){
                System.out.println(task);
                isFound = true;
            }
        }

        if (!isFound) {
            System.out.println("Nenhuma tarefa foi encontrada para a categoria " + category);
        }
    }
}
