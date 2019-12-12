import symbol from '../../images/icons_sprite.svg';
import './hello-world-button.scss';

class HelloWorldButton {
    buttonCssClass = 'hello-world-button';

    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = 'Hello world';
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Hello world';
            p.classList.add('hello-world-text');
            body.appendChild(p);

            const html = `<svg class="icon-twitter" height="30px" width="30px">
                <use xlink:href="#icons_sprite_icon-twitter"></use>
            </svg>`;
            document.body.insertAdjacentHTML('beforeend', html);
        }
        button.classList.add('hello-world-button');
        body.appendChild(button);
    }
}

export default HelloWorldButton;
