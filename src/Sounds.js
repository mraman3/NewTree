import PWA from './PWA'
import {Howl, Howler} from 'howler'

import click from '/Sounds/click.wav'
import whoosh from '/Sounds/whoosh.wav'
import atmosphere from '/Sounds/river.wav'

export default class Sounds{
    constructor(){
        this.pwa = new PWA();

        Howler.volume(0.1)
        this.click = new Howl({
            src: [click],
            vol: 0.000001
        })

        this.whoosh = new Howl({
            src: [whoosh],
            vol: 0.005
        })

        this.atmosphere = new Howl({
            src: [atmosphere],
            volume: 0.3,
            loop: true
        })
        
        this.setMute()
    }


    setMute()
    {
        // Set up
        this.muted = typeof this.debug !== 'undefined'
        Howler.mute(this.muted)

        // M Key
        window.addEventListener('keydown', (_event) =>
        {
            if(_event.key === 'm')
            {
                this.muted = !this.muted
                Howler.mute(this.muted)
            }
        })

        // Tab focus / blur
        document.addEventListener('visibilitychange', () =>
        {
            if(document.hidden)
            {
                Howler.mute(true)
            }
            else
            {
                Howler.mute(this.muted)
            }
        })
    }

    playClick(){
        this.click.play();
    }

    playWhoosh(){
        this.whoosh.play();
    }

    playAtmosphere(){
        this.atmosphere.play();
    }

}