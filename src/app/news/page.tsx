import { getNewsList } from "@/lib/microcms";
import { formatDate } from "@/utils";
import Image from "next/image";
import { News } from "../types";
import Link from "next/link";

export default async function SellPage() {
  const { contents: newsList } = await getNewsList();

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
            最新情報
          </div>
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
      </div>
    </main>
  );
}
