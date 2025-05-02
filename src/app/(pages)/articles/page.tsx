import { client } from "@/utils/client";
import { FieldsType } from "contentful";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

import Footer from "@/components/Footer";
import MediumHero from "@/components/Herosections/MediumHero";

const ArticlesPage = async () => {
  /*
  =============================
  API Contentful call
  =============================
  */
  const entries = await client.getEntries({ content_type: "blogPost" });
  const datas: FieldsType = entries.items;

  return (
    <>
      <MediumHero
        content={{
          line1: "Get",
          bold1: " Transparent",
          line2: "Insights ",
          bold2: "Now",
        }}
        imageSrc="/SecondHero.png"
      />
      <div className="flex justify-center gap-5 my-20"></div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {datas.map((data: FieldsType) => {
          const image = `http:${data.fields.articlePicture?.fields.file.url}`;
          return (
            <div key={data.sys.id} className="min-h-screen flex flex-col">
              <main className="flex-grow mx-9">
                <Link href={data.sys.id}>
                  <ArticleCard image={image} data={data} />
                </Link>
              </main>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
export default ArticlesPage;
