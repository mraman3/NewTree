import * as THREE from 'three'
import PWA from '../PWA'

export default class BackSign {

    constructor() {
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.resources = this.pwa.resources

        this.createSigns();
        
     }


    createSigns() {
        this.resources.on('ready', () => {
            this.resource = this.resources.items.backModel
            this.model = this.resource.scene
            this.model.position.set(-2.8, 0, -3.35)    
            this.scene.add(this.model)
        })
    }
}