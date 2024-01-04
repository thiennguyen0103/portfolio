import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id: string;
};

export default function Section(props: SectionProps) {
  const { children, id } = props;
  return (
    <div
      id={id}
      className="relative table h-full w-full table-fixed md:h-screen"
    >
      <div className="table-cell h-full w-full align-middle md:h-screen lg:h-auto lg:py-[50px]">
        {children}
      </div>
    </div>
  );
}
