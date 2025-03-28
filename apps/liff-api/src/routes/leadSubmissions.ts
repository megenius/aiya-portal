import { Hono } from "hono";
import * as LeadSubmissionHandler from "../handlers/leadSubmissions.handler";

const leadSubmissionsRoutes = new Hono();

leadSubmissionsRoutes.get("/", ...LeadSubmissionHandler.getLeadSubmissions);
leadSubmissionsRoutes.post("/", ...LeadSubmissionHandler.createLeadSubmission);
leadSubmissionsRoutes.post("/edit", ...LeadSubmissionHandler.updateLeadSubmission);

export { leadSubmissionsRoutes };
