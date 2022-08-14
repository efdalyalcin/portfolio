import cn from 'classnames';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import { navComponents } from '../NavBar/NavBar';
import './Menu.scss';

export default function Menu() {
  const { isDarkTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <menu className="Menu" id="Menu">
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

      <a href="#" className="Menu__toggler">
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
      </a>
    </menu>
  )
}
