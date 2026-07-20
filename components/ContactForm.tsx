"use client";

type ContactFormProps = {
  onSubmit?: (formData: FormData) => void;
};

export function ContactForm({ onSubmit }: ContactFormProps) {
  return (
    <form
      className="space-y-5"
      action="#"
      method="post"
      onSubmit={(event) => {
        if (!onSubmit) {
          return;
        }

        event.preventDefault();
        onSubmit(new FormData(event.currentTarget));
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[#2E2E2E]">
          <span>First Name</span>
          <input
            type="text"
            name="firstName"
            className="w-full rounded-xl border border-[#0B5D3B]/15 bg-white px-4 py-3 text-sm text-[#2E2E2E] outline-none transition focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/20"
            required
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-[#2E2E2E]">
          <span>Last Name</span>
          <input
            type="text"
            name="lastName"
            className="w-full rounded-xl border border-[#0B5D3B]/15 bg-white px-4 py-3 text-sm text-[#2E2E2E] outline-none transition focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/20"
            required
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium text-[#2E2E2E]">
        <span>Email Address</span>
        <input
          type="email"
          name="email"
          className="w-full rounded-xl border border-[#0B5D3B]/15 bg-white px-4 py-3 text-sm text-[#2E2E2E] outline-none transition focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/20"
          required
        />
      </label>

      <label className="block space-y-2 text-sm font-medium text-[#2E2E2E]">
        <span>Message</span>
        <textarea
          name="message"
          rows={6}
          className="w-full rounded-xl border border-[#0B5D3B]/15 bg-white px-4 py-3 text-sm text-[#2E2E2E] outline-none transition focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/20"
          required
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[#0B5D3B] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0B5D3B]/20"
      >
        Send Message
      </button>
    </form>
  );
}
