import { getHealthCheck } from "@/services/healtcheck";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/healtcheck")({
  component: HealthCheck,
  loader: getHealthCheck,
});

function HealthCheck() {
  const text = Route.useLoaderData();
  return <div className="p-2">{text}</div>;
}
