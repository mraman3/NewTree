import * as THREE from 'three';

import TreeHut from './TreeHut';
import Camera from './Camera';
import Renderer from './Renderer';

let instance = null;
export default class PWA{

    constructor(passedCanvas){

        if(instance){
            return instance;
        }
        instance = this
        
        window.scene = this

        this.canvas = passedCanvas
        this.scene = new THREE.Scene();
        this.treeHut = new TreeHut();
        this.camera = new Camera();
        this.renderer = new Renderer();
        
        console.log("End")
    }

  
}