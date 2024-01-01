import { NAVIGATION_LIST } from "@/utils/constants";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="hidden md:block">
      <ul className="before:bg-primary relative m-0 block list-none p-0 before:absolute before:right-0 before:top-0 before:h-full before:w-[1px] before:rounded-[50px] before:opacity-40 [&>li:nth-child(1):hover~.line]:top-0 [&>li:nth-child(2):hover~.line]:top-[50px] [&>li:nth-child(3):hover~.line]:top-[100px] [&>li:nth-child(4):hover~.line]:top-[150px] [&>li:nth-child(5):hover~.line]:top-[200px]">
        {NAVIGATION_LIST.map((navigation, index) => (
          <li key={index} className="transition-all duration-500 ease-in-out">
            <Link
              href={navigation.slug}
              title={navigation.title}
              className="text-primary flex h-[50px] w-[50px] items-center justify-center rounded-[50px] text-[13px] transition-all duration-500 ease-in-out"
            >
              {`0${index}`}
            </Link>
          </li>
        ))}
        <div className="line bg-primary absolute right-0 top-0 h-[50px] w-[3px] rounded-[50px] transition-all duration-500 ease-in-out" />
      </ul>
    </div>
  );
}
