import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';

const heading = new Heading();
heading.render();
const heading2 = new Heading();
heading2.render();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
}
