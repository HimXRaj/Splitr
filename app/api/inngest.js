// api/inngest.ts
import { inngest } from "@/lib/inngest/client";
import { paymentReminders } from "@/lib/inngest/payment-reminders";
import { spendingInsights } from "@/lib/inngest/spending-insights";
import { serve } from "inngest/netlify"; // ✅ Required for Netlify

export const handler = serve({
  client: inngest,
  functions: [paymentReminders, spendingInsights],
});
