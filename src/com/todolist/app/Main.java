package com.todolist.app;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        Task task = new Task(
                "Terminar a trilha de Java",
                "Falta somente finalizar o ZG-Hero Project",
                LocalDate.of(2026, 1, 29),
                1,
                "Estudos",
                TaskStatus.TODO
        );

        System.out.println(task);
    }
}
