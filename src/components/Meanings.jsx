function Meaning(props) {
  let id = 0;
  const wordMeaning = props.wordDef.map((defArray) => {
    // function to list out the definations according to their partOfSpeech
    const partOfSPeechDef = defArray.definitions.map((temp) => {
      return <li key={id++}>{temp.definition}</li>;
    });

    // function to list out the synonyms and antonyms according to their partOfSpeech
    function synonymsAndAntonyms(check) {
      let count = 0;
      return check.map((temp) => {
        return (
          <span key={id++}>
            {temp}
            {defArray.synonyms.length === ++count ||
            defArray.antonyms.length === count ||
            count === 0
              ? " "
              : ","}{" "}
          </span>
        );
      });
    }
    return (
      <div key={id++}>
        <div className="flex my-5 font-bold tracking-widest text-2xl">
          <h1>{defArray.partOfSpeech}</h1>
          <div className="line w-full border-b border-black/30 relative bottom-2 ml-5"></div>
        </div>
        <h1 className="opacity-50 mb-3 md:mb-5 text-2xl">Meaning</h1>
        <ul className="list-disc pl-10 text-xl">{partOfSPeechDef}</ul>
        <div>
          <h1
            className={`opacity-50 mb-3 md:mb-5 text-2xl mt-5 ${
              synonymsAndAntonyms(defArray.synonyms).length === 0
                ? "hidden"
                : ""
            }`}
          >
            Synonyms
          </h1>
          <p className="text-xl">{synonymsAndAntonyms(defArray.synonyms)}</p>
        </div>
        <div>
          <h1
            className={`opacity-50 mb-3 md:mb-5 text-xl mt-5 ${
              synonymsAndAntonyms(defArray.antonyms).length === 0
                ? "hidden"
                : ""
            }`}
          >
            Antonyms
          </h1>
          <p className="text-xl">{synonymsAndAntonyms(defArray.antonyms)}</p>
        </div>
      </div>
    );
  });
  return <>{wordMeaning}</>;
}
export default Meaning;
