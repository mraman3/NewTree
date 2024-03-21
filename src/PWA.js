import * as THREE from 'three';


import MyCamera from './MyCamera.js';
import Renderer from './Renderer.js';
import Time from './Tools/Time.js';
import Sizes from './Tools/Sizes.js';


import Resources from './Tools/Resources.js';
import sources from './sources.js'
import RayCaster from './RayCaster.js';

import Island from './Models/Island.js';
import Vids from './Models/Vids.js';
import Bear from './Models/Bear.js';
import Signs from './Models/Signs.js';
import HdriLoader from './Models/HdriLoader.js';


let instance = null;
export default class PWA {

    constructor(passedCanvas) {

        if (instance) {
            return instance;
        }
        instance = this

        window.scene = this


        this.canvas = passedCanvas
        this.assestLoader = new THREE.LoadingManager();
        this.loadAssests();

        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.resources = new Resources(sources);

        //models
        this.island = new Island();
        this.vids = new Vids();
        this.bear = new Bear();
        this.signs = new Signs();
        //this.hdriLoader = new HdriLoader();

        this.myCamera = new MyCamera();
        this.renderer = new Renderer();
        this.resources.on('ready', () => {
            this.rayCaster = new RayCaster();
        })



        const axesHelper = new THREE.AxesHelper(20);
        axesHelper.position.set(0, 20, 0)
        axesHelper.setColors(0xff0000, 0x00ff00, 0x0000ff)
        this.scene.add(axesHelper);


        this.scene.fog = new THREE.Fog(0x000000, 0, 68)

        const light5 = new THREE.HemisphereLight(0xffffff, 0x000000, 2.3);
        light5.position.set(0, 15, -20);
        //this.scene.add(light5);

        const light = new THREE.RectAreaLight(0xffffff, 20, 20, 8);
        light.position.set(0, 35, 0);
        light.lookAt(0, 0, 0)
        this.scene.add(light);

        window.addEventListener("resize", () => {
            this.resize();
        })

        this.time.on('tick', () => {
            this.update();
        })


    }

    resize() {
        this.sizes.resize();
        this.myCamera.resize();
        this.renderer.resize();

    }

    update() {

        this.renderer.update();
        this.myCamera.update();
        this.bear.update();

    }

    loadAssests() {
        //Load manager info control
        this.assestLoader.onStart = function (url, item, total) {
            console.log(`Started loading: ${url}`);
        }

        const progressBar = document.getElementById('progress-bar');
        this.assestLoader.onProgress = function (url, loaded, total) {
            progressBar.value = (loaded / total) * 100;
        }
        const progressBarContainer = document.querySelector('.progress-bar-container');
        this.assestLoader.onLoad = function () {
            progressBarContainer.style.display = 'none';
        }
        this.assestLoader.onError = function (url) {
            console.error(`Got a problem loading: ${url}`);
        }
    }

}

