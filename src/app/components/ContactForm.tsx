"use client";

import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const encode = (data: Record<string, string>): string =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto w-3/4 container"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div hidden aria-hidden="true">
        <input name="bot-field" />
      </div>

      <label className="mb-2" htmlFor="name">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        required
        value={formData.name}
        onChange={handleChange}
        className="mb-6 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <label className="mb-2" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={formData.email}
        onChange={handleChange}
        className="mb-6 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <label className="mb-2" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={5}
        value={formData.message}
        onChange={handleChange}
        className="mb-6 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
          status === "submitting" ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {status === "submitting" ? "Sending..." : "Send"}
      </button>

      <div
        aria-live="polite"
        className="mt-4 text-sm h-6 text-center"
      >
        {status === "success" && (
          <p className="text-green-600">Thanks! Your message has been sent.</p>
        )}
        {status === "error" && (
          <p className="text-red-600">
            Sorry, something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;