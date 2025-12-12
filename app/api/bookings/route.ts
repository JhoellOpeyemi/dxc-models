import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// import {BookingsReceived} from '@/components/Emails/BookingsReceived'

const resend = new Resend(process.env.RESEND_API_KEY);

export const bookingSchema = z.object({
  modelName: z.string().min(1, "Model name is required"),
  clientName: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  eventDate: z.iso.date("Invalid date format"),
  message: z.string().min(10, "Please include details about the booking"),
});

// export async function POST(req: Request) {

// }
