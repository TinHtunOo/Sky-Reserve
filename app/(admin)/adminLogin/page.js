import LoginFormAdmin from "@/app/_components/LoginFormAdmin";

function page() {
  return (
    <div>
      <h1 className="h1 text-brand-dark font-semibold text-center mb-10">
        SKY|RESERVE
      </h1>
      <h2 className="h2 font-semibold text-center mb-5">
        Log In To Your Account
      </h2>
      <div className="w-full max-w-md shadow-md p-0 sm:p-8 rounded-2xl  bg-bg">
        <LoginFormAdmin />
      </div>
    </div>
  );
}

export default page;
