import Header from "components/header";
import type { Route } from "./+types/home";
import SkipSizeGuide from "components/skipSection/skipSizeGuide";
import SkipOptions from "components/skipSection/skipOptions";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "WewantWaste Skip Page Redesign" },
    { name: "description", content: "This!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#191a1a]">
      <Header />

      <div className="w-full text-center py-2 px-4 md:py-4">
        <h1 className="text-2xl font-bold tracking-tight text-white light:text-gray-900 ">
          Skip Size Guide
        </h1>
        <p className="mt-1 w-full  text-sm leading-8 text-gray-400 light:text-gray-600">
          Not sure which skip size you need ? View our skip size guide
        </p>
      </div>

      <SkipSizeGuide />
      <div className="w-full flex justify-center my-4 items-start">
        <h1 className="text-start text-2xl text-white font-bold">
          Choose Your Skip Size
        </h1>
      </div>
      <SkipOptions />
    </div>
  );
}
