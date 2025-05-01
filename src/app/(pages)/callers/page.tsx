import CallerCard from "@/components/CallerCard";
import { FieldsType } from "contentful";
import Link from "next/link";
import { client } from "@/utils/client";

const CallersPage = async () => {
  const entries = await client.getEntries({ content_type: "callers" });
  const datas: FieldsType = entries.items;
  console.log(datas);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {datas.map((data: FieldsType) => {
        const image = `http:${data.fields.articlePicture?.fields.file.url}`;
        return (
          <Link key={data.sys.id} href={data.sys.id}>
            {/*<CallerCard image={image} data={data} fill />*/}
          </Link>
        );
      })}
    </div>
  );
};
export default CallersPage;
