import * as THREE from 'three'
import PWA from './PWA'

export default class Camera{
    constructor(){
        this.pwa = new PWA();
        this.scene = this.pwa.scene
        
        this.createCamera();
        console.log("Camera Instance Created ");
    
    }

    createCamera(){
        this.instance = new THREE.PerspectiveCamera(45, 800/600)
        this.scene.add(this.instance);
    }

}