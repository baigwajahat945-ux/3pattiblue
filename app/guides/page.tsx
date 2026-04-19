import { permanentRedirect } from "next/navigation";

// /guides → /blog (permanent 308 redirect)
export default function GuidesRedirect() {
  permanentRedirect("/blog");
}
