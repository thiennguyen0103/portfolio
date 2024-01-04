import Image from "next/image";
import Link from "next/link";

export default function GithubLink() {
  return (
    <Link
      href="https://github.com/thiennguyen0103"
      target="_blank"
      className="fixed bottom-4 left-[15px] hidden lg:bottom-[50px] lg:left-[50px] lg:block"
    >
      <Image src={"/github.svg"} alt="Github" width={30} height={32} />
    </Link>
  );
}
