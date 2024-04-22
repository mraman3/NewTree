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

        this.camDegree;

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

        this.transitions.negZ = () => {
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

        this.transitions.posZ = () => {
            gsap.to(this.instance.position, {
                duration: 2, ease: "power1.inOut",
                z: 22
            })
            gsap.to(this.controls.target, {
                duration: 2,
                ease: "power1.inOut",
                x: 0,
                y: 7,
                z: 0,
            })
        }

        this.transitions.posX = () => {
            gsap.to(this.instance.position, {
                duration: 2, ease: "power1.inOut",
                x: 22
            })
            gsap.to(this.controls.target, {
                duration: 2,
                ease: "power1.inOut",
                x: 0,
                y: 7,
                z: 0,
            })
        }

        this.transitions.negX = () => {
            gsap.to(this.instance.position, {
                duration: 2, ease: "power1.inOut",
                x: -22
            })
            gsap.to(this.controls.target, {
                duration: 2,
                ease: "power1.inOut",
                x: 0,
                y: 7,
                z: 0,
            })
        }

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
                y: 6,
                z: -13,
            })
            gsap.to(this.controls.target, {
                duration: 2,
                ease: "power1.inOut",
                x: -0.5,
                y: 6,
                z: -8,
            })
        }

        this.transitions.caveMineTransition = () => {
            gsap.to(this.instance.position, {
                duration: 2, ease: "power1.inOut",
                x: 17,
                y: 2,
                z: 0,
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
            this.controls.autoRotateSpeed = 30
            this.controls.autoRotate = true
            this.checkGreenHouse = true
        }

        this.transitions.caveMineArcTransistion = () => {
            this.controls.autoRotateSpeed = -30
            this.controls.autoRotate = true
            this.checkMineCave = true
        }

        this.transitions.topPortalArcTransistion = () => {
            this.controls.autoRotateSpeed = 30
            this.controls.autoRotate = true
            this.checkTopPort = true
        }
    }

    setCamAngles() {
        this.camAngles = {}

        this.camAngles.homeDock = () => {
            this.controls.enableRotate = true
            this.controls.minPolarAngle = 0
            this.controls.maxPolarAngle = 1.855
            this.controls.minAzimuthAngle = 0
            this.controls.maxAzimuthAngle = Infinity
        }

        this.camAngles.topBaseAngle = () => {
            this.controls.enableRotate = true
            this.controls.minPolarAngle = 0
            this.controls.maxPolarAngle = 1.6
            this.controls.minAzimuthAngle = -2.4
            this.controls.maxAzimuthAngle = 1.7
        }

        this.camAngles.mineAngle = () => {
            this.controls.enableRotate = true
            this.controls.minPolarAngle = 0
            this.controls.maxPolarAngle = 1.6
            this.controls.minAzimuthAngle = 0
            this.controls.maxAzimuthAngle = 3.3
        }

        this.camAngles.topPortalAngle = () => {
            this.controls.minPolarAngle = 0
            this.controls.maxPolarAngle = 1.855
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
    }

    update() {
        this.controls.update()
        this.camDegree = this.controls.getAzimuthalAngle() * (180 / Math.PI)

        if (this.checkGreenHouse == true) {
            if (this.camDegree >= -176 && this.camDegree <= -150) {
                this.controls.autoRotate = false
                this.checkGreenHouse = false

                this.camAngles.homeDock()
                this.transitions.greenHouseTransition()
            }
        } else if (this.checkMineCave == true) {
            if (this.camDegree >= 80 && this.camDegree <= 120) {
                this.controls.autoRotate = false
                this.checkMineCave = false

                this.camAngles.homeDock()
                this.transitions.caveMineTransition()
            }
        } else if (this.checkTopPort == true) {
            if (this.camDegree >= -135 && this.camDegree <= -70) {
                this.controls.autoRotate = false
                this.checkTopPort = false

                this.camAngles.homeDock()
                this.transitions.topPortalTransition()
            }
        }
    }
}