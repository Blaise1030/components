import { TCompanyInfo, TSiteTheme } from "./types";

type TFooterProps = {
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

const PotanicaFooter: React.FC<TFooterProps> = ({
  footerStructure,
  companySocials,
  companyInfo,
  isLoading,
  siteTheme,
  isEmpty,
}) => {
  return (
    <footer
      className={`${
        isLoading ? "animate-pulse" : ""
      } bg-white border-t border-gray-200`}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            {Boolean(isLoading || isEmpty) && (
              <div className="h-12 w-32 bg-slate-300" />
            )}
            {!Boolean(isLoading || isEmpty) && (
              <img
                src={companyInfo?.companyLogo}
                alt="Company name"
                className="h-12"
              />
            )}
            <div className="flex flex-col space-y-4">
              {Boolean(isLoading || isEmpty) && (
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-medium text-warm-gray-900 bg-slate-300 text-slate-300 w-fit mb-1">
                    Mock company name
                  </h3>
                  <dl className="text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd className="bg-slate-300 text-slate-300 w-fit mb-2">
                        mock email address
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">Phone number</dt>
                      <dd className="bg-slate-300 text-slate-300 w-fit">
                        mock phone number
                      </dd>
                    </div>
                  </dl>
                </div>
              )}
              {!Boolean(isLoading || isEmpty) && (
                <div className="flex flex-col space-y-2">
                  {Boolean(companyInfo?.companyName) && (
                    <h3
                      className={`text-lg font-medium text-warm-gray-900 ${siteTheme?.bodyHeadingFont} `}
                    >
                      {companyInfo?.companyName}
                    </h3>
                  )}
                  <dl className="text-base text-gray-500">
                    {Boolean(companyInfo?.companyEmail) && (
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>{companyInfo?.companyEmail}</dd>
                      </div>
                    )}
                    {Boolean(companyInfo?.companyPhoneNumber) && (
                      <div>
                        <dt className="sr-only">Phone number</dt>
                        <dd>{companyInfo?.companyPhoneNumber}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}
              {Boolean(isLoading || isEmpty) && (
                <div className="flex space-x-6">
                  {[1, 2, 3, 4]?.map((item) => (
                    <div className="text-slate-300 bg-slate-300 h-6 w-6 rounded-full p-1">
                      A
                    </div>
                  ))}
                </div>
              )}
              {!Boolean(isLoading || isEmpty) && (
                <div className="flex space-x-6">
                  {companySocials
                    ?.filter(({ link }) => Boolean(link))
                    ?.map((item) => (
                      <a
                        className="text-gray-400 hover:text-gray-500"
                        referrerPolicy="no-referrer"
                        href={item?.link}
                        key={item?.name}
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon
                          className="h-6 w-6 text-xl"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                </div>
              )}
            </div>
          </div>
          {Boolean(isLoading || isEmpty) && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:col-span-2 xl:mt-0">
              {[1, 2, 3]?.map((_, index) => (
                <div key={index}>
                  <h3 className="text-base font-medium text-slate-300 bg-slate-300 w-fit rounded-sm">
                    Sample title
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {[
                      "Liinkds Some thing",
                      "linksss",
                      "ssssasdasd",
                      "asdasd asdasss",
                      "asdasd asassa",
                    ]?.map((sample, index) => (
                      <li key={index}>
                        <div className="text-base text-slate-300 bg-slate-300 rounded-sm w-fit">
                          {sample}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {!Boolean(isLoading || isEmpty) && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:col-span-2 xl:mt-0">
              {footerStructure?.map(({ name, links }, index) => (
                <div key={index}>
                  <h3
                    className={`text-base font-medium text-gray-900 ${siteTheme?.bodyHeadingFont}`}
                  >
                    {name}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {links?.map((item, index) => (
                      <li key={index}>
                        <a
                          className="text-base text-gray-500 hover:text-gray-900"
                          referrerPolicy="no-referrer"
                          href={item?.link}
                        >
                          {item?.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        {Boolean(isLoading || isEmpty) && (
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base xl:text-center text-slate-300 bg-slate-300 w-fit m-auto">
              This is the copy right
            </p>
          </div>
        )}

        {!Boolean(isLoading || isEmpty) && (
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} {companyInfo?.companyName}. All
              rights reserved.
            </p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default PotanicaFooter;
