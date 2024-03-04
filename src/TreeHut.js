import * as THREE from 'three'
import PWA from './PWA'

export default class TreeHut {

    constructor() {
        this.pwa = new PWA();
        this.scene = this.pwa.scene;

        const sphereModel = this.createSphere();

        this.scene.add(sphereModel);
    }

    createSphere() {
        const geometry = new THREE.SphereGeometry(15, 32, 16);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const sphere = new THREE.Mesh(geometry, material);
        return sphere;
    }


}