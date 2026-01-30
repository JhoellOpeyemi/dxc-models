import { z } from "zod";

const parseDateString = (val: unknown) => {
  if (typeof val === "string") {
    // Accept 'YYYY-MM-DD' from input[type=date] and ISO strings. Append time to avoid timezone shifts.
    const s = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(val)
      ? `${val}T00:00:00`
      : val;
    const d = new Date(s);
    return isNaN(d.getTime()) ? val : d;
  }
  if (val instanceof Date) return val;
  return val;
};

export const bookingSchema = z.object({
  modelName: z.string().min(1, "Model name is required"),
  clientName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  eventDate: z.preprocess(
    parseDateString,
    z.date().refine(
      (date) => {
        if (!(date instanceof Date) || isNaN(date.getTime())) return false;
        const today = new Date();
        const dateOnly = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
        );
        const todayOnly = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
        );
        return dateOnly.getTime() >= todayOnly.getTime();
      },
      { message: "Choose a valid date (today or future)" },
    ),
  ),
  message: z.string().min(10, "Please include details about the booking"),
});
