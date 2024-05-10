export async function getHealthCheck() {
  const res = await fetch("/api/healthcheck");
  if (!res.ok) throw new Error("Healtcheck failed!");
  return res.text();
}
