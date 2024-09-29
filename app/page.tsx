import { db } from "./lib/prisma";
import ProjectList from "./components/projects/project-list";
import AboutList from "./components/about/about-list";
import Footer from "./components/footer";
import ContactList from "./components/contact/contact-list";
import IntroduceList from "./components/introduce/introduce-list";
import Header from "./components/header/header";
import StackList from "./components/stack/stack-list";
import TimelineList from "./components/timeline/timeline-list";

const fetch = async () => {
  const getPortfolioData = await db.portfolio.findMany({
    include: {
      timeline: true,
      projects: true,
      skills: true,
    },
  });

  const [portfolio] = await Promise.all([getPortfolioData[0]]);

  return { portfolio };
};

export default async function Home() {
  const { portfolio } = await fetch();

  return (
    <main className="flex w-full flex-col items-center pt-40">
      <Header />

      <div className="max-w-3xl space-y-20 px-5 lg:px-0">
        <IntroduceList portfolio={portfolio} />
        <AboutList portfolio={portfolio} />
        <div className="hidden">
          <TimelineList timeline={portfolio.timeline} />
        </div>
        <ProjectList projects={portfolio.projects} />
        <StackList skills={portfolio.skills} />
        <ContactList portfolio={portfolio} />
      </div>

      <Footer />
    </main>
  );
}
