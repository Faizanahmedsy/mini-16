"use client";

import { cn } from "@/lib/utils";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, createContext, useState } from "react";

const SidebarContext = createContext(
  {} as {
    expanded: boolean;
  }
);

export default function Sidebar({
  links,
}: {
  links: {
    text: string;
    href: string;
    icon: any;
    alert?: boolean;
  }[];
}) {
  const [expanded, setExpanded] = useState(true);

  const pathname = usePathname();

  return (
    <aside
      className={cn("h-screen fixed left-0", expanded ? "w-[200px]" : "w-16")}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          {/* <ul className="flex-1 px-3">{children}</ul> */}

          {links.map((link, index) => {
            return (
              <Link href={link.href} key={index}>
                <li
                  className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          link.href === pathname
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
                >
                  {link.icon}
                  <span
                    className={`overflow-hidden transition-all ${
                      expanded ? "w-52 ml-3" : "w-0"
                    }`}
                  >
                    {link.text}
                  </span>
                  {link.alert && (
                    <div
                      className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                        expanded ? "" : "top-2"
                      }`}
                    />
                  )}

                  {!expanded && (
                    <div
                      className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
                    >
                      {link.text}
                    </div>
                  )}
                </li>
              </Link>
            );
          })}
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon,
  text,
  active,
  alert,
  href,
}: {
  text: string;
  icon: any;
  active?: boolean;
  alert?: boolean;
  href?: string;
}) {
  const { expanded } = useContext(SidebarContext);

  return (
    // <Link href={}>
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
    // </Link>
  );
}
