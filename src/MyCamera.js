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
        this.setTransitions();

    }

    createCamera() {
        this.instance = new THREE.PerspectiveCamera(45, this.sizes.width / this.sizes.height)
        this.instance.position.x = -3.2;
        this.instance.position.y = 1;
        this.instance.position.z = 22;
        this.scene.add(this.instance);
    }

    setControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.enableControls();
        this.setCamAngles();
        this.controls.target = new THREE.Vector3(0, 7, 0)

        this.camAngles.homeDock()
    }

    setTransitions() {
        this.transitions = {}

        this.transitions.homeDock = () => {
            gsap.to(this.instance.position, {
                duration: 2, ease: "power1.inOut",
                x: -3.2,
                y: 1,
                z: 22,
            })
            gsap.to(this.controls.target, {
                duration: 2,
                ease: "power1.inOut",
                x: 0,
                y: 7,
                z: 0,
            })
        }

        this.transitions.default = () => {
            console.log(this.instance.position.z)
            if (this.instance.position.z > 0) {
                this.zVal = 22;
            } else if (this.instance.position.z < 0) {
                this.zVal = -22;
            }
            gsap.to(this.instance.position, {
                duration: 2, ease: "power1.inOut",
                z: -22
            })
            gsap.to(this.controls.target, {
                duration: 2,
                ease: "power1.inOut",
                x: 0,
                y: 7,
                z: 0,
            })
        }

        this.transitions.topBaseTransition = () => {
            gsap.to(this.instance.position, {
                duration: 2, ease: "power1.inOut",
                x: 0,
                y: 15.6,
                z: 4.8,
            })
            gsap.to(this.controls.target, {
                duration: 2,
                ease: "power1.inOut",
                x: 0,
                y: 15,
                z: 0
            })
        }

        this.transitions.topPortalTransition = () => {
            gsap.to(this.instance.position, {
                duration: 2, ease: "power1.inOut",
                x: -10.4,
                y: 8,
                z: -1.5,
            })
            gsap.to(this.controls.target, {
                duration: 2,
                ease: "power1.inOut",
                x: 0,
                y: 10.5,
                z: 0,
            })
        }

        this.transitions.greenHouseTransition = () => {
            gsap.to(this.instance.position, {
                duration: 2, ease: "power1.inOut",
                x: -0.5,
                y: 5.3,
                z: -10.7,
            })
            gsap.to(this.controls.target, {
                duration: 2,
                ease: "power1.inOut",
                x: -0.5,
                y: 5.8,
                z: -8,
            })
        }

        this.transitions.caveMineTransition = () => {
            gsap.to(this.instance.position, {
                duration: 2, ease: "power1.inOut",
                x: 17,
                y: 2,
                z: -1.8,
            })
            gsap.to(this.controls.target, {
                duration: 2,
                ease: "power1.inOut",
                x: 12.3,
                y: 1.5,
                z: -0.8,
            })
        }

        this.transitions.greenHouseArcTransition = () => {
            this.controls.autoRotateSpeed = 20
            this.controls.autoRotate = true
            this.checkVal = true
        }
    }

    setCamAngles() {
        this.camAngles = {}

        this.camAngles.homeDock = () => {
            this.controls.enableRotate = true
            this.controls.minPolarAngle = 0
            this.controls.maxPolarAngle = 1.855
            this.controls.minAzimuthAngle = 0
            this.controls.maxAzimuthAngle = Math.PI * 1.999
        }

        this.camAngles.topBaseAngle = () => {
            this.controls.enableRotate = true
            this.controls.minPolarAngle = 0
            this.controls.maxPolarAngle = 1.6
        }

        this.camAngles.mineAngle = () => {
            this.controls.enableRotate = true
            this.controls.minPolarAngle = 0
            this.controls.maxPolarAngle = 1.6
            this.controls.minAzimuthAngle = 0
            this.controls.maxAzimuthAngle = 3.3
        }

        this.camAngles.topPortalAngle = () => {
            this.controls.enableRotate = false
        }

        this.camAngles.greenHouseAngle = () => {
            this.controls.enableRotate = true
            this.controls.minPolarAngle = 0.7
            this.controls.maxPolarAngle = 1.85
            this.controls.minAzimuthAngle = 1.5
            this.controls.maxAzimuthAngle = 4.5
        }
    }

    checkZ() {
        if (this.instance.position.z <= -21) {
            this.controls.autoRotate = false
            this.checkVal = false
            this.transitions.greenHouseTransition()
        }
        
    }

    enableControls() {
        this.controls.enablePan = false
        this.controls.enableRotate = true
        this.controls.enableZoom = false
    }

    disbleControls() {
        this.controls.enablePan = false
        this.controls.enableRotate = false
        this.controls.enableZoom = false
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
        console.log("X : " + this.instance.position.x + "z : " + this.instance.position.z + "y : " + this.instance.position.y)
    }

    update() {
        this.controls.update()
        if (this.checkVal == true) {
            this.checkZ()
        }
    }
}