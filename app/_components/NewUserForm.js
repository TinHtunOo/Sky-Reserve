"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { addUser } from "../_lib/action";

function NewUserForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    const result = await addUser(formData);
    if (result?.error) {
      setError(result.error);
      toast.error(result.error);
    } else {
      toast.success("User created successfully!");
      router.refresh();
      e.target.reset();
    }
    setLoading(false);
  }
  return (
    <div className="max-w-4xl mt-5 md:mt-10 md:p-10 p-5 shadow-md rounded-md bg-white">
      <form onSubmit={handleSubmit} className="md:space-y-8 space-y-5">
        <div className="md:flex block justify-center items-center">
          <label className=" min-w-[150px] lg:min-w-[300px]  text-sm block mb-1 md:mb-0">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border-stroke-faint border-2 p-2 rounded"
          />
        </div>
        <div className="md:flex block justify-center items-center">
          <label className=" min-w-[150px] lg:min-w-[300px] text-sm block mb-1 md:mb-0 ">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="text"
            required
            className="w-full border-stroke-faint border-2 p-2 rounded"
          />
        </div>
        <div className="md:flex block justify-center items-center">
          <label className=" min-w-[150px] lg:min-w-[300px] text-sm block mb-1 md:mb-0 ">
            Password (min 8 characters)
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            className="w-full border-stroke-faint border-2 p-2 rounded"
          />
        </div>
        <div className="md:flex block justify-center items-center">
          <label className="min-w-[150px] lg:min-w-[300px]  text-sm block mb-1 md:mb-0 ">
            Repeated Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            minLength={8}
            className="w-full border-stroke-faint border-2 p-2 rounded"
          />
        </div>

        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="bg-brand text-white px-4 py-2 rounded hover:bg-brand-dark cursor-pointer block ml-auto"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create User"}
        </button>
      </form>
    </div>
  );
}

export default NewUserForm;
