import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's talk about it."
        />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
