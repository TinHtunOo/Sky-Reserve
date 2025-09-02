import Link from "next/link";
import SignUpForm from "@/app/_components/SignUpForm";

export const metadata = {
  title: "Sign Up",
};

function Page() {
  return (
    <div className="mt-30 flex items-center justify-center bg-white mb-25 ">
      <div className="w-full max-w-md  p-8 rounded-2xl  sm:shadow-md">
        <h2 className="h2 font-semibold text-center md:text-start mb-4 ">
          Create new account
        </h2>
        <p className="text-small text-center md:text-start  text-fg-muted mb-10">
          Create your account in seconds. It’s fast, easy, and free.
        </p>
        <SignUpForm />
        <p className="text-fg-muted text-small mt-5 text-center">
          Alreadys have an account?{" "}
          <Link href="/signin" className="text-brand underline">
            Sign in
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default Page;
