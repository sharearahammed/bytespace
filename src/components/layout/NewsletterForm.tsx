"use client";

import { FormEvent } from "react";

export default function NewsletterForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="footer-newsletter" onSubmit={handleSubmit}>
      <label>
        <input
          type="email"
          placeholder="Enter your email"
          aria-label="Enter your email"
          required
        />
      </label>
      <button className="newsletter-search-btn" type="submit">Search</button>
    </form>
  );
}
