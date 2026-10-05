import Link from "next/link";
export default function Header() {
  return (
    <header className="border-b border-[#273554] bg-[#111A2E]">
      <div className="mx-auto flex min-h-[88px] max-w-[1440px] flex-wrap items-center justify-between gap-4 px-6 py-4">
        <link
          href="/"
          className="text-2xl font-bold tracking-wider text-[#25C2FF]"
        >
          PIXEL PEAK
        </link>

        <p className="text-sm text-[#CBD5E1]">
          Adventure. Community. Connection.
        </p>
      </div>
    </header>
  );
}