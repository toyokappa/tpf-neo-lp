import Image from "next/image";

export default function SellPage() {
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
            アパート・マンションを売りたい方へ
          </div>
          <div className="md:max-w-[640px] mx-auto">
            <div className="text-white font-bold bg-gray-400 px-4 py-2 rounded mb-3">
              こんなお悩みをお持ちの方はいらっしゃいませんか？
            </div>
            <ul className="font-bold list-disc ms-5 mb-5">
              <li className="mb-1">
                こんな古くて、傷んだアパート・マンション買ってくれないよね・・・
              </li>
              <li className="mb-1">雨漏り、手入れを怠ってきた物件・・</li>
              <li className="mb-1">あまり人が来ない・・・</li>
              <li className="mb-1">駐車場が足りてない・・・</li>
              <li>もちろん通常の物件も！</li>
            </ul>
            <div className="text-2xl text-red-500 font-bold mb-5">
              大歓迎です！！
            </div>
            <div className="mb-5">
              <p>
                当社は独自の方法で、他社には値がつけられないものにも価値を見出します！
              </p>
              <p>
                上記事項、1つでも当てはまる方はとりあえず弊社の話を聞いてください。
              </p>
              <p>絶対にあなたにプラスになるご提案ができます。</p>
            </div>
            <a
              href="tel:0276-58-5123"
              className="block text-white text-center font-bold bg-sky-500 px-4 py-4 rounded-lg shadow"
            >
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
              <div>までご連絡ください。</div>
            </a>
            <div className="text-gray-500 mt-2">
              ※ 全国（一部を除く）対応しております。
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
