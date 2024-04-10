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


        //POI HITBOXES -------------------------------------------------------------------------------
        this.mountainHitBox = new THREE.Mesh(
            this.pwa.island.mountain.geometry,
            this.hitBoxMaterial
        )
        this.mountainHitBox.position.set(-0.33, 2, -0.9)
        this.scene.add(this.mountainHitBox);

        //MountainTopHitBox  
        this.mountainTopBaseHitBox = new THREE.Mesh(
            this.pwa.island.topBase.geometry,
            this.hitBoxMaterial
        )
        this.mountainTopBaseHitBox.position.set(-2.8, 0, -3.35)
        this.scene.add(this.mountainTopBaseHitBox);
        this.mountainTopPillarHitBox = new THREE.Mesh(
            this.pwa.island.topPillars.geometry,
            this.hitBoxMaterial
        )
        this.mountainTopPillarHitBox.position.set(-2.8, 0, -3.35)
        this.scene.add(this.mountainTopPillarHitBox);

        //MineHitBox
        this.mineHitBox = new THREE.Mesh(
            this.pwa.island.mineCave.geometry,
            this.hitBoxMaterial
        )
        this.mineHitBox.scale.set(0.48, 0.48, 0.48)
        this.mineHitBox.position.set(13.8, 0.5, -2.67)
        this.scene.add(this.mineHitBox);

        //GreenHouseHitBox
        this.greenHouseHitBox = new THREE.Mesh(
            this.pwa.island.greenHouse.geometry,
            this.hitBoxMaterial
        )
        this.greenHouseHitBox.rotateY(3.38)
        this.greenHouseHitBox.scale.set(0.315, 0.315, 0.315)
        this.greenHouseHitBox.position.set(-0.52, 5.21, -7.4)
        this.scene.add(this.greenHouseHitBox);

        //TopPortalHitBox
        this.topPortalHitBox = new THREE.Mesh(
            this.pwa.island.runeStone.geometry,
            this.hitBoxMaterial
        )
        this.topPortalHitBox.rotateY(1.37)
        this.topPortalHitBox.scale.set(0.75, 0.75, 0.75)
        this.topPortalHitBox.position.set(-3.6, 9.5, -1.5)
        this.scene.add(this.topPortalHitBox);

        //CubHeadHitBox
        this.bearHeadHitbox = new THREE.Mesh(
            this.pwa.cubHead.cubGeo.geometry,
            this.hitBoxMaterial
        )
        this.bearHeadHitbox.rotateY(3.14)
        this.bearHeadHitbox.scale.set(0.10, 0.10, 0.10)
        this.bearHeadHitbox.position.set(-0.58, 6.075, -7.8)
        this.scene.add(this.bearHeadHitbox);

        //unityPortHitbox
        this.unityPortHitbox = new THREE.Mesh(
            this.pwa.island.portGeo.geometry,
            this.hitBoxMaterial
        )
        this.unityPortHitbox.rotateX(1.5708)
        this.unityPortHitbox.position.set(-2.8, 0, -3.35)
        this.scene.add(this.unityPortHitbox);

        //POI
        this.mountainTopBaseHitBox.visible = false
        this.mountainTopPillarHitBox.visible = false
        this.mineHitBox.visible = false
        this.greenHouseHitBox.visible = false
        this.topPortalHitBox.visible = false
        this.mountainHitBox.visible = false
        this.bearHeadHitbox.visible = false
        this.unityPortHitbox.visible = false

        //Sign HitBoxes  ------------------------------------------------------------------------------- 
        //Sign 1
        this.sign1 = new THREE.Mesh(
            this.pwa.signs.sign1.geometry,
            this.hitBoxMaterial
        )
        this.sign1.position.set(-2.48, 1.1, 14.73)
        this.sign1.rotateY(5.12)
        this.sign1.rotateX(0.12)
        this.scene.add(this.sign1);

        //sign 2
        this.sign2 = new THREE.Mesh(
            this.pwa.signs.sign2.geometry,
            this.hitBoxMaterial
        )
        this.sign2.position.set(-1.45, 1.88, 14.46)
        this.sign2.rotateY(4.8)
        this.sign2.rotateX(1.6)
        this.scene.add(this.sign2);

        //sign 3
        this.sign3 = new THREE.Mesh(
            this.pwa.signs.sign3.geometry,
            this.hitBoxMaterial
        )
        this.sign3.position.set(-1.465, 1.37, 14.51)
        this.sign3.rotateY(1.57)
        this.sign3.rotateZ(3.14)
        this.sign3.rotateX(6.11)
        this.sign3.scale.set(10, 1, 1)
        this.scene.add(this.sign3);

        //sign 4
        this.sign4 = new THREE.Mesh(
            this.pwa.signs.sign4.geometry,
            this.hitBoxMaterial
        )
        this.sign4.position.set(-1.42, 0.97, 14.51)
        this.sign4.rotateY(4.61)
        this.sign4.rotateX(6.185)
        this.scene.add(this.sign4);

        //sign 5
        this.sign5 = new THREE.Mesh(
            this.pwa.signs.sign5.geometry,
            this.hitBoxMaterial
        )
        this.sign5.position.set(-0.43, 1.15, 14.765)
        this.sign5.rotateY(1.05)
        this.sign5.rotateX(6.79)
        this.scene.add(this.sign5);

        this.sign1.visible = false
        this.sign2.visible = false
        this.sign3.visible = false
        this.sign4.visible = false
        this.sign5.visible = false

        //Back Signs HitBoxes  ------------------------------------------------------------------------------- 
        this.back1 = new THREE.Mesh(
            this.pwa.signs.sign1.geometry,
            this.hitBoxMaterial
        )
        this.back1.scale.set(1.5, 1.25, 1.25)
        this.back1.rotateY(3.14)
        this.back1.position.set(-7, 8.23, -2.58)
        this.scene.add(this.back1);

        this.back2 = new THREE.Mesh(
            this.pwa.signs.sign1.geometry,
            this.hitBoxMaterial
        )
        this.back2.scale.set(1.5, 1.25, 1.25)
        this.back2.rotateY(3.75)
        this.back2.position.set(2.35, 14.4, 0.92)
        this.scene.add(this.back2);

        this.back3 = new THREE.Mesh(
            this.pwa.signs.sign1.geometry,
            this.hitBoxMaterial
        )
        this.back3.scale.set(1.5, 1.25, 1.25)
        this.back3.rotateY(.75)
        this.back3.position.set(-2.1, 5.27, -7.86)
        this.scene.add(this.back3);

        this.back4 = new THREE.Mesh(
            this.pwa.signs.sign1.geometry,
            this.hitBoxMaterial
        )
        this.back4.scale.set(1.5, 1.25, 1.25)
        this.back4.rotateY(.75)
        this.back4.position.set(12.83, 1.35, 1.75)
        this.scene.add(this.back4);

        this.back1.visible = false
        this.back2.visible = false
        this.back3.visible = false
        this.back4.visible = false

        //HitBox Array
        this.hitBoxesToTest = [
            //signs
            this.sign1,
            this.sign2,
            this.sign3,
            this.sign4,
            this.sign5,
            //POIS

            this.bearHeadHitbox,
            this.mountainTopBaseHitBox,
            this.mountainTopPillarHitBox,
            this.mineHitBox,
            this.greenHouseHitBox,
            this.unityPortHitbox,
            this.topPortalHitBox,
            this.mountainHitBox
        ]

        this.buttonsToTest = [
            this.back1,
            this.back2,
            this.back3,
            this.back4
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
        this.intersectsObjects = this.raycaster.intersectObjects(this.buttonsToTest)
        if (this.intersectsObjects.length) {
            this.selectedButton = this.intersectsObjects[0].object
            switch (this.selectedButton) {
                //backs 
                case this.back1:
                case this.back2:
                case this.back4:
                    console.log("pressed")
                    this.myCamera.disbleControls();
                    this.myCamera.camAngles.homeDock();
                    this.myCamera.transitions.homeDock();
                    setTimeout(() => {
                        this.myCamera.enableControls();
                    }, 2000);
                    break

                case this.back3:
                    console.log("pressed")
                    this.myCamera.disbleControls();
                    this.myCamera.transitions.default();
                    setTimeout(() => {
                        this.myCamera.camAngles.homeDock();
                        this.myCamera.enableControls();
                    }, 2000);
                    break
            }

        }
        //Object click listener
        this.intersectsHitBox = this.raycaster.intersectObjects(this.hitBoxesToTest)
        if (this.intersectsHitBox.length) {
            this.selectedHitBox = this.intersectsHitBox[0].object
            switch (this.selectedHitBox) {
                case this.bearHeadHitbox:
                    this.path = "Z:/Documents/Code Tests and Stuff/NewTree/Assets/DeskMap.png";
                    this.img = '<img src="' + this.path + '">';
                    this.popup = window.open();
                    this.popup.document.write(this.img);
                    this.popup.print();
                    break


                case this.unityPortHitbox:
                    window.open("https://cubhub.netlify.app/")
                    break

                case this.sign2:
                case this.mountainTopBaseHitBox:
                case this.mountainTopPillarHitBox:
                    this.myCamera.disbleControls();
                    this.myCamera.transitions.topBaseTransition()
                    setTimeout(() => {
                        this.myCamera.camAngles.topBaseAngle()
                        this.myCamera.enableControls();
                    }, 2000);
                    break

                case this.sign4:
                case this.mineHitBox:
                    this.myCamera.disbleControls();
                    this.myCamera.transitions.caveMineTransition();
                    setTimeout(() => {
                        this.myCamera.camAngles.mineAngle();
                        this.myCamera.enableControls();
                    }, 2000);
                    break

                case this.greenHouseHitBox:
                    this.myCamera.disbleControls();
                    this.myCamera.transitions.greenHouseTransition();
                    setTimeout(() => {
                        this.myCamera.camAngles.greenHouseAngle();
                        this.myCamera.enableControls();
                    }, 2000);
                    break

                case this.sign3:
                case this.topPortalHitBox:
                    this.myCamera.disbleControls();
                    this.myCamera.transitions.topPortalTransition();
                    setTimeout(() => {
                        this.myCamera.enableControls();
                        this.myCamera.camAngles.topPortalAngle();
                    }, 2000);
                    break

                case this.sign5:
                    this.myCamera.disbleControls();
                    this.myCamera.transitions.greenHouseArcTransition();
                    setTimeout(() => {
                        this.myCamera.camAngles.greenHouseAngle();
                        this.myCamera.enableControls();
                    }, 4000);
                    break

                case this.sign1:
                    break
            }


        }

    }



}
