import React, { createRef, useEffect, useState } from "react";

const Filtertest = (props) => {
  const lineIndex = props.index;
  const numerOfInputs = props?.numerOfInputs || 7;

  const [inputRefsArray] = useState(() =>
    Array.from({ length: numerOfInputs }, () => createRef())
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const [letters, setLetters] = useState(() =>
    Array.from({ length: numerOfInputs }, () => "")
  );

  const handleKeyPress = () => {
    setCurrentIndex((prevIndex) => {
      console.log(prevIndex);
      const nextIndex = prevIndex < numerOfInputs - 1 ? prevIndex + 1 : 0;
      console.log(nextIndex);
      const nextInput = inputRefsArray?.[nextIndex]?.current;
      console.log(nextInput);
      nextInput.focus();
      nextInput.select();
      return nextIndex;
    });
  };

  useEffect(() => {
    if (inputRefsArray?.[0]?.current) {
      inputRefsArray?.[0]?.current?.focus();
    }

    window.addEventListener("keyup", handleKeyPress, false);
    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <div>
        {console.log(inputRefsArray, "popopop")}
        {inputRefsArray.map((ref, index) => {
          return (
            <>
              {console.log(ref)}
              <input
                ref={ref}
                type="text"
                id={`box${index}-1`}
                onChange={(e) => {
                  const { value } = e.target;
                  setLetters((letters) =>
                    letters.map((letter, letterIndex) =>
                      letterIndex === index ? value : letter
                    )
                  );
                }}
                onClick={(e) => {
                  setCurrentIndex(index);
                  e.target.select();
                }}
                value={letters[index]}
                max={"1"}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Filtertest;
