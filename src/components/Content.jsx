import React from "react";
import Search from "./Search";
import Defination from "./Defination";

function Content() {
  return (
    <div className="content flex justify-center">
      <div className="px-5 md:w-9/12 max-w-3xl mb-10">
        <Search />
        <Defination />
      </div>
    </div>
  );
}

export default Content;
