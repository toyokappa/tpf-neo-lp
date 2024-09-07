import Image from "next/image";
import Link from "next/link";

interface News {
  id: number;
  title: string;
  description?: string;
  postAt: string;
  link?: string;
}

export default function Home() {
  const newsList = [
    {
      id: 1,
      title: "ホームページをOPENいたしました。",
      postAt: "2015-11-07",
    },
    {
      id: 2,
      title: "【社名変更・移転のお知らせ】",
      description:
        "有限会社アーム建設から社名変更、及び本社移転をおこない、株式会社ティー・ピー・エフとなりました。今後とも宜しくお願い申し上げます。",
      postAt: "2015-11-07",
    },
    {
      id: 3,
      title: "FM群馬 ラジオCMの放送が決定しました！",
      description: `毎週日曜日　14：00～『山下達郎サンデーソングブック』内 (CMは14：54～)`,
      postAt: "2019-06-04",
    },
    {
      id: 4,
      title: "FM群馬 ラジオ出演が決定しました！",
      description: `6/19水曜日 11時30分～11時55分
FM群馬 busi-neta!番組内で弊社代表髙野がアンカンミンカンさんと対談をさせていただくことになりました。`,
      postAt: "2019-06-08",
    },
    {
      id: 5,
      title: "ホームページをリニューアルしました。",
      postAt: "2024-09-14",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP");
  };

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
                日本管理センター株式会社
              </a>
              （東証一部上場　証券コード3276）加盟店としての
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
          </div>
        </section>
        <section className="px-5 py-10">
          <div className="text-2xl mb-8 text-center font-bold">会社概要</div>
          <table className="mx-auto md:text-base text-sm  md:max-w-[640px]">
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
              <tr>
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
    </main>
  );
}
