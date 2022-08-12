import { useTheme } from '../../context/ThemeProvider';
import cn from 'classnames';
import './NavBar.scss';
import './ThemeIcon.scss';

const navComponents = [
  {id: 1, name: 'About'},
  {id: 2, name: 'Experience'},
  {id: 3, name: 'Contact'},
  {id: 4, name: 'Resume'},
];

export default function NavBar() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <nav className="NavBar">
      <div className={cn("NavBar__home", {'NavBar__home--dark': isDarkTheme})}>
        <div className="NavBar__icon" />
        EY
      </div>

      <div className="NavBar__list">
        <div 
          className={cn("ThemeIcon", 
            {'ThemeIcon--dark': isDarkTheme})}
          onClick={toggleTheme} 
        >
          <div className="ThemeIcon__sun" />
          <div className="ThemeIcon__moon" />
          <div className={cn("ThemeIcon__cover", {
              "ThemeIcon__cover--light": !isDarkTheme,
              "ThemeIcon__cover--dark": isDarkTheme,
            })} 
          />
        </div>

        {navComponents.map((comp) => (
          <a 
            href={`#${comp.name}`}
            key={comp.id}
            className={cn("NavBar__item", {
              "NavBar__about": comp.name === 'About',
              "NavBar__experience": comp.name === 'Experience',
              "NavBar__contact": comp.name === 'Contact',
              "NavBar__resume": comp.name === 'Resume',
              "NavBar__item--dark": isDarkTheme,
            })}
          >
            {comp.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
