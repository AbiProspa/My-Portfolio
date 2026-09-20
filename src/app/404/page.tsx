import type { Metadata } from "next";
import NotFound from "@/components/NotFound";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: `Page not found | ${site.name}` };

export default function Page() {
  return <NotFound />;
}
