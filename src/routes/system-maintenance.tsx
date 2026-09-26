import { createFileRoute } from "@tanstack/react-router";
import { MaintenancePage } from "@/components/MaintenancePage";

export const Route = createFileRoute("/system-maintenance")({
  component: MaintenancePage,
});