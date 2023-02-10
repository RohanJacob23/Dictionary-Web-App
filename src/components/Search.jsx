import React from "react";
import { useContext, useState } from "react";
import { DictContext } from "../context";

function Search() {
  const { setSearch } = useContext(DictContext);
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(text);
    setText("");
  }

  return (
    <form action="GET" onSubmit={handleSubmit}>
      <div className="mt-10 w-full">
        <input
          type="text"
          className="
        search
        form-control
        block
        w-full
        px-3
        py-3
        text-base
        font-normal
        bg-clip-padding
        rounded
        transition
        ease-in-out
        m-0
        focus:outline-none
        focus:shadow-none
        "
          id="exampleText0"
          placeholder="Search"
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <button type="submit"></button>
    </form>
  );
}

export default Search;
