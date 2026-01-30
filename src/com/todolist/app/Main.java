package com.todolist.app;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        TaskManager manager = new TaskManager();

        manager.addTask(new Task(
                "Tarefa A", "Teste",
                LocalDate.now(), 3, "Acelera", TaskStatus.TODO));

        manager.addTask(new Task(
                "Tarefa B", "Teste",
                LocalDate.now(), 1, "Acelera", TaskStatus.TODO));

        manager.addTask(new Task(
                "Tarefa C", "Teste",
                LocalDate.now(), 2, "Acelera", TaskStatus.TODO));

        manager.addTask(new Task(
                "Tarefa D", "Teste",
                LocalDate.now(), 3, "Acelera", TaskStatus.DOING));

        manager.addTask(new Task(
                "Tarefa E", "Teste",
                LocalDate.now(), 1, "Acelera", TaskStatus.TODO));

        manager.addTask(new Task(
                "Tarefa F", "Teste",
                LocalDate.now(), 3, "Acelera", TaskStatus.DONE));

        manager.listAllTasks();
    }
}
