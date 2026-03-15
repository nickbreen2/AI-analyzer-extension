import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

function verifySignature(payload: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature));
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-signature") ?? "";
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET ?? "";

  if (!verifySignature(rawBody, signature, secret)) {
    console.error("Invalid webhook signature");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = JSON.parse(rawBody);
  const eventName = payload?.meta?.event_name;
  const userId = payload?.meta?.custom_data?.clerk_user_id;

  console.log(`Lemon Squeezy event: ${eventName}`, { userId });

  switch (eventName) {
    case "order_created":
      console.log("New order:", payload.data?.id, "for user:", userId);
      break;
    case "subscription_created":
      console.log("New subscription:", payload.data?.id, "for user:", userId);
      break;
    case "subscription_updated":
      console.log("Subscription updated:", payload.data?.id, "for user:", userId);
      break;
    case "subscription_cancelled":
      console.log("Subscription cancelled:", payload.data?.id, "for user:", userId);
      break;
    default:
      console.log("Unhandled event:", eventName);
  }

  return NextResponse.json({ success: true });
}
