import { Sidebar } from "@/components/modules";
import routes from "@/lib/routes";

const SideLayout = () => {
  return <Sidebar links={routes} />;
};

export default SideLayout;
