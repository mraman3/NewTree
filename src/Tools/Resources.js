import * as THREE from 'three'
import PWA from '../PWA.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import EventEmitter from './EventEmitter.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

export default class Resources extends EventEmitter {
    constructor(sources) {
        super()

        this.pwa = new PWA()
        this.sources = sources
        this.renderer = this.pwa.renderer
        this.assestLoader = this.pwa.assestLoader

        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0

        this.video = {}
        this.videoTexture = {}

        this.setLoaders()
        this.startLoading()
    }

    setLoaders() {
        this.loaders = {}
        this.loaders.dracoLoader = new DRACOLoader
        this.loaders.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/')
        this.loaders.gltfLoader = new GLTFLoader(this.assestLoader)
        this.loaders.rgbeLoader = new RGBELoader(this.assestLoader);
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)



    }

    startLoading() {
        // Load each source
        for (const source of this.sources) {

            if (source.type === 'gltfModel') {
                this.loaders.gltfLoader.load(
                    source.path,
                    (file) => {
                        this.sourceLoaded(source, file)
                    }
                )
            }
            else if (source.type === 'videoTexture') {
                this.video[source.name] = document.createElement('video')

                this.video[source.name].src = source.path

                this.video[source.name].muted = true
                this.video[source.name].playsInline = true
                this.video[source.name].autoplay = true
                this.video[source.name].loop = true

                this.videoTexture[source.name] = new THREE.VideoTexture(this.video[source.name])
                this.videoTexture[source.name].minFilter  = THREE.NearestFilter;
                this.videoTexture[source.name].magFilter  = THREE.NearestFilter;
                this.videoTexture[source.name].generateMipmaps = false
                this.videoTexture[source.name].encoding = THREE.sRGBEncoding
                

                this.sourceLoaded(source, this.videoTexture[source.name])

            }
        }
    }

    sourceLoaded(source, file) {
        this.trigger('itemLoaded')


        this.items[source.name] = file
        this.loaded++

        if (this.loaded === this.toLoad) {
            this.trigger('ready')
        }
    }
}