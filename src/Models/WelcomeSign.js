import * as THREE from 'three'
import PWA from '../PWA'

export default class WelcomeSign {

    constructor() {
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.resources = this.pwa.resources

        this.createSign();

    }


    createSign() {
        this.resources.on('ready', () => {
            this.resource = this.resources.items.welcomeSignModel
            this.model = this.resource.scene
            this.model.position.set(-1.7, 0.2, 15.5)
            this.model.rotateY(-0.2)

            this.postMat = new THREE.MeshStandardMaterial({ color: 0x562B00 });
            this.signMat = new THREE.MeshStandardMaterial({ color: 0x964B00 });
            this.textMat = new THREE.MeshMatcapMaterial({ color: 0xFFFDD0 });
            this.ivyMat = new THREE.MeshStandardMaterial({ color: 0x306000 });

            this.post1 = this.model.children.find(child => child.name === 'Post1')
            this.post2 = this.model.children.find(child => child.name === 'Post2')
            this.post1.material = this.postMat
            this.post2.material = this.postMat

            this.sign = this.model.children.find(child => child.name === 'Sign')
            this.sign.material = this.signMat

            this.text = this.model.children.find(child => child.name === 'Text')
            this.text.material = this.textMat

            this.vines = this.model.children.find(child => child.name === 'Vine')
     
            this.vines.material = this.ivyMat
            
            this.scene.add(this.model)
        })
    }
}