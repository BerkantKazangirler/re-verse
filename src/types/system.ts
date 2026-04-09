export const SystemStatus = {
  ONLINE: "ONLINE",
  PARTIAL: "PARTIAL",
  OFFLINE: "OFFLINE",
} as const;

export type SystemStatus = (typeof SystemStatus)[keyof typeof SystemStatus];
