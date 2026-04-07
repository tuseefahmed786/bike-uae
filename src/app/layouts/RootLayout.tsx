import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";

export function RootLayout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="min-h-screen bg-neutral-50">
      <Outlet />
    </div>
  );
}
