import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const myPic = 'http://lorempixel.com/400/200/nature';
  return(
    <div class="container">
      <img class="img-thumnail" src={ myPic }
      alt="nature"/>
    </div>
  );
}
export default App;