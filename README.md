# Twitter-clone
Recriando Twitter para aprender Redux com React e Sass



Compilaçao do sass

cd web-app

sass --watch src/sass/styles.sass:src/css/styles.css






Back-end

-Clean architecture ( External interfaces -> that access routes -> that access controller -> that access use-case classes -> that access entities and repositories through a repositories interface )
-Repository pattern (criação de repositórios que permitem a troca do banco de dados utilizado sem afetar o sistema como um todo, diminui acoplamento entre as classes, facilita criação de testes unitários e retira código duplicado que fere o princípio DRY).


É preciso criar uma pasta chamada 'env' na raiz do server contendo development.env que contenha as seguintes propriedas:
PORT=
HOST=
JWT_SECRET=
JWT_EXP=
EMAIL_USER=
EMAIL_PASS=

