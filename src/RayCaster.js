import * as THREE from 'three';
import PWA from './PWA.js';

export default class RayCaster {

    constructor() {
        this.pwa = new PWA();
        this.scene = this.pwa.scene;
        this.sizes = this.pwa.sizes;
        this.myCamera = this.pwa.myCamera;

        this.raycaster = new THREE.Raycaster();
        this.cursorDown = new THREE.Vector2();
        this.cursor = new THREE.Vector2();

        this.hitBoxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })


        //POI HITBOXES 
        this.mountainHitBox = new THREE.Mesh(
            new THREE.BoxGeometry(6, 15, 7),
            this.hitBoxMaterial
        )
        this.mountainHitBox.position.set(0.5, 6, -1)
        this.scene.add(this.mountainHitBox);

        //MountainTopHitBox
        this.mountainTopHitBox = new THREE.Mesh(
            new THREE.BoxGeometry(3.9, 2, 3.9),
            this.hitBoxMaterial
        )
        this.mountainTopHitBox.position.set(0, 15, 0)
        this.scene.add(this.mountainTopHitBox);

        //MineHitBox
        this.mineHitBox = new THREE.Mesh(
            new THREE.BoxGeometry(4.8, 2.8, 4.8),
            this.hitBoxMaterial
        )
        this.mineHitBox.position.set(12.4, 2, -0.76)
        this.scene.add(this.mineHitBox);

        //GreenHouseHitBox
        this.greenHouseHitBox = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 2.5, 4),
            this.hitBoxMaterial
        )
        this.greenHouseHitBox.position.set(-0.6, 5, -8.6)
        this.scene.add(this.greenHouseHitBox);

        //TopPortalHitBox
        this.topPortalHitBox = new THREE.Mesh(
            new THREE.BoxGeometry(4.8, 4.8, 3.5),
            this.hitBoxMaterial
        )
        this.topPortalHitBox.position.set(-5.2, 10, -1)
        this.scene.add(this.topPortalHitBox);

        this.mountainTopHitBox.visible = false
        this.mineHitBox.visible = false
        this.greenHouseHitBox.visible = false
        this.topPortalHitBox.visible = false
        this.mountainHitBox.visible = false

        //HitBox Array
        this.hitBoxesToTest = [
            this.mountainTopHitBox,
            this.mineHitBox,
            this.greenHouseHitBox,
            this.topPortalHitBox,
            this.mountainHitBox
        ]

        this.touchedPoints = []
        window.addEventListener('pointerdown', (event) => {
            this.touchedPoints.push(event.pointerId)

            this.cursorXMin = Math.abs((event.clientX / this.sizes.width * 2 - 1) * 0.9)
            this.cursorXMax = Math.abs((event.clientX / this.sizes.width * 2 - 1) * 1.1)

            this.cursorYMin = Math.abs((event.clientY / this.sizes.height * 2 - 1) * 0.9)
            this.cursorYMax = Math.abs((event.clientY / this.sizes.height * 2 - 1) * 1.1)

        })

        // Click listener
        window.addEventListener('pointerup', (event) => {
            this.cursor.x = event.clientX / this.sizes.width * 2 - 1
            this.cursor.y = - (event.clientY / this.sizes.height) * 2 + 1

            this.absX = Math.abs(this.cursor.x)
            this.absY = Math.abs(this.cursor.y)

            if (this.touchedPoints.length === 1 &&
                this.absX > this.cursorXMin && this.absX < this.cursorXMax &&
                this.absY > this.cursorYMin && this.absY < this.cursorYMax) {
                this.click(this.cursor)

                this.touchedPoints = []
            }
            else { this.touchedPoints = [] }
        })
    }

    click(cursor) {
        this.raycaster.setFromCamera(cursor, this.myCamera.instance)

        //Object click listener
        this.intersectsHitBox = this.raycaster.intersectObjects(this.hitBoxesToTest)
        if (this.intersectsHitBox.length) {
            this.selectedHitBox = this.intersectsHitBox[0].object

            switch (this.selectedHitBox) {
                // Menu
                case this.mountainTopHitBox:
                    this.myCamera.disbleControls();
                    this.myCamera.topBaseTransition();
                    setTimeout(() => {
                        this.myCamera.enableControls();
                    }, 5000);
                    break

                case this.mineHitBox:
                    this.myCamera.disbleControls();
                    this.myCamera.caveMineTransition();
                    setTimeout(() => {
                        this.myCamera.enableControls();
                    }, 5000);
                    break

                case this.greenHouseHitBox:
                    this.myCamera.disbleControls();
                    this.myCamera.greenHouseTransition();
                    setTimeout(() => {
                        this.myCamera.enableControls();
                    }, 5000);
                    break

                case this.topPortalHitBox:
                    this.myCamera.disbleControls();
                    this.myCamera.topPortalTransition();
                    setTimeout(() => {
                        this.myCamera.enableControls();
                    }, 5000);
                    break

            }


        }

    }



}
