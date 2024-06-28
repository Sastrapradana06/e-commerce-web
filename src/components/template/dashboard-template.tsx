import Navbar from "../organisms/navbar";
import Sidebar from "../organisms/sidebar";

export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full min-h-[100vh] max-h-max pb-6 relative ">
      <Sidebar />
      <Navbar />
      <div className="w-full h-max mt-[80px] flex justify-center lg:justify-end lg:p-4">
        <div className="w-[90%] min-h-[90vh] max-h-max  lg:w-[80%] ">
          {children}
        </div>
      </div>
    </main>
  );
}
