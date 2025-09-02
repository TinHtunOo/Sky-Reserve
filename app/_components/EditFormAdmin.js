"use client";

import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { editAdmin } from "../_lib/action";

function EditFormAdmin(admin) {
  const router = useRouter();
  const { name, email, id } = admin.admin;
  async function handleEdit(formData) {
    const result = await editAdmin(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Profile edited successfully!");
      router.refresh();
    }
  }
  return (
    <div className="max-w-4xl mt-5 md:mt-10 md:p-10 p-5 shadow-md rounded-md bg-white">
      <form action={handleEdit} className="md:space-y-8 space-y-5">
        <input
          type="text"
          id="adminId"
          name="adminId"
          className="mt-1 hidden w-full py-2 px-4 rounded-md bg-bg border border-stroke-faint"
          defaultValue={id}
        />
        <div className="md:flex block justify-center items-center">
          <label className=" min-w-[150px] lg:min-w-[300px]  text-sm block mb-1 md:mb-0">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={name}
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
            defaultValue={email}
            disabled
            className="w-full border-stroke-faint border-2 p-2 rounded disabled:bg-gray-200"
          />
        </div>
        <div className="md:flex block justify-center items-center">
          <label className=" min-w-[150px] lg:min-w-[300px] text-sm block mb-1 md:mb-0 ">
            New Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            minLength={8}
            className="w-full border-stroke-faint border-2 p-2 rounded"
          />
        </div>
        <div className="md:flex block justify-center items-center">
          <label className=" min-w-[150px] lg:min-w-[300px] text-sm block "></label>

          <p className="text-sm text-start w-full text-gray-400 -mt-5">
            Leave blank to keep current password.
          </p>
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}

export default EditFormAdmin;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="block ml-auto cursor-pointer bg-brand text-white py-2 px-4 rounded-md hover:bg-brand-dark transition disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300
    "
    >
      {pending ? "Saving..." : "Save Changes"}
    </button>
  );
}
