import ContactButton from "@/components/contact-button";
import Logo from "@/components/logo";
import Navigation from "@/components/navigation";
import ScrollDown from "@/components/scroll-down";
import { JOB_TITLE, NAVIGATION_LINK } from "@/utils/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const wordsArray = JOB_TITLE.split(" ").map((item) => item.split(""));
  return (
    <main>
      <div className="fixed left-[15px] z-[1000] my-4 md:left-[3.125rem] md:my-[3.125rem]">
        <Logo />
      </div>
      <div className="fixed right-[15px] z-[1000] my-4 flex flex-col items-end justify-between md:right-[3.125rem] md:mt-[3.125rem] md:h-[calc(100vh-6.25rem)]">
        <ContactButton />
        <Navigation />
        <ScrollDown />
      </div>
      <div className={`relative h-full duration-[1200ms] `}>
        <div className="bg-background text-primary overflow-visible md:overflow-hidden">
          <div className="table h-full w-full table-fixed md:h-screen">
            <div className="table-cell h-full w-full align-middle md:h-screen">
              <div className="relative mx-auto w-[1440px] max-w-full px-4 py-[50px] md:py-0">
                <div className="relative flex flex-col-reverse items-center justify-between text-left md:h-screen md:flex-row ">
                  <Image
                    src={"/side-dots.png"}
                    width={255}
                    height={1678}
                    alt="slide-dot"
                    className="absolute -right-[10%] bottom-0 top-0 m-auto rotate-90"
                  />
                  <div className="m-0 md:w-1/2 md:max-w-[550px]">
                    <h1 className="m-0 flex cursor-default flex-wrap items-center text-[39px] font-bold leading-7 lg:text-6xl lg:leading-[50px]">
                      {wordsArray.map((a, aIndex) => (
                        <div key={aIndex} className="mb-[15px] mr-[15px]">
                          {a.map((b, bIndex) => (
                            <span
                              key={bIndex}
                              className="hover:text-hover hover:animate-rubber-band inline-block transition-all duration-300 ease-out"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      ))}
                    </h1>
                    <p className="block py-6 md:py-8">
                      Solving design puzzles, crafting smart interfaces, and
                      engineering seamless web experiences through rich
                      application development.
                    </p>
                    <Link
                      href={NAVIGATION_LINK["about"]}
                      className="group flex items-center font-semibold text-[#9c27b0]"
                    >
                      About me
                      <ChevronRight
                        className="ml-[5px] transition-transform duration-300 ease-out group-hover:rotate-90"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                  <Image
                    src={"/purple_romb1.png"}
                    width={255}
                    height={1678}
                    alt="slide-dot"
                    className="animate-slide-in-down absolute -left-[350px] bottom-5 right-0 mx-auto hidden max-w-[200px] opacity-70 md:block"
                  />
                  <div className="animate-fade-in m-[64px] mx-auto mb-8 md:mt-8 md:w-1/2 md:pr-[100px]">
                    <Image
                      src={"/hero-graphic.svg"}
                      width={605}
                      height={726}
                      alt="hero"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
