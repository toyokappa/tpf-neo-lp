import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="w-full py-3 bg-sky-500 text-white shadow">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-xl font-bold">株式会社 TPF NEO</div>
        </div>
      </header>
      <section className="hero">
        <Image
          src="/hero.jpg"
          alt="hero"
          width={1920}
          height={1080}
          className="w-full"
        />
      </section>
      <div className="container"></div>
      <footer className="w-full py-3 bg-sky-500 text-white">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-xs font-bold text-center">
            &copy; 2024 TPF NEO Co.,Ltd.
          </div>
        </div>
      </footer>
    </>
  );
}
