import { useDataContext } from "@/contexts";
import { SystemStatus } from "@/types";
import classNames from "classnames";
import {
  AlertTriangle,
  Circle,
  Globe,
  LayoutTemplateIcon,
  Smartphone,
  Sparkle,
} from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  const { activeTab, setActiveTab, dashboardTabs, systemStatus } =
    useDataContext();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onMouseLeave={() => setExpanded(false)}
      onMouseEnter={() => setExpanded(true)}
      className={classNames(
        "bg-[#080B12]/90 border-r transition-all duration-500 ease-in-out h-full border-white/5 p-4 flex flex-col justify-between",

        expanded ? "w-56" : "w-[82px]",
      )}
    >
      <div className="flex flex-col gap-7">
        <div className="flex gap-3 overflow-hidden">
          <div className="bg-gradient-to-br w-fit p-2.5 from-theme-primary to-[#9F1239] text-white rounded-[14px]">
            <AlertTriangle className="size-4" />
          </div>
          <div
            className={classNames(
              "flex flex-col overflow-hidden transition-all duration-300",
              expanded ? "h-9" : "h-0",
            )}
          >
            <span className="text-base text-[#F1F5F9] font-bold">RE-VERSE</span>
            <span className="text-[#64748B] text-2xs leading-3">
              DISASTER MGMT
            </span>
          </div>
        </div>
        <div className="flex flex-col font-medium overflow-hidden gap-1">
          {dashboardTabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(tab.id)}
                className={`p-2 border transition-all duration-300 rounded-[14px] flex flex-row gap-1.5 ${
                  activeTab === tab.id
                    ? "bg-theme-primary/15 border-theme-primary/30 text-theme-primary"
                    : "bg-transparent border-transparent text-[#94A3B8]"
                }`}
              >
                <div
                  className={classNames(
                    "min-w-0.5 -ml-2 h-full rounded-full bg-theme-primary",
                    activeTab === tab.id ? "block" : "hidden",
                  )}
                ></div>
                <div
                  className={classNames(
                    "p-2 rounded-1.5xl",
                    activeTab === tab.id ? "bg-theme-primary/20" : "bg-white/5",
                  )}
                >
                  <Icon className="size-4" />
                </div>
                <span
                  className={classNames(
                    "text-sm text-start text-nowrap overflow-hidden transition-all duration-500 ease-in-out my-auto",
                    {
                      "text-white font-medium": activeTab === tab.id,
                      "font-normal": activeTab !== tab.id,
                      "w-28 opacity-100": expanded,
                      "w-0 opacity-0": !expanded,
                    },
                  )}
                >
                  {tab.text}
                </span>
              </button>
            );
          })}
        </div>
        <hr className="border-white/5" />
        <div className="flex flex-col overflow-hidden gap-1">
          <button className="p-2 text-[#A855F7] transition-all duration-300 rounded-[14px] flex flex-row gap-1.5">
            <div className="p-2 rounded-1.5xl bg-[#A855F7]/10">
              <Sparkle className="size-4" />
            </div>
            <span
              className={classNames(
                "text-sm text-start font-medium text-nowrap overflow-hidden transition-all duration-500 ease-in-out my-auto",
                {
                  "w-32 opacity-100": expanded,
                  "w-0 opacity-0": !expanded,
                },
              )}
            >
              Luxury Experience
            </span>
          </button>
          <button className="p-2 text-[#3B82F6] transition-all duration-300 rounded-[14px] flex flex-row gap-1.5">
            <div className="p-2 rounded-1.5xl bg-[#3B82F6]/10">
              <Globe className="size-4" />
            </div>
            <span
              className={classNames(
                "text-sm text-start font-medium text-nowrap overflow-hidden transition-all duration-500 ease-in-out my-auto",
                {
                  "w-32 opacity-100": expanded,
                  "w-0 opacity-0": !expanded,
                },
              )}
            >
              Marketing Landing
            </span>
          </button>
          <button className="p-2 text-[#EC4899] transition-all duration-300 rounded-[14px] flex flex-row gap-1.5">
            <div className="p-2 rounded-1.5xl bg-[#EC4899]/10">
              <LayoutTemplateIcon className="size-4" />
            </div>
            <span
              className={classNames(
                "text-sm text-start font-medium text-nowrap overflow-hidden transition-all duration-500 ease-in-out my-auto",
                {
                  "w-32 opacity-100": expanded,
                  "w-0 opacity-0": !expanded,
                },
              )}
            >
              Marketing Poster
            </span>
          </button>
          <button className="p-2 text-[#3B82F6] transition-all duration-300 rounded-[14px] flex flex-row gap-1.5">
            <div className="p-2 rounded-1.5xl bg-[#3B82F6]/10">
              <Smartphone className="size-4" />
            </div>
            <span
              className={classNames(
                "text-sm text-start font-medium text-nowrap overflow-hidden transition-all duration-500 ease-in-out my-auto",
                {
                  "w-32 opacity-100": expanded,
                  "w-0 opacity-0": !expanded,
                },
              )}
            >
              Mobile Version
            </span>
          </button>
        </div>
      </div>
      <div className="bg-white/5 rounded-xl h-14 p-2 flex flex-row gap-2">
        <div
          className={classNames(
            "rounded-full my-auto bg-opacity-15 h-fit border border-opacity-30 p-3",
            {
              "border-[#22C55E] bg-[#22C55E]":
                systemStatus == SystemStatus.ONLINE,
              "border-[#C59122] bg-[#C59122]":
                systemStatus == SystemStatus.PARTIAL,
              "border-[#EF4444] bg-[#EF4444]":
                systemStatus == SystemStatus.OFFLINE,
            },
          )}
        >
          <Circle
            className={classNames("size-2 mx-auto my-auto", {
              "fill-[#22C55E]": systemStatus == SystemStatus.ONLINE,
              "fill-[#C59122]": systemStatus == SystemStatus.PARTIAL,
              "fill-[#EF4444]": systemStatus == SystemStatus.OFFLINE,
            })}
          />
        </div>
        <div
          className={classNames(
            "flex transition-all duration-300 ease-in-out overflow-hidden flex-col my-auto font-inter",
            {
              "w-32 opacity-100": expanded,
              "w-0 opacity-0": !expanded,
            },
          )}
        >
          <span
            className={classNames(
              "text-xs uppercase text-nowrap leading-3 font-medium",
              {
                "text-[#22C55E]": systemStatus == SystemStatus.ONLINE,
                "text-[#C59122]": systemStatus == SystemStatus.PARTIAL,
                "text-[#EF4444]": systemStatus == SystemStatus.OFFLINE,
              },
            )}
          >
            {systemStatus == SystemStatus.ONLINE
              ? "System Online"
              : systemStatus == SystemStatus.PARTIAL
                ? "System Partical"
                : "System Offline"}
          </span>
          <p className="text-[#475569] leading-3 text-nowrap text-2xs">
            {systemStatus == SystemStatus.ONLINE
              ? "All sensors active"
              : systemStatus == SystemStatus.PARTIAL
                ? "Some sensors active"
                : "System is not active"}
          </p>
        </div>
      </div>
    </div>
  );
};
