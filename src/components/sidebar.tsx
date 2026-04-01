import classNames from "classnames";
import {
  AlertTriangle,
  Building2,
  Globe,
  LayoutTemplateIcon,
  List,
  Map,
  Package,
  Radio,
  Smartphone,
  Sparkle,
} from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("interactive-map");
  const [expanded, setExpanded] = useState(false);
  const tabs = [
    {
      id: "interactive-map",
      text: "Interactive Map",
      icon: Map,
    },
    {
      id: "triage-list",
      text: "Triage List",
      icon: List,
    },
    {
      id: "building-map",
      text: "Building Map",
      icon: Building2,
    },
    {
      id: "logistic-map",
      text: "Logistic Map",
      icon: Package,
    },
    {
      id: "emergency-signals",
      text: "E. Signals",
      icon: Radio,
    },
  ];

  return (
    <div
      onMouseLeave={() => setExpanded(false)}
      onMouseEnter={() => setExpanded(true)}
      className={classNames(
        "bg-[#080B12]/90 border-r transition-all duration-500 ease-in-out h-full border-white/5 p-4 flex flex-col gap-7",

        expanded ? "w-56" : "w-[82px]",
      )}
    >
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
        {tabs.map((tab, index) => {
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
                    "w-0 opacity-0 hidden": !expanded,
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
                "w-0 opacity-0 hidden": !expanded,
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
                "w-0 opacity-0 hidden": !expanded,
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
                "w-0 opacity-0 hidden": !expanded,
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
                "w-0 opacity-0 hidden": !expanded,
              },
            )}
          >
            Mobile Version
          </span>
        </button>
      </div>
    </div>
  );
};
