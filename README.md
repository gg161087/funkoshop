# funkoshop
Proyecto FunkoShop - API (NodeJS) y FRONT (React)

# For run docker container
    create ./MySQL/.env:
        MYSQL_ROOT_PASSWORD=rootpassword
        MYSQL_DATABASE=funkoshop
        MYSQL_USER=admin
        MYSQL_PASSWORD=adminpassword
        PMA_HOST=mysql-container
        PMA_PORT=3306
    In terminal:
        docker-compose up -d

# for run api:
    create ./funkoshop-api/.env:
        PORT=3000
        PORT=3000
        HOST=localhost
        DB_HOST=localhost
        DB_PORT=3306
        DB_NAME=funkoshop
        DB_USER=root
        DB_PASSWORD=rootpassword
        DB_DIALECT=mysql
        JWT_SECRET=secret
     In terminal:
        npm i
        npm run dev