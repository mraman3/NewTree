import * as THREE from 'three'
import PWA from '../PWA.js';
export default class Vids {

    constructor() {

        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.resources = this.pwa.resources
        
        this.resources.on('ready', () => {
            const geometry = new THREE.PlaneGeometry(15, 20);
            this.newnew = new THREE.MeshBasicMaterial({ map: this.resources.videoTexture.R6 })
            const plane = new THREE.Mesh(geometry, this.newnew);
            this.resources.video.R6.play()
            plane.position.set(6, 10, 6);

            this.scene.add(plane)

        })
    }

}