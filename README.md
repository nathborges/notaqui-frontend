# Notaqui

## Sobre
Notaqui é uma web-aplicação que tem como propósito a leitura, identificação e categorização de notas fiscais ou cupons fiscais. A ideia é auxiliar a Sanofi com um processo automatizado e inteligente para gerenciar e contabilizar seus gastos, diminuindo assim, o tempo gasto pelos colaboradores da área de Despesa com um trabalho repetitivo e demorado.

## Features
- Login;
- O usuário pode, através de imagens de nota fiscais/cupom fiscais, criar novas despesas;
- Ao adicionar a nota fiscal ao site, ela será processada pelo back-end e serão apresentados todos os dados relacionado a mesma, tal como CNPJ, nome da empresa e ramo que atua. Uma vez com todas essas informações, poderá ser editada pelo usuário e submetida para ser salva no banco de dados.
- Na página principal da aplicação, a aplicação possui um gráfico com uma visão geral de todas as despesas já cadastradas, sendo agrupadas por dia.

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

O Notaqui, por ser construído em uma arquitetura web todo o seu fluxo é hospeado na cloud, onde o Front-end é hospedado na Vercel, o Back-end é hospedado no Heroku e o Banco de Dados é hospedado na arquitetura da FIAP.

O fluxo do Notaqui é simples, conforme diagrama arquitetado, o front-end irá realizar a requisição via protocolo HTTPS para o Back-end, que, por sua vez recebe o conteudo encodado da imagem (em base 64). Com o conteudo da imagem encodado, é enviado para a API de reconhecimento dos textos presentes na imagem e é retornado para o Back-end. Contudo, com o conteúdo da imagem em texto, entra a lógica do Notaqui, onde via expressões regulares (Regex), capturamos o CNPJ presente no cupom ou nota fiscal e o valor total (valor final da nota, adotamos a lógica de More than Others) onde capturamos todos os valores contidos no conteúdo e pegamos o maior. Com o CNPJ capturado, é realizada uma requisição HTTPS para uma API de consulta da Receita Federal, onde é retornado todos os dados da PJ consultada, como a Razão Social, Natureza Juridica e Atividade da Empresa (CNAE). Tendo todo este input, o Back-end responde ao Front-end, que por sua vez, apresenta ao usuário os dados do cupom ou nota fiscal, para que seja possível o cadastro de fato da despesa. É possível também, editar as informações que o Back-end retornou (caso seja retornado algum dado inválido).

## Como rodar localmente
Depois de clonar esse repositório, use o `npm i` para instalar todas as dependencias e `npm run dev` para rodar o projeto.
<br>Utilizamos o node 18.17.1.</br>



  

