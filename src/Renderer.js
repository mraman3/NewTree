import * as THREE from 'three'
import PWA from './PWA'

export default class Renderer{
    constructor(){
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.canvas = this.pwa.canvas;
        this.myCamera = this.pwa.myCamera;
        this.sizes = this.pwa.sizes;

        this.createRenderer();
        this.instance.render(this.scene, this.myCamera.instance);
        
    }

    createRenderer(){
        this.instance = new THREE.WebGLRenderer({canvas: this.canvas});
        this.instance.setSize(this.sizes.width, this.sizes.height);
    }

    resize(){
        this.instance.setSize(this.sizes.width, this.sizes.height);
    }

    update(){
        this.instance.render(this.scene, this.myCamera.instance);
    }

}