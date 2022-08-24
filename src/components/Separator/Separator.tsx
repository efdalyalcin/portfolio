import { createRef, useEffect, useState } from "react";
import cn from "classnames";
import { useTheme } from "../../context/ThemeProvider";
import "./Separator.scss";

export default function Separator() {
  const { isDarkTheme } = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);
  const sepRef = createRef<HTMLDivElement>();
  const [separatorPosition, setSeparatorPosition] = useState(1);
  const [widthPercent, setWidthPercent] = useState(
    scrollPosition / separatorPosition
  );

  const handleSeparatorPosition = () => {
    sepRef.current?.offsetTop
      ? setSeparatorPosition(sepRef.current.offsetTop)
      : setSeparatorPosition(1);
  };

  const handleScroll = () => {
    let scroll = window.pageYOffset;

    scroll ? setScrollPosition(scroll) : setScrollPosition(0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const styleHandler = () => {
    const calculator = ((scrollPosition / (separatorPosition / 2)) * 100) / 2;

    if (calculator <= 100) {
      if (scrollPosition < (separatorPosition / 2)) {
        setWidthPercent(100 - calculator);
      } else {
        setWidthPercent(calculator);
      }
    }
  };

  useEffect(() => {
    handleSeparatorPosition();
    styleHandler();
  }, [scrollPosition]);

  return (
    <div
      style={{ width: `${widthPercent}%` }}
      className={cn("Separator", { "Separator--dark": isDarkTheme })}
      ref={sepRef}
      onScroll={styleHandler}
    />
  );
}