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

      <div className="w-full max-w-xl text-center py-2 px-4 md:py-4">
        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Choose Your Skip Size
        </h1>
        <p className="mt-1 text-md leading-8 text-gray-600">
          Select the skip size that best suits your needs.
        </p>
        {/* <p className="mt-1 text-sm font-medium text-gray-500">
          For postcode: <span className="font-bold text-gray-700">NR32</span>
        </p>{" "} */}
      </div>

      <SkipSizeGuide />
      <SkipOptions />
    </div>
  );
}
