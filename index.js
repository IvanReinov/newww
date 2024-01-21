'use strict';

const listImages = [
    {
        src: 'заставка1.0.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'заставка111.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'заставка1111.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'сцена4.jpg',
        nameImg: 'Ещё что-то',
    },
    {
        src: 'сцена5.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена6.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена7.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена8.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена9.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена10.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена11.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена12.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена13.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена14.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена15.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена16.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена17.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена18.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена19.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена20.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена21.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена22.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена23.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена24.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена25.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена26.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена27.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена28.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена29.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена30.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена31.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена32.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена33.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена34.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена35.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена36.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена37.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена38.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена39.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена40.png',
        nameImg: 'АА',
    },
    {
        src: 'сцена41.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена42.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена43.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена44.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена45.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена46.jpg',
        nameImg: 'АА',
    },
    {
        src: 'школа47.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена48.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена49.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена50.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена51.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена52.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена53.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена54.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена55.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена56.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена57.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена58.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена59.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена60.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена61.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена62.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена63.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена64.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена65.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена66.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена67.jpg',
        nameImg: 'АА',
    },
    {
        src: 'сцена68.jpg',
        nameImg: 'АА',
    },
    {
        src: 'бекстейдж5.jpg',
        nameImg: 'АА',
    },
    {
        src: 'бекстейдж1.jpg',
        nameImg: 'АА',
    },
    {
        src: 'бекстейдж2.jpg',
        nameImg: 'АА',
    },
    {
        src: 'бекстейдж3.jpg',
        nameImg: 'АА',
    },
    {
        src: 'бекстейдж4.jpg',
        nameImg: 'АА',
    },
        {
        src: 'бекстейдж6.jpg',
        nameImg: 'АА',
    },
];

const img= document.querySelector('img');
const button = document.querySelector('button');

const setImg = (currentDataImg) => {
    img.src = currentDataImg.src;
    img.alt = currentDataImg.nameImg;
}

setImg(listImages[0]);

button.addEventListener('click', onChangeImg);

let count = 0;

function onChangeImg() {
    count += 1;
    setImg(listImages[count]);
}