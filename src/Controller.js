import PWA from "./PWA.js";

export default class Controller {
    constructor() {

        this.pwa = new PWA();
        this.myCamera = this.pwa.myCamera;
        this.sounds = this.pwa.sounds;

        this.playWhooshBool = true
        this.isTopPortal = false

        this.isTopPortal = false
        this.isTopBase = false
        this.isMineCave = false
        this.isGreenHouse = false
        this.isFree = true

        const btns = document.querySelector('.btnGroup');
        const buttonHideTime = 6000

        this.setCamControls();
        this.setInteractiveControls();
        this.setButtonControls();

        document.getElementById("Top").onclick = function () {
            btns.style.display = 'none';
            this.pwa = new PWA();
            this.controller = this.pwa.controller
            this.myCamera = this.pwa.myCamera


            this.isTopBase = this.controller.isTopBase
            this.isTopPortal = this.controller.isTopPortal
            this.isMineCave = this.controller.isMineCave
            this.isGreenHouse = this.controller.isGreenHouse
            this.isFree = this.controller.isFree

            this.sounds = this.pwa.sounds
            this.sounds.playClick()
            if (this.isTopBase == true) {

            } else if (this.isTopPortal == true) {
                this.myCamera.camAngles.homeDock()
                this.myCamera.transitions.negX();
                setTimeout(() => {
                    this.controller.buttonControls.topBase()
                }, 2000);
            } else if (this.isMineCave == true) {
                this.myCamera.camAngles.homeDock()
                this.myCamera.transitions.posX();
                setTimeout(() => {
                    this.controller.buttonControls.topBase()
                }, 2000);
            } else if (this.isGreenHouse == true) {
                this.myCamera.camAngles.homeDock()
                this.myCamera.transitions.negZ();
                setTimeout(() => {
                    this.controller.buttonControls.topBase()
                }, 2000);
            } else if (this.isFree == true) {
                this.controller.buttonControls.topBase()
            }
            setTimeout(() => {
                btns.style.display = 'inline-flex';
            }, buttonHideTime);
        }

        document.getElementById("Abyss").onclick = function () {
            btns.style.display = 'none';
            this.pwa = new PWA();
            this.controller = this.pwa.controller
            this.myCamera = this.pwa.myCamera

            this.isTopBase = this.controller.isTopBase
            this.isTopPortal = this.controller.isTopPortal
            this.isMineCave = this.controller.isMineCave
            this.isGreenHouse = this.controller.isGreenHouse
            this.isFree = this.controller.isFree

            this.sounds = this.pwa.sounds
            this.sounds.playClick()
            if (this.isTopBase == true) {
                this.myCamera.camAngles.homeDock()
                this.myCamera.transitions.posZ();
                setTimeout(() => {
                    this.controller.buttonControls.topPortal()
                }, 2000);
            } else if (this.isTopPortal == true) {

            } else if (this.isMineCave == true) {
                this.myCamera.camAngles.homeDock()
                this.myCamera.transitions.posX();
                setTimeout(() => {
                    this.controller.buttonControls.topPortal()
                }, 2000);
            } else if (this.isGreenHouse == true) {
                this.myCamera.camAngles.homeDock()
                this.myCamera.transitions.negZ();
                setTimeout(() => {
                    this.controller.buttonControls.topPortal()
                }, 2000);
            } else if (this.isFree == true) {
                this.controller.buttonControls.topPortal()
            }
            setTimeout(() => {
                btns.style.display = 'inline-flex';
            }, buttonHideTime);
        }

        document.getElementById("Collectables").onclick = function () {
            btns.style.display = 'none';
            this.pwa = new PWA();
            this.controller = this.pwa.controller
            this.myCamera = this.pwa.myCamera

            this.isTopBase = this.controller.isTopBase
            this.isTopPortal = this.controller.isTopPortal
            this.isMineCave = this.controller.isMineCave
            this.isGreenHouse = this.controller.isGreenHouse
            this.isFree = this.controller.isFree

            this.sounds = this.pwa.sounds
            this.sounds.playClick()
            if (this.isTopBase == true) {
                this.myCamera.camAngles.homeDock()
                this.myCamera.transitions.posZ();
                setTimeout(() => {
                    this.controller.buttonControls.mineCave();
                }, 2000);
            } else if (this.isTopPortal == true) {
                this.myCamera.camAngles.homeDock()
                this.myCamera.transitions.negX();
                setTimeout(() => {
                    this.controller.buttonControls.mineCave();
                }, 2000);
            } else if (this.isMineCave == true) {

            } else if (this.isGreenHouse == true) {
                this.myCamera.camAngles.homeDock()
                this.myCamera.transitions.negZ();
                setTimeout(() => {
                    this.controller.buttonControls.mineCave();
                }, 2000);

            } else if (this.isFree == true) {
                this.controller.buttonControls.mineCave();
            }
            setTimeout(() => {
                btns.style.display = 'inline-flex';
            }, buttonHideTime);
        }

        document.getElementById("Coming").onclick = function () {
            btns.style.display = 'none';
            this.pwa = new PWA();

            this.controller = this.pwa.controller
            this.myCamera = this.pwa.myCamera

            this.isTopBase = this.controller.isTopBase
            this.isTopPortal = this.controller.isTopPortal
            this.isMineCave = this.controller.isMineCave
            this.isGreenHouse = this.controller.isGreenHouse
            this.isFree = this.controller.isFree

            this.sounds = this.pwa.sounds
            this.sounds.playClick()
            if (this.isTopBase == true) {
                this.myCamera.camAngles.homeDock()
                this.myCamera.transitions.posZ();
                setTimeout(() => {
                    this.controller.buttonControls.greenHouse();
                }, 2000);
            } else if (this.isTopPortal == true) {
                this.myCamera.camAngles.homeDock()
                this.myCamera.transitions.negX();
                setTimeout(() => {
                    this.controller.buttonControls.greenHouse();
                }, 2000);
            } else if (this.isMineCave == true) {
                this.myCamera.camAngles.homeDock()
                this.myCamera.transitions.posX();
                setTimeout(() => {
                    this.controller.buttonControls.greenHouse();
                }, 2000);
            } else if (this.isGreenHouse == true) {

            } else if (this.isFree == true) {
                this.controller.buttonControls.greenHouse();
            }
            setTimeout(() => {
                btns.style.display = 'inline-flex';
            }, buttonHideTime);

        }
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
            //Locations tracker
            this.isTopPortal = false
            this.isTopBase = false
            this.isMineCave = false
            this.isGreenHouse = false
            this.isFree = true
        }

        this.camControls.back3 = () => {
            this.sounds.playClick();
            setTimeout(() => {
                this.sounds.playWhoosh();
                this.myCamera.disbleControls();
                this.myCamera.transitions.negZ();
                setTimeout(() => {
                    this.myCamera.camAngles.homeDock();
                    this.myCamera.enableControls();
                }, 2000);
            }, 500);
            this.playWhooshBool = true
            //Locations tracker
            this.isTopPortal = false
            this.isTopBase = false
            this.isMineCave = false
            this.isGreenHouse = false
            this.isFree = true
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
            //Locations tracker
            this.isTopPortal = false
            this.isTopBase = true
            this.isMineCave = false
            this.isGreenHouse = false
            this.isFree = false
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
            //Locations tracker
            this.isTopPortal = false
            this.isTopBase = false
            this.isMineCave = true
            this.isGreenHouse = false
            this.isFree = false
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
            //Locations tracker
            this.isTopPortal = false
            this.isTopBase = false
            this.isMineCave = false
            this.isGreenHouse = true
            this.isFree = false
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
            //Locations tracker
            this.isTopPortal = true
            this.isTopBase = false
            this.isMineCave = false
            this.isGreenHouse = false
            this.isFree = false
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
            //Locations tracker
            this.isTopPortal = false
            this.isTopBase = false
            this.isMineCave = false
            this.isGreenHouse = true
            this.isFree = false
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

    setButtonControls() {
        this.buttonControls = {}

        this.buttonControls.topBase = () => {
            setTimeout(() => {
                this.sounds.playWhoosh();
                this.playWhooshBool = false
                this.myCamera.disbleControls();
                this.myCamera.transitions.topBaseTransition()
                setTimeout(() => {
                    this.myCamera.camAngles.topBaseAngle()
                    this.myCamera.enableControls();
                }, 2000);
            }, 500);
            //Locations tracker
            this.isTopPortal = false
            this.isTopBase = true
            this.isMineCave = false
            this.isGreenHouse = false
            this.isFree = false
        }

        this.buttonControls.mineCave = () => {
            setTimeout(() => {
                this.sounds.playWhoosh();
                this.playWhooshBool = false
                this.myCamera.disbleControls();
                this.myCamera.transitions.caveMineArcTransistion();
                setTimeout(() => {
                    this.myCamera.camAngles.mineAngle();
                    this.myCamera.enableControls();
                }, 3000);
            }, 500);
            //Locations tracker
            this.isTopPortal = false
            this.isTopBase = false
            this.isMineCave = true
            this.isGreenHouse = false
            this.isFree = false
        }

        this.buttonControls.topPortal = () => {
            setTimeout(() => {
                this.sounds.playWhoosh();
                this.playWhooshBool = false
                this.myCamera.disbleControls();
                this.myCamera.transitions.topPortalArcTransistion();
                setTimeout(() => {
                    this.myCamera.enableControls();
                    this.myCamera.camAngles.topPortalAngle();
                }, 2000);
            }, 500);
            //Locations tracker
            this.isTopPortal = true
            this.isTopBase = false
            this.isMineCave = false
            this.isGreenHouse = false
            this.isFree = false
        }

        this.buttonControls.greenHouse = () => {
            setTimeout(() => {
                this.sounds.playWhoosh();
                this.playWhooshBool = false
                this.myCamera.disbleControls();
                this.myCamera.transitions.greenHouseArcTransition();
                setTimeout(() => {
                    this.myCamera.camAngles.greenHouseAngle();
                    this.myCamera.enableControls();
                }, 2000);
            }, 500);
            //Locations tracker
            this.isTopPortal = false
            this.isTopBase = false
            this.isMineCave = false
            this.isGreenHouse = true
            this.isFree = false
        }
    }
}