import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import ApplicationReceived from "@/components/utils/Emails/ApplicationReceived";
import Application from "@/components/utils/Emails/Application";
import { applicationSchema } from "./schema";

const apiKey = process.env.RESEND_API_KEY;
const agencyEmail = process.env.AGENCY_EMAIL;

console.log(agencyEmail);

const resend = new Resend("" + apiKey + "");

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Convert FormData to object for validation
    const applicationData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      gender: formData.get("gender"),
      age: Number(formData.get("age")),
      address: formData.get("address"),
      instagram: formData.get("instagram"),
      facebook: formData.get("facebook"),
      agencyOption: formData.get("agencyOption"),
      previousAgency: formData.get("previousAgency") || undefined,
      headshot: formData.get("headshot"),
      rightSideProfile: formData.get("rightSideProfile"),
      leftSideProfile: formData.get("leftSideProfile"),
      fullLength: formData.get("fullLength"),
    };

    // Validate data
    const validatedData = applicationSchema.parse(applicationData);
    const { firstName, lastName, email } = validatedData;

    // Send email to applicant
    const { error } = await resend.emails.send({
      from: "Test <onboarding@resend.dev>",
      to: [email],
      subject: "Application Received - DXC Models",
      react: ApplicationReceived({
        firstName,
        lastName,
      }),
    });

    // Send email to agency
    if (agencyEmail) {
      const getExtension = (type: string): string => {
        if (type === "image/jpeg") return "jpg";
        if (type === "image/png") return "png";
        return "jpg"; // default
      };

      const attachments = [
        {
          filename: `headshot_${firstName}_${lastName}.${getExtension(validatedData.headshot.type)}`,
          content: Buffer.from(await validatedData.headshot.arrayBuffer()),
          type: validatedData.headshot.type,
        },
        {
          filename: `right_side_profile_${firstName}_${lastName}.${getExtension(validatedData.rightSideProfile.type)}`,
          content: Buffer.from(
            await validatedData.rightSideProfile.arrayBuffer(),
          ),
          type: validatedData.rightSideProfile.type,
        },
        {
          filename: `left_side_profile_${firstName}_${lastName}.${getExtension(validatedData.leftSideProfile.type)}`,
          content: Buffer.from(
            await validatedData.leftSideProfile.arrayBuffer(),
          ),
          type: validatedData.leftSideProfile.type,
        },
        {
          filename: `full_length_${firstName}_${lastName}.${getExtension(validatedData.fullLength.type)}`,
          content: Buffer.from(await validatedData.fullLength.arrayBuffer()),
          type: validatedData.fullLength.type,
        },
      ];

      const { error: agencyError } = await resend.emails.send({
        from: "Test <onboarding@resend.dev>",
        to: [agencyEmail],
        subject: "New Application Received - DXC Models",
        react: Application({
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          email: validatedData.email,
          phone: validatedData.phone,
          age: validatedData.age,
          gender: validatedData.gender,
          address: validatedData.address,
          instagram: validatedData.instagram,
          facebook: validatedData.facebook,
          agencyOption: validatedData.agencyOption,
          previousAgency: validatedData.previousAgency,
        }),
        attachments,
      });
      if (agencyError) {
        console.error("Failed to send agency email:", agencyError);
      }
    }

    if (error) {
      return NextResponse.json(
        { error: "Failed to send confirmation email. Please try again" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Application submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues.map((e) => `${e.path.join(".")}: ${e.message}`) },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
