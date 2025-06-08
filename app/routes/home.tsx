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
    <div className="flex flex-col items-center justify-center">
      <Header />

      <div className="w-full text-center py-2 px-4 md:py-4">
        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Choose Your Skip Size
        </h1>
        <p className="mt-1 w-full  text-md leading-8 text-gray-600">
          Select the skip size that best suits your needs.Not Sure ? See our
          size guide .
        </p>
      </div>

      <SkipSizeGuide />
      <div className="w-full flex justify-center my-4 items-start">
        <h1 className="text-start text-xl font-bold">Compare Skip Options</h1>
      </div>
      <SkipOptions />
    </div>
  );
}
