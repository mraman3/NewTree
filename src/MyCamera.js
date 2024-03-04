import * as THREE from 'three'
import PWA from './PWA'

export default class MyCamera{
    constructor(){
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.sizes = this.pwa.sizes;

        this.createCamera();
        console.log("Camera Instance Created ");
        
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

}