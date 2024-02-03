import { Sidebar } from "@/components/modules";

import {
  Boxes,
  LayoutDashboard,
  LifeBuoy,
  Package,
  Receipt,
  Settings,
  UserCircle,
} from "lucide-react";

const SideLayout = () => {
  return (
    <Sidebar
      links={[
        {
          text: "Dashboard",
          href: "/",
          icon: <LayoutDashboard size={20} />,
        },
        {
          text: "Users",
          href: "/users",
          icon: <UserCircle size={20} />,
          alert: true,
        },
        {
          text: "Inventory",
          href: "/inventory",
          icon: <Boxes size={20} />,
          alert: true,
        },
        {
          text: "Orders",
          href: "/orders",
          icon: <Package size={20} />,
          alert: true,
        },
        {
          text: "Billing",
          href: "/billing",
          icon: <Receipt size={20} />,
          alert: true,
        },
        {
          text: "Settings",
          href: "/settings",
          icon: <Settings size={20} />,
          alert: true,
        },
        {
          text: "Help",
          href: "/help",
          icon: <LifeBuoy size={20} />,
          alert: true,
        },
      ]}
    />
  );
};

export default SideLayout;
