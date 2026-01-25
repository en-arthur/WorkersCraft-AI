# Backend Migration Notes

## Overview

The backend has been moved to a separate repository. This document summarizes the changes made to clean up this repository.

## Changes Made

### 1. Removed Backend Directory

- **Deleted:** `/backend` directory and all its contents
  - All Python backend code
  - Supabase migrations and configurations
  - Backend tests and documentation
  - Backend dependencies and virtual environment

### 2. Updated Configuration Files

#### docker-compose.yaml
- Removed `backend` service definition
- Removed `worker` service definition
- Removed backend volume mount for Redis config
- Kept only `redis` and `frontend` services
- Added note about backend being in separate repository

#### start.py
- Updated manual instructions to note backend is separate
- Removed backend and worker startup commands
- Added notes about configuring external backend API
- Updated service names in messages (Suna → Kortix)

#### setup.py
- Added deprecation notice at the top
- Kept file for historical purposes and frontend-only setup
- Added warning banner when script runs
- **Note:** This file still contains backend-related code but displays a warning

### 3. Updated Documentation

#### README.md
- Completely rewritten to reflect new structure
- Added clear note about backend being in separate repository
- Updated structure documentation
- Added configuration instructions for connecting to backend API

#### CONTRIBUTING.md
- Removed backend development setup link
- Added note about backend being in separate repository

#### apps/frontend/README.md
- Updated development notes to clarify backend is separate
- Changed reference from specific localhost URL to environment variable

### 4. Removed GitHub Workflows

Deleted workflows that were specific to backend deployment:
- `.github/workflows/docker-build.yml` - Backend Docker build and deployment
- `.github/workflows/e2e-api-tests.yml` - Backend E2E API tests
- `.github/workflows/update-PROD.yml` - Production branch sync that triggered backend deployment

### 5. Updated IDE Configuration

#### .vscode/settings.json
- Changed Python interpreter path from `./backend/.venv/bin/python` to `./sdk/.venv/bin/python`

#### .cursor/worktrees.json
- Changed backend setup command to SDK setup command

### 6. Updated .gitignore

Removed backend-specific entries:
- `backend/.test_token_compression.py`
- `backend/test_token_compression_data.py`
- `backend/debug_streams/`
- `backend/core/agentpress/debug_streams/`

## What Remains

### Environment Variables

Frontend applications still reference backend through environment variables:
- `NEXT_PUBLIC_BACKEND_URL` - Points to backend API
- `EXPO_PUBLIC_BACKEND_URL` - Mobile app backend API URL

These are **intentional** and allow the frontend to connect to the external backend service.

### Repository Structure

The repository now contains:
```
/apps
  /frontend - Next.js web application
  /mobile - Expo/React Native mobile app
  /desktop - Electron desktop application
/packages
  /shared - Cross-platform shared libraries
/sdk - Python SDK for Kortix API
/docs - Documentation
/.github/workflows - Remaining CI/CD workflows (mobile, desktop, frontend)
```

## Migration Checklist for Developers

If you were working on this codebase before the split:

- [ ] Clone the new backend repository separately
- [ ] Set up backend environment in its own directory
- [ ] Update your `NEXT_PUBLIC_BACKEND_URL` in frontend `.env.local` to point to your backend instance
- [ ] Update your `EXPO_PUBLIC_BACKEND_URL` in mobile `.env` to point to your backend instance
- [ ] Run backend services separately from this repository
- [ ] Update any local scripts or aliases that referenced the old monorepo structure

## Backend Repository

For backend development, setup, and deployment, please refer to the backend repository.

## Questions?

If you encounter issues or have questions about the migration, please open an issue in the appropriate repository:
- Frontend/Mobile/Desktop issues: This repository
- Backend/API issues: Backend repository
