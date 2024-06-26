import * as THREE from 'three';


import MyCamera from './MyCamera.js';
import Renderer from './Renderer.js';
import Time from './Tools/Time.js';
import Sizes from './Tools/Sizes.js';
import Performance from './Performance.js';

import Resources from './Tools/Resources.js';
import sources from './sources.js'
import Sounds from './Sounds.js';
import RayCaster from './RayCaster.js';
import Controller from './Controller.js';

import Island from './Models/Island.js';
import MineSigns from './Models/MineSigns.js';
import Bear from './Models/Bear.js';
import Signs from './Models/Signs.js';
import BackSign from './Models/BackSign.js';
import CubHead from './Models/CubHead.js';
import WelcomeSign from './Models/WelcomeSign.js';


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
        this.sounds = new Sounds();
        this.preformace = new Performance();

        //models
        this.island = new Island();
        this.vids = new MineSigns();
        this.bear = new Bear();
        this.signs = new Signs();
        this.backSign = new BackSign();
        this.cubHead = new CubHead();
        this.welcomeSign = new WelcomeSign();

        this.myCamera = new MyCamera();
        this.renderer = new Renderer();
        this.resources.on('ready', () => {
            this.controller = new Controller();
            this.rayCaster = new RayCaster();
            
        })


        // AXIS DISPLAY
        // const axesHelper = new THREE.AxesHelper(20);
        // axesHelper.position.set(0, 20, 0)
        // axesHelper.setColors(0xff0000, 0x00ff00, 0x0000ff)
        // this.scene.add(axesHelper);



        const light5 = new THREE.HemisphereLight(0xffffff, 0x0000C8, 3);
        light5.position.set(0, 15, -20);
        this.scene.add(light5);
        this.scene.fog = new THREE.Fog(0xcecfcf, 25, 55)

        this.sphereGeo = new THREE.SphereGeometry(15, 32, 16);
        this.sphereMaterial = new THREE.MeshMatcapMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide
        });
        this.sphere = new THREE.Mesh(this.sphereGeo, this.sphereMaterial);
        this.sphere.scale.set(4, 3, 4)
        this.scene.add(this.sphere);


        window.addEventListener("resize", () => {
            this.resize();
        })

        this.resources.on('ready', () => {
            this.time.on('tick', () => {
                this.update();
            })
        })

        this.sounds.playAtmosphere();


    }

    resize() {
        this.sizes.resize();
        this.myCamera.resize();
        this.renderer.resize();

    }

    update() {
        this.myCamera.update();
        this.renderer.update();

        this.bear.update();
        this.cubHead.update();
        //UNCOMMENT TO SHOW FPS ON SCREEN ABOVE CANVAS 
        //this.preformace.update();
        this.island.Update();
    }

    loadAssests() {
        //Load manager info control
        this.assestLoader.onStart = function (url, item, total) {

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

