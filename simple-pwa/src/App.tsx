import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { PWAInstallationButton } from './PWAInstallationButton';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';

function App() {
  const splideOptions = {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    padding: { left: '5rem', right: '5rem' },
    gap: '2rem',
    width: '100%',
  };
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>簡単なPWAアプリを作成</h1>
      <PWAInstallationButton />
      <Splide options={splideOptions}>
        <SplideSlide>
          <img src={image1} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={image2} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={image3} alt="Image 3" />
        </SplideSlide>
        <SplideSlide>
          <img src={image4} alt="Image 3" />
        </SplideSlide>
        <SplideSlide>
          <img src={image5} alt="Image 3" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default App;
