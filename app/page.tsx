import Approach from "@/components/approach";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import RecentProjects from "@/components/recent-projects";
import { Welcome } from "@/components/welcome";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Welcome />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
