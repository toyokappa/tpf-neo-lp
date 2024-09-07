import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-3 border-b-4  border-sky-500">
      <div className="md:flex items-center md:text-right text-center container mx-auto">
        <Link href="/" className="block text-xl font-bold md:mb-0 mb-3">
          (logo) 株式会社 TPF NEO
        </Link>
        <a
          href="tel:0276-58-5123"
          className="ms-auto px-4 py-2 bg-sky-500 text-white font-bold rounded-lg shadow"
        >
          (tel): 0276-58-5123
        </a>
      </div>
    </header>
  );
}
