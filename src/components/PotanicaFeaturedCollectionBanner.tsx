import { TSiteTheme } from "../types";

interface ILandingPageFeaturedCollectionSectionProps {
  onClickFeaturedCollection: (category: TCollectionProps) => void;
  categories: TCollectionProps[];
  siteTheme: TSiteTheme;
  isLoading?: boolean;
  isEmpty?: boolean;
}

type TCollectionProps = {
  id: string;
  title: string;
  image: string;
  description: string;
  additionalInfo: any;
};

export default function PotanicaFeaturedCollectionBanner(
  props: ILandingPageFeaturedCollectionSectionProps
) {
  const { categories, onClickFeaturedCollection, isLoading, isEmpty } = props;

  return (
    <div className={`py-0 ${isLoading ? "animate-pulse" : ""}`}>
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(isEmpty || isLoading) &&
              [1, 2]?.map(() => <PotanicaFeaturedCollectionBannerEmptyState />)}
            {!(isEmpty || isLoading) &&
              categories.map((cat: TCollectionProps) => {
                const { id, title, image, description, additionalInfo } = cat;
                return (
                  <PotanicaFeaturedCollectionCard
                    onClick={() => onClickFeaturedCollection(cat)}
                    additionalInfo={additionalInfo}
                    description={description}
                    title={title}
                    image={image}
                    key={id}
                    id={id}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

function PotanicaFeaturedCollectionBannerEmptyState() {
  return (
    <div className="rounded-md aspect-[2/1] relative cursor-pointer bg-slate-300" />
  );
}

function PotanicaFeaturedCollectionCard({
  onClick,
  title,
  image,
}: TCollectionProps & {
  onClick: () => void;
}) {
  return (
    <div
      className="rounded-md aspect-[2/1] shadow-lg relative cursor-pointer"
      onClick={onClick}
    >
      <div
        className="bg-gradient-to-b from-transparent to-black opacity-50 absolute inset-0 rounded-md"
        aria-hidden="true"
      />
      <div className="flex items-end p-6 absolute inset-0">
        <div>
          <h3 className="font-semibold text-white">
            <div>
              <span className="absolute inset-0" />
              {title}
            </div>
          </h3>
          <p
            className="mt-1 text-sm text-white"
            aria-hidden="true"
            onClick={onClick}
          >
            Shop now
          </p>
        </div>
      </div>
      <img className="w-full h-full object-cover rounded-md" src={image} />
    </div>
  );
}
