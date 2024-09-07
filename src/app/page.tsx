import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="w-full py-3 border-b-4  border-sky-500">
        <div className="md:flex items-center md:text-right text-center container mx-auto">
          <div className="text-xl font-bold md:mb-0 mb-3">
            (logo) 株式会社 TPF NEO
          </div>
          <a
            href="tel:0276-58-5123"
            className="ms-auto px-4 py-2 bg-sky-500 text-white font-bold rounded-lg shadow"
          >
            (tel): 0276-58-5123
          </a>
        </div>
      </header>
      <section className="hero">
        <Image
          src="/hero.jpg"
          alt="hero"
          width={1920}
          height={1080}
          className="w-full md:aspect-auto aspect-video object-cover boject-center"
        />
      </section>
      <div className="container mx-auto">
        <section className="px-5 py-10">
          <div className="text-2xl mb-8 text-center">会社概要</div>
          <table className="mx-auto md:text-base text-sm">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-6 md:w-48 w-32 align-top">名称</td>
                <td className="py-6">株式会社 TPF NEO</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-6 align-top">住所</td>
                <td className="py-6">
                  <p>〒370-0411</p>
                  <p>群馬県太田市亀岡町429-2</p>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-6 align-top">連絡先</td>
                <td className="py-6">0276-58-5123</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-6 align-top">代表者</td>
                <td className="py-6">高野 紀幸</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-6 align-top">事業内容</td>
                <td className="py-6">
                  <p className="mb-3">
                    マンション・一戸建住宅・店舗のリフォーム工事全般の施工・監理
                  </p>
                  <p className="mb-3">
                    マンション・一戸建住宅・店舗のリフォーム工事全般に関わる設備機器の販売
                  </p>
                  <p className="mb-3">内外装の仕上げ</p>
                  <p className="mb-3">建築塗装工事の施工・監理</p>
                  <p className="mb-3">
                    マンション・一戸建住宅の点検・調査・報告
                  </p>
                  <p>不動産の投資及び運用に関するコンサルティング</p>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-6 align-top">宅地物件取引業</td>
                <td className="py-6">群馬県知事(1)第7673号</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-6 align-top">建設業許可</td>
                <td className="py-6">
                  <p>群馬県知事許可(般-2)</p>
                  <p>第24935号</p>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-6 align-top">古物商許可</td>
                <td className="py-6">
                  <p>群馬県公安委員会</p>
                  <p>第421112019006号</p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <footer className="w-full py-3 bg-sky-500 text-white">
        <div className="container mx-auto">
          <div className="text-xs font-bold text-center">
            &copy; 2024 TPF NEO Co.,Ltd.
          </div>
        </div>
      </footer>
    </>
  );
}
