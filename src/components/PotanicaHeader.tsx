import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { TCompanyInfo, TSiteTheme, TTopNavigationItems } from "../types";
import React, { Fragment, ReactElement, useState } from "react";

import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function PotanicaHeader({
  additionalInformation,
  navigationItems,
  notification,
  merchantData,
  onClickLink,
  headerEnd,
  siteTheme,
  isLoading,
  isEmpty,
}: {
  onClickLink: (i: TTopNavigationItems) => void;
  navigationItems: TTopNavigationItems[];
  merchantData: TCompanyInfo;
  additionalInformation: any;
  siteTheme: TSiteTheme;
  notification?: string;
  isLoading?: boolean;
  isEmpty?: boolean;
  headerEnd: {
    drawerElement?: ReactElement;
    element: ReactElement;
    onClick: () => void;
    id: string;
  }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <MobileMenu
        navigationItems={navigationItems}
        endHeader={headerEnd}
        onClick={onClickLink}
        setOpen={setOpen}
        open={open}
      />
      {notification && (
        <p
          className="flex h-10 items-center justify-center px-4 text-sm font-medium text-white sm:px-3 lg:px-4"
          style={{ backgroundColor: siteTheme?.backgroundPrimaryColor }}
        >
          {notification}
        </p>
      )}

      <div
        className={`bg-white sticky top-0 z-30 ${
          isLoading ? "animate-pulse" : ""
        }`}
      >
        <header className="relative border-b border-gray-200">
          <nav aria-label="Top">
            <div className="bg-white ">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="">
                  <div className="flex h-16 items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                      <a href="/">
                        <span className="sr-only">Your Company</span>
                        {Boolean(isLoading || isEmpty) && (
                          <div className="h-8 w-20 bg-slate-300 text-slate-300 rounded-sm" />
                        )}
                        {!Boolean(isLoading || isEmpty) && (
                          <img
                            className="h-8 w-auto"
                            src={merchantData?.companyLogo}
                            alt=""
                          />
                        )}
                      </a>
                    </div>

                    <div className="hidden h-full lg:flex">
                      {Boolean(isLoading || isEmpty) && (
                        <div className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                          <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                            {[
                              "Men",
                              "Bags",
                              "Something elese",
                              "Promotion",
                            ].map((title) => (
                              <div
                                className="bg-slate-300 text-slate-300 h-fit my-auto rounded-sm"
                                key={title}
                              >
                                {title}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {!Boolean(isLoading || isEmpty) && (
                        <Popover.Group className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                          <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                            {navigationItems?.map((item, index) => {
                              const { id, title, children, linkAction } = item;
                              return (children || []).length <= 0 ? (
                                <button
                                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                  onClick={() => onClickLink(item)}
                                  key={index}
                                >
                                  {title}
                                </button>
                              ) : (
                                <LinksWithChildren
                                  linkAction={linkAction}
                                  children={children}
                                  onClick={onClickLink}
                                  title={title}
                                  key={id}
                                  id={id}
                                  {...siteTheme}
                                />
                              );
                            })}
                          </div>
                        </Popover.Group>
                      )}
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex flex-1 items-center lg:hidden">
                      <button
                        type="button"
                        className="-ml-2 rounded-md bg-white p-2 text-gray-500 cursor-pointer"
                        onClick={() => setOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Logo po*/}
                    <a href="/" className="lg:hidden">
                      <span className="sr-only">Your Company</span>
                      <img
                        src={merchantData?.companyLogo}
                        className="h-8 w-auto"
                        alt=""
                      />
                    </a>
                    {Boolean(isLoading || isEmpty) && (
                      <div className="flex flex-1 items-center justify-end">
                        <div className="flex items-center lg:ml-8 bg-slate-300 text-slate-300 rounded-sm">
                          <div className="flex flex-1 items-center justify-end ">
                            This is the end section
                          </div>
                        </div>
                      </div>
                    )}
                    {!Boolean(isLoading || isEmpty) && (
                      <div className="flex flex-1 items-center justify-end">
                        <div className="flex items-center lg:ml-8">
                          <div className="flex flex-1 items-center justify-end text-gray-500">
                            {headerEnd?.map(
                              ({ onClick, element, id }, index) => {
                                return (
                                  <button
                                    className="md:p-2 p-1 hover:opacity-90 cursor-pointer"
                                    onClick={onClick}
                                    key={index}
                                  >
                                    {element}
                                  </button>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </React.Fragment>
  );
}

function MobileMenu({
  navigationItems,
  endHeader,
  onClick,
  setOpen,
  open,
}: {
  navigationItems: TTopNavigationItems[];
  endHeader: {
    drawerElement?: ReactElement;
    element: ReactElement;
    onClick: () => void;
    id: string;
  }[];
  onClick: (item: TTopNavigationItems) => void;
  setOpen: (b: boolean) => void;
  open: boolean;
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col bg-white shadow-xl">
              <div className="flex px-4 pt-5 pb-2">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <nav
                className="flex-1 space-y-1 bg-white px-3 p-8 overflow-y-auto h-screen"
                aria-label="Sidebar"
              >
                {navigationItems.map((item) =>
                  !(item.children && item?.children?.length > 0) ? (
                    <div key={item.id}>
                      <button
                        onClick={() => onClick(item)}
                        className={
                          "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pl-9 pr-2 py-2 text-sm font-medium rounded-md"
                        }
                      >
                        {item?.title}
                      </button>
                    </div>
                  ) : (
                    <Disclosure as="div" key={item?.id} className="space-y-1">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={
                              "group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2  bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-2"
                            }
                          >
                            <ChevronDownIcon
                              className={classNames(
                                "mr-2 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400",
                                open
                                  ? "text-gray-400 rotate-180"
                                  : "text-gray-500"
                              )}
                            />

                            {item?.title}
                          </Disclosure.Button>
                          <Disclosure.Panel className="space-y-1">
                            {(item?.children || [])?.map((subItem) => (
                              <Disclosure.Button
                                className="group flex w-full items-center rounded-md py-2 pl-16 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                                onClick={() => onClick(subItem)}
                                key={subItem?.id}
                                as="div"
                              >
                                {subItem?.title}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )
                )}
              </nav>

              <div className="bottom-0 sticky h-fit space-y-3 border-t border-gray-200 py-6 px-4 w-full z-20 ">
                {endHeader
                  ?.filter(({ drawerElement }) => Boolean(drawerElement))
                  ?.map(({ drawerElement }, i) => (
                    <div
                      className="flow-root cursor-pointer hover:opacity-90 hover:bg-gray-100 rounded-md p-2"
                      key={i}
                    >
                      {drawerElement}
                    </div>
                  ))}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function LinksWithChildren(
  props: TTopNavigationItems &
    TSiteTheme & { onClick: (item: TTopNavigationItems) => void }
) {
  function sliceIntoChunks(arr: any[], chunkSize: number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize)
      res.push(arr.slice(i, i + chunkSize));
    return res;
  }

  return (
    <Popover className="flex">
      {({ open }) => (
        <>
          <div className="relative flex">
            <Popover.Button
              style={{
                color: open ? props?.backgroundPrimaryColor : "",
                borderColor: open ? props?.backgroundPrimaryColor : "",
              }}
              className={classNames(
                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out outline-none",
                !open ? "border-transparent text-inherit hover:opacity-90" : ""
              )}
            >
              {props?.title}
            </Popover.Button>
          </div>

          <Transition
            enter="transition ease-out duration-200"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
            <Popover.Panel className="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
              <div
                className="absolute inset-0 top-1/2 bg-white shadow"
                aria-hidden="true"
              />
              <div className="relative bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:gap-x-8">
                    <div className="mt-4 grid grid-cols-2 grid-flow-col pt-0 pb-8 sm:pt-8 sm:pb-20 gap-5">
                      {sliceIntoChunks(props?.children || [], 4).map(
                        (items: any[], index: number) => (
                          <ul
                            className="space-y-6 col-span-1"
                            role="list"
                            key={index}
                          >
                            {index === 0 ? (
                              <div className="font-semibold hidden sm:flex border-b border-gray-200 pb-6 text-black w-[80%]">
                                {props?.title}
                              </div>
                            ) : (
                              <div className="font-semibold hidden sm:flex border-b border-gray-200 pb-6 text-black opacity-0">
                                {props?.title}
                              </div>
                            )}
                            <div className="space-y-6">
                              {items?.map((item) => {
                                const { title, id } = item;
                                return (
                                  <li key={id} className="flex">
                                    <button
                                      className="hover:text-gray-800 text-left cursor-pointer"
                                      onClick={() => props?.onClick(item)}
                                    >
                                      {title}
                                    </button>
                                  </li>
                                );
                              })}
                            </div>
                          </ul>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
