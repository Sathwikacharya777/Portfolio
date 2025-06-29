import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedIntro = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Web Developer", "Web Designer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);   

  return (
    <p className="typed-line">
      I'm <span className="typed" ref={typedElement}></span>
    </p>
  );
};

export default TypedIntro;
