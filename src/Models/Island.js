import * as THREE from 'three'
import PWA from '../PWA'

export default class Island {

    constructor() {
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.resources = this.pwa.resources

        this.createIsland();
        
     }


    createIsland() {
        this.resources.on('ready', () => {
            console.log(this.resources.items)
            this.resource = this.resources.items.islandModel
            this.island = this.resource.scene
            this.island.position.set(-2.8, 0, -3.35)

            this.mountain = this.island.children.find(child => child.name === 'mountain')
            this.runeStone = this.island.children.find(child => child.name === 'RuneStone')

            this.greenHouse = this.island.children.find(child => child.name === 'GreenHouse').children.find(child => child.name === 'Plane005_2')
            this.mineCave = this.island.children.find(child => child.name === 'MineCave').children.find(child => child.name === 'Plane006')


            this.lightBeam = this.island.children.find(child => child.name === 'LightBeam')
            this.lightBeam.material.opacity = 0.15               
            this.water = this.island.children.find(child => child.name === 'Water')
            this.water.scale.set(1.75,0.75 ,1.75)

            this.watchBeam = this.island.children.find(child => child.name === 'WatchTower').children.find(child => child.name === 'Cylinder020')
            this.topBase = this.island.children.find(child => child.name === 'TopBase').children.find(child => child.name === 'Mesh013')
            this.topPillars = this.island.children.find(child => child.name === 'TopBase').children.find(child => child.name === 'Mesh013_1')

            this.scene.add(this.island)
        })
    }
}