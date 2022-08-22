import cn from 'classnames';
import { useTheme } from '../../context/ThemeProvider';
import './ThemeIcon.scss';


export default function ThemeIcon() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
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
  )
}
