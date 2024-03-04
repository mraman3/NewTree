import * as THREE from 'three'
import PWA from './PWA'

export default class Renderer{
    constructor(){
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.canvas = this.pwa.canvas;
        this.camera = this.pwa.camera;

        this.instance = this.createRenderer();
        this.instance.render(this.scene, this.camera);
        
    }

    createRenderer(){
        const renderer = new THREE.WebGLRenderer(this.canvas);
        renderer.setSize(800, 600)
        return renderer;
    }


}