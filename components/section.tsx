import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export default function Section(props: SectionProps) {
  const { children } = props;
  return (
    <div className="relative table h-full w-full table-fixed md:h-screen lg:h-auto">
      <div className="table-cell h-full w-full align-middle md:h-screen lg:h-auto lg:py-[50px]">
        {children}
      </div>
    </div>
  );
}
