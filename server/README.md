# A graphql server

## Set up

- Run postgres instance
  - Ensure you have a schema named `postgres-subs`
  - Or rename to whichever schema you want to use in `/server/migrations/0001_create_podcasts_table.js`
- Add env variables to a `.env` file. Example given `.env.example`
- Run `yarn run db:init` to set up database
- Run `yarn run start` to run server
