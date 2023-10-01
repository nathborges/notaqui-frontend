# Notaqui

## Sobre
Notaqui é uma web-aplicação que tem como próposito a leitura, identificação e categorização de notas fiscais ou cupons fiscais. A ideia é auxiliar a Sanofi com um processo automatizado e inteligente para gerenciar e contabilizar seus gastos, diminuindo assim, o tempo gasto pelos colaboradores da área de Despesa com um trabalho repetitivo e demorado.

## Features
- Login;
- O usuário pode, através de uma ou várias imagens de nota fiscal/cupom fiscal, criar uma nova despesa;
- Ao adicionar a nota ao site, ela será processada e o funcionário da Sanofi conseguirá ver o valor gasto e dados sobre o estabelecimento do gasto (como CNPJ, nome da empresa e ramo que atua). Uma vez com todas essas informações, ele poderá editar o texto da nota e submeter para a criação de despesa.

- Na página principal da aplicação, o site possui um gráfico com uma visão geral de todas as despesas já cadastradas por dia.

## Tecnologias usadas

### Front-end
----
 <div style="display:flex">
    <a><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Javascript"/></a>
 <a>
   <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS"/>
  </a>   
 <a>
   <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  </a>
 <a>
   <img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" alt="Vue"/>
  </a>  
</div>
O front-end do notaqui foi desenvolvido usando Vue.js 3 e javascript vanilla, se comunicando com nosso back-end através de uma API Rest.

### Back-end
----
<div style="display:flex">
 <a><img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" /></a>
 <a><img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" alt="Spring"/></a>
 <a><img src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white" alt="Oracle"/></a>
 <a><img src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" alt="GoogleCloud"/></a>
</div>
O back-end do notaqui foi desenvolvido utilizando Java e o framework Spring, utilizando o banco de dados Oracle SQL.

## Funcionamento

![teste drawio (1)](https://github.com/nathborges/notaqui-frontend/assets/84536972/f3729aea-3328-4cca-afad-9a0333a57769)

Nosso backend tem conexão com duas APIs externas, a primeira sendo a Google Vision API, que é uma IA capaz de transcrever uma imagem em texto, ela é a primeira que utilizamos, assim que o usuário anexa um arquivo no nosso front-end. Ao receber o texto da nota transcrita Google Vision, capturamos os dados mais importantes como valor e CNPJ. Com o CNPJ salvo, conseguimos através de uma API da Receita Federal, buscar as informações da empresa e mostrá-las ao usuário.


## Como rodar localmente
Depois de clonar esse repositório, use o `npm i` para instalar todas as dependencias e `npm run dev` para rodar o projeto.
<br>Utilizamos o node 18.17.1.</br>



  

