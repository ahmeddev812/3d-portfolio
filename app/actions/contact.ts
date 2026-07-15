"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function sendContactMessage(formData: FormData) {
  const validated = contactSchema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  // In production, send email or store in database
  console.log("Contact form submission:", validated);

  return { success: true };
}
