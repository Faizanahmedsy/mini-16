import {
  Boxes,
  LayoutDashboard,
  LifeBuoy,
  Package,
  Receipt,
  Settings,
  Sidebar,
  UserCircle,
} from "lucide-react";
import React from "react";
import { SidebarItem } from "./sidebar";

const SideLayout = () => {
  return (
    <Sidebar>
      <SidebarItem
        icon={<LayoutDashboard size={20} />}
        text="Home"
        active
        href="/home"
      />
      <SidebarItem icon={<UserCircle size={20} />} text="Users" href="/users" />
      <SidebarItem
        icon={<Boxes size={20} />}
        text="Inventory"
        alert
        href="/inventory"
      />
      <SidebarItem
        icon={<Package size={20} />}
        text="Orders"
        alert
        href="/alert"
      />
      <SidebarItem
        icon={<Receipt size={20} />}
        text="Billing"
        alert
        href="/billing"
      />
      <SidebarItem
        icon={<Settings size={20} />}
        text="Setting"
        alert
        href="/setting"
      />
      <SidebarItem
        icon={<LifeBuoy size={20} />}
        text="Help"
        alert
        href="/help"
      />
    </Sidebar>
  );
};

export default SideLayout;
