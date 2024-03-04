import * as THREE from 'three'
import PWA from './PWA'

export default class TreeHut {

    constructor() {
        this.pwa = new PWA();
        this.scene = this.pwa.scene;

        this.createSphere();
        this.createLights();
        this.scene.add(this.instance);
    }

    createSphere() {
        const geometry = new THREE.SphereGeometry(3, 64, 64);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0x00ff83 
        });
        this.instance = new THREE.Mesh(geometry, material);
    }

    createLights(){
        const light = new THREE.PointLight(0xffffff, 100, 100)
        light.position.set(0, 10, 10)
        this.scene.add(light)
    }

}