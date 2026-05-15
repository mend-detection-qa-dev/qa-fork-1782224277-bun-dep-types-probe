// Minimal stub — this file exists to satisfy TypeScript project conventions.
// The probe is a static lockfile test; this code is never executed by Mend.

import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("bun-dep-types-probe: OK"));

export default app;