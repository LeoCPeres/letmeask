<div style="text-align: center" align="center">
<img src="https://i.imgur.com/TRyecR6.png" align="center" />
</div>

<h1 align="center">Letmeask ReactJS App</h1>

<h3 align="center">Letmeask website with ReactJS and Firebase.</h3>
<div style="text-align: center" align="center">
<img src="https://i.imgur.com/H4YqEw7.png" align="center" />
</div>

## 💻 Projeto

Letmeask é perfeito para criadores de conteúdos poderem criar salas de Q&A com o seu público, de uma forma muito organizada e democrática.

Este é um projeto desenvolvido durante a **[Next Level Week Together](https://nextlevelweek.com/)**, apresentada dos dias 20 a 27 de Junho de 2021.

<h2>👨‍💻 O que EU fiz?</h2>
<p>Durante a Next Level Week Together, decidi escolher a trilha ReactJS, onde aprendi muito sobre front-end.
  Nela, desenvolvemos uma aplicação do zero, onde podemos criar uma sala de Q&A (Questions and Answers), onde o usuário faz Login com uma conta Google e pode criar uma sala para receber as perguntas.
  
  Trabalhamos com Typescript, SASS, Firebase, Context API, componentes, estados e criação de Hooks dentro do ReactJS.
  
  Ao final da semana de aulas, nos indicaram realizar alguma mudança na aplicação, para diferenciar das demais e continuar sempre buscando o próximo nível, então adicionei:
  
  <ul>
    <li>Responsividade</li>
    <li>Interações com o usuário via Hot Toasts</li>
    <li>Modal para deletar pergunta, excluir sala e fazer Logout, criei meu próprio contexto para Modal</li>
    <li>Função de Logout</li>
    <li>Possibilidade do Admin adicionar e remover pergunta como Highlight</li>
    <li>Acesso do usuário a sala já encerrada, porém sem envio de novas perguntas</li>
    <li>Contagem de perguntas aprimoradas, trocando a palavra "pergunta" entre plural e singular, dependendo da sua quantidade</li>
    <li>Home com botão "Crie sua sala como (nome do usuário)" caso já tenha iniciado uma sessão e opção de criar como outro usuário</li>
    <li>Contagem de likes aparecem para admin</li>
    <li>Usuário não logado não consegue dar like nas perguntas</li>
    <li>Quando está sem perguntas, aparece interação em tela para usuário e admin sabarem que não há perguntas ainda</li>
</ul>
</p>

<h2>🚀 Tecnologias</h2>
<p>Projeto desenvolvido como desafio front-end.</p>

<ul>
    <li>ReactJS</li>
    <li>Firebase</li>
    <li>Sass: Syntactically Awesome Style Sheets</li>
    <li>Typescript</li>
</ul>
<p>👉 Figma layout design by Rebecca Gonzalez: <a href="https://www.figma.com/file/u0BQK8rCf2KgzcukdRRCWh/Letmeask/duplicate">Letmeask</a> </p>

<h2>ℹ️ Como usar</h2>
<p>Para clonar e usar esta aplicação, você irá precisar de: <a href="https://git-scm.com/">Git</a>, <a href="https://nodejs.org/en/">Node.js v14.16.1</a> ou mais recente + <a href="https://yarnpkg.com/">Yarn v1.22.5</a> ou mais recente.</p>

```bash
# Clone this repository
$ git clone https://github.com/LeoCPeres/letmeask

# Go into the repository
$ cd letmeask

# Install dependencies
$ yarn install

# Run Web App
$ yarn start
```

O app estará disponível no seu browser pelo endereço http://localhost:3000.

Lembrando que será necessário criar uma conta no [Firebase](https://firebase.google.com/) e um projeto para disponibilizar um Realtime Database.
