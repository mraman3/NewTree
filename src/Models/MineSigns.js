import * as THREE from 'three'
import PWA from '../PWA.js';
export default class MineSigns {

    constructor() {

        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.resources = this.pwa.resources

        this.resources.on('ready', () => {

            this.resource = this.resources.items.mineSignsModel
            this.model = this.resource.scene
            this.model.position.set(12.3, 0.5, -0.82)

            this.model.scale.set(0.20, 0.20, 0.20)
            this.model.rotateY(1.5)
            
            this.hooideVid = new THREE.MeshBasicMaterial({ map: this.resources.videoTexture.hoodie })
            this.merchVid = new THREE.MeshBasicMaterial({ map: this.resources.videoTexture.merch })
            
            this.vid1 = this.model.children.find(child => child.name === 'vid1')
            this.vid1.material = this.hooideVid           
            this.vid2 = this.model.children.find(child => child.name === 'vid2')
            this.vid2.material = this.merchVid           


            this.resources.video.hoodie.play()
            this.resources.video.merch.play()

            this.scene.add(this.model)
        })
    }

    animate() {
        this.cube.rotation.y += 0.02;
        this.cube.rotation.x += 0.02;
        this.cube.rotation.z += 0.02;

        this.lineBox.rotation.y += 0.02;
        this.lineBox.rotation.x += 0.02;
        this.lineBox.rotation.z += 0.02;
    }

}