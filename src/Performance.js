import * as THREE from 'three'
import PWA from './PWA.js'

export default class Performance
{
    constructor()
    {
        this.pwa = new PWA()
        this.resources = this.pwa.resources
        
        // Setup 
        this.filterStrength = 5
        this.frameTime = 0
        this.lastLoop = new Date
        this.intervalSet = null


        this.windowOpen = true
        this.setWindowVisibility()

        
        this.fpsElement = document.getElementById("fps");

    }

    setWindowVisibility() {
        document.addEventListener('visibilitychange', () => {
            if(document.hidden) {
                this.windowOpen = false
            } else {
                this.windowOpen = true
            }
        })
    }

    performanceCheck() {
        // Perform checks every 10 seconds
        if(this.intervalSet === null)
        {
            setInterval(() => {
                this.performanceCheck()
            }, 10000);
            this.intervalSet = true
        }

        // Check Performance
        this.frameRate = 1000/this.frameTime

        this.fpsElement.innerText = "FPS: " + this.frameRate.toFixed(2);
    }

    
    update() {
        this.thisFrameTime = (this.thisLoop=new Date) - this.lastLoop;
        this.frameTime+= (this.thisFrameTime - this.frameTime) / this.filterStrength;
        this.lastLoop = this.thisLoop;
        this.performanceCheck()
    }
}