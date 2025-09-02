"use client";

import { useState } from "react";
import { signUp } from "../_lib/action";
import { redirect } from "next/navigation";
import { useFormStatus } from "react-dom";

function SignUpForm() {
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = await signUp(formData);
    if (result?.error) {
      setError(result.error);
    } else {
      setError("");
      redirect("/signin");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="md:space-y-6 space-y-3">
      <div>
        <label className="block  text-small font-semibold text-fg mb-1">
          Username
        </label>
        <input
          type="text"
          name="fullName"
          required
          className="w-full px-4 py-2  rounded-lg border border-stroke-faint"
        />
      </div>

      <div>
        <label className="block  text-small font-semibold text-fg mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 border rounded-lg  border-stroke-faint"
        />
      </div>

      <div>
        <label className="block  text-small font-semibold text-fg mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          minLength={8}
          className="w-full px-4 py-2 border rounded-lg  border-stroke-faint"
        />
      </div>

      <div>
        <label className="block  text-small font-semibold text-fg mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          required
          className="w-full px-4 py-2 border rounded-lg  border-stroke-faint"
        />
      </div>
      {error && (
        <p className="text-red-500 font-semibold text-small">{error}</p>
      )}
      <SubmitButton />
    </form>
  );
}

export default SignUpForm;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full cursor-pointer mt-3 bg-fg uppercase text-default text-white py-3 rounded-lg hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300
    "
    >
      {pending ? "Signing up..." : "Sign Up"}
    </button>
  );
}
