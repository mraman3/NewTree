import * as THREE from 'three'
import PWA from './PWA'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'


export default class Renderer {
    constructor() {
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.canvas = this.pwa.canvas;
        this.myCamera = this.pwa.myCamera;
        this.sizes = this.pwa.sizes;

        this.createRenderer();
        this.postProc()

    }


    postProc() {
        this.renderScene = new RenderPass(this.scene, this.myCamera.instance)
        this.composer = new EffectComposer(this.instance)
        this.composer.addPass(this.renderScene)
        this.bloomPass = new UnrealBloomPass(
            new THREE.Vector2(this.sizes.width, this.sizes.height),
            0.06,
            0.1,
            0.1
        );
        this.composer.addPass(this.bloomPass)
    }

    createRenderer() {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas
        });
        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(2)
    }

    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.composer.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(2)
    }

    update() {
        this.composer.render();
        //this.instance.render(this.scene, this.myCamera.instance);
        this.composer.setPixelRatio(Math.min(window.devicePixelRatio, 2), 2)
    }

}