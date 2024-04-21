import PWA from "./PWA.js";

export default class Controller {
    constructor() {

        this.pwa = new PWA();
        this.myCamera = this.pwa.myCamera;
        this.sounds = this.pwa.sounds;

        this.playWhooshBool = true

        this.setCamControls();
        this.setInteractiveControls();
    }



    setCamControls() {
        this.camControls = {}

        this.camControls.back124 = () => {
            this.sounds.playClick();
            setTimeout(() => {
                this.sounds.playWhoosh();
                this.myCamera.disbleControls();
                this.myCamera.camAngles.homeDock();
                this.myCamera.transitions.homeDock();
                setTimeout(() => {
                    this.myCamera.enableControls();
                }, 2000);
            }, 500);
            this.playWhooshBool = true
        }

        this.camControls.back3 = () => {
            this.sounds.playClick();
            setTimeout(() => {
                this.sounds.playWhoosh();
                this.myCamera.disbleControls();
                this.myCamera.transitions.default();
                setTimeout(() => {
                    this.myCamera.camAngles.homeDock();
                    this.myCamera.enableControls();
                }, 2000);
            }, 500);
            this.playWhooshBool = true
        }

        this.camControls.topBase = () => {
            this.sounds.playClick();
            setTimeout(() => {
                if (this.playWhooshBool == true) {
                    this.sounds.playWhoosh();
                    this.playWhooshBool = false
                }
                this.myCamera.disbleControls();
                this.myCamera.transitions.topBaseTransition()
                setTimeout(() => {
                    this.myCamera.camAngles.topBaseAngle()
                    this.myCamera.enableControls();
                }, 2000);
            }, 500);
        }

        this.camControls.mineCave = () => {
            this.sounds.playClick();
            setTimeout(() => {
                if (this.playWhooshBool == true) {
                    this.sounds.playWhoosh();
                    this.playWhooshBool = false
                }
                this.myCamera.disbleControls();
                this.myCamera.transitions.caveMineTransition();
                setTimeout(() => {
                    this.myCamera.camAngles.mineAngle();
                    this.myCamera.enableControls();
                }, 2000);
            }, 500);
        }

        this.camControls.greenHouse = () => {
            this.sounds.playClick();
            setTimeout(() => {
                if (this.playWhooshBool == true) {
                    this.sounds.playWhoosh();
                    this.playWhooshBool = false
                }
                this.myCamera.disbleControls();
                this.myCamera.transitions.greenHouseTransition();
                setTimeout(() => {
                    this.myCamera.camAngles.greenHouseAngle();
                    this.myCamera.enableControls();
                }, 2000);
            }, 500);
        }

        this.camControls.topPort = () => {
            this.sounds.playClick();
            setTimeout(() => {
                if (this.playWhooshBool == true) {
                    this.sounds.playWhoosh();
                    this.playWhooshBool = false
                }
                this.myCamera.disbleControls();
                this.myCamera.transitions.topPortalTransition();
                setTimeout(() => {
                    this.myCamera.enableControls();
                    this.myCamera.camAngles.topPortalAngle();
                }, 2000);
            }, 500);
        }

        this.camControls.greenSign = () => {
            this.sounds.playClick();
            setTimeout(() => {
                if (this.playWhooshBool == true) {
                    this.sounds.playWhoosh();
                    this.playWhooshBool = false
                }
                this.myCamera.disbleControls();
                this.myCamera.transitions.greenHouseArcTransition();
                setTimeout(() => {
                    this.myCamera.camAngles.greenHouseAngle();
                    this.myCamera.enableControls();
                }, 2000);
            }, 500);
        }
    }

    setInteractiveControls() {
        this.interactiveControls = {}

        this.interactiveControls.bearHead = () => {
            this.sounds.playClick();
            window.open("https://www.cubhubx.com/")
        }

        this.interactiveControls.unityPort = () => {
            this.sounds.playClick();
            window.open("https://cubhub.netlify.app/")
        }
    }

}