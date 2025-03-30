import { client } from "@/utils/client";
import { FieldsType } from "contentful";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

const ArticlesPage = async () => {
  const entries = await client.getEntries({ content_type: "blogPost" });
  const datas: FieldsType = entries.items;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {datas.map((data: FieldsType) => {
        const image = `http:${data.fields.articlePicture?.fields.file.url}`;
        return (
          <Link key={data.sys.id} href={data.sys.id}>
            <ArticleCard image={image} data={data} />
          </Link>
        );
      })}
    </div>
  );
};
export default ArticlesPage;
