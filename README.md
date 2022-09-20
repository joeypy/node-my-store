# My Store with Node.js

To install dependencies, uses:

```bash
yarn          # or 
yarn install
```

To run the DEV server, uses:

```bash
yarn start    # or 
yarn dev
```

To start the database in postgres, first, duplicate the file .env.dev and rename it to .env, next set the environment variables and then run the next command line:

```bash
docker-compose --env-file .env up
docker-compose --env-file .env up -d postgres
```

## Features

- Serializers for routes
- CRUD for products
- Middleware errors and validation
- Persistent data in JSON file