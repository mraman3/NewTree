import * as THREE from 'three'
import PWA from '../PWA'

export default class TreeHut {

    constructor() {
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.resources = this.pwa.resources

        this.createTree();
     }


    createTree() {
        this.resources.on('ready', () => {
            console.log(this.resources.items)
            this.resource = this.resources.items.treeModel
            this.model = this.resource.scene
            this.model.position.y -=5
            this.scene.add(this.model)
            
        })
    }
}