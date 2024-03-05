import * as THREE from 'three';

import TreeHut from './Models/TreeHut';
import MyCamera from './MyCamera';
import Renderer from './Renderer';
import Time from './Tools/Time';
import Sizes from './Tools/Sizes';
import HdriLoader from './Models/HdriLoader';

let instance = null;
export default class PWA {

    constructor(passedCanvas) {

        if (instance) {
            return instance;
        }
        instance = this

        window.scene = this

        this.canvas = passedCanvas
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.treeHut = new TreeHut();
        this.hdriLoader = new HdriLoader();
        this.myCamera = new MyCamera();
        this.renderer = new Renderer();

        console.log("End")

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

}

