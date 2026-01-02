import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await fetch("https://formsubmit.co/ajax/abhi15.malviya@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setSuccess(true);
    setLoading(false);
  };

  if (success) return <p className="text-center">Message Sent ✅</p>;

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        required
        placeholder="Name"
        className="input"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        required
        type="email"
        placeholder="Email"
        className="input"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        required
        placeholder="Message"
        className="input"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button disabled={loading} className="btn-primary w-full">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
