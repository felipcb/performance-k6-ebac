abrir o dockerDesktop

iniciar o banco de dados (acessar) com DockerDesktop funcionando
    docker compose -f docker-compose.db.yml up -d

acessar (Performance k6/ server/ebac-demo-store-server)
    npm run start

subir docker (com powershell) (na pasta do "ebac-api.json")
    docker run --rm -v "/d/ebac/9 - Performance K6/k6-swagger:/local" openapitools/openapi-generator-cli:v6.6.0 generate -i /local/ebac-api.json -g k6 -o /local/k6-ebac-tests --skip-validate-spec

subir BancoDeDados acessar a pasta server/ebac-demo-store-server
    DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ebac"
    npm run db:init


visitar o swagger no:
    localhost:3000/api/#/

###########################################
Organizar os testes com as pastas
    data
    request
    simulations
    utils

12:00 min