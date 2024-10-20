# persona
A Web3 service for self-expression and digital identity.

## Deploy Edge Function
```
supabase secrets set --env-file ./supabase/.env
supabase functions deploy api
```

```
deno cache --reload https://raw.githubusercontent.com/yjgaia/wallet-login-module/refs/heads/main/supabase/functions-module/serve-wallet-api.ts
```

## Run dev entrypoint
```
deno run --allow-net --allow-read --watch server/entrypoint-dev.ts
```