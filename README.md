# Loja-Produtos

## Descrição:

- Este projeto consiste em manipular dados de produtos e seus respectivos atributos.


## Como executar a aplicação do Back-end:

- Descompactar o projeto.
- Você pode executar a aplicação utilizando a IDE de sua preferência. 
- Deverá rodar a aplicação através da classe: 

                   PredizeApplication.java

- Localizada no caminho: 

                   br.com.predize.api

- A aplicação será iniciada na porta 8080
- Ajustar a configuração para conexão com seu banco de dados local no arquivo:

                   application.properties

- Localizado no caminho:

                   Predize/src/main/resources

## Requisitos de Sistema:

- Possuir a JDK 17.
- Uma IDE ou editor de sua preferência.
- Ter Postman instalado para importar coleção.

## Como executar a aplicação do Fack-end:
- Descompactar o projeto.
- Você pode executar a aplicação utilizando a IDE de sua preferência.
- Abrir o terminal de sua preferencia na pasta:
  
                   Predize\front-end\predize> 
- Inserir o comando:

                   npm run dev 

## Funcionalidades:

- A api consiste em um gerenciamento de dados de produtos e seus atributos, em endpoints distintos ("/produto" e "/carrinho").
- Em ambos os controladores, caso não seja informado nenhum filtro, retorna  todos os dados de sua entidade.
- Caso seja informado um filtro, retorna todos os objetos relacionadas à aquele filtro.
- A API conta também com retorno de status para respostas. (201, 200, 404, etc).
- Tomei a liberdade de anexar a coleção em JSON para testes, contendo todos os caminhos e corpos para requisicoes do projeto.
- Há disponível documentação em Swagger para melhores análises, neste link:

                   http://localhost:8080/swagger-ui/index.html

## Tecnologias:
- Java 17
- Spring Boot 3
- Banco de dados em memória H2
- Hibernate
- Lombok
- Model Mapper
- Devtools
- Swagger
- Postman
- React
- TypeScript
- axios

## Contato:
[![](https://img.shields.io/badge/LinkedIn-blue)](https://www.linkedin.com/in/angelo-chiarella/)
[![](https://img.shields.io/badge/Email-red)](mailto:chiarella.gaetano@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp%20%20-brightgreen)](https://wa.me/+5513997734664)
