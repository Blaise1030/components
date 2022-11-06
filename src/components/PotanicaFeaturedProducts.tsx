import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TSiteTheme } from "../types";

type TFeaturedCollections = {
  collectionItems: TCollectionsItems[];
  collectionTitle: string;
  additionalInfo: any;
  id: string;
};

type TCollectionsItems = {
  discountPrice?: string;
  isOutOfStock: boolean;
  displayImage: string;
  displayPrice: string;
  productTitle: string;
  additionalInfo: any;
  id: string;
};

interface ILandingPageProductCollectionSectionProps {
  onProductClicked: (category: TCollectionsItems) => void;
  onSeeMoreClicked: (data: TFeaturedCollections) => void;
  collections: TFeaturedCollections[];
  isLoading?: boolean;
  siteTheme: TSiteTheme;
  isEmpty?: boolean;
}

export default function PotanicaFeaturedBanners(
  props: ILandingPageProductCollectionSectionProps
) {
  const {
    onProductClicked,
    onSeeMoreClicked,
    collections,
    siteTheme,
    isLoading,
    isEmpty,
  } = props;

  return (
    <div
      className={`flex flex-col space-y-12 ${isLoading ? "animate-pulse" : ""}`}
    >
      {(isLoading || isEmpty) && (
        <React.Fragment>
          <FeaturedProductLoadingState
            siteTheme={siteTheme}
            isEmpty={Boolean(isEmpty)}
            index={1}
          />
          <FeaturedProductLoadingState
            siteTheme={siteTheme}
            isEmpty={Boolean(isEmpty)}
            index={2}
          />
        </React.Fragment>
      )}
      {!(isLoading || isEmpty) &&
        collections?.map((collection, i) => {
          const { collectionItems, collectionTitle, id } = collection;
          return (
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8" key={i}>
              <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
                <h2
                  className={`text-2xl font-bold tracking-tight text-gray-900 ${siteTheme?.bodyHeadingFont}`}
                >
                  {collectionTitle}
                </h2>
                <button
                  className="hidden text-sm font-semibold hover:opacity-50 sm:block"
                  style={{ color: props?.siteTheme?.backgroundPrimaryColor }}
                  onClick={() => onSeeMoreClicked(collection)}
                >
                  See everything
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </div>

              <div className="relative mt-8">
                <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                  <ul
                    className="mx-4 inline-flex space-x-4 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8 lg:space-x-0"
                    role="list"
                  >
                    {collectionItems?.map(
                      (
                        {
                          additionalInfo,
                          discountPrice,
                          displayImage,
                          displayPrice,
                          isOutOfStock,
                          productTitle,
                        }: TCollectionsItems,
                        i: number
                      ) => (
                        <PotanicaProductCard
                          discountPrice={discountPrice || ""}
                          additionalInfo={additionalInfo}
                          onClick={onProductClicked}
                          isOutOfStock={isOutOfStock}
                          displayPrice={displayPrice}
                          displayImage={displayImage}
                          productTitle={productTitle}
                          key={i}
                          id={id}
                        />
                      )
                    )}
                  </ul>
                </div>
              </div>

              <div className="mt-12 flex px-4 sm:hidden">
                <button
                  style={{ color: props?.siteTheme?.backgroundPrimaryColor }}
                  onClick={() => onSeeMoreClicked(collection)}
                  className="text-sm font-semibold "
                >
                  See everything
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

function FeaturedProductLoadingState({
  siteTheme,
  isEmpty,
  index,
}: {
  siteTheme: TSiteTheme;
  isEmpty: boolean;
  index: number;
}) {
  return (
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
        <h2
          className={`text-2xl font-bold tracking-tight ${
            !isEmpty ? "bg-slate-300 text-slate-300" : ""
          }`}
        >
          Collection Title {index}
        </h2>
        <div
          className={`hidden text-sm font-semibold sm:block rounded-sm ${
            !isEmpty ? "bg-slate-300 text-slate-300" : ""
          }`}
          style={{
            color: !isEmpty ? "transparent" : siteTheme?.backgroundPrimaryColor,
          }}
        >
          See everything
          <span aria-hidden="true"> &rarr;</span>
        </div>
      </div>
      <div className="relative mt-8">
        <div className="relative -mb-6 w-full overflow-x-auto pb-6">
          <ul
            className="mx-4 inline-flex space-x-4 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8 lg:space-x-0"
            role="list"
          >
            {[1, 2, 3, 4]?.map((x: number) => (
              <li
                className="relative flex flex-col overflow-hidden rounded-lg p-2 md:p-3 xl:w-auto w-[220px] border border-light-50 cursor-pointer bg-slate-300 text-slate-300"
                key={x}
              >
                <div className="aspect-square w-full overflow-hidden rounded-md bg-slate-300">
                  <img
                    className="h-full w-full object-cover object-center aspect-square opacity-0"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="mt-1 font-semibold bg-slate-300 text-slate-300 w-fit rounded-sm">
                    <span className="absolute inset-0" />
                    RM 12
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex px-4 sm:hidden">
        <button
          style={{
            color: !isEmpty ? "transparent" : siteTheme?.backgroundPrimaryColor,
          }}
          className={`text-sm font-semibold rounded-sm ${
            !isEmpty ? "bg-slate-300 text-slate-300" : ""
          }`}
        >
          See everything
          <span aria-hidden="true"> &rarr;</span>
        </button>
      </div>
    </div>
  );
}

function PotanicaProductCard(
  item: TCollectionsItems & { onClick: (c: TCollectionsItems) => void }
) {
  const {
    additionalInfo,
    discountPrice,
    displayImage,
    productTitle,
    displayPrice,
    isOutOfStock,
    onClick,
  } = item;

  const { isInWishlist, onClickWishlist } = additionalInfo || {
    onClickWishlist: () => {},
    isInWishlist: false,
  };

  const onWishListButtonClicked = () => onClickWishlist(item);
  const onCardClicked = () => onClick(item);

  return (
    <li className="relative flex flex-col overflow-hidden rounded-lg p-2 md:p-3 xl:w-auto hover:shadow-sm w-[220px] border border-light-50 cursor-pointer bg-white hover:opacity-75">
      <div className={`group relative ${isOutOfStock ? "opacity-50" : ""}`}>
        <button
          className="bg-white rounded-md p-2 hover:opacity-80 duration-100 absolute top-1 right-1 z-10"
          onClick={onWishListButtonClicked}
        >
          {isInWishlist ? (
            <AiFillHeart fontSize={20} color="red" />
          ) : (
            <AiOutlineHeart fontSize={20} />
          )}
        </button>
        <div
          className="aspect-square w-full overflow-hidden rounded-md bg-gray-200"
          onClick={onCardClicked}
        >
          <img
            className="h-full w-full object-cover object-center"
            src={displayImage}
            alt={productTitle}
          />
        </div>
        <div className="mt-2" onClick={onCardClicked}>
          <h3 className="mt-1 font-semibold text-gray-900">
            <span className="absolute inset-0" />
            {productTitle}
          </h3>
          {discountPrice ? (
            <div className="flex flex-row items-center space-x-2 mt-1">
              <p className="text-gray-900">{discountPrice}</p>
              <s className="text-gray-500">{displayPrice}</s>
            </div>
          ) : (
            <p className="text-gray-900">{displayPrice}</p>
          )}
        </div>
      </div>
    </li>
  );
}
