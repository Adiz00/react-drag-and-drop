  import React, { useState } from 'react';
  import './App.css';

  const App = () => {
    // const [elements, setElements] = useState([]);
    // const [draggedElementId, setDraggedElementId] = useState(null);

    // const handleDragStart = (event, elementId, isClone) => {
    //   event.dataTransfer.setData('elementId', elementId);
    //   event.dataTransfer.effectAllowed = isClone ? 'copy' : 'move';
    //   setDraggedElementId(elementId);
    // };

    // const handleDragOver = (event) => {
    //   event.preventDefault();
    // };

    // const handleDrop = (event) => {
    //   event.preventDefault();
    //   const elementId = event.dataTransfer.getData('elementId');
    //   if (elementId) {
    //     if (draggedElementId === elementId) {
    //       setElements((prevElements) => [...prevElements, elementId]);
    //     } else {
    //       setElements((prevElements) => {
    //         const updatedElements = [...prevElements];
    //         const index = updatedElements.indexOf(elementId);
    //         updatedElements.splice(index, 0, draggedElementId);
    //         return updatedElements;
    //       });
    //     }
    //   }
    //   setDraggedElementId(null);
    // };

    // const handleDragEnd = () => {
    //   setDraggedElementId(null);
    // };

    // const renderElement = (elementId) => {
    //   if (elementId === 'h1Element') {
    //     return <h1>Draggable H1</h1>;
    //   } else if (elementId === 'buttonElement') {
    //     return <button>Draggable Button</button>;
    //   }
    //   return null;
    // };

  // ===============================================================
  

  // =============================================================== before
    const [widgets, setWidgets] = useState([]);
// flag to find drop position
let dropInchild=false;
console.log(dropInchild);

    const handleOnDrag = (e, widgetType) => {
      e.dataTransfer.setData('widgetType', widgetType);
    };

    const handleDrop = (e) => {
      const widgetType = e.dataTransfer.getData('widgetType');
      if(dropInchild == false){
      setWidgets([...widgets, widgetType]);

      }
      dropInchild=false
      console.log('drop')
      console.log("o")
      

    };

    const handleDragOver = (e) => {
      e.preventDefault();

    };

    // =======================================================
    const handleDragOverDroppedWidget = (e) => {
      e.preventDefault();
      e.currentTarget.style.backgroundColor = '#01b7ea';
    };
    
    const handleDragLeaveDroppedWidget = (e) => {
      e.currentTarget.style.backgroundColor = ''; // Reset the background color
    };
    // =======================================================
    
    // ================================================================ before

    return (
      <div className='main'>
        
        <div className="widgets">
          <div
            className="widget"
            draggable="true"
            onDragStart={(e) => handleOnDrag(e, 'widget A')}
          >
            widget A
          </div>
          <div
            className="widget"
            draggable="true"
            onDragStart={(e) => handleOnDrag(e, 'widget B')}
          >
            widget B
          </div>
          <div
            className="widget"
            draggable="true"
            onDragStart={(e) => handleOnDrag(e, 'widget C')}
          >
            widget C
          </div>
        
        </div>
       
        {/* ================================================================================== */}
        <div
            className="page"
            // onDrop={handleDrop}
            onDrop={(e) => handleDrop(e)}

            // onDragOver={handleDragOver}
            onDragOver={(e) => handleDragOver(e)}

          >
            {widgets.map((x, i) => (
              <div 
              className="dropped-widget" 
              key={i} 
              onClick={()=>{console.log(i)}} 
              onDragOver={handleDragOverDroppedWidget}
              onDragLeave={handleDragLeaveDroppedWidget}
              onDrop={(e) => {
                dropInchild=true;
                console.log(i)
                console.log(dropInchild)
                e.currentTarget.style.backgroundColor = ''; // Reset the background color
                // console.log("i")
                // widgets.pop();
                }}>
                {x}
              </div>
            ))}
          </div>

          {/* =================================================================================== */}
        {/* <div className="div1" onDragOver={handleDragOver} onDrop={handleDrop}>
          <h2 style={{"margin-bottom":"1rem"}}>Components</h2>
          <div className="div1A">
            <h1
              id="h1Element"
              draggable="true"
              onDragStart={(e) => handleDragStart(e, 'h1Element', true)}
            >
              Draggable H1
            </h1>
          </div>
          <div className="div1B">
            <button
              id="buttonElement"
              draggable="true"
              onDragStart={(e) => handleDragStart(e, 'buttonElement', true)}
            >
              Draggable Button
            </button>
          </div>
          
        </div> */}
        
        {/* <div className="div2" onDragOver={handleDragOver} onDrop={handleDrop}>
          {elements.map((elementId, index) => (
            <div
              key={index}
              className="draggedElement"
              draggable="true"
              onDragStart={(e) => handleDragStart(e, elementId, false)}
              onDragEnd={handleDragEnd}
            >
              {renderElement(elementId)}
            </div>
          ))}
        </div> */}

        
      </div>
    );
  };

  export default App;


