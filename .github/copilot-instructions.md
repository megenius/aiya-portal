You are Copilot, an AI pair programmer.
You are assisting the user with the `aiya-portal` repository (owner: `megenius`).

## Project Overview

### Project Structure
The `aiya-portal` project is a monorepo managed with **Turborepo**. The workspace uses **Bun** as the package manager and contains multiple backend APIs and frontend applications organized under the `apps` directory, with shared packages under the `packages` directory.

### Backend APIs
Backend services are organized in subdirectories ending with "-api":
- **Core APIs:** `api`, `portal-api`, `customer-api`, `billing-api`, `channel-api`
- **Specialized APIs:** `ad-api`, `ai-api`, `aws-api`, `bot-api`, `liff-api`, `partner-api`, `referral-api`, `shop-api`, `ums-api`, `pubsub-api`, `clickhouse-api`, `uws-api`
- **Webhook Services:** `webhook-facebook`, `webhook-line`
- **Proxy Services:** `proxy-facebook`, `proxy-line`

All APIs are built with **Hono** framework and deployed on **Cloudflare Workers**. They follow a consistent structure with handlers, routes, middleware, and services.

### Frontend Applications
Frontend applications include:
- **`portal`:** Main admin portal (Remix + Vite)
- **`liff`:** LINE Front-end Framework application
- **`shop`:** E-commerce frontend
- **`aiyaclub`:** Community platform (Remix + Cloudflare Pages)
- **`website`:** Marketing website
- **`agent-client`:** Agent interface

These are built with **Remix** framework using Vite as the build tool.

### General Guidance
* When working on a file within the `apps` directory, infer whether it's a backend API or a frontend application based on the directory name.
* Offer suggestions appropriate for the inferred technology stack (Hono/Cloudflare for backend, Remix SPA for frontend).
* Be mindful of the monorepo structure and suggest solutions consistent with a monorepo approach (e.g., shared libraries, consistent build processes).

### User Context
The current user is `megenius`.

## Examples

### Example 1: Adding a New API Endpoint
**User:** "How do I add a new endpoint to get user billing history?" (while in `apps/billing-api`)
**Good Copilot Response:** "Here's how to add a billing history endpoint in the Hono-based billing API, following the monorepo structure of `aiya-portal`..." (provide relevant code snippets and configuration examples).

### Example 2: Implementing Durable Object
**User:** "How do I create a rate limiter using Durable Objects?" (while in `apps/portal-api`)
**Good Copilot Response:** "Here's how to implement a rate limiter using Cloudflare Durable Objects in your portal API..." (provide relevant code snippets and configuration examples).

### Example 3: Frontend Data Fetching
**User:** "How do I fetch user data in this Remix component?" (while in `apps/portal`)
**Good Copilot Response:** "Here's how to fetch user data in Remix SPA mode using loaders and the API..." (provide relevant code snippets and configuration examples).

## Common Issues & Troubleshooting

### Build Issues
* Check for circular dependencies between packages
* Ensure proper TypeScript path mapping in monorepo
* Verify Turborepo cache configuration

### Deployment Issues
* Check Cloudflare Workers size limits
* Verify environment variables are properly set
* Ensure proper wrangler.toml configuration

### Runtime Issues
* Check Cloudflare Workers logs for errors
* Verify Durable Object bindings
* Monitor memory usage and execution time

## Debugging

### Local Development
* Use `console.log` with structured data
* Implement request correlation IDs
* Use Cloudflare Workers local development tools

### Production
* Use Cloudflare Analytics for monitoring
* Implement health check endpoints
* Set up alerting for critical errors

## Important Considerations
* This information is based on a limited directory listing. More in-depth analysis might reveal additional details about the project's architecture and technology stack.
* Always prioritize the user's explicit instructions over these inferred guidelines.
* If unsure, ask clarifying questions to better understand the user's intent and the specific context of their task.

## Technologies

* **Monorepo:** Turborepo
* **Backend API:** Hono (lightweight web framework for Cloudflare Workers)
* **Deployment:** Cloudflare Workers
* **Frontend:** Remix (with Vite build tool)
* **Language:** TypeScript
* **Package Manager:** Bun
* **Database:** Directus (headless CMS/API)
* **Styling:** Tailwind CSS
* **UI Components:** Preline UI (custom package)
* **State Management:** Redux Toolkit, TanStack Query
* **Authentication:** JWT, API Keys
* **Payments:** Stripe
* **External APIs:** LINE Bot SDK, Google Auth
* **Development Tools:** Wrangler (Cloudflare), ESLint, Prettier

## Development Workflow

### Local Development
* Use `bun dev` to start all services in development mode
* Use `bun dev --filter=portal-api` to start a specific API service
* Use `bun build` to build the entire monorepo
* Use `bun lint` to check code quality across all packages
* Use `bun format` to format code with Prettier

### Environment Setup
* Each API service has its own `wrangler.toml` for Cloudflare configuration
* Use `.env` files for local environment variables
* Use Cloudflare tunnel for local HTTPS development (`bun tunnel`)

### Code Organization
* Follow domain-driven design principles
* Keep business logic in `services/` directories (some APIs use different naming)
* Use `handlers/` for HTTP request/response logic
* Place shared code in `packages/` directory
* Use `@repo/shared` for common utilities and types

## File Structure Conventions

* **`apps/xxx-api`:** Contains the backend API code.
* **`packages/*`:** Contains shared libraries and utilities.
    * `shared/`: Common utilities, types, and business logic
    * `ui/`: Shared UI components
    * `preline/`: Custom Preline UI components
    * `editor/`: Rich text editor components
    * `eslint-config/`: Shared ESLint configuration
    * `tsconfig/`: Shared TypeScript configurations
* **`apps/remix-app`:** Contains Remix frontend application code.
* **`src/` (for APIs):** The main source code directory for the API.
    * `config/`: Configuration and environment setup
    * `handlers/`: Request handlers and business logic
    * `middleware/`: Hono middleware functions
    * `routes/`: Hono route definitions
    * `schemas/`: Zod validation schemas and OpenAPI definitions
    * `types/`: TypeScript type definitions
    * `utils/`: Utility functions
* **`wrangler.toml`:** Cloudflare Workers configuration file.
* **`package.json`:** Node.js package manifest.
* **`tsconfig.json`:** TypeScript compiler configuration.

## Coding Conventions

* **TypeScript:** Strict type checking is enforced. Use interfaces and types extensively.
* **Hono:** Follow Hono's conventions for routing and middleware.
* **Cloudflare Workers:** Be mindful of Cloudflare Workers' limitations (e.g., cold starts, memory limits).
* **Error Handling:** Implement robust error handling using try/catch blocks and custom error types.
* **Logging:** Use `console.log` for debugging and structured logging for production.

## Durable Objects

* Use Durable Objects for managing stateful resources, such as subscriptions or rate limits.
* Durable Objects should be responsible for managing their own state and concurrency.
* Communication with Durable Objects should be done through their `fetch` method.

## Data Storage

* The project may utilize KV Namespaces, Durable Objects Storage, or R2 Buckets for data persistence.
* Choose the appropriate storage mechanism based on the data's requirements (e.g., size, access patterns, consistency).

## Security

* **Authentication:** Implement authentication using API keys, JWTs, or other appropriate methods.
* **Authorization:** Implement authorization to control access to resources based on user roles or permissions.
* **Rate Limiting:** Implement rate limiting to protect against abuse.
* **Input Validation:** Sanitize and validate all user inputs to prevent injection attacks.

## Deployment

* Use Cloudflare Wrangler to deploy the worker.
* Configure environment variables in the Cloudflare Workers dashboard.
* Set up CI/CD to automate deployments.

## Turborepo

* Use `bun build` to build the entire monorepo.
* Use `bun dev` to start development servers for the API and frontend.
* Be aware of dependency relationships between packages within the monorepo.

## Remix SPA Mode

* The Remix frontend runs in SPA mode, so all routing and rendering happen on the client-side.
* Use Remix's data fetching APIs to load data from the backend API.
* Be mindful of SEO implications when using SPA mode.

## API Design Standards

### RESTful Conventions
* Use proper HTTP methods (GET, POST, PUT, DELETE, PATCH)
* Implement consistent URL patterns: `/api/v1/resource/:id`
* Use proper HTTP status codes
* Include pagination for list endpoints

### Request/Response Format
* Use camelCase for JSON properties
* Include metadata in responses (pagination, timestamps)
* Implement request validation with Zod schemas
* Use consistent error response format

### Authentication & Authorization
* Use Bearer tokens for API authentication
* Implement role-based access control (RBAC)
* Use middleware for authentication checks
* Include user context in request handlers

```typescript
// Example API endpoint pattern
app.get('/api/v1/users/:id', authMiddleware, async (c) => {
  const { id } = c.req.param();
  const user = await userService.findById(id);
  
  if (!user) {
    return c.json({ error: 'User not found' }, 404);
  }
  
  return c.json({
    data: user,
    meta: { timestamp: new Date().toISOString() }
  });
});
```

## Error Handling

* **Custom Error Classes:** Create domain-specific error classes
* **Error Response Format:** Use consistent error response structure
* **Logging:** Include correlation IDs for request tracing
* **Graceful Degradation:** Handle service failures gracefully

```typescript
// Example error handling pattern
export class ValidationError extends Error {
  constructor(message: string, public field: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

// In handlers
try {
  const result = await service.process(data);
  return c.json({ data: result });
} catch (error) {
  if (error instanceof ValidationError) {
    return c.json({ error: error.message, field: error.field }, 400);
  }
  console.error('Unexpected error:', error);
  return c.json({ error: 'Internal server error' }, 500);
}
```

## Environment Configuration

### Environment Variables
* Use `.env.example` files in each app for documentation
* Prefix environment variables by service (e.g., `PORTAL_API_*`, `BILLING_API_*`)
* Store secrets in Cloudflare Workers environment variables

### Configuration Management
* Use `packages/shared` for shared configuration schemas
* Validate environment variables at startup
* Use different configurations for dev/staging/production

```typescript
// Example configuration pattern
import { z } from 'zod';

const configSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
});

export const config = configSchema.parse(process.env);
```

## Performance Optimization

### Cloudflare Workers Best Practices
* Minimize cold start times by avoiding heavy imports
* Use streaming for large responses
* Implement caching strategies with Cache API
* Optimize bundle size with tree shaking

### Database Optimization
* Use connection pooling for database connections
* Implement proper indexing strategies
* Use read replicas for read-heavy operations
* Cache frequently accessed data

### Frontend Performance
* Implement code splitting in Remix
* Use lazy loading for components
* Optimize bundle size with dynamic imports
* Implement proper caching headers

## Example Tasks

* Add a new API endpoint.
* Implement a new Durable Object.
* Create a new middleware function.
* Update the frontend to consume a new API endpoint.
* Write unit tests for a service function.

## Contact

For questions or assistance, contact @megenius.

## Last Updated

2025-06-01 15:30:00 UTC