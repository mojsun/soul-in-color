import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 min-h-[80vh] pt-32 pb-24">
      <h1 className="text-3xl font-bold tracking-tight text-brand-dark mb-6">Contact Us</h1>
      <ContactForm />
    </main>
  );
}


