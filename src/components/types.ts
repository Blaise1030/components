import { ReactElement } from "react";

export interface ILandingPageProductCollectionSectionProps {
  onProductClicked: (category: TCollectionsItems) => void;
  onSeeMoreClicked: (data: TFeaturedCollections) => void;
  collections: TFeaturedCollections[];
  isLoading?: boolean;
  siteTheme: TSiteTheme;
  isEmpty?: boolean;
}

export type TFooterProps = {
  footerStructure: { name: string; links: { name: string; link: string }[] }[];
  companyInfo: TCompanyInfo;
  siteTheme: TSiteTheme;
  isLoading?: boolean;
  isEmpty?: boolean;
  companySocials: {
    icon: React.FC<any>;
    link?: string;
    name: string;
  }[];
};

export type TFeaturedCollections = {
  collectionItems: TCollectionsItems[];
  collectionTitle: string;
  additionalInfo: any;
  id: string;
};

export type TCollectionsItems = {
  discountPrice?: string;
  isOutOfStock: boolean;
  displayImage: string;
  displayPrice: string;
  productTitle: string;
  additionalInfo: any;
  id: string;
};

export interface ILandingPageFeaturedCollectionSectionProps {
  onClickFeaturedCollection: (category: TCollectionProps) => void;
  categories: TCollectionProps[];
  siteTheme: TSiteTheme;
  isLoading?: boolean;
  isEmpty?: boolean;
}

export type TCollectionProps = {
  id: string;
  title: string;
  image: string;
  description: string;
  additionalInfo: any;
};

export type TCategoryProps = {
  id: string;
  title: string;
  image: string;
  additionalInfo: any;
};

export interface ILandingPageCategorySectionProps {
  onClickCategory: (category: TCategoryProps) => void;
  onBrowseMoreClicked: () => void;
  categories: TCategoryProps[];
  siteTheme: TSiteTheme;
  isLoading?: boolean;
  isEmpty?: boolean;
}

export type TBannerProps = {
  additionalInformation: any;
  description: string;
  bannerImage: string;
  buttonTitle: string;
  title: string;
  id: string;
};

export interface ILandingPageBannerSectionProps {
  onClickBannerButton: (bannerInfo: TBannerProps) => void;
  banners: TBannerProps[];
  siteTheme: TSiteTheme;
  isLoading?: boolean;
  isEmpty?: boolean;
}

export type TSiteTheme = {
  backgroundPrimaryColor: string;
  backgroundSecondaryColor: string;
  fontPrimaryColor: string;
  fontSecondaryColor: string;
  navigationFont: string;
  navigationFontSize: number;
  bodyHeadingFont: string;
  bodyHeadingFontSize: number;
  bodyBodyFont: string;
  bodyBodyFontSize: number;
  footerFont: string;
  footerFontSize: number;
};

export type TCompanyInfo = {
  companyPhoneNumber: string;
  companyEmail: string;
  companyLogo: string;
  companyName: string;
};

export type TTopNavigationItems = {
  children?: TTopNavigationItems[];
  linkAction: any;
  title: string;
  id: string;
};
