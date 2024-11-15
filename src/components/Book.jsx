import HTMLFlipBook from "react-pageflip";
import img1 from "../images/AmulPhotos_page-0001.jpg"
import img2 from "../images/AmulPhotos_page-0002.jpg"
import img3 from "../images/AmulPhotos_page-0003.jpg"
import img4 from "../images/AmulPhotos_page-0004.jpg"
import img5 from "../images/AmulPhotos_page-0005.jpg"
import img6 from "../images/AmulPhotos_page-0006.jpg"

import "./Book.css"

function Book(props) {
    
  return (
    <HTMLFlipBook width={314} height={667}>
      <div className="demoPage">
        <img src={img1} alt=""/>
      </div>
      <div className="demoPage">
        <img src={img2} alt="" />
      </div>
      <div className="demoPage">
        <img src={img3} alt="" />
      </div>
      <div className="demoPage">
        <img src={img4} alt="" />
      </div>
      <div className="demoPage">
        <img src={img5} alt="" />
      </div>
      <div className="demoPage">
        <img src={img6} alt="" />
      </div>

    </HTMLFlipBook>
  );
}

export default Book;