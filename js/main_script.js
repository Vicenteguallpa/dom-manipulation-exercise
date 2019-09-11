const container = document.querySelector('#container');

// add the following:

// a <div> with class "content" and text "This is the glorious text-content!"
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”

// an <h3> with blue text that says “I’m a blue h3!”

// a <div> with a black border and pink background color with the following 
// elements inside of it: 
//   an <h1> that says “I’m in a div”
//   a <p> that says “ME TOO!”