import React from "react";

const CenteredWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex justify-center items-center">{children}</div>;
};

export default CenteredWrapper;
