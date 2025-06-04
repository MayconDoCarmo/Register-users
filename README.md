<h1 align="center"> 
        Register Users 💻 
</h1>
<p align="center">
  🔗 <a href="https://youtu.be/K779wsSbtS4">Assistir o projeto</a>
</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

<div align="center">
  <img src="./README-assets/register_users.gif" alt="Interface Register Users" width="600">
</div>

## 📌 Sobre o projeto

O **Register Users** é um painel administrativo para gerenciamento de usuários em empresas, permitindo cadastrar, listar, editar e excluir registros com campos como nome, e-mail, cargo, setor e benefícios como plano de saúde e odontológico.

Este projeto foi desenvolvido para consolidar conhecimentos em desenvolvimento **Full Stack**, utilizando **Angular 17** no frontend com **Angular Forms**, **Angular Material** e **Bootstrap**, e uma **API em PHP** com banco de dados **MySQL** no backend.

Durante o desenvolvimento, explorei práticas modernas de integração entre frontend e backend, consumo de APIs REST, estruturação de componentes reutilizáveis, estilização responsiva e organização de código limpa e escalável.

<br>

## ⚙️ Funcionalidades

- ✅ Cadastro de usuários
- ✅ Listagem em tabela com design moderno
- ✅ Edição de informações
- ✅ Remoção de registros
- ✅ Integração com API em PHP
- ✅ Armazenamento em banco de dados MySQL
- ✅ Campos personalizados (benefícios: plano de saúde e odontológico)

<br>

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [MAMP, XAMPP ou outro servidor PHP local](https://www.mamp.info/en/)
- [MySQL](https://www.mysql.com/)
- Editor como [VS Code](https://code.visualstudio.com/)

<br>

### 📁 Clonando e executando o frontend (Angular)

```bash
# Clone o repositório
git clone https://github.com/MayconDoCarmo/crud-users.git

# Entre na pasta do projeto
cd crud-users

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve
```

<br>

### 🧩 Executando o backend (PHP + MySQL)

1. Coloque os arquivos PHP (API) em uma pasta no seu servidor local (ex: `htdocs/register-users-api/`)
2. Certifique-se de que o banco de dados `register_users` esteja criado e populado com a tabela:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  role VARCHAR(50),
  sector VARCHAR(100),
  healthPlan BOOLEAN,
  dentalPlan BOOLEAN
);
```

3. Atualize as credenciais de conexão no arquivo `config.example.php` do backend, conforme necessário.
4. Teste acessando via Postman ou pelo frontend Angular.

<br>

### 🌐 Ajuste a URL da API

No arquivo `user.service.ts`, você verá algo como:

```ts
private apiUrl = 'http://localhost/users';
```

Você precisa adaptar essa URL de acordo com o caminho onde estão seus arquivos PHP. Por exemplo:

| Local dos arquivos PHP               | URL correta                       |
| ------------------------------------ | --------------------------------- |
| `C:/MAMP/htdocs/users/`              | `http://localhost/users`          |
| `C:/MAMP/htdocs/register-users-api/` | `http://localhost/crud-users-api` |

> Se você mover a pasta ou alterar a porta do servidor, será necessário atualizar essa URL.

<br>

## 🛠 Tecnologias

#### **Frontend** (Angular 17)

- Angular CLI
- Angular Forms
- Angular Material
- SCSS
- Bootstrap 5
- TypeScript
- HTML5 / CSS3
- RxJS

#### **Backend**

- PHP (procedural)
- PDO
- MySQL

<br>

## 🤝 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com suas alterações: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: Minha nova feature'`
4. Faça push para a sua branch: `git push origin minha-feature`

## 🦸 Autor

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/137451720?v=4" width="114px;" alt="Maycon Do Carmo foto de perfil"/><br>
        <sub>
          <b>Maycon Do Carmo</b>
        </sub>
      </a>
    </td>

</table>

[![Gmail Badge](https://img.shields.io/badge/-Email-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:maycongusmao.up@gmail.com)](mailto:maycongusmao.up@gmail.com)&nbsp;&nbsp;[![LinkedIn Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/maycon-do-carmo-9105b828b/)](https://www.linkedin.com/in/maycon-do-carmo-9105b828b/)

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).

Feito com 💻 por **Maycon Do Carmo**
