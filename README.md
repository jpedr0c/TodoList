# ✅ TODO List em Java (Console)

Projeto de uma aplicação **TODO List em Java**, desenvolvida para gerenciamento de tarefas via **terminal/console**, aplicando conceitos fundamentais de programação, organização de código e boas práticas.

O sistema permite criar, listar e remover tarefas, utilizando **ID gerado automaticamente**, menu interativo por **recursão** e datas no **padrão brasileiro**.

<br>

## 👤 Autor

#### João Pedro Cardoso de Carvalho

##### Redes sociais:

- Instagram: [@eujp.cardoso](https://www.instagram.com/eujp.cardoso/)
- Linkedin: [@jpedroc](https://www.linkedin.com/in/jpedroc/)
- Email: [jpccarvalho2210@gmail.com](mailto:jpccarvalho2210@gmail.com)

<br>

## 🎯 Objetivo do Projeto

O objetivo deste projeto é praticar e consolidar conhecimentos em:

- Programação Orientada a Objetos (POO)
- Estruturação de classes
- Manipulação de listas
- Controle de fluxo sem uso de laços `while` ou `do while`
- Organização e clareza de código
- Entrada de dados via terminal
- Boas práticas de versionamento com Git/GitHub

<br>

## 🛠️ Tecnologias Utilizadas

- **Java 25**
- **Java Collections (ArrayList)**
- **Java Time API (LocalDate, DateTimeFormatter)**
- **Git e GitHub**

<br>

## 📌 Funcionalidades Implementadas

✔ Criar tarefas  
✔ Cada tarefa possui **ID único gerado automaticamente**  
✔ Remover tarefa pelo **ID**  
✔ Listar todas as tarefas  
✔ Menu interativo implementado por **recursão**  
✔ Datas no formato brasileiro (**dd/MM/yyyy**)  

<br>

## 📋 Estrutura da Tarefa

Cada tarefa possui os seguintes atributos:

- **ID** (gerado automaticamente)
- **Nome**
- **Descrição**
- **Data limite**
- **Prioridade**
- **Categoria**
- **Status** (TODO, DOING, DONE)

<br>

## ▶️ Como Executar o Projeto

### Pré-requisitos
- Java **25**
- Git (opcional, para clonar o repositório)

### Passo a passo:

1. Clone o repositório:
```bash
git clone https://github.com/jpedr0c/TodoList.git
```

2. Acesse a pasta do projeto
```bash
cd TodoList
```

3. Compile os arquivos
```bash
javac src/com/todolist/app/*.java
```

4. Execute o programa
```bash
java src/com/todolist/app/Main.java
```

<br>

## 🚧 Melhorias Futuras (TODO)

#### Algumas melhorias planejadas para evolução do projeto:

- [ ] Validação mais robusta das entradas do usuário

- [ ] Atualizar tarefas existentes

- [ ] Persistência das tarefas em arquivo (.txt ou .json)

- [ ] Carregar tarefas automaticamente ao iniciar o sistema

- [ ] Interface gráfica (FrontEnd)

<br>

## 📚 Observações Finais

Este projeto foi desenvolvido com foco educacional, priorizando clareza, organização e boas práticas, servindo como base sólida para evoluções futuras, como persistência em arquivo e arquitetura mais robusta.
