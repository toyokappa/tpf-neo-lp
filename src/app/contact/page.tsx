import Image from "next/image";

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-gray-300">
        <Image
          src="/hero.jpg"
          alt="hero"
          width={1920}
          height={1080}
          className="w-full h-32 object-cover object-center"
        />
      </section>
      <div className="container mx-auto">
        <section className="px-5 py-10 border-b border-gray-300">
          <div className="md:text-2xl text-lg mb-8 text-center font-bold">
            お問い合わせ
          </div>
          <div className="md:max-w-[640px] mx-auto">
            <a
              href="tel:0276-58-5123"
              className="block text-white text-center font-bold bg-sky-500 px-4 py-4 rounded-lg shadow mb-5"
            >
              <div>お問い合わせ電話番号</div>
              <div className="flex items-center justify-center text-3xl">
                <Image
                  src="/icon-phone.svg"
                  alt="phone"
                  width={24}
                  height={24}
                  className="me-2 w-8"
                />
                <div>0276-58-5123</div>
              </div>
            </a>
            <div className="mb-5">
              <p className="text-lg font-bold">
                お電話対応可能時間: 8:00〜19:00
              </p>
              <p className="text-sm text-gray-500">
                ※ 不在時はこちらから折り返しをさせていただきます
              </p>
            </div>
            <div>
              <p className="md:block inline">
                休日は基本的に日曜ですが、お問い合わせは可能です。
              </p>
              <p className="md:block inline">
                お気軽にお悩みをお聞かせください。
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
