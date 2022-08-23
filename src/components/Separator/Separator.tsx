import { createRef, useEffect, useState } from 'react';
import cn from 'classnames';
import { useTheme } from '../../context/ThemeProvider';
import './Separator.scss';

export default function Separator() {
  const { isDarkTheme } = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);
  const sepRef = createRef<HTMLDivElement>();

  const handleScroll = () => {
    let scroll = window.pageYOffset;

    console.log(sepRef.current?.offsetTop)

    scroll
      ? setScrollPosition(scroll)
      : setScrollPosition(0)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(scrollPosition);

  return (
    <div 
      className={cn("Separator", {"Separator--dark": isDarkTheme})}
      ref={sepRef}
    />
  )
}
