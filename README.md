# Kortix (WorkersCraft AI)

AI agent platform - Frontend, Mobile, Desktop, and SDK

## Repository Structure

This repository contains the frontend applications and client-side components for Kortix:

- **`/apps`** - Application projects
  - `/frontend` - Next.js web application
  - `/mobile` - Expo/React Native mobile app
  - `/desktop` - Electron desktop application
  
- **`/packages`** - Shared libraries and packages
  - `/shared` - Cross-platform types, utilities, and components
  
- **`/sdk`** - Python SDK for Kortix API

## Backend

**Note:** The backend has been moved to a separate repository. This repository now only contains the frontend applications and client-side code.

For backend development, please refer to the backend repository.

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Python 3.11+ (for SDK)
- Docker (optional, for local services)

### Frontend Development

```bash
# Install dependencies
pnpm install

# Start the web app
pnpm dev:frontend

# Start the mobile app
pnpm dev:mobile
```

### Configuration

The frontend applications require environment variables to connect to the backend API:

- `NEXT_PUBLIC_BACKEND_URL` - Backend API URL
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key

See `apps/frontend/README.md` for detailed configuration instructions.

## Docker Compose

The included `docker-compose.yaml` provides:
- Redis (for caching/sessions)
- Frontend container

The backend services run separately.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

## License

See [LICENSE](./LICENSE) for license information.
