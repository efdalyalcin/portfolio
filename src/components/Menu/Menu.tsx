import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import { navComponents } from '../NavBar/NavBar';
import './Menu.scss';

type Props = {
  isDesktop: boolean;
}

export const Menu: React.FC<Props> = ({isDesktop}) => {
  const { isDarkTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isDesktop) {
    setIsMenuOpen(false);
  }

  const closeOnScroll = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  });

  return (
    <div>
      <button 
        className={cn("Hamburger", {"Hamburger--dark": isDarkTheme})}
        onClick={menuHandler}
      >
        <div className={cn("Hamburger__lines Hamburger__line1", {
            "Hamburger__lines--dark": isDarkTheme,
            "Hamburger__line1--dark": isDarkTheme,
          })} 
        />
        <div className={cn("Hamburger__lines Hamburger__line2", {
            "Hamburger__lines--dark": isDarkTheme,
            "Hamburger__line2--dark": isDarkTheme,
          })} 
        />
        <div className="Hamburger__line3">
          <div className={cn("Hamburger__line3--left", {"Hamburger__line3--left--dark": isDarkTheme})} />
          <div className={cn("Hamburger__line3--right", {"Hamburger__line3--right--dark": isDarkTheme})} />
        </div>
      </button>

      <menu className={cn("Menu", {"Menu__closed": !isMenuOpen, "Menu__open": isMenuOpen})} id="Menu">
        <ul className="Menu__list">
          {navComponents.map((comp) => (
            <li 
              key={comp.id} 
              className={cn("Menu__item", {"Menu__item--dark": isDarkTheme,})}
            >
              <a 
                href={`#${comp.name}`}
                key={comp.id}
                className={cn("Menu__link", {
                  "Menu__link--dark": isDarkTheme,
                })}
              >
                {comp.name}
              </a>
            </li>
          ))}
        </ul>

        <button 
          className="Menu__toggler"
          onClick={menuHandler}
        >
          <div className="Menu__close">
            <div className="Menu__cross-label">
              <span className="Menu__line"></span>
              Close
            </div>

            <div className="Menu__cross">
              <div className="Menu__cross-line1"></div>
              <div className="Menu__cross-line2"></div>
              <div className="Menu__cross-line3"></div>
            </div>
          </div>
        </button>
      </menu>
    </div>
  );
}
