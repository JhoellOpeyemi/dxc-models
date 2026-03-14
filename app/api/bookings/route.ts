import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import BookingsReceived from "@/components/utils/Emails/BookingsReceived";
import Booking from "@/components/utils/Emails/Booking";
import { bookingSchema } from "./schema";

const apiKey = process.env.RESEND_API_KEY;
const agencyEmail = process.env.AGENCY_EMAIL;

const resend = new Resend("" + apiKey + "");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = bookingSchema.parse(body);

    const { modelName, clientName, email, eventDate } = validatedData;
    const eventDateStr =
      eventDate instanceof Date
        ? eventDate.toISOString().split("T")[0]
        : String(eventDate);

    // Send email to client
    const { error } = await resend.emails.send({
      from: "Test <onboarding@resend.dev>",
      to: [email],
      subject: "Booking Request Received - DXC Models",
      react: BookingsReceived({
        clientName,
        modelName,
        eventDate: eventDateStr,
      }),
    });

    // send email to agency
    if (agencyEmail) {
      const { error: agencyError } = await resend.emails.send({
        from: "Test <onboarding@resend.dev>",
        to: [agencyEmail],
        subject: "New Booking Received - DXC Models",
        react: Booking({
          clientName: validatedData.clientName,
          modelName: validatedData.modelName,
          email: validatedData.email,
          eventDate: eventDateStr,
          message: validatedData.message,
        }),
      });
      if (agencyError) {
        console.error("Failed to send agency email");
      }
    }

    if (error) {
      return NextResponse.json(
        { error: "Failed to send confirmation email. Please try again" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Booking submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues.map((e) => e.message).join(", ") },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
