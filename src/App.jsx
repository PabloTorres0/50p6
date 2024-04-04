import './App.css';
import React from 'react';
function App() {

  const cheBoxes = ()=> {
    const boxes = document.querySelectorAll('.boxes')
    boxes.forEach((item,index)=>{
      const clientRect = item.getBoundingClientRect() 
      
      if (clientRect.bottom < (window.innerHeight || document.documentElement.clientHeight)){
        item.classList.add('active')
    }
    if(clientRect.bottom > window.innerHeight){
      item.classList.remove('active')
    }
    })
  }

  React.useEffect(() => {
    window.addEventListener('scroll',cheBoxes)
    cheBoxes()
    },[])


  return (
    <div className='container'>  
      <div className="boxes-container">
        <h1>Scroll to see the animation</h1>
        <div className="boxes">Content</div>
        <div className="boxes">Content</div>
        <div className="boxes">Content</div>
        <div className="boxes">Content</div>
        <div className="boxes">Content</div>
        <div className="boxes">Content</div>
        <div className="boxes">Content</div>
        <div className="boxes">Content</div>
        <div className="boxes">Content</div>
        <div className="boxes">Content</div>
      </div>
    </div>
  );
}

export default App;
