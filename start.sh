#!/bin/sh

# Before starting
# the server though, we need to run any prisma migrations that haven't yet been

set -ex
npx prisma migrate deploy
npm run start
