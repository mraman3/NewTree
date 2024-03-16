import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from 'gsap'
import PWA from './PWA';

export default class MyCamera {
    constructor() {
        this.pwa = new PWA();
        this.canvas = this.pwa.canvas;
        this.scene = this.pwa.scene;
        this.sizes = this.pwa.sizes;


        this.createCamera();
        this.setControls();


    }

    createCamera() {
        this.instance = new THREE.PerspectiveCamera(45, this.sizes.width / this.sizes.height)
        this.instance.position.x = -3.2;
        this.instance.position.y = 2.5;
        this.instance.position.z = 26.5;
        this.scene.add(this.instance);
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
        console.log("X : " + this.instance.position.x + "z : " + this.instance.position.z + "y : " + this.instance.position.y)
    }

    update() {
        this.controls.update()
    }

    setControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.enableControls();

    }

    enableControls() {
        this.controls.enablePan = true
        this.controls.enableRotate = true
        this.controls.enableZoom = true
    }

    disbleControls() {
        this.controls.enablePan = false
        this.controls.enableRotate = false
        this.controls.enableZoom = false
    }

    topBaseTransition() {
        gsap.to(this.instance.position, {
            duration: 5, ease: "power1.inOut",
            x: 0,
            y: 15,
            z: 2.5,
        })
        gsap.to(this.controls.target, {
            duration: 5,
            ease: "power1.inOut",
            x: 0,
            y: 15,
            z: 0
        })
    }

    topPortalTransition() {
        gsap.to(this.instance.position, {
            duration: 5, ease: "power1.inOut",
            x: -8.3,
            y: 8,
            z: -1.4,
        })
        gsap.to(this.controls.target, {
            duration: 5,
            ease: "power1.inOut",
            x: -6.8,
            y: 8.5,
            z: -1.2,
        })
    }

    greenHouseTransition() {
        gsap.to(this.instance.position, {
            duration: 5, ease: "power1.inOut",
            x: -0.5,
            y:  5.3,
            z: -10.7,
        })
        gsap.to(this.controls.target, {
            duration: 5,
            ease: "power1.inOut",
            x: -0.5,
            y:  5.3,
            z: -7.8,
        })
    }

    caveMineTransition() {
        gsap.to(this.instance.position, {
            duration: 5, ease: "power1.inOut",
            x: 14.8,
            y: 1.03,
            z: 0.05,
        })
        gsap.to(this.controls.target, {
            duration: 5,
            ease: "power1.inOut",
            x: 12.3,
            y:  1.05,
            z: -0.8,
        })
    }

}