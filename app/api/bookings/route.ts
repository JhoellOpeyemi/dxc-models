import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import BookingsReceived from "@/components/Emails/BookingsReceived";

const apiKey = process.env.RESEND_API_KEY;

const resend = new Resend("" + apiKey + "");

export const bookingSchema = z.object({
  modelName: z.string().min(1, "Model name is required"),
  clientName: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  eventDate: z.iso.date("Invalid date format"),
  message: z.string().min(10, "Please include details about the booking"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = bookingSchema.parse(body);

    const { modelName, clientName, email, eventDate } = validatedData;

    // Send email to client
    const { error } = await resend.emails.send({
      from: "Test <onboarding@resend.dev>",
      to: [email],
      subject: "Booking Request Received - DXC Models",
      react: BookingsReceived({ clientName, modelName, eventDate }),
    });

    if (error) {
      console.error("Email send error:", error);
      return NextResponse.json(
        { error: "Failed to send confirmation email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Booking submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues.map((e) => e.message).join(", ") },
        { status: 400 }
      );
    }
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
