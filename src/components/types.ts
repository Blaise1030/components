import { ReactElement } from "react";

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
