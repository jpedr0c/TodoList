package com.todolist.app;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Task {
    private int id;
    private String name;
    private String description;
    private LocalDate endDate;
    private int priority;
    private String category;
    private TaskStatus status;

    public Task(int id,
                String name,
                String description,
                LocalDate endDate,
                int priority,
                String category,
                TaskStatus status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.endDate = endDate;
        this.priority = priority;
        this.category = category;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getEndDate() {
        return endDate;
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
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        return "ID: " + id + " | Nome: " + name + " | Prioridade: " + priority + " | Categoria: " + category + " | Status: " + status + " | Data limite: " + endDate.format(formatter);
    }
}
