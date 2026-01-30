package com.todolist.app;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        TaskManager manager = new TaskManager();

        manager.addTask(
                "Tarefa A",
                "Teste",
                LocalDate.now(),
                3,
                "ZG",
                TaskStatus.TODO
        );

        manager.addTask(
                "Tarefa B",
                "Teste",
                LocalDate.now(),
                1,
                "ZG",
                TaskStatus.TODO
        );

        manager.addTask(
                "Tarefa C",
                "Teste",
                LocalDate.now(),
                2,
                "Acelera",
                TaskStatus.TODO
        );

        manager.addTask(
                "Tarefa D",
                "Teste",
                LocalDate.now(),
                3,
                "ZG",
                TaskStatus.TODO
        );

        manager.addTask(
                "Tarefa E",
                "Teste",
                LocalDate.now(),
                1,
                "Acelera",
                TaskStatus.TODO
        );

        manager.addTask(
                "Tarefa F",
                "Teste",
                LocalDate.now(),
                3,
                "ZG",
                TaskStatus.TODO
        );

        manager.addTask(
                "Tarefa G",
                "Teste",
                LocalDate.now(),
                2,
                "ZG",
                TaskStatus.TODO
        );

        manager.listAllTasks();

        System.out.println("---------Por Categoria----------");
        manager.listTasksByCategory("ZG");
    }
}
