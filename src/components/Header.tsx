import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-3 border-b-4  border-sky-500">
      <div className="md:flex items-center container mx-auto">
        <Link
          href="/"
          className="flex items-center md:justify-normal justify-center text-xl"
        >
          <Image
            src="/tpf-neo-logo.png"
            alt="logo"
            width={200}
            height={50}
            className="w-16 me-2"
          />
          <span>株式会社 TPF NEO</span>
        </Link>
      </div>
    </header>
  );
}
