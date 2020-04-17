import React from 'react';

import SlideshowGallery from './components/SlideShow/SlideshowGallery'

import Img1 from './image/img1.jpg'
import Img2 from './image/img2.jpg'
import Img3 from './image/img3.jpg'
import Img4 from './image/img4.jpg'
import Img5 from './image/img5.jpg'
import Img6 from './image/img6.jpg'

import './App.css';

const collection = [
  { src: Img1, caption: "Caption one" },
  { src: Img2, caption: "Caption two" },
  { src: Img3, caption: "Caption three" },
  { src: Img4, caption: "Caption four" },
  { src: Img5, caption: "Caption five" },
  { src: Img6, caption: "Caption six" },
];

function App() {
  return (
    <div className="App">
      <SlideshowGallery
          input={collection}
          ratio={`3:2`}
          mode={`manual`}
        />

        <SlideshowGallery
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`3000`}
        />
    </div>
  );
}

export default App;
