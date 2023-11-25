let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let img4 = document.querySelector('.img4')
let img5 = document.querySelector('.img5')
let img6 = document.querySelector('.img6')
let img7 = document.querySelector('.img7')
let img8 = document.querySelector('.img8')
let img9 = document.querySelector('.img9')
let img10 = document.querySelector('.img10')
let img11 = document.querySelector('.img11')
let img12 = document.querySelector('.img12')
let img13 = document.querySelector('.img13')
let img14 = document.querySelector('.img14')
let img15 = document.querySelector('.img15')
let img16 = document.querySelector('.img16')

let bom1 = document.getElementById('bom1');
let bom2 = document.getElementById('bom2');
let bom3 = document.getElementById('bom3');
let bom4 = document.getElementById('bom4');

let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')
let box4 = document.getElementById('box4')
let box5 = document.getElementById('box5')
let box6 = document.getElementById('box6')
let box7 = document.getElementById('box7')
let box8 = document.getElementById('box8')
let box9 = document.getElementById('box9')
let box10 = document.getElementById('box10')
let box11 = document.getElementById('box11')
let box12 = document.getElementById('box12')
let box13 = document.getElementById('box13')
let box14 = document.getElementById('box14')
let box15 = document.getElementById('box15')
let box16 = document.getElementById('box16')

function handleDragStart(e, img) {
    console.log('start');
    currentDraggedImage = img;
}

function handleDragEnd(e, img) {
    console.log('end');
    img.className = img.classList[0]; 
    currentDraggedImage = null;
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    if (currentDraggedImage) {
        e.target.append(currentDraggedImage);
    }
}

img1.addEventListener('dragstart', (e) => handleDragStart(e, img1));
img1.addEventListener('dragend', (e) => handleDragEnd(e, img1));

img2.addEventListener('dragstart', (e) => handleDragStart(e, img2));
img2.addEventListener('dragend', (e) => handleDragEnd(e, img2));

img3.addEventListener('dragstart', (e) => handleDragStart(e, img3));
img3.addEventListener('dragend', (e) => handleDragEnd(e, img3));

img4.addEventListener('dragstart', (e) => handleDragStart(e, img4));
img4.addEventListener('dragend', (e) => handleDragEnd(e, img4));

img5.addEventListener('dragstart', (e) => handleDragStart(e, img5));
img5.addEventListener('dragend', (e) => handleDragEnd(e, img5));

img6.addEventListener('dragstart', (e) => handleDragStart(e, img6));
img6.addEventListener('dragend', (e) => handleDragEnd(e, img6));

img7.addEventListener('dragstart', (e) => handleDragStart(e, img7));
img7.addEventListener('dragend', (e) => handleDragEnd(e, img7));

img8.addEventListener('dragstart', (e) => handleDragStart(e, img8));
img8.addEventListener('dragend', (e) => handleDragEnd(e, img8));

img9.addEventListener('dragstart', (e) => handleDragStart(e, img9));
img9.addEventListener('dragend', (e) => handleDragEnd(e, img9));

img10.addEventListener('dragstart', (e) => handleDragStart(e, img10));
img10.addEventListener('dragend', (e) => handleDragEnd(e, img10));

img11.addEventListener('dragstart', (e) => handleDragStart(e, img11));
img11.addEventListener('dragend', (e) => handleDragEnd(e, img11));

img12.addEventListener('dragstart', (e) => handleDragStart(e, img12));
img12.addEventListener('dragend', (e) => handleDragEnd(e, img12));

img13.addEventListener('dragstart', (e) => handleDragStart(e, img13));
img13.addEventListener('dragend', (e) => handleDragEnd(e, img13));

img14.addEventListener('dragstart', (e) => handleDragStart(e, img14));
img14.addEventListener('dragend', (e) => handleDragEnd(e, img14));

img15.addEventListener('dragstart', (e) => handleDragStart(e, img15));
img15.addEventListener('dragend', (e) => handleDragEnd(e, img15));

img16.addEventListener('dragstart', (e) => handleDragStart(e, img16));
img16.addEventListener('dragend', (e) => handleDragEnd(e, img16));

bom1.addEventListener('dragover', handleDragOver);
bom1.addEventListener('drop', handleDrop)

bom2.addEventListener('dragover', handleDragOver);
bom2.addEventListener('drop', handleDrop)

bom3.addEventListener('dragover', handleDragOver);
bom3.addEventListener('drop', handleDrop)

bom4.addEventListener('dragover', handleDragOver);
bom4.addEventListener('drop', handleDrop)

box1.addEventListener('dragover', handleDragOver);
box1.addEventListener('drop', handleDrop)

box2.addEventListener('dragover', handleDragOver);
box2.addEventListener('drop', handleDrop)

box3.addEventListener('dragover', handleDragOver);
box3.addEventListener('drop', handleDrop)

box4.addEventListener('dragover', handleDragOver);
box4.addEventListener('drop', handleDrop)

box5.addEventListener('dragover', handleDragOver);
box5.addEventListener('drop', handleDrop)

box6.addEventListener('dragover', handleDragOver);
box6.addEventListener('drop', handleDrop)

box7.addEventListener('dragover', handleDragOver);
box7.addEventListener('drop', handleDrop)

box8.addEventListener('dragover', handleDragOver);
box8.addEventListener('drop', handleDrop)

box9.addEventListener('dragover', handleDragOver);
box9.addEventListener('drop', handleDrop)

box10.addEventListener('dragover', handleDragOver);
box10.addEventListener('drop', handleDrop)

box11.addEventListener('dragover', handleDragOver);
box11.addEventListener('drop', handleDrop)

box12.addEventListener('dragover', handleDragOver);
box12.addEventListener('drop', handleDrop)

box13.addEventListener('dragover', handleDragOver);
box13.addEventListener('drop', handleDrop)

box14.addEventListener('dragover', handleDragOver);
box14.addEventListener('drop', handleDrop)

box15.addEventListener('dragover', handleDragOver);
box15.addEventListener('drop', handleDrop)

box16.addEventListener('dragover', handleDragOver);
box16.addEventListener('drop', handleDrop)