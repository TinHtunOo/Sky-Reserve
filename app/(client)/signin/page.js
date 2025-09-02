import SignInForm from "@/app/_components/SignInForm";

export const metadata = {
  title: "Sign In",
};

function Page() {
  return (
    <div className="mt-45 flex items-center justify-center bg-white mb-25 ">
      <div className="w-full max-w-md  p-8 rounded-2xl  sm:shadow-md">
        <h3 className="h3 font-semibold text-center md:text-start mb-1">
          Welcome to <span className="text-brand-dark">SKY|RESERVE</span>
        </h3>
        <p className="text-small text-center md:text-start  text-fg-muted mb-7">
          Enter your email and password to continue.
        </p>
        <SignInForm />
      </div>
    </div>
  );
}

export default Page;
