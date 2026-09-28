"use client";

import { useState } from "react";

export default function SigninForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Account creation is not connected yet.");
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="designer@example.com"
        autoComplete="email"
        required
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="********"
        autoComplete="new-password"
        minLength={8}
        required
      />

      <button type="submit">Sign In</button>
      <p className="signup-notice" aria-live="polite">
        {notice}
      </p>
    </form>
  );
}
