import cn from 'classnames';
import './NavBar.scss';

const navComponents = [
  {id: 1, name: 'About'},
  {id: 2, name: 'Experience'},
  {id: 3, name: 'Contact'},
  {id: 4, name: 'Resume'},
];

export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="NavBar__home">
        <div className="NavBar__icon" />
        EY
      </div>

      <div className="NavBar__list">
        {navComponents.map((comp) => (
          <a 
            href={`#${comp.name}`}
            key={comp.id}
            className={cn("NavBar__item", {
              "NavBar__about": comp.name === 'About',
              "NavBar__experience": comp.name === 'Experience',
              "NavBar__contact": comp.name === 'Contact',
              "NavBar__resume": comp.name === 'Resume',
            })}
          >
            {comp.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
