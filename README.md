# atv10web
Davi Gomes Mendes

## Descrição e Objetivo do projeto: 

O objetivo é usar uma API fake usando as requisições do tipo GET, DELETE e PUT em uma loja de um Tião. 

O uso dessa API se deve a tentar gerir pessoas que já compraram na loja, editando dados, podendo editar e deletar caso um cliente compre e devolva, por exemplo. 

A princípio, foram criadas todos os tipos de requisições, tanto POST quanto do tipo PUT e DELETE. Porém, devido a política do CORS, essas requisições não funcionam, pois a API pertence a um domínio diferente, dito isso, acabei removendo do código. A loja contém produtos de esporte, os quais foram "comprados" pelas pessoas da API.

O site possui uma tela de administração. Para entrar na tela de administração, deve se usar: 
Nome de usuário:seutiao123 e senha:seutiao123. Assim, é possível acessar a tela de administração. 

Acessando como anônimo, não é necessário fazer login, você pode entrar diretamente e "comprar produtos".


## Tecnologias utilizadas: 
A API utilizada foi da API fake https://fakeapi.platzi.com/. Foi utilizado o HTML, CSS e JS.
Essa API descrita permite a busca por usuários, categorias e produtos, contendo o link respectivo para usar cada uma delas.

## Tabela com exemplos das requisições utilizadas em cada página

| Página | Tipo requisição | endpoint|
| --- | --- | --- |
| paginaAdministracao.html | GET | https://api.escuelajs.co/api/v1/users|
| paginaAdministracao.html | POST | https://api.escuelajs.co/api/v1/users|



## Créditos - Fontes de referência utilizadas:

### Para uso da API: 

https://youtu.be/cuEtnrL9-H0?si=ApOUZh-aCJHmyCDg

https://www.w3schools.com/jsref/api_fetch.asp

https://arthurporto.notion.site/4185d4bd572b42548ddfa09b85297e77?v=94276b9a5e59444d8568c9709e27fe86&p=f68bf87b73be448e99171e195f53dbd0&pm=s

https://arthurporto.notion.site/4185d4bd572b42548ddfa09b85297e77?v=94276b9a5e59444d8568c9709e27fe86&p=22e06b94b9cb806bbe35fefaf11bad29&pm=s

### Para uso geral do código: 

https://www.w3schools.com/jsref/jsref_foreach.asp

https://www.w3schools.com/jsref/met_document_addeventlistener.asp

https://www.w3schools.com/html/html_forms.asp

https://www.w3schools.com/html/html_tables.asp

https://www.w3schools.com/tags/tag_tbody.asp

https://www.w3schools.com/jsref/jsref_promise_then.asp

