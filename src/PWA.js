import * as THREE from 'three';

import TreeHut from './Models/TreeHut.js';
import MyCamera from './MyCamera.js';
import Renderer from './Renderer.js';
import Time from './Tools/Time.js';
import Sizes from './Tools/Sizes.js';
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
        this.treeHut = new TreeHut();
        this.hdriLoader = new HdriLoader();
        this.myCamera = new MyCamera();
        this.renderer = new Renderer();

        

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
    }

    loadAssests(){
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

