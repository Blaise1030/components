import { TSiteTheme } from "./types";

type TCategoryProps = {
  id: string;
  title: string;
  image: string;
  additionalInfo: any;
};

interface ILandingPageCategorySectionProps {
  onClickCategory: (category: TCategoryProps) => void;
  onBrowseMoreClicked: () => void;
  categories: TCategoryProps[];
  siteTheme: TSiteTheme;
  isLoading?: boolean;
  isEmpty?: boolean;
}

export default function PotanicaCategory({
  onClickCategory,
  categories,
  isLoading,
  isEmpty,
  siteTheme,
}: ILandingPageCategorySectionProps) {
  return (
    <div className={`${isLoading ? "animate-pulse" : ""}`}>
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2
            className={`text-2xl font-bold tracking-tight text-gray-900 ${
              isLoading ? "bg-slate-300 text-slate-300 rounded-sm" : ""
            } ${siteTheme?.bodyHeadingFont}`}
          >
            Shop By Categories
          </h2>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-x-8 lg:space-x-0"
              role="list"
            >
              {(isLoading || isEmpty) &&
                [1, 2, 3, 4, 5]?.map((i) => {
                  return (
                    <div
                      key={i}
                      className={`relative flex flex-col overflow-hidden rounded-lg p-3 xl:w-auto w-[200px] border border-light-50 cursor-pointer ${
                        isLoading || isEmpty
                          ? "bg-slate-300 text-slate-300"
                          : "hover:opacity-75 shadow-md"
                      }`}
                    >
                      <div className="object-cover object-center aspect-[5/6] rounded-md mt-2" />
                      <span className="mt-auto text-center">Title</span>
                    </div>
                  );
                })}
              {!(isLoading || isEmpty) &&
                categories?.map((cat) => {
                  const { id, title, image } = cat;
                  return (
                    <div
                      className="relative flex flex-col overflow-hidden rounded-lg p-3 hover:opacity-75 xl:w-auto hover:shadow-sm w-[200px] border border-light-50 cursor-pointer bg-white"
                      onClick={() => onClickCategory(cat)}
                      key={id}
                    >
                      <div className="bg-white">
                        <span className="mt-auto text-center">{title}</span>
                        <img
                          className="object-cover object-center aspect-[5/6] rounded-md mt-2"
                          alt={title}
                          src={image}
                        />
                      </div>
                    </div>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
