import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import PWA from './PWA';

export default class MyCamera{
    constructor(){
        this.pwa = new PWA();
        this.canvas = this.pwa.canvas;
        this.scene = this.pwa.scene;
        this.sizes = this.pwa.sizes;


        this.createCamera();        
        this.setControls();
    }

    createCamera(){
        this.instance = new THREE.PerspectiveCamera(45, this.sizes.width/this.sizes.height)
        this.instance.position.z = 20;
        this.scene.add(this.instance);
    }

    resize(){
        this.instance.aspect = this.sizes.width/this.sizes.height;
        this.instance.updateProjectionMatrix();
    }

    setControls(){
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.controls.enablePan = true
        this.controls.rotateSpeed = 1.2
        this.controls.zoomSpeed = 0.8
        this.controls.target.z = -1
        this.controls.enableRotate = true
        this.controls.enableZoom = true
    }

}