import About from './components/About/About';
import Experience from './components/Experience/Experience';
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import cn from 'classnames';
import { useTheme } from './context/ThemeProvider';
import Home from './components/Home/Home';

function App() {
  const { isDarkTheme } = useTheme();

  return (
    <div className={cn("App", {'App--dark': isDarkTheme})}>
      <NavBar />
      <Home />
      <About />
      <Experience />
    </div>
  );
}

export default App;
