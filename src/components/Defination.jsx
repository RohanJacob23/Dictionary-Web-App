import React from "react";
import { useContext } from "react";
import { DictContext } from "../context";
import Meaning from "./Meanings";
import AudioPlay from "./AudioPlay";

function Defination() {
  // retriving the data from context jsx file
  const { wordData, loading, wordMsgDisplay } = useContext(DictContext);

  // when the user inputs wrong word
  const { title, message, resolution } = wordData;

  const { word, phonetic, phonetics, meanings, sourceUrls } = wordData;

  // finding the audion within phonetics array
  let audio =
    phonetics === undefined
      ? []
      : phonetics.find((findAudio) => findAudio.audio !== "");

  if (loading) {
    return <div className="lds-dual-ring flex justify-center w-full"></div>;
  } else if (wordMsgDisplay) {
    return (
      <div className="text-center text-2xl">
        <h1 className="mb-5">{title}</h1>
        <h1 className="mb-5">{message}</h1>
        <h1 className="mb-5">{resolution}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex justify-between mt-3 md:mt-10 mb-8">
          <div>
            <h1 className="text-6xl font-medium capitalize">{word}</h1>
            <h1 className="gibbrish text-xl normal-case tracking-widest">
              {phonetic}
            </h1>
          </div>
          <AudioPlay audio={audio.audio} />
        </div>
        <Meaning wordDef={meanings === undefined ? [] : meanings} id={word} />
        <p className="text-xl mt-8">
          Source:-{" "}
          <span>
            <a
              href={sourceUrls}
              target="_blank"
              rel="noreferrer"
              className="text-lg opacity-70 hover:underline"
            >
              {sourceUrls === undefined ? "" : sourceUrls[0]}
            </a>
          </span>
        </p>
      </div>
    );
  }
}

export default Defination;
