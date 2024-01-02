import { NAVIGATION_LINK } from "@/utils/constants";
import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href={NAVIGATION_LINK["contact"] ?? ""}
      className="block rounded-md border-2 border-primary px-8 py-1.5 text-lg font-semibold duration-300 ease-in-out hover:bg-primary hover:text-black"
    >
      Contact
    </Link>
  );
}
