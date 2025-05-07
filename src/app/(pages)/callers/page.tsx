import CallerCard from "@/components/CallerCard";
import { FieldsType } from "contentful";

import { client } from "@/utils/client";
import MediumHero from "@/components/Herosections/MediumHero";
import Footer from "@/components/Footer";

const CallersPage = async () => {
  const entries = await client.getEntries({
    content_type: "callers",
    include: 2,
  });
  const datas: FieldsType = entries.items;

  return (
    <>
      <MediumHero
        content={{
          line1: "Reliable",
          bold1: " Callers.",
          line2: "Transparent ",
          bold2: "Results.",
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2">
        {datas.map((data: FieldsType) => {
          return (
            <div key={data.sys.id}>
              <CallerCard
                nameOfCaller={data.fields.nameOfCaller}
                socials={data.fields.socials}
                successRate={data.fields.successRate}
                medianReturn={data.fields.medianReturn}
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
export default CallersPage;
