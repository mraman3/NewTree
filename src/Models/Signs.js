import * as THREE from 'three'
import PWA from '../PWA'

export default class Signs {

    constructor() {
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.resources = this.pwa.resources

        this.createSigns();
        
     }


    createSigns() {
        this.resources.on('ready', () => {
            this.resource = this.resources.items.signsModel
            this.model = this.resource.scene
            this.model.position.set(-2.3, 0.2, 14.4)
            this.model.rotateY(4.7)
            
            const light = new THREE.PointLight(0xffffff, 4, 0);
            light.position.set(-1.8, 1.5, 15.6);
            this.scene.add(light);

            this.sign1 = this.model.children.find(child => child.name === 'sign1')
            this.sign2 = this.model.children.find(child => child.name === 'sign2')
            this.sign3 = this.model.children.find(child => child.name === 'sign3')
            this.sign4 = this.model.children.find(child => child.name === 'sign4')
            this.sign5 = this.model.children.find(child => child.name === 'sign5')

            this.scene.add(this.model)
        })
    }
}