// 1. Select all the color boxes from the HTML document
const colorBoxes = document.getElementsByClassName('color-box');

// 2. Loop through each box to handle individual clicks
for(let box of colorBoxes){

    // 3. Inside the loop, listen for a 'click' event on the current box
    box.addEventListener('click', function(){

        // 4. Extract the color code (text) from the clicked box
        const colorCode = box.textContent;

        // 5. Change the background color of the body element using the extracted color
        document.body.style.backgroundColor = colorCode;
        const bg_color_display_box = document.querySelector('.color-value');
        bg_color_display_box.textContent = colorCode;
    });
}