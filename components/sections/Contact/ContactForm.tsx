"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const PROJECT_TYPES = [
  { value: "web", label: "Web Application" },
  { value: "mobile", label: "Mobile App" },
  { value: "3d", label: "3D / WebGL Experience" },
  { value: "ai", label: "AI / Automation" },
  { value: "consulting", label: "Consulting / Advisory" },
  { value: "other", label: "Other" },
] as const;

const BUDGETS = [
  { value: "< 5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 - $15,000" },
  { value: "15k-50k", label: "$15,000 - $50,000" },
  { value: "50k+", label: "$50,000+" },
  { value: "not-sure", label: "Not Sure Yet" },
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully!", {
        description: "I'll get back to you within 24 hours.",
      });
      reset();
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again later or email me directly.",
      });
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="name"
          label="Your Name"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          id="email"
          label="Your Email"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <select
            id="projectType"
            {...register("projectType")}
            className={cn(
              "peer w-full bg-surface border rounded-xl px-4 pt-6 pb-2 text-primary transition-all duration-300 outline-none appearance-none cursor-pointer",
              "focus:border-accent-primary/50 focus:bg-elevated",
              errors.projectType ? "border-red-500/50" : "border-border-color"
            )}
          >
            <option value="" disabled></option>
            {PROJECT_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <label
            htmlFor="projectType"
            className="absolute left-4 top-2 text-xs text-text-muted pointer-events-none"
          >
            Project Type
          </label>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {errors.projectType && (
            <p className="text-red-400 text-xs mt-1 ml-1">{errors.projectType.message}</p>
          )}
        </div>

        <div className="relative">
          <select
            id="budget"
            {...register("budget")}
            className={cn(
              "peer w-full bg-surface border rounded-xl px-4 pt-6 pb-2 text-primary transition-all duration-300 outline-none appearance-none cursor-pointer",
              "focus:border-accent-primary/50 focus:bg-elevated",
              errors.budget ? "border-red-500/50" : "border-border-color"
            )}
          >
            <option value="" disabled></option>
            {BUDGETS.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
          <label
            htmlFor="budget"
            className="absolute left-4 top-2 text-xs text-text-muted pointer-events-none"
          >
            Budget Range
          </label>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {errors.budget && (
            <p className="text-red-400 text-xs mt-1 ml-1">{errors.budget.message}</p>
          )}
        </div>
      </div>

      <Textarea
        id="message"
        label="Tell me about your project"
        rows={5}
        error={errors.message?.message}
        {...register("message")}
      />

      <Button
        type="submit"
        size="lg"
        glow
        isLoading={isSubmitting}
        className="w-full group"
      >
        Send Message
        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </Button>
    </motion.form>
  );
}
