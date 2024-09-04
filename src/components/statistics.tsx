import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

type Url = {
  id: number; // or string based on your use case
  url: string;
  copied: boolean;
  org: string,
  short: string
};

// Define the props type for the Statistics component
type StatisticsProps = {
  urlData: Url[];
  handleCopyText: (id: number) => void; // Adjust the type based on your implementation
  handleRemoveUrl: (id: number) => void; 
};

const Statistics = ({ urlData, handleCopyText, handleRemoveUrl }: StatisticsProps) => {
  
  const renderUrls = urlData.map((url, index) => {
    return (
      <div
        key={index}
        className="grid gap-2 rounded-lg bg-white px-4 py-4 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-6"
      >
        <h1 className="pr-8">{url.org}</h1>
        <hr className="block lg:hidden" />
        <div className="grid gap-4 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <h2 className="text-primary_cyan">{url.short}</h2>
          <CopyToClipboard text={url.short}>
            {url.copied ? (
              <button
                type="button"
                className="rounded-md bg-primary_dark_violet px-8 py-2 text-base font-bold text-white hover:cursor-not-allowed"
                onClick={() => handleCopyText(index)}
              >
                Copied!
              </button>
            ) : (
              <button
                type="button"
                className="rounded-md bg-primary_cyan px-8 py-2 text-base font-bold text-white hover:bg-hover"
                onClick={() => handleCopyText(index)}
              >
                Copy
              </button>
            )}
          </CopyToClipboard>
          <div><button onClick={() => handleRemoveUrl(url._id)} className="rounded-md bg-red-500 px-8 py-2 text-base font-bold text-white">Delete</button></div>
        </div>
      </div>
    );
  });

  return (
    <div className="z-[-10] bg-primary_dark_violet bg-opacity-5">
      <div className="container px-3 pb-[5rem] pt-[75px] lg:px-[6rem]">
        <div
          id="shortLinks"
          className={`${urlData.length === 0 ? "hidden" : "mt-10 grid gap-3 lg:mt-4"
            }`}
        >
          {renderUrls}
        </div>
      </div>
    </div>
  );
}

export default Statistics;
