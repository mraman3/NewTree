import PWA from '../PWA.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import EventEmitter from './EventEmitter.js'

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

        this.setLoaders()
        this.startLoading()
    }

    setLoaders() {
        this.loaders = {}

        this.loaders.gltfLoader = new GLTFLoader(this.assestLoader)
        this.loaders.rgbeLoader = new RGBELoader(this.assestLoader);



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
            else if (source.type === 'HDR') {
                this.loaders.rgbeLoader.load(source.path,
                    (file) => {
                        this.sourceLoaded(source, file)
                    }
                )
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