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
            this.model = this.resource.scene
            this.model.position.set(-2.8, 0, -3.35)

            this.mountain = this.model.children.find(child => child.name === 'mountain')

            this.lightBeam = this.model.children.find(child => child.name === 'LightBeam')
            this.lightBeam.material.opacity = 0.15   
            
            
            this.water = this.model.children.find(child => child.name === 'Water')
            this.water.scale.set(1.5,0.75 ,1.5)

            this.scene.add(this.model)
        })
    }
}