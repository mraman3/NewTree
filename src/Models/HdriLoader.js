import * as THREE from 'three'
import PWA from '../PWA'

export default class HdriLoader {

    constructor() {
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.resources = this.pwa.resources

        this.createHDRI();

    }

    createHDRI() {
        this.resources.on('ready', () => {
            this.resource = this.resources.items.lightingHDR
            this.resource.mapping = THREE.EquirectangularReflectionMapping;
            this.scene.environment = this.resource
        })
    }

}