# Docker CI/CD Practice

A small React + Express project for learning Docker and GitHub Actions CI.

## Local development

1. Copy the environment template:

   ```powershell
   Copy-Item .env.example .env
   ```

2. Install dependencies:

   ```powershell
   npm install
   npm install --prefix server
   npm install --prefix client
   ```

3. Start both applications:

   ```powershell
   npm run dev
   ```

Open http://localhost:5173. The API health check is at http://localhost:3001/api/health.

## Docker

```powershell
docker compose up --build
```

Open http://localhost:5173.

Stop containers:

```powershell
docker compose down
```

## Environment variables

- `API_PORT`: Express API port (default: `3001`).
- `VITE_API_URL`: API address used by the React app.
- `APP_NAME`: Name shown by the health endpoint.

Never commit `.env`; use `.env.example` as the template.

## CI

GitHub Actions runs the API tests and builds the React app for every push and pull request.
