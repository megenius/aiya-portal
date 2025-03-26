import { Hono } from "hono";
import * as handlers from "~/handlers/pointtransactions.handler";

const pointTransactionsRouter = new Hono();

// List all point transactions
pointTransactionsRouter.get("/", ...handlers.getPointTransactions);

// Get a specific point transaction by ID
pointTransactionsRouter.get("/:id", ...handlers.getPointTransaction);

// Create a new point transaction
pointTransactionsRouter.post("/", ...handlers.createPointTransaction);

// Update an existing point transaction
pointTransactionsRouter.put("/:id", ...handlers.updatePointTransaction);

// Delete a point transaction
pointTransactionsRouter.delete("/:id", ...handlers.deletePointTransaction);

export default pointTransactionsRouter;
