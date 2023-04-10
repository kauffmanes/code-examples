# Node.js w/ Postgres, TS Watching

Notes: https://www.atatus.com/blog/building-crud-rest-api-with-node-js-express-js-and-postgresql/

# Watch your TS w/ scripts

```
"build": "tsc",
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node dist/index.js",
"dev": "tsc -w & nodemon -q -w dist dist/index.js"
```

# Docker

- `docker build -t emily/name:1.0 .`
- `docker images` → get ID
- `docker run <tag>`
- `docker run -p 8080:8080`

# Connecting to Postgres

- Install the pg module (node-postgres)
- This lets us use pools, so we don't have to open and close a connection everything we run a query
- exec postgres container
- login w/ user: `psql -U postgres`

## Popular Commands

\c dbname - Switch connection to a new database
\dt - List all tables
\du - List all users and thier assigned roles
\list or /l - List databases
\q - Exit psql connection
