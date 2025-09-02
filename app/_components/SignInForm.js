"use client";
import Link from "next/link";
import { signIn } from "../_lib/action";
import { useState } from "react";
import { redirect } from "next/navigation";
import { useFormStatus } from "react-dom";

function SignInForm() {
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = await signIn(formData);
    if (result?.error) {
      setError(result.error);
    } else {
      setError("");
      redirect("/account");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="md:space-y-6 space-y-3">
      <div>
        <label className="block  text-small font-semibold text-fg-muted mb-1">
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
        <label className="block  text-small font-semibold text-fg-muted mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          className="w-full px-4 py-2 border rounded-lg  border-stroke-faint"
        />
      </div>
      {error && (
        <p className="text-red-500 font-semibold text-small">{error}</p>
      )}
      <div className="flex gap-3 items-center justify-end mt-7">
        <Link
          href="/signup"
          className="  uppercase text-default t py-2 px-4 rounded-lg transition bg-bg text-fg border-2 border-fg hover:bg-gray-300"
        >
          Back
        </Link>

        <SubmitButton />
      </div>
    </form>
  );
}

export default SignInForm;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="cursor-pointer bg-fg uppercase text-default text-white py-2 px-4 rounded-lg hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300
    "
    >
      {pending ? "Signing in..." : "Sign In"}
    </button>
  );
}
