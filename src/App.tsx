import PotanicaBanner from "./components/PotanicaBanner";
import React, { useEffect, useState } from "react";
import PotanicaCategory from "./components/PotanicaCategory";
import PotanicaFeaturedProducts from "./components/PotanicaFeaturedProducts";
import PotanicaFeaturedCollectionBanner from "./components/PotanicaFeaturedCollectionBanner";
import PotanicaHeader from "./components/PotanicaHeader";
import PotanicaFooter from "./components/PotanicaFooter";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import { TTopNavigationItems } from "./types";

const companySocials = [
  {
    icon: (props: any) => <FaInstagram fontSize={20} />,
    name: "Instagram",
    link: "https://www.google.com",
  },
  {
    name: "Youtube",
    link: "https://www.google.com",
    icon: (props: any) => <FaYoutube fontSize={20} />,
  },
  {
    name: "Twitter",
    link: "https://www.google.com",
    icon: (props: any) => <FaTwitter fontSize={20} />,
  },
  {
    name: "Facebook",
    link: "https://www.google.com",
    icon: (props: any) => <FaFacebook fontSize={20} />,
  },
];

const navigationItems: TTopNavigationItems[] = [
  {
    linkAction: {},
    title: "About Us",
    children: [
      {
        linkAction: {},
        title: "Some thing here",
        children: [],
        id: "1",
      },
      {
        linkAction: {},
        title: "Another thing here asdjlasdjkladj asdad",
        children: [],
        id: "2",
      },
      {
        linkAction: {},
        title: "New link",
        children: [],
        id: "3",
      },
      {
        linkAction: {},
        title: "What is this ?",
        children: [],
        id: "4",
      },
      {
        linkAction: {},
        title: "Go to ",
        children: [],
        id: "5",
      },
      {
        linkAction: {},
        title: "Title",
        children: [],
        id: "6",
      },
    ],
    id: "1",
  },
  {
    linkAction: {},
    title: "Woman",
    children: [],
    id: "2",
  },
  {
    linkAction: {},
    title: "Men",
    children: [],
    id: "3",
  },
  {
    linkAction: {},
    title: "Men",
    children: [],
    id: "4",
  },
  {
    linkAction: {},
    title: "More Women",
    children: [],
    id: "5",
  },
];

const potanicaHeaderEnd = [
  {
    drawerElement: (
      <div className="flex flex-row space-x-3 items-center text-sm">
        <MagnifyingGlassIcon
          className="h-6 w-6 flex-shrink-0 group-hover:opacity-90"
          aria-hidden="true"
        />
        <div>Search</div>
      </div>
    ),
    onClick: () => {},
    id: "5",
    element: (
      <MagnifyingGlassIcon
        className="h-6 w-6 flex-shrink-0 group-hover:opacity-90 hidden sm:block"
        aria-hidden="true"
      />
    ),
  },
  {
    drawerElement: (
      <div className="flex flex-row space-x-3 items-cente text-sm">
        <UserIcon className="h-6 w-6" aria-hidden="true" />
        <div>Account</div>
      </div>
    ),
    element: (
      <UserIcon className="h-6 w-6 hidden sm:block" aria-hidden="true" />
    ),
    onClick: () => {},
    id: "1",
  },
  {
    drawerElement: (
      <div className="flex flex-row space-x-3 items-center text-sm">
        <HeartIcon className="h-6 w-6" aria-hidden="true" />
        <div>Wishlist</div>
      </div>
    ),
    element: (
      <HeartIcon className="h-6 w-6 hidden sm:block" aria-hidden="true" />
    ),
    onClick: () => {},
    id: "2",
  },
  {
    element: <TruckIcon className="h-6 w-6" aria-hidden="true" />,
    onClick: () => {},
    id: "3",
  },
  {
    element: <ShoppingBagIcon className="h-6 w-6 " />,
    onClick: () => {},
    id: "4",
  },
];

const companyInfo = {
  companyPhoneNumber: "+60126969614",
  companyEmail: "blaisetiong@axrail.com",
  companyLogo:
    "https://du8qbp2d8vnhr.cloudfront.net/public/c7d29e30-4a2c-4b67-9658-34b81a54e96b/site-theme/logo/0958ea63-cefa-401e-8c4d-414646614ce7.png",
  companyName: "Axrail Commerce",
};

function App() {
  const item = {
    backgroundPrimaryColor: "#537E6E",
    backgroundSecondaryColor: "",
    fontPrimaryColor: "",
    fontSecondaryColor: "",
    navigationFont: "",
    navigationFontSize: 0,
    bodyHeadingFont: "",
    bodyHeadingFontSize: 0,
    bodyBodyFont: "",
    bodyBodyFontSize: 0,
    footerFont: "",
    footerFontSize: 0,
  };

  return (
    <div id="scroll-container">
      <PotanicaHeader
        notification={"THis is notification"}
        additionalInformation={undefined}
        navigationItems={navigationItems}
        headerEnd={potanicaHeaderEnd}
        merchantData={companyInfo}
        onClickLink={console.log}
        siteTheme={item}
        isEmpty={true}
      />
      <div className="flex flex-col space-y-14 lg:space-y-24 bg-gray-50 py-0 md:pt-12 md:pb-20 pb-12">
        <PotanicaBanner
          onClickBannerButton={console.log}
          siteTheme={item}
          banners={[
            {
              additionalInformation: {},
              description: "",
              bannerImage:
                "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
              buttonTitle: "",
              title: "",
              id: "1222",
            },
            {
              additionalInformation: {},
              description: "",
              bannerImage:
                "https://df236z5t5wm1k.cloudfront.net/public/fd8fc5cb-2ed9-472a-8127-955012da0d22/LandingPageBanner/HomeScreen/e2290054-da53-44c4-999e-71c6996a2849.jpg",
              buttonTitle: "",
              title: "",
              id: "2222",
            },
            {
              additionalInformation: {},
              description: "",
              bannerImage:
                "https://df236z5t5wm1k.cloudfront.net/public/fd8fc5cb-2ed9-472a-8127-955012da0d22/LandingPageBanner/HomeScreen/f5ab7077-2390-4f1e-9ba5-38136b57ebc2.jpg",
              buttonTitle: "",
              title: "",
              id: "3222",
            },
          ]}
        />
        <PotanicaCategory
          siteTheme={item}
          onClickCategory={(category) => {
            console.log(category);
          }}
          onBrowseMoreClicked={function (): void {
            console.log();
          }}
          categories={[
            {
              id: "1",
              additionalInfo: {},
              title: "New Arrivals 1",
              image:
                "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
            },
            {
              id: "2",
              additionalInfo: {},
              title: "New Arrivals 2",
              image:
                "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
            },
            {
              id: "3",
              additionalInfo: {},
              title: "New Arrivals 3",
              image:
                "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
            },
            {
              id: "4",
              additionalInfo: {},
              title: "New Arrivals 4",
              image:
                "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
            },
            {
              id: "5",
              additionalInfo: {},
              title: "New Arrivals 4",
              image:
                "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
            },
          ]}
        />
        <PotanicaFeaturedCollectionBanner
          siteTheme={item}
          onClickFeaturedCollection={(category: any) => {
            console.log(category);
          }}
          categories={[
            {
              id: "1",
              image:
                "https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg",
              title: "some title",
              description: "",
              additionalInfo: {},
            },
            {
              id: "2",
              image:
                "https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg",
              title: "some title",
              description: "",
              additionalInfo: {},
            },
          ]}
        />
        <PotanicaFeaturedProducts
          onProductClicked={function (category): void {
            console.log(category);
          }}
          onSeeMoreClicked={function (data: any): void {
            console.log(data);
          }}
          siteTheme={item}
          collections={[
            {
              collectionTitle: "This is the title",
              additionalInfo: {},
              id: "1111",
              collectionItems: [
                {
                  id: "1",
                  displayImage:
                    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
                  discountPrice: "123",
                  displayPrice: "RM!@#",
                  isOutOfStock: false,
                  productTitle: "This is the product title",
                  additionalInfo: {
                    onClickWishlist: (a: any) => console.log(a, "wishlist"),
                  },
                },
                {
                  id: "2",
                  displayImage:
                    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
                  discountPrice: "123",
                  displayPrice: "RM!@#",
                  isOutOfStock: true,
                  productTitle: "This is the product title",
                  additionalInfo: {
                    onClickWishlist: (a: any) => console.log(a),
                  },
                },
                {
                  id: "3",
                  displayImage:
                    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
                  discountPrice: "123",
                  displayPrice: "RM!@#",
                  isOutOfStock: true,
                  productTitle: "This is the product title",
                  additionalInfo: {
                    onClickWishlist: (a: any) => console.log(a),
                  },
                },
                {
                  id: "4",
                  displayImage:
                    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
                  discountPrice: "123",
                  displayPrice: "RM!@#",
                  isOutOfStock: true,
                  productTitle: "This is the product title",
                  additionalInfo: {
                    onClickWishlist: (a: any) => console.log(a),
                  },
                },
              ],
            },
            {
              collectionTitle: "This is the title",
              additionalInfo: {},
              id: "2222",
              collectionItems: [
                {
                  id: "5",
                  displayImage:
                    "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
                  discountPrice: "123",
                  displayPrice: "RM!@#",
                  isOutOfStock: true,
                  productTitle: "This is the product title",
                  additionalInfo: {
                    onClickWishlist: (a: any) => console.log(a),
                  },
                },
                {
                  id: "6",
                  displayImage:
                    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
                  discountPrice: "123",
                  displayPrice: "RM!@#",
                  isOutOfStock: true,
                  productTitle: "This is the product title",
                  additionalInfo: {
                    onClickWishlist: (a: any) => console.log(a),
                  },
                },
                {
                  id: "7",
                  displayImage:
                    "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
                  discountPrice: "123",
                  displayPrice: "RM!@#",
                  isOutOfStock: true,
                  productTitle: "This is the product title",
                  additionalInfo: {
                    onClickWishlist: (a: any) => console.log(a),
                  },
                },
                {
                  id: "8",
                  displayImage:
                    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
                  discountPrice: "123",
                  displayPrice: "RM!@#",
                  isOutOfStock: true,
                  productTitle: "This is the product title",
                  additionalInfo: {
                    onClickWishlist: (a: any) => console.log(a),
                  },
                },
              ],
            },
            {
              collectionTitle: "This is the title",
              additionalInfo: {},
              id: "3333",
              collectionItems: [
                {
                  id: "9",
                  displayImage:
                    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
                  discountPrice: "123",
                  displayPrice: "RM!@#",
                  isOutOfStock: true,
                  productTitle: "This is the product title",
                  additionalInfo: {
                    onClickWishlist: (a: any) => console.log(a),
                  },
                },
                {
                  id: "10",
                  displayImage:
                    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
                  discountPrice: "123",
                  displayPrice: "RM!@#",
                  isOutOfStock: true,
                  productTitle: "This is the product title",
                  additionalInfo: {
                    onClickWishlist: (a: any) => console.log(a),
                  },
                },
                {
                  id: "11",
                  displayImage:
                    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
                  discountPrice: "123",
                  displayPrice: "RM!@#",
                  isOutOfStock: true,
                  productTitle: "This is the product title",
                  additionalInfo: {
                    onClickWishlist: (a: any) => console.log(a),
                  },
                },
                {
                  id: "12",
                  displayImage:
                    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
                  discountPrice: "123",
                  displayPrice: "RM!@#",
                  isOutOfStock: true,
                  productTitle: "This is the product title",
                  additionalInfo: {
                    onClickWishlist: (a: any) => console.log(a),
                  },
                },
              ],
            },
          ]}
        />
      </div>
      <PotanicaFooter
        companySocials={companySocials}
        companyInfo={companyInfo}
        siteTheme={item}
        footerStructure={[
          {
            name: "Legal",
            links: [
              {
                name: "Privacy Policy",
                link: "/hello",
              },
              {
                name: "Privacy Policy",
                link: "/hello",
              },
              {
                name: "Privacy Policy",
                link: "/hello",
              },
              {
                name: "Privacy Policy",
                link: "/hello",
              },
              {
                name: "Privacy Policy",
                link: "/hello",
              },
            ],
          },
          {
            name: "Legal2",
            links: [
              {
                name: "Privacy Policy",
                link: "/hello",
              },
              {
                name: "Privacy Policy",
                link: "/hello",
              },
              {
                name: "Privacy Policy",
                link: "/hello",
              },
              {
                name: "Privacy Policy",
                link: "/hello",
              },
              {
                name: "Privacy Policy",
                link: "/hello",
              },
            ],
          },
          {
            name: "Legal3",
            links: [
              {
                name: "Privacy Policy",
                link: "/hello",
              },
              {
                name: "Privacy Policy",
                link: "/hello",
              },
              {
                name: "Privacy Policy",
                link: "/hello",
              },
              {
                name: "Privacy Policy",
                link: "/hello",
              },
              {
                name: "Privacy Policy",
                link: "/hello",
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default App;
