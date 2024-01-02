import { ChevronDown } from "lucide-react";

export default function ScrollDown() {
  return (
    <div className="group relative hidden min-h-[100px] max-w-5 cursor-pointer flex-col items-center border-0 bg-transparent p-0 md:flex">
      <span className="block min-w-[100px] -rotate-90 text-[13px] text-primary opacity-40">
        Scroll Down
      </span>
      <ChevronDown
        className="relative right-0 top-10 transition-transform duration-500 group-hover:translate-y-2.5"
        width={20}
        height={20}
      />
    </div>
  );
}
