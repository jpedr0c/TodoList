package com.todolist.app;

public class Main {
    public static void main(String[] args) {
        TaskManager manager = new TaskManager();
        Menu menu = new Menu(manager);

        menu.showMenu();
    }
}
