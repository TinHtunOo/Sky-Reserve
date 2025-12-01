"use client";
import { logInAdmin } from "../_lib/action";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

function LoginFormAdmin() {
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = await logInAdmin(formData);
    if (result?.error) {
      setError(result.error);
    } else {
      setError("");
      router.push("/admin");
      router.refresh();
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
          placeholder="superadmin@gmail.com"
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
          placeholder="12345678"
        />
      </div>
      {error && (
        <p className="text-red-500 font-semibold text-small">{error}</p>
      )}
      <div className="flex gap-3 items-center justify-end mt-7">
        <SubmitButton />
      </div>
    </form>
  );
}

export default LoginFormAdmin;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="cursor-pointer w-full bg-fg uppercase text-default text-white py-3 px-4 rounded-lg hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300
    "
    >
      {pending ? "Logging in..." : "Log In"}
    </button>
  );
}
