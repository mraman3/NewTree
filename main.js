import './style.css'

import PWA from './src/PWA'



let details = navigator.userAgent;

let regexp = /android|iphone|kindle|ipad/i;

let isMobileDevice = regexp.test(details);

const btnGp = document.getElementById('btnGp');
const loading = document.getElementById('loading')
const canvas = document.getElementById('canvas')
const img = document.getElementById('imgBox')
const linksGp = document.getElementById('linksGp')

if (isMobileDevice) {
    btnGp.style.display = 'none'
    loading.style.display = 'none'
    canvas.style.display = 'none'
    linksGp.style.display = 'none'
} else {
    
    const pwa = new PWA(document.querySelector(".webgl"))
    img.style.display = 'none'
}

