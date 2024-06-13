import React, { ReactNode } from "react";

const Page = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="w-full min-h-screen h-auto flex flex-col items-center px-8 pb-8">
      <div className="w-full max-w-7xl">{children}</div>
    </div>
  );
};

export default Page;
