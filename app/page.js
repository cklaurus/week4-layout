import Card from "../components/Card";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="flex-1 bg-[#080D1A] px-6 py-16 text-[#F8FAFC]">
      <div className="mx-auto max-w-6xl">
        <section className="mb-16">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[#25C2FF]">
            WELCOME TO PIXEL PEAK
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-6xl">
            Your Adventure Starts Here
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-[#CBD5E1]">
            Explore our community and discover the projects that bring
            Pixel Peak to life.
          </p>

          <a
            href="#projects"
            className="mt-8 inline-flex rounded-lg bg-[#25C2FF] px-6 py-3 font-semibold text-[#080D1A] transition hover:bg-[#7DDDFF]"
          >
            Explore the Cluster
          </a>
        </section>

        <section id="projects" className="scroll-mt-8">
          <h2 className="mb-6 text-3xl font-bold">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}