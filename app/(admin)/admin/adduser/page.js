import NewUserForm from "@/app/_components/NewUserForm";

function page() {
  return (
    <div className="p-2 sm:px-10">
      <h1 className="h2 font-semibold text-fg">Create New user</h1>
      <NewUserForm />
    </div>
  );
}

export default page;
