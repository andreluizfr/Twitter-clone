# Twitter-clone

## Descrição
Recriando o Frontend Twitter para aprender Redux com React e Sass, também comecei a usar React Query pela primeira vez.
Tentei deixar o design igual, então está tudo muito bem responsivo igual ao site do twitter.
No Backend usei Express.js com JWT para autenticação, Nodemailer para envios de e-mail para o usuário, usei banco de dados em memória Redis pela primeira vez. Usei o banco de dados Postgres com auxílio do TypeORM. Tentei aplicar o Clean architecture. Usei Repository pattern e facade pattern em alguns momentos.


## Imagens

## Como rodar

Obs: Se você não está no Linux, vai precisar de uma máquina virtual para o rodar o Redis.

Obs2:É preciso criar uma pasta chamada 'env' na raiz do server contendo development.env que contenha as seguintes propriedas:

- PORT=
- HOST=
- JWT_SECRET=
- JWT_EXP=
- EMAIL_USER=
- EMAIL_PASS=

