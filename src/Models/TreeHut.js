import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import PWA from '../PWA'

export default class TreeHut {

    constructor() {
        this.pwa = new PWA();
        this.scene = this.pwa.scene;

        this.createTree(this.scene);
        this.createLights();

    }


    createTree(passedScene) {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('Assets/TreeHut.glb', function (glb) {
            glb.scene.position.y -= 5
            passedScene.add(glb.scene);
        })
    }


    // createSphere() {
    //     const geometry = new THREE.SphereGeometry(3, 64, 64);
    //     const material = new THREE.MeshStandardMaterial({
    //         color: 0x00ff83
    //     });
    //     this.instance = new THREE.Mesh(geometry, material);
    // }

    createLights() {
        const light = new THREE.PointLight(0xffffff, 100, 100)
        light.position.set(0, 10, 10)
        this.scene.add(light)
    }

}