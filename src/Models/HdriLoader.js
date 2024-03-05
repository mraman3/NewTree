import * as THREE from 'three'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import PWA from '../PWA'

export default class HdriLoader {

    constructor() {
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.assestLoader = this.pwa.assestLoader
        
        this.createHDRI(this.scene);
        
    }

    createHDRI(passedScene) {
        const rgbeLoader = new RGBELoader(this.assestLoader);
        rgbeLoader.load('Assets/MR_INT-002_BathroomHard_Pierre.hdr', function (texture) {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            passedScene.environment = texture;
        });
    }

}