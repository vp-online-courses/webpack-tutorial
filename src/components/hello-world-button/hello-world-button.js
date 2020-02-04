import './hello-world-button.scss';
import $ from 'jquery3';

class HelloWorldButton {
    buttonCssClass = 'hello-world-button';

    render() {
        const button = $('<button>');
        const body = $('body');
        button.html('Hello world');
        button.click(function () {
            const p = $('<p>');
            p.html('Hello world');
            p.addClass('hello-world-text');
            body.append(p);
        })
        button.addClass('hello-world-button');
        body.append(button);
    }
}

export default HelloWorldButton;
