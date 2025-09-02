import EditFormAdmin from "@/app/_components/EditFormAdmin";
import { getCurrentAdmin } from "@/app/_lib/auth";
import { getAdmin } from "@/app/_lib/data-service";

async function page() {
  const adminData = await getCurrentAdmin();
  const admin = await getAdmin(adminData.id);
  return (
    <div className="p-2 sm:px-10">
      <h1 className="h2 font-semibold text-fg">Update User</h1>
      <EditFormAdmin admin={admin.at(0)} />
    </div>
  );
}

export default page;
