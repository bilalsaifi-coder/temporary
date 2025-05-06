import { useState } from "react";
import whiteShirt from './Images/white-shirt.jpg'
import blueShirt from './Images/blue-shirt.jpg'
import greenShirt from './Images/green-shirt.jpg'
import greyShirt from './Images/grey-shirt.jpg'
import orangeShirt from './Images/orange-shirt.jpg'

function App() {

  const [selectedColor, setSelectedColor] = useState('white');

  const colors = {
    white: 'white',
    blue: '#2f3446',
    green: '#55655a',
    grey: '#d9dee2',
    orange: '#eea765' 
  }

  const colorImages = {
    white: whiteShirt,
    blue: blueShirt,
    green: greenShirt,
    grey: greyShirt,
    orange: orangeShirt
  } 


  return (
    <>
    <div class="container-fluid justify-items-center mt-5">
      <div style={{width: '300px', boxShadow: '0px 0px 5px #222222', borderRadius: '7px'}}>
        <img src= {colorImages[selectedColor]} alt={`Product in ${selectedColor}`} class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div style={{padding: '15px', borderTop: '2px solid #222222'}}>
        <div class="flex justify-between">
          <div>
            <h3 class="text-xl text-gray-700">Plain Shirt</h3>
            <p class="mt-1 text-md uppercase text-gray-500">{selectedColor}</p>
          </div>
          <p class="text-xl font-medium text-gray-900">$35</p>
        </div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
          <p class='text-md'>Select Color:</p>

          {/* //Makes buttons from colors objects (jitni keys exist hai) */}
          {Object.entries(colors).map(([colorName, colorValue]) =>(
            <button
              key={colorName}
              onClick={() => setSelectedColor(colorName)}
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: colorValue,
                border: selectedColor === colorName? '1px solid #222' : '1px solid grey',
                cursor: 'pointer',
                borderRadius: '20px'
              }}
            />
          ))}

        </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
