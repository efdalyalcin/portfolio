import cn from 'classnames';
import { useTheme } from '../../context/ThemeProvider';
import './HamburgerIcon.scss';

type Props = {
  menuHandler: () => void;
}

export default function HamburgerIcon({ menuHandler }: Props) {
  const { isDarkTheme } = useTheme();

  return (
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
  )
}
