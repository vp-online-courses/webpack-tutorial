import NavigationBar from './components/navigation-bar/navigation-bar.js';

const navigationItems = [
    {
        url: '#hello-world-page',
        title: 'Hello World Page'
    },
    {
        url: '#kiwi-page',
        title: 'Kiwi Page'
    }
];
const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

function removePreviousElements() {
    const elementsToRemove = Array.from(document.body.children).slice(1);
    elementsToRemove.forEach(element => {
        element.parentNode.removeChild(element);
    });
}

window.addEventListener('hashchange', function (event) {
    const url = window.location.hash;
    console.log(url, event)
    if (url === '#hello-world-page') {
        import('HelloWorldApp/HelloWorldPage')
            .then(HelloWorldPageModule => {
                removePreviousElements();
                const HelloWorldPage = HelloWorldPageModule.default;
                const helloWorldPage = new HelloWorldPage();
                helloWorldPage.render();
            });
    } else if (url === '#kiwi-page') {
        import('KiwiApp/KiwiPage')
            .then(KiwiPageModule => {
                removePreviousElements();
                const KiwiPage = KiwiPageModule.default;
                const kiwiPage = new KiwiPage();
                kiwiPage.render();
            });
    }
});


console.log('dashboard');