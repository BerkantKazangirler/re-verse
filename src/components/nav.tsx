import classNames from "classnames";
import {
  Battery,
  Bell,
  ChevronDown,
  Circle,
  Clock,
  Radio,
  Shield,
} from "lucide-react";
import { useState } from "react";

export const Nav = () => {
  const [brodcast, setBroadcast] = useState<"VALI" | "AFAD" | "ALL">("VALI");
  const [broadcastStatus, setBroadcastStatus] = useState<boolean>(false);
  const [saverMode, setSaverMode] = useState<boolean>(true);
  const [selectedDepartment, setSelectedDepartment] = useState<
    "VALI" | "AFAD" | "MEDIC"
  >("VALI");
  const [departmentsDropdown, setDepartmentsDropdown] =
    useState<boolean>(false);

  return (
    <div className="flex lfex-row bg-[#080B12]/95 border-b border-white/5 p-4">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-2">
            <div className="bg-theme-primary rounded-full w-1 h-full"></div>
            <span className="text-[#F1F5F9] my-auto font-semibold text-sm">
              Interactive Map
            </span>
          </div>
          <div className="flex flex-row gap-3 font-cousine">
            <div className="flex flex-row h-fit my-auto gap-1.5 text-[#94A3B8] px-3 py-1.5 bg-white/5 rounded-1.5xl border border-white border-opacity-[0.08]">
              <Clock className="size-3 my-auto" />
              <span className="text-xs my-auto">00:48:03</span>
            </div>
            <div className="flex flex-row gap-1.5 h-fit my-auto text-[#FDA4AF] px-3 py-1.5 bg-theme-primary/10 rounded-1.5xl border border-theme-primary border-opacity-25">
              <div className="size-1.5 my-auto rounded-full bg-theme-primary animate-pulse"></div>
              <span className="text-xs my-auto font-bold">
                EQ 7.2 — İstanbul, 14:27 UTC
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div
            className={classNames(
              "flex flex-row items-center border h-8 my-auto bg-opacity-5 transition-all gap-3 px-3 py-1 rounded-[14px]",
              broadcastStatus
                ? "border-theme-primary/40 bg-theme-primary/15 text-[#FDA4AF]"
                : "text-text-primary bg-white border-white border-opacity-[0.08]",
            )}
          >
            <div className="flex flex-row gap-2">
              <Radio className="size-4 my-auto" />
              <span className="uppercase font-semibold text-[11px]">
                BROADCAST
              </span>
            </div>
            <div className="flex flex-row gap-1">
              <button
                onClick={() => setBroadcast("VALI")}
                className={classNames(
                  "rounded-md px-1.5 uppercase border transition-all duration-300 font-semibold text-2xs py-0.5",
                  brodcast === "VALI"
                    ? "border-theme-primary/40 bg-theme-primary/30 text-[#FDA4AF]"
                    : "text-text-primary border-transparent",
                )}
              >
                VALI
              </button>
              <button
                onClick={() => setBroadcast("AFAD")}
                className={classNames(
                  "rounded-md px-1.5 uppercase border transition-all duration-300 font-semibold text-2xs py-0.5",
                  brodcast === "AFAD"
                    ? "border-afad-primary/40 bg-afad-primary/30 text-[#A4D5FD]"
                    : "text-text-primary border-transparent",
                )}
              >
                AFAD
              </button>
              <button
                onClick={() => setBroadcast("ALL")}
                className={classNames(
                  "rounded-md px-1.5 uppercase transition-all duration-300 border font-semibold text-2xs py-0.5",
                  brodcast === "ALL"
                    ? "border-[#5F780E]/40 bg-[#5F780E]/30 text-[#9AA22E]"
                    : "text-text-primary border-transparent",
                )}
              >
                ALL
              </button>
            </div>
            <button
              onClick={() => setBroadcastStatus((t) => !t)}
              className={classNames(
                "text-2xs font-bold rounded-lg transition-all uppercase w-9 py-0.5",
                broadcastStatus
                  ? "bg-theme-primary text-white"
                  : "bg-white bg-opacity-5",
              )}
            >
              {broadcastStatus ? "ON" : "OFF"}
            </button>
          </div>
          <button
            onClick={() => setSaverMode((t) => !t)}
            className={classNames(
              "border items-center rounded-[14px] h-8 my-auto transition-all flex flex-row gap-1.5 px-3",
              saverMode
                ? "bg-[#4A4A4A]/10 border-[#4A4A4A]/30 text-[#4A4A4A]"
                : "bg-theme-primary/10 text-theme-primary border-theme-primary/30",
            )}
          >
            <Battery className="opacity-50 size-3" />
            <span
              className={classNames(
                "text-[11px] font-bold transition-all",
                saverMode ? "text-[#4A4A4A]" : "text-[#F87171]",
              )}
            >
              18%
            </span>
            <p
              className={classNames(
                "text-2xs font-bold transition-all",
                saverMode ? "text-[#4A4A4A]" : "text-[#F87171]",
              )}
            >
              SAVER MODE
            </p>
          </button>
          <div className="relative bg-white/5 rounded-[14px] items-center flex w-8 h-8 my-auto justify-center border border-white/10">
            <Bell className="size-[14px] text-[#94A3B8]" />
            <div className="absolute -right-1 size-[14px] flex justify-center -top-1 rounded-full bg-[#E11D48] font-bold text-2xs h-fit text-white">
              5
            </div>
          </div>
          <div className="relative">
            <div
              onClick={() => setDepartmentsDropdown((t) => !t)}
              className="bg-white/5 cursor-pointer transition-all w-40 py-1.5 border border-white/10 rounded-[14px] flex flex-row gap-2 px-2.5"
            >
              <div
                className={classNames("rounded-full items-center p-2", {
                  "bg-theme-primary/20 text-theme-primary":
                    selectedDepartment === "VALI",
                  "bg-afad-primary/15 text-afad-primary":
                    selectedDepartment === "AFAD",
                  "bg-medic-primary/15 text-medic-primary":
                    selectedDepartment === "MEDIC",
                })}
              >
                <Shield className="size-3" />
              </div>
              <div className="flex flex-col my-auto">
                <span className="text-[#E2E8F0] leading-3 font-bold text-2xs">
                  {selectedDepartment === "VALI"
                    ? "Vali Command"
                    : selectedDepartment === "AFAD"
                      ? "AFAD HQ"
                      : "Medical Lead"}
                </span>
                <span className="text-[#475569] text-nowrap leading-3 font-medium text-2xs">
                  {selectedDepartment === "VALI"
                    ? "Governor Office"
                    : selectedDepartment === "AFAD"
                      ? "Disaster Authority"
                      : "Emergency Medical"}
                </span>
              </div>
              <ChevronDown
                className={classNames(
                  "size-3 absolute right-2 transition-all duration-500 self-center my-auto text-[#475569]",
                  {
                    "rotate-180": departmentsDropdown,
                  },
                )}
              />
            </div>
            <div
              className={`bg-[#080B12] border transition-all items-center w-44 duration-500 ease-in-out rounded-[14px] flex flex-col absolute left-1/2 -translate-x-1/2 mt-1 drop-shadow-lg overflow-hidden ${departmentsDropdown ? "h-[8.5rem] border-white/10" : "h-0 border-transparent"}`}
            >
              <div
                onClick={() => setSelectedDepartment("VALI")}
                className={classNames(
                  "transition-all rounded-t-[14px] w-full p-2 flex flex-row gap-2.5",
                  {
                    "bg-white/5": selectedDepartment === "VALI",
                  },
                )}
              >
                <div className="rounded-full bg-theme-primary/20 items-center text-theme-primary p-2">
                  <Shield className="size-3" />
                </div>
                <div className="flex flex-col my-auto">
                  <span className="text-[#E2E8F0] leading-3 font-bold text-2xs">
                    Vali Command
                  </span>
                  <p className="text-[#475569] leading-3 font-medium text-2xs">
                    Governor Office
                  </p>
                </div>
                {selectedDepartment === "VALI" && (
                  <Circle className="fill-theme-primary size-1.5 self-center absolute right-2" />
                )}
              </div>
              <div
                onClick={() => setSelectedDepartment("AFAD")}
                className={classNames(
                  "p-2 transition-all w-full flex flex-row gap-2.5",
                  {
                    "bg-white/5 ": selectedDepartment === "AFAD",
                  },
                )}
              >
                <div className="rounded-full bg-afad-primary/15 items-center text-afad-primary p-2">
                  <Shield className="size-3" />
                </div>
                <div className="flex flex-col my-auto">
                  <span className="text-[#E2E8F0] leading-3 font-bold text-2xs">
                    AFAD HQ
                  </span>
                  <p className="text-[#475569] leading-3 font-medium text-2xs">
                    Disaster Authority
                  </p>
                </div>
                {selectedDepartment === "AFAD" && (
                  <Circle className="fill-afad-primary size-1.5 self-center absolute right-2" />
                )}
              </div>
              <div
                onClick={() => setSelectedDepartment("MEDIC")}
                className={classNames(
                  "p-2 transition-all w-full flex flex-row gap-2.5",
                  {
                    "bg-white/5": selectedDepartment === "MEDIC",
                  },
                )}
              >
                <div className="rounded-full bg-medic-primary/15 items-center text-medic-primary p-2">
                  <Shield className="size-3" />
                </div>
                <div className="flex flex-col my-auto">
                  <span className="text-[#E2E8F0] leading-3 font-bold text-2xs">
                    Medical Lead
                  </span>
                  <p className="text-[#475569] leading-3 font-medium text-2xs">
                    Emergency Medical
                  </p>
                </div>
                {selectedDepartment === "MEDIC" && (
                  <Circle className="fill-medic-primary size-1.5 self-center absolute right-2" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
