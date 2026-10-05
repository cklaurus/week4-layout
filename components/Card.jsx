export default function Card({ project }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-xl border border-[#273554] bg-[#111A2E] p-6 shadow-lg transition duration-200 hover:-translate-y-1 hover:border-[#25C2FF] hover:shadow-xl">
      <h3 className="text-2xl font-bold leading-8 text-[#F8FAFC]">
        {project.title}
      </h3>

      <p className="text-base font-medium text-[#25C2FF]">
        Category: {project.category}
      </p>

      <p className="text-base text-[#CBD5E1]">
        Client: {project.client}
      </p>

      <p className="text-sm text-[#CBD5E1]">
        Difficulty: {project.difficulty}
      </p>
    </article>
  );
}