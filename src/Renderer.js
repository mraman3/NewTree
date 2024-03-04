import * as THREE from 'three'
import PWA from './PWA'

export default class Renderer{
    constructor(){
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.canvas = this.pwa.canvas;
        this.camera = this.pwa.camera;

        this.createRenderer();
        this.instance.render(this.scene, this.pwa.camera.instance);
        
    }

    createRenderer(){
        this.instance = new THREE.WebGLRenderer(this.canvas);
        this.instance.setSize(800, 600)
    }


}