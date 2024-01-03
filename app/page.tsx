import ContactButton from "@/components/contact-button";
import Logo from "@/components/logo";
import Navigation from "@/components/navigation";
import ScrollDown from "@/components/scroll-down";
import Section from "@/components/section";
import { JOB_TITLE, NAVIGATION_LINK } from "@/utils/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const wordsArray = JOB_TITLE.split(" ").map((item) => item.split(""));
  return (
    <main className="relative h-full">
      <div className="fixed left-[15px] z-[1000] my-4 md:left-[3.125rem] md:my-[3.125rem]">
        <Logo />
      </div>
      <div className="fixed right-[15px] z-[1000] my-4 flex flex-col items-end justify-between md:right-[3.125rem] md:mt-[3.125rem] md:h-[calc(100vh-6.25rem)]">
        <ContactButton />
        <Navigation />
        <ScrollDown />
      </div>
      <div className={`h-full touch-none duration-[1200ms]`}>
        {/* TEMP: always show scroll bar */}
        <div className="relative overflow-hidden bg-background text-primary md:overflow-visible">
          {/* HOME */}
          <Section>
            <div className="relative z-10 mx-auto w-[1440px] max-w-full px-[15px]">
              <div className="relative flex flex-col-reverse text-left md:h-screen md:flex-row md:items-center md:justify-between">
                <Image
                  src={"/side-dots.png"}
                  width={255}
                  height={1678}
                  alt="slide-dot"
                  className="absolute -right-[10%] bottom-0 top-0 z-0 m-auto rotate-90"
                />
                <div className="m-0 md:w-1/2 md:max-w-[550px]">
                  <h1 className="m-0 flex cursor-default flex-wrap items-center text-[39px] font-bold leading-7 lg:text-6xl lg:leading-[50px]">
                    {wordsArray.map((a, aIndex) => (
                      <div key={aIndex} className="mb-[15px] mr-[15px]">
                        {a.map((b, bIndex) => (
                          <span
                            key={bIndex}
                            className="inline-block transition-all duration-300 ease-out hover:animate-rubber-band hover:text-hover"
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
                    className="group z-10 flex items-center font-semibold text-[#9c27b0]"
                  >
                    About me
                    <ChevronRight
                      className="ml-[5px] transition-transform duration-500 ease-out group-hover:rotate-90"
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
                  className="absolute -left-[350px] bottom-5 right-0 z-20 mx-auto hidden max-w-[200px] animate-slide-in-down opacity-70 md:block"
                />
                <div className="m-[64px] mb-8 block h-full w-full animate-fade-in md:mx-auto md:mt-8 md:w-1/2 md:pr-[100px]">
                  <Image
                    src={"/hero-graphic.svg"}
                    width={605}
                    height={726}
                    alt="hero"
                    className="block h-full w-full"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-[450px] -left-[650px] rotate-180 opacity-40 blur-[6px] md:-left-[550px] md:opacity-70">
              <div>
                <Image
                  src={"/code-line.svg"}
                  alt="code line"
                  width={903}
                  height={887}
                />
              </div>
            </div>
          </Section>
          {/* ABOUT */}
          <Section>
            <div className="relative mx-auto w-[1440px] max-w-full px-4 py-[50px] md:py-0">
              <div className="px-0 py-[100px] md:flex md:justify-between md:py-[200px] lg:py-0">
                <Image
                  src={"/dark_cube2.png"}
                  alt="dark cube"
                  width={200}
                  height={165}
                />
                <Image
                  src={"/purple_romb2.png"}
                  alt="dark cube"
                  width={150}
                  height={134}
                />
              </div>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
