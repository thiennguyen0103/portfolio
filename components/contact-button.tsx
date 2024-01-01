import { NAVIGATION_LINK } from "@/utils/constants";
import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href={NAVIGATION_LINK["contact"] ?? ""}
      className="border-primary hover:bg-primary block rounded-md border-2 px-8 py-2 text-lg font-semibold duration-300 ease-in-out hover:text-black"
    >
      Contact
    </Link>
  );
}
