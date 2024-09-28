import { getNewsList } from "@/lib/microcms";
import { formatDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { News } from "./types";

export default async function Home() {
  const data = await getNewsList(5);
  const newsList = data.contents;

  return (
    <main>
      <section className="border-b border-gray-300">
        <Image
          src="/hero.jpg"
          alt="hero"
          width={1920}
          height={1080}
          className="w-full md:aspect-auto aspect-video object-cover object-center"
        />
      </section>
      <div className="container mx-auto">
        <section className="px-5 py-10 border-b border-gray-300">
          <div className="text-2xl mb-8 text-center font-bold">ご挨拶</div>
          <div className="md:max-w-[640px] mx-auto">
            <p>弊社ホームページをご覧いただきありがとうございます。</p>
            <p>
              当社のモットーはお客様第一優先の提案をさせていただくことです。
            </p>
            <p>
              弊社は仕事の面では、困っておりません。そのため、皆さまがご納得いただいた場合のみ当社にお任せください。
            </p>
            <p className="mb-5">
              ご自身の利を優先したうえで弊社の提案にご納得いただくことができなかったときは、遠慮なくお断りください。
            </p>

            <p>
              弊社は、
              <a
                href="https://www.jpmc.jp/"
                target="_blank"
                rel="noopener"
                className="text-sky-500 underline"
              >
                株式会社JPMC
              </a>
              （東証プライム上場 証券コード:3276）加盟店としての
            </p>
            <p>
              一括借り上げを生かし、他社にはマネのできない収益のご提案をさせていただきます。
            </p>
            <Link
              href="/sell"
              className="block text-white text-center font-bold bg-sky-500 rounded-lg px-4 py-4 mt-5 shadow"
            >
              アパート・マンションを売りたい方へ
            </Link>
            <Link
              href="/alive"
              className="block text-white text-center font-bold bg-sky-500 rounded-lg px-4 py-4 mt-5 shadow"
            >
              アパート・マンションを活かしたい方へ
            </Link>
          </div>
        </section>
        <section className="px-5 py-10 border-b border-gray-300">
          <div className="text-2xl mb-8 text-center font-bold">新着情報</div>
          <div className="px-4 rounded-lg border border-gray-300 shadow-lg md:max-w-[640px] mx-auto">
            {newsList &&
              newsList.map((news: News) => (
                <div
                  className="w-full py-3 border-b border-gray-300 last:border-none"
                  key={news.id}
                >
                  <div className="text-sm text-gray-400 mb-1">
                    {formatDate(news.postAt)}
                  </div>
                  {news.link ? (
                    <>
                      <Link
                        href={news.link}
                        target="_blank"
                        rel="noopener"
                        className="font-bold"
                      >
                        {news.title}
                      </Link>
                      <pre className="text-sm text-gray-500 mt-1 whitespace-pre-wrap">
                        {news.description}
                      </pre>
                    </>
                  ) : (
                    <>
                      <div className="font-bold">{news.title}</div>
                      <pre className="text-sm text-gray-500 mt-1 whitespace-pre-wrap">
                        {news.description}
                      </pre>
                    </>
                  )}
                </div>
              ))}
            {data.totalCount > 5 && (
              <Link href="/news" className="block text-center font-bold py-4">
                もっと見る
              </Link>
            )}
          </div>
        </section>
        <section className="px-5 py-10">
          <div className="text-2xl mb-8 text-center font-bold">会社概要</div>
          <table className="mx-auto md:text-base text-sm  md:max-w-[640px] mb-3">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-4 md:w-48 w-32 align-top">名称</td>
                <td className="py-4">株式会社 TPF NEO</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 align-top">住所</td>
                <td className="py-4">
                  <p>〒370-0411</p>
                  <p>群馬県太田市亀岡町429-2</p>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 align-top">連絡先</td>
                <td className="py-4">0276-58-5123</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 align-top">代表者</td>
                <td className="py-4">高野 紀幸</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 align-top">事業内容</td>
                <td className="py-4">
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
                <td className="py-4 align-top">宅地物件取引業</td>
                <td className="py-4">群馬県知事(1)第7673号</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 align-top">建設業許可</td>
                <td className="py-4">
                  <p>群馬県知事許可(般-2)</p>
                  <p>第24935号</p>
                </td>
              </tr>
              <tr>
                <td className="py-6 align-top">古物商許可</td>
                <td className="py-6">
                  <p>群馬県公安委員会</p>
                  <p>第421112019006号</p>
                </td>
              </tr>
            </tbody>
          </table>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.214764615135!2d139.3136445758989!3d36.258564572406584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601edee5b92062fd%3A0x5f7223a461bd575c!2z77yI5qCq77yJ44OG44Kj44O844O744OU44O844O744Ko44OV!5e0!3m2!1sja!2sjp!4v1725709014557!5m2!1sja!2sjp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full max-w-[640px] mx-auto"
          ></iframe>
        </section>
      </div>
      <div className="md:flex md:justify-end sticky bottom-0">
        <Link
          href="contact"
          className="md:inline-block block text-sky-500 bg-white border border-sky-500 text-center font-bold px-4 py-4 md:rounded-lg shadow md:mb-3 md:me-3"
        >
          お問い合わせはこちら
        </Link>
      </div>
    </main>
  );
}
