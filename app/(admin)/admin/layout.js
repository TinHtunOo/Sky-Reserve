import "@/app/_styles/globals.css";
import SideNavBarAdmin from "@/app/_components/SideNavBarAdmin";
import HeaderAdmin from "@/app/_components/HeaderAdmin";
import { Toaster } from "react-hot-toast";
import { getCurrentAdmin } from "@/app/_lib/auth";
import NotFoundAdmin from "@/app/_components/NotFoundAdmin";
import { getAdmin } from "@/app/_lib/data-service";

export const metadata = {
  title: "Admin",
};

export default async function RootLayout({ children }) {
  // const adminData = await getCurrentAdmin();

  // const admin = await getAdmin(adminData.id);
  // const { name } = admin.at(0);
  // if (!admin)
  //   return (
  //     <html lang="en">
  //       <body>
  //         <NotFoundAdmin />;
  //       </body>
  //     </html>
  //   );
  return (
    <html lang="en">
      <body>
        <div className="min-h-[100vh]">
          <HeaderAdmin name="Admin" />
          <div className="flex bg-surface max-h-screen">
            <SideNavBarAdmin />
            <div className="grow mt-[125px] sm:mt-[110px] overflow-hidden overflow-y-auto  max-w-full">
              {" "}
              {children}
            </div>
          </div>
        </div>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              marginTop: "50px",
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-bg)",
              color: "var(--color-brand-dark)",
            },
          }}
        />
      </body>
    </html>
  );
}
