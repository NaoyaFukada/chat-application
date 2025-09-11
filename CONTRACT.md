# Chat Application Contract

This document defines the API and WebSocket events shared between frontend and backend.

---

## REST Endpoints

### POST /auth/register

Request:

```json
{ "username": "string", "email": "string", "password": "string" }
```

Response:

```json
{ "accessToken": "string", "expiresAt": "string", "refreshToken": "string" }
```
