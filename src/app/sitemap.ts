import { baseURL, routes } from "@/app/resources";

export default function sitemap() {
  return Object.keys(routes).map((route) => ({
    url: `https://${baseURL}${route === "/" ? "" : route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
}
