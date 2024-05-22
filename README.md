# Proxy reverso usando nginx

Para executar a app, basta rodar o comando docker-compose up -d e aguardar os containers inicializarem.

# Atenção!
## Enquanto o banco estiver inicializando, a app retornará uma mensagem informando que não há conexão com o banco. É necessário aguardar alguns segundos para que a app consiga estabelecer uma conexão com o banco e comece a persistir os dados nele.

![image](https://github.com/otaviobr/nginx-reverse-proxy/assets/8741661/63fc28cc-b0ec-4a0f-8fdd-3685bcf985ce)

## Após a conexão ser estabelecida, os nomes serão renderizados na tela.

![image](https://github.com/otaviobr/nginx-reverse-proxy/assets/8741661/9081b7e4-125f-45a0-99bf-0b40e75e385c)
