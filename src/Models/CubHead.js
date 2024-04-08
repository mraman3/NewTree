import * as THREE from 'three'
import PWA from '../PWA'

export default class CubHead {

    constructor() {
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.time = this.pwa.time;
        this.resources = this.pwa.resources
        this.animationReady = false;

        this.createHead();
        
     }


    createHead() {
        this.resources.on('ready', () => {
            this.resource = this.resources.items.cubHeadModel
            this.model = this.resource.scene
            this.model.position.set(-0.58, 5.8, -7.8)
            this.model.scale.set(0.15,0.15,0.15)
            this.model.rotateY(3.14)

            this.mixer = new THREE.AnimationMixer(this.model);
            this.action = this.mixer.clipAction(this.resource.animations[0]);
            this.action.play()

            this.animationReady = true;
            

            this.scene.add(this.model)
        })
    }


    update() {
        if(this.animationReady == true){
            this.mixer.update(this.time.delta/400);
        }
    }
}

