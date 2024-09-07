import Image from "next/image";

export default function alivePage() {
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
            アパート・マンションを活かしたい方へ
          </div>
          <div className="md:max-w-[640px] mx-auto">
            <div className="text-white font-bold bg-gray-400 px-4 py-2 rounded mb-3">
              弊社の特徴
            </div>
            <div className="mb-5">
              <p>
                弊社は
                <a
                  href="http://www.jpmc.jp/"
                  target="_blank"
                  rel="noopener"
                  className="text-sky-500 underline"
                >
                  日本管理センター株式会社
                </a>
                「一括借上げを前提にマンション経営を実現する経営代行会社（東証一部上場）」に加盟しており、加盟店は全国
                <span className="text-red-500 font-bold text-lg">
                  約<span className="text-2xl">1400</span>社
                </span>
                （令和元年現在）あります。
              </p>
              <p>
                代表含む全スタッフが現場の施工を行うため、8割型自社施工にて低コスト化を実現し、
              </p>
              <p>
                <span className="text-red-500 font-bold text-lg">
                  加盟店<span className="text-2xl">NO.1</span>
                </span>
                のリーズナブルな価格にてご提案します。
              </p>
              <p>ただ安いだけではなく価値もあります。</p>
            </div>
            <div className="mb-5">
              <p>随時特別割引にて工事も請け負っております。</p>
              <p>とりあえず弊社の話を聞いてください。</p>
              <p className="font-bold text-blue-500">
                絶対にあなたにプラスになるご提案ができます。
              </p>
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
