import NotFount from "@/app/_components/NotFount";
import SideNavBar from "@/app/_components/SideNavBar";
import { getCurrentUser } from "@/app/_lib/auth";

export const metadata = {
  title: "Profile",
};

async function layout({ children }) {
  const user = await getCurrentUser();
  if (!user) return <NotFount />;
  return (
    <div className="block sm:flex max-w-6xl mx-auto mt-20 min-h-[80vh] py-0 sm:py-10 ">
      <div className="sm:border-r border-stroke-faint">
        <SideNavBar />
      </div>
      <div className="grow p-5 sm:px-10">{children}</div>
    </div>
  );
}

export default layout;
