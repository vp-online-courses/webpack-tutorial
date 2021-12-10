import './image-caption.scss';

class ImageCaption {
    render(text) {
        const p = document.createElement('p');
        p.innerHTML = text;
        p.classList.add('image-caption');
        const body = document.querySelector('body');
        body.appendChild(p);
    }
}

export default ImageCaption;
