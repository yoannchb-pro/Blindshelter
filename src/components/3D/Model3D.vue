<template>
  <div ref="container" class="w-full max-w-full relative h-ytb-phone lg:h-ytb flex justify-center text-black" 
  style="background-color: #292524" lazy-observe>
      <!-- CURSOR DEMONSTRATION -->
      <img class="absolute -top-2 right-2 w-14 animate-pulse" lazy-animation="opacity" 
      lazy-src="/static/3d/hand.gif" alt="cursor"/>

      <!-- SCENE -->
      <div id="render" class="flex justify-center items-center h-full">
        <div v-if="!finish" id="loading" class="z-10 flex flex-col p-5 items-center justify-center absolute bg-white">
          <span v-if="!error">{{ pourcentage }} %</span>

          <h3 v-if="error" class="text-lg uppercase text-red-500">Error</h3>
          <span v-if="error" class="text-red-500">{{ error }}</span>
        </div>
      </div>
  </div>
</template>

<script>
//THREE JS
import * as THREE from 'three/build/three.module.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
//local
import model3d from "./model.js"
export default {
    name: "3DCars",
    data(){
      return {
        scene: null,
        camera: null,
        pourcentage: 0,
        finish: false,
        error: false
      }
    },
    mounted(){
      //lazy loading 3D model
      this.$refs.container.addEventListener('lazy-loaded', () => this.render3D(), {once: true});
    },
    unmounted(){
      window.removeEventListener('orientationchange', this.resizeCanvas);
      window.removeEventListener('resize', this.resizeCanvas);
    },
    methods: {
      render3D(){
        console.log('Rendering 3D model ....');
        
        const container = this.$refs.container;
        const width = container.offsetWidth;
        const height = container.offsetHeight;

        const sceneExist = document.querySelector('#scene');
        if(sceneExist) sceneExist.remove();
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 10000 );
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize( width , height );
        renderer.setPixelRatio(window.devicePixelRatio);
        const controls = new OrbitControls( camera, renderer.domElement );
        // Create a directional light
        const ambientLight = new THREE.HemisphereLight(0xddeeff, 0x202020, model3d.ambientLight);
        const mainLight = new THREE.DirectionalLight(0xffffff, 3.0);
        // remember to add the light to the scene
        scene.add(ambientLight, mainLight)
        // instantiate a loader
        const loader = new OBJLoader();
        // load a resource
        let model;
        const materialsLoader = new MTLLoader();
        // called when loading has errors
        const vueElement = this;
        const errorHandler = (error) => {
          vueElement.error = error;
        }

        //textures
        if(model3d.texture) {

          materialsLoader.load(model3d.texture, function (materialsCreator) {
            loader.setMaterials(materialsCreator);
            loader.load(model3d.src, function (obj) {
                camera.position.set(model3d.position.x,model3d.position.y,model3d.position.z);
                model = obj;
                obj.rotation.z = model3d.rotation.z;
                obj.rotation.x = model3d.rotation.x;
                obj.rotation.y = model3d.rotation.y;
                scene.add( obj );
                controls.update();
            }, (xhr) => {
              if( xhr.lengthComputable ) vueElement.pourcentage = Math.round((xhr.loaded / xhr.total) * 100 );
              if((vueElement.pourcentage >= 100) && !vueElement.error) vueElement.finish = true;
            }, errorHandler);
        }, (xhr) => {
          if( xhr.lengthComputable ) vueElement.pourcentage = Math.round((xhr.loaded / xhr.total) * 100 );
        }, errorHandler);

        //without textures
        } else {
            loader.load(model3d.src, function (obj) {
                camera.position.set(model3d.position.x,model3d.position.y,model3d.position.z);
                model = obj;
                obj.rotation.z = model3d.rotation.z;
                obj.rotation.x = model3d.rotation.x;
                obj.rotation.y = model3d.rotation.y;
                scene.add( obj );
                controls.update();
            }, (xhr) => {
              if( xhr.lengthComputable ) vueElement.pourcentage = Math.round((xhr.loaded / xhr.total) * 100 );
              if((vueElement.pourcentage >= 100) && !vueElement.error) vueElement.finish = true;
            }, errorHandler);
        }


        camera.lookAt(0, 0, 0);
        const animate = function() {
          requestAnimationFrame(animate);
      
          if (model && model3d.animate) {
            model.rotation.y += 0.001;
          }
      
          renderer.render(scene, camera);
        };
      
        animate();
        renderer.domElement.id = "scene";
        renderer.domElement.classList.add('max-w-full');
        document.querySelector('#render').appendChild( renderer.domElement );
        this.scene = renderer;
        this.camera = camera;

        window.addEventListener('orientationchange', this.resizeCanvas);
        window.addEventListener('resize', this.resizeCanvas);
      },
      },
      resizeCanvas(){
        const container = this.$refs.container;
        const width = container.offsetWidth;
        const height = container.offsetHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.scene.setSize( width , height );
      }
    }
</script>