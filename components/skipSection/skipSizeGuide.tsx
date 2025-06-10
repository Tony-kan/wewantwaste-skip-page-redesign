import { categoryData } from "~/constants";

const SkipSizeGuide = () => {
  return (
    <section className="w-full">
      <div className="max-w-8xl mx-4 py-2 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {categoryData.map((category) => (
            <div
              key={category.name}
              className="flex flex-col bg-[#303030] border-[#202222] light:bg-gray-50 border light:border-gray-200 rounded-lg shadow-sm overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg"
            >
              {/* --- Card Header Section --- */}
              <div className="flex justify-between items-baseline  light:bg-gray-100 p-4 border-b border-gray-700">
                <p className="font-mono text-sm text-blue-600">
                  {category.range}
                </p>
                <h3 className="text-md font-semibold text-gray-100">
                  {category.name}
                </h3>
              </div>

              {/* --- Card Body / Content Section --- */}
              <div className="flex-grow p-4 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <category.Icon
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                </div>

                {/* Metric */}
                <p className="mt-4 font-semibold text-sm text-gray-400">
                  {category.metric}
                </p>

                {/* Description */}
                <p className="mt-2 text-[12px] font-light text-gray-300">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkipSizeGuide;
