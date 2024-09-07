import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-5 bg-sky-500 text-white">
      <div className="container mx-auto">
        <ul className="md:flex md:justify-center text-sm text-center font-bold mb-5">
          <li className="mb-1 mx-2">
            <Link href="/" className="underline">
              ホーム
            </Link>
          </li>
          <li className="mb-1 mx-2">
            <Link href="/sell" className="underline">
              アパート・マンションを売りたい方へ
            </Link>
          </li>
          <li className="mb-1 mx-2">
            <Link href="/alive" className="underline">
              アパート・マンションを活かしたい方へ
            </Link>
          </li>
          <li className="mb-1 mx-2">
            <Link href="/contact" className="underline">
              お問い合わせ
            </Link>
          </li>
        </ul>
        <div className="text-xs font-bold text-center">
          &copy; 2024 TPF NEO Co.,Ltd.
        </div>
      </div>
    </footer>
  );
}
