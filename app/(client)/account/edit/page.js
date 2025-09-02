import EditForm from "@/app/_components/EditForm";
import { getCurrentUser } from "@/app/_lib/auth";
import { getUser } from "@/app/_lib/data-service";

async function page() {
  const userData = await getCurrentUser();
  const user = await getUser(userData.id);

  const { full_name, email } = user.at(0);

  return (
    <div>
      <div>
        <h2 className="h2 mb-2 text-brand-dark">Edit Profile</h2>
        <p className="text-default text-fg">
          Update your personal information below.
        </p>
      </div>
      <EditForm full_name={full_name} email={email} userId={userData.id} />
      <p className="text-default text-fg-muted">
        Note: Your email address cannot be changed.
      </p>
    </div>
  );
}

export default page;
