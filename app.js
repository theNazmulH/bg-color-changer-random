//Random Color generator
function generateRGBColor(n){

    const R =  Math.floor(Math.random()*n);
    const G =  Math.floor(Math.random()*n);
    const B =  Math.floor(Math.random()*n);
    const rgb = `rgb(${R},${G},${B})`;

    return rgb;

}

const RGBColor = generateRGBColor(255);


//Add the color to the body
const Body = document.getElementsByTagName('body');

// Default bg color when load
Body[0].style.backgroundColor = RGBColor;

// Change BG when button clicked
const Button = document.getElementsByTagName('button');

Button[0].addEventListener('click',()=>{
    const RGBColor = generateRGBColor(255);
    Body[0].style.backgroundColor = RGBColor;
})