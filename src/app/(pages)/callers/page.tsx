import { FieldsType } from "contentful";

import { client } from "@/utils/client";
import MediumHero from "@/components/Herosections/MediumHero";
import Footer from "@/components/Footer";

import MainCaller from "@/components/MainCaller";

const CallersPage = async () => {
  const entries = await client.getEntries({
    content_type: "callers",
  });
  const datas: FieldsType = entries.items;
  console.log(datas);
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
      <main className="mx-9">
        <MainCaller datas={datas} />
      </main>
      <Footer />
    </>
  );
};
export default CallersPage;
