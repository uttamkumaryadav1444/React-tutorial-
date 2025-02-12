// import { useState } from 'react'
// import './App.css'
// import './cancelrequest'
// import './classexample'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugiat itaque quidem quibusdam quisquam. Iusto necessitatibus ipsam tempora asperiores provident nostrum dolorem cum voluptatibus ducimus voluptate esse fugit, perspiciatis nam officiis ratione fuga enim molestiae repellendus voluptas sint accusantium blanditiis placeat velit. Laudantium recusandae autem omnis, illum in ab. Odit!</p>
//     </>
//   )
// }

// export default App
// 

// src/App.js
import React from "react";
import ImageCarousel from "./ImageCarousel";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>React Image Carousel</h1>
      <ImageCarousel />
    </div>
  );
}

export default App;
