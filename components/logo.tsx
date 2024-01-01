import { NAVIGATION_LINK } from "@/utils/constants";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={NAVIGATION_LINK["home"] ?? ""}>
      <div className="relative">
        <h1 className="text-primary m-0 text-[32px] font-bold leading-[1] tracking-[5px]">
          KIRA
        </h1>
      </div>
    </Link>
  );
}
