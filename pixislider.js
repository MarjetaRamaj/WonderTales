const contry = document.querySelector('h2');
const navigationControlRight = document.querySelector('.control-r');


const Application = PIXI.Application;
const app = new Application({
    width: 1920,
    height: 1080
});

document.body.appendChild(app.view);


loader.add([
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg'
])
.load(setup);

function setup(loader, resources){
    const img1 = PIXI.Sprite.from(resources['./images/1.jpg'].name);
    const img2 = PIXI.Sprite.from(resources['./images/2.jpg'].name);
    const img3 = PIXI.Sprite.from(resources['./images/3.jpg'].name);
    const img4 = PIXI.Sprite.from(resources['./images/4.jpg'].name);

    function centerImage(image){
        image.anchor.set(0.5);
        image.x = app.renderer.width / 2;
        image.y = app.renderer.height / 2;
    }
    centerImage(img1);
    centerImage(img2);
    centerImage(img3);
    centerImage(img4);

    const container = new PIXI.Container();
    container.addChild(img4, img3, img2, img1);
    app.stage.addChild(container);

    const options = {
        amplitude: 300,
        wavelength: 0, // 300
        speed: 700,
        brightness: 1,
        radius: -1
    }

    const shockwaveFilter = new PIXI.filters.shockwaveFilter([
        app.screen.width / 2,
        app.screen.height / 2
    ],
    options, 0); //0.5

    container.filters = [shockwaveFilter];

    let currentCountry = 1;
    navigationControlRight.addEventListener('click', function(){
        if(currentCountry < 4){
            currentCountry++;
        shockwaveFilter.wavelength = 300;
        switch(currentCountry){
        case 1:
            contry.innerHTML = 'Maldives';
            break;
        case 2: 
            contry.innerHTML = 'Turkey';
            app.ticker.add(slide1to2);
            break;
        case 3: 
            contry.innerHTML = 'Seychelles';
            app.ticker.add(slide2to3);
            break;
        case 4: 
            contry.innerHTML = 'Italy';
            app.ticker.add(slide3to4);
            break;
        }
        function slide1to2(){
            shockwaveFilter.time += 0.01;
            img1.alfa -= 0.008;
            if( shockwaveFilter.time > 2){
                shockwaveFilter.time = 0;
                shockwaveFilter.wavelength = 0;
                app.ticker.remove(slide1to2);
            }

        }
        function slide2to3(){
            shockwaveFilter.time += 0.01;
            img2.alfa -= 0.008;
            if( shockwaveFilter.time > 2){
                shockwaveFilter.time = 0;
                shockwaveFilter.wavelength = 0;
                app.ticker.remove(slide2to3);
            }

        }
        function slide3to4(){
            shockwaveFilter.time += 0.01;
            img2.alfa -= 0.008;
            if( shockwaveFilter.time > 2){
                shockwaveFilter.time = 0;
                shockwaveFilter.wavelength = 0;
                app.ticker.remove(slide3to4);
            }

        }

        }

    });

}
