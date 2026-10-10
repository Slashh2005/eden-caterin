import { Outlet, useLocation } from "react-router-dom";
import EdenNav from "@/components/EdenNav";
import EdenFooter from "@/components/EdenFooter";
import ScrollToTop from "@/components/ScrollToTop";
import MotionController from "@/components/MotionController";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-ivory">
      <ScrollToTop />
      <MotionController />
      <EdenNav />
      <main key={pathname} className="page-enter">
        <Outlet />
      </main>
      <EdenFooter />
    </div>
  );
};

export default Layout;
