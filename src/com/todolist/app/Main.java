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
                "Acelera",
                TaskStatus.TODO
        );

        manager.addTask(
                "Tarefa B",
                "Teste",
                LocalDate.now(),
                1,
                "Acelera",
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
                "Acelera",
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
                "Tarefa A",
                "Teste",
                LocalDate.now(),
                3,
                "Acelera",
                TaskStatus.TODO
        );

        manager.listAllTasks();
        manager.removeTaskById(4);
        System.out.println("Tarefa removida! Listagem de tarefas atualizada: ");
        manager.listAllTasks();
    }
}
