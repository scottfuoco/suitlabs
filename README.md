# Suit Labs

The suitlabs project is an open source NFT analytics tool.

## App Folder Breakdown

`platform-frontend`: This is the analytics platform frontend code.

`admin-frontend`: This admin web interface is where managing the NFT collections will be done.

`websocket-server`: This websocket server listens to all available websocket connections of popular NFT marketplaces.  It will grab all the live data and update our DB with the transactions.

`cron-tasks`: This server defines and runs any scheduled jobs, ie. periodically updating an NFT collections floor, the number of owners, and marketcap.

## Tools Being Used

`T3 Stack`: each of the nextjs projects use the T3 stack for Typescript, Tailwindcss, and TRPC
`Next Auth`: Next Auth is being used authentication
``
## Services Being Used

For this projects the following services are being used.

`supabase`: supabase is our relational database, it also provides a realtime api so we can push updates to all users and new data comes into the databse.

`render.com`: all the servers are being hosted on render.com.

`vercel`: is hosting all the nextjs projects.

`alchemy`: is the ethereum node provider

## Join The Team

If you are interested in the project join the [Suit Gang discord](https://discord.gg/WQjAk3bR).
