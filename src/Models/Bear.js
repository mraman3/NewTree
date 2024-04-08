import * as THREE from 'three'
import PWA from '../PWA.js';

export default class Bear {
    constructor() {
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.resources = this.pwa.resources
        this.time = this.pwa.time;
        this.animationReady = false;

        this.createBear();

    }

    createBear() {
        this.resources.on('ready', () => {
            this.resource = this.resources.items.bearModel
            this.bear = this.resource.scene

            this.bear.scale.set(0.5, 0.5, 0.5)
            this.bear.position.set(-0.1, 14.55, 0)

            this.mixer = new THREE.AnimationMixer(this.bear);
            this.action = this.mixer.clipAction(this.resource.animations[0]);
            this.action.play()

            this.animationReady = true;

            this.scene.add(this.bear)

        })

    }

    update() {
        if(this.animationReady == true){
            this.mixer.update(this.time.delta/1000);
        }
    }

}