package com.todolist.app;

import java.time.LocalDate;

public class Task {
    private String name;
    private String description;
    private LocalDate date;
    private int priority;
    private String category;
    private TaskStatus status;

    public Task(String name,
                String description,
                LocalDate date,
                int priority,
                String category,
                TaskStatus status) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.category = category;
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getDate() {
        return date;
    }

    public int getPriority() {
        return priority;
    }

    public String getCategory() {
        return category;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public void setStatus(TaskStatus status) {
        this.status = status;
    }

    @Override
    public String toString(){
        return "Nome: " + name + " | Prioridade: " + priority + " | Categoria: " + category + " | Status: " + status + " | Data limite: " + date;
    }
}
