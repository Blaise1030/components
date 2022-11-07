import { FiChevronLeft, FiChevronRight } from "react-icons/fi/index";
import { virtualize } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import { mod } from "react-swipeable-views-core";
import { useState } from "react";
import {
  ILandingPageBannerSectionProps,
  TBannerProps,
  TSiteTheme,
} from "./types";

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

export default function PotanicaBanner({
  onClickBannerButton,
  isLoading,
  siteTheme,
  isEmpty,
  banners,
}) {
  const [bannerIndex, setBannerIndex] = useState(0);
  const onLeftClicked = () => setBannerIndex((b) => b - 1);
  const onRightClicked = () => setBannerIndex((b) => b + 1);

  function slideRenderer(params) {
    const { index, key } = params;
    return banners?.map((banner) => {
      const {
        additionalInformation,
        bannerImage,
        buttonTitle,
        description,
        title,
        id,
      } = banner;
      return (
        <PotanicaBannerSlides
          onClick={() => onClickBannerButton(banner)}
          additionalInformation={additionalInformation}
          description={description}
          buttonTitle={buttonTitle}
          bannerImage={bannerImage}
          title={title}
          key={key}
          id={id}
        />
      );
    })[mod(index, banners?.length)];
  }

  return (
    <div className={`py-0 ${isLoading ? "animate-pulse" : ""}`}>
      <div className="relative">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-4">
          {(isLoading || isEmpty) && (
            <div className="relative sm:overflow-hidden sm:rounded-2xl aspect-square md:aspect-[2.8] w-full bg-slate-300 " />
          )}
          {!(isLoading || isEmpty) && (
            <div className="relative">
              <SlideLeftButton
                color={siteTheme?.backgroundPrimaryColor}
                onClick={onLeftClicked}
              />
              <SlideRightButton
                color={siteTheme?.backgroundPrimaryColor}
                onClick={onRightClicked}
              />
              <VirtualizeSwipeableViews
                onChangeIndex={setBannerIndex}
                slideRenderer={slideRenderer}
                index={bannerIndex}
              />
            </div>
          )}
        </div>
      </div>
      {banners?.length > 1 && (
        <CarouselButton
          selectedNumber={mod(bannerIndex, banners?.length)}
          elementNumber={banners?.map((_, i) => i)}
          color={siteTheme?.backgroundPrimaryColor}
          isLoading={Boolean(isLoading)}
          onSelect={setBannerIndex}
        />
      )}
    </div>
  );

  function CarouselButton({
    selectedNumber,
    elementNumber,
    isLoading,
    onSelect,
    color,
  }) {
    return (
      <div className="flex flex-row space-x-2 w-full items-center justify-center">
        {isLoading &&
          [1, 2, 3].map((i) => (
            <button
              className="min-h-[15px] min-w-[15px] rounded-full bg-slate-300"
              key={i}
            />
          ))}
        {!isLoading &&
          elementNumber?.map((n) => (
            <button
              className="min-h-[12px] min-w-[12px] rounded-full"
              onClick={() => onSelect(n)}
              key={n}
              style={{
                backgroundColor: selectedNumber === n ? color : "transparent",
                border: `1px ${
                  selectedNumber !== n ? color : "transparent"
                } solid`,
              }}
            />
          ))}
      </div>
    );
  }

  function SlideLeftButton({ onClick, color }) {
    return (
      <div className="absolute z-10 top-0 left-5 md:left-10 h-full md:flex flex-row items-center justify-center hidden">
        <button
          className="bg-white rounded-full p-2 hover:opacity-80 duration-100"
          onClick={onClick}
        >
          <FiChevronLeft fontSize={20} style={{ color }} />
        </button>
      </div>
    );
  }

  function SlideRightButton({ onClick, color }) {
    return (
      <div className="absolute z-10 top-0 right-5 md:right-10 h-full md:flex flex-row items-center justify-center hidden">
        <button
          className="bg-white rounded-full p-2 hover:opacity-80 duration-100"
          onClick={onClick}
        >
          <FiChevronRight fontSize={20} style={{ color }} />
        </button>
      </div>
    );
  }

  function PotanicaBannerSlides(props) {
    const { bannerImage, title, onClick } = props;
    return (
      <div
        className="relative sm:overflow-hidden sm:rounded-lg aspect-[4/3] md:aspect-[5/2]"
        onClick={onClick}
      >
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={bannerImage}
            alt={title}
          />
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8" />
      </div>
    );
  }
}
