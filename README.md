# Twitter-clone

## Descrição
Recriando o Frontend Twitter para aprender Redux com React e Sass, também comecei a usar React Query pela primeira vez.
Tentei deixar o design igual, então está tudo muito bem responsivo igual ao site do twitter.
No Backend usei Express.js com JWT para autenticação, Nodemailer para envios de e-mail para o usuário, usei banco de dados em memória Redis pela primeira vez. Usei o banco de dados Postgres com auxílio do TypeORM. Tentei aplicar o Clean architecture. Usei Repository pattern e facade pattern em alguns momentos.


## Imagens

### Página de início
<img src="/images/twitter_beginnig.png" width="50%" height="auto"/>
<img src="/images/twitter_signup.png" width="100%" height="auto"/>
<img src="/images/twitter_login.png" width="100%" height="auto"/>

### Página inicial do usuário logado
<img src="/images/twitter_responsivity.gif" width="100%" height="auto"/>

### Página do perfil
<img src="/images/twitter_profile.png" width="100%" height="auto"/>
<img src="/images/twitter_profile-mobile.png" width="50%" height="auto"/>

## Como rodar

Obs: Se você não está no Linux, vai precisar de uma máquina virtual para o rodar o Redis.

Obs2:É preciso criar uma pasta chamada 'env' na raiz do server contendo development.env que contenha as seguintes propriedas:

- PORT=
- HOST=
- JWT_SECRET=
- JWT_EXP=
- EMAIL_USER=
- EMAIL_PASS=

### server

```npm install```

```npm start```

### web-app

```npm install```

```npm start```

