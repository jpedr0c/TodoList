package com.todolist.app;

import java.util.Scanner;

public class Menu {
    private TaskManager manager;
    private Scanner scanner;

    public Menu(TaskManager manager) {
        this.manager = manager;
        this.scanner = new Scanner(System.in);
    }

    public void showMenu() {
        System.out.println("\n===== TODO LIST =====");
        System.out.println("1 - Adicionar tarefa");
        System.out.println("2 - Listar todas as tarefas");
        System.out.println("3 - Listar por categoria");
        System.out.println("4 - Listar por prioridade");
        System.out.println("5 - Listar por status");
        System.out.println("6 - Remover tarefa por ID");
        System.out.println("7 - Contar tarefas por status");
        System.out.println("0 - Sair");

        System.out.print("Escolha uma opção: ");
        String option = scanner.nextLine();

        if (option.equals("1")) {
            System.out.println("Chamar método para adicionar tarefa");
        } else if (option.equals("2")) {
            manager.listAllTasks();
        } else if (option.equals("3")) {
            System.out.println("Digite a categoria: ");
            manager.listTasksByCategory(scanner.nextLine());
        } else if (option.equals("4")) {
            System.out.println("Digite a prioridade (1-5): ");
            int priority = scanner.nextInt();
            scanner.nextLine();
            manager.listTasksByPriority(priority);
        } else if (option.equals("5")) {
            //TODO: Consertar erro quando digita qualquer outra palavra
            System.out.println("Digite o status (TODO, DOING, DONE): ");
            TaskStatus status = TaskStatus.valueOf(scanner.nextLine().toUpperCase());
            manager.listTasksByStatus(status);
        } else if (option.equals("6")) {
            System.out.println("Digite o ID da tarefa: ");
            int id = scanner.nextInt();
            scanner.nextLine();
            manager.removeTaskById(id);
        } else if (option.equals("7")) {
            manager.countTasksByStatus();
        } else if (option.equals("0")) {
            System.out.println("Encerrando o programa...");
            scanner.close();
            return;
        } else {
            System.out.println("Opção inválida. Digite uma das opções válidas");
        }

        showMenu();
    }
}
