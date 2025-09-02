"use client";

import { editUser } from "@/app/_lib/action";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

function EditForm({ full_name, email, userId }) {
  const router = useRouter();

  async function handleEdit(formData) {
    const result = await editUser(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Profile edited successfully!");
      router.refresh();
    }
  }
  return (
    <form
      action={handleEdit}
      className="sm:space-y-7 space-y-5  max-w-xl mx-auto p-5 sm:p-10 rounded-2xl bg-surface my-5"
    >
      {" "}
      <input
        type="text"
        id="userId"
        name="userId"
        className="mt-1 hidden w-full py-2 px-4 rounded-md bg-bg border border-stroke-faint"
        defaultValue={userId}
      />
      <div>
        <label className="block text-default  text-fg">Username</label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full py-2 px-4 rounded-md bg-bg border border-stroke-faint"
          required
          defaultValue={full_name}
        />
      </div>
      <div>
        <label className="block text-default  text-fg">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          disabled
          defaultValue={email}
          className="mt-1 block w-full rounded-md border py-2 px-4 border-stroke-faint bg-gray-100 text-gray-500  sm:text-default"
        />
      </div>
      <div>
        <label className="block text-default  text-fg">New Password</label>
        <input
          type="password"
          id="password"
          name="password"
          minLength={8}
          className="mt-1 block w-full bg-bg  rounded-md py-2 px-4 border border-stroke-faint  "
        />
        <p className="text-xs text-gray-400 mt-1">
          Leave blank to keep current password.
        </p>
      </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  );
}

export default EditForm;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full cursor-pointer bg-brand text-white py-2 px-4 rounded-md hover:bg-brand-dark transition disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300
    "
    >
      {pending ? "Saving..." : "Save Changes"}
    </button>
  );
}
