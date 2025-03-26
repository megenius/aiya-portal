import { Hono } from "hono";
import {
    createPointTransaction,
    deletePointTransaction,
    getPointTransaction,
    getPointTransactions,
    updatePointTransaction,
} from "~/handlers/pointtransactions.handler";

const pointTransactionsRouter = new Hono();

// List all point transactions
pointTransactionsRouter.get("/", getPointTransactions);

// Get a specific point transaction by ID
pointTransactionsRouter.get("/:id", getPointTransaction);

// Create a new point transaction
pointTransactionsRouter.post("/", createPointTransaction);

// Update an existing point transaction
pointTransactionsRouter.put("/:id", updatePointTransaction);

// Delete a point transaction
pointTransactionsRouter.delete("/:id", deletePointTransaction);

export default pointTransactionsRouter;
