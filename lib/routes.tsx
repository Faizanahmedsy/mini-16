import { ReactNode } from "react";
import {
  Boxes,
  LayoutDashboard,
  LifeBuoy,
  Package,
  Receipt,
  Settings,
  UserCircle,
} from "lucide-react";

interface Route {
  text: string;
  href: string;
  icon: ReactNode;
}

const routes: Route[] = [
  {
    text: "Home",
    href: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    text: "Reducer",
    href: "/reducer",
    icon: <LayoutDashboard size={20} />,
  },
  {
    text: "Zustland",
    href: "/zustland",
    icon: <LayoutDashboard size={20} />,
  },
  {
    text: "Users",
    href: "/users",
    icon: <UserCircle size={20} />,
  },
  {
    text: "Todos Table",
    href: "/todos",
    icon: <Boxes size={20} />,
  },
  {
    text: "Orders",
    href: "/orders",
    icon: <Package size={20} />,
  },
  {
    text: "Billing",
    href: "/billing",
    icon: <Receipt size={20} />,
  },
  {
    text: "Settings",
    href: "/settings",
    icon: <Settings size={20} />,
  },
  {
    text: "Help",
    href: "/help",
    icon: <LifeBuoy size={20} />,
  },
];

export default routes;
