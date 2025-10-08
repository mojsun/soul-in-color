export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-brand-dark mb-6">Contact Us</h1>
      <form className="space-y-4" action="https://formspree.io/f/xqakzqed" method="POST">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="border border-gray-300 rounded-md px-3 py-2" placeholder="First Name" name="firstName" required />
          <input className="border border-gray-300 rounded-md px-3 py-2" placeholder="Last Name" name="lastName" required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="border border-gray-300 rounded-md px-3 py-2" placeholder="Phone" name="phone" />
          <input className="border border-gray-300 rounded-md px-3 py-2" placeholder="Email" type="email" name="email" required />
        </div>
        <textarea className="border border-gray-300 rounded-md px-3 py-2 w-full min-h-40" placeholder="Message" name="message" required />
        <button className="button-brand" type="submit">Send</button>
      </form>
    </main>
  );
}


