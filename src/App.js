// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import Slogan from './components/Sologan/Slogan';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight ,
      });
    };
    window.addEventListener('resize', handleSize);
    handleSize();
    return () => window.removeEventListener('resize', handleSize);
  }, []);
  useEffect(() => {
    console.log(windowSize);
    if( windowSize.width < 500) {
      setMobile(true);
    }else{
      setMobile(false);
        } 
  }, [windowSize]);
  return (

    <div className="font-sr py-8 px-4 text-white h-screen overflow: hidden; overflow-y-auto bg-gradient-to-r dark dark:from-purple-500 dark:to-purple-500 from-white to-pink-500 dark:text-white text-black pl-4">
      <Navbar isMobile = {isMobile} />
      <Slogan />
      <Content />
    </div>
  );
}
// dark:from-purple-500 dark:to-pink-500 dark:text-white text-dark from-white  to-pink-500
export default App;
