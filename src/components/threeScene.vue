<template>
  <div ref="threeContainer" class="three-container">
    <div>
      <Writer/>
    </div>
    
  </div>
</template>

<script>
import { PerspectiveCamera, Scene, WebGLRenderer, AmbientLight, DirectionalLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Writer from './IntroWriter.vue';

export default {
  name: 'ThreeScene',

  components: {
    Writer,
  },

  data() {
    return {
      cameraInitialPosition: 5, // Initial camera Z position
    };
  },

  mounted() {
    this.initThreeJS();
    window.addEventListener('resize', this.onWindowResize);
    window.addEventListener('wheel', this.onScroll);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('wheel', this.onScroll);
  },

  methods: {
    initThreeJS() {
      // Set up scene, camera, and renderer
      const scene = new Scene();
      const camera = new PerspectiveCamera(
        75,
        this.$refs.threeContainer.clientWidth / this.$refs.threeContainer.clientHeight,
        0.1,
        1000
      );
      camera.position.z = this.cameraInitialPosition; // Set initial camera position
      const renderer = new WebGLRenderer();
      renderer.setSize(this.$refs.threeContainer.clientWidth, this.$refs.threeContainer.clientHeight);
      this.$refs.threeContainer.appendChild(renderer.domElement);

      // Set background color
      renderer.setClearColor(0xB3E2A7);

      // Add ambient light
      const ambientLight = new AmbientLight(0xffffff); // Soft white light
      scene.add(ambientLight);

      // Add directional light
      const directionalLight = new DirectionalLight(0xffffff); // Brighter white light
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      // Add orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.screenSpacePanning = false;
      controls.maxPolarAngle = Math.PI / 2;
      controls.enableZoom = false;
      controls.enableRotate = false;
  

      // Load the GLTF model
      const gltfloader = new GLTFLoader();
      let model;
      gltfloader.load(
        '/threeAsset/computer.glb', // Replace with your GLTF model path
        gltf => {
          model = gltf.scene;
          scene.add(model);

          // Adjust the position, scale, or rotation of the model
          model.position.set(4, 0, 0); // Move model to the right
          model.scale.set(3, 3, 3); // Increase the size of the model

          // Start rendering loop
          animate();
        },
        undefined,
        error => {
          console.error('Error loading model', error);
        }
      );

      function animate() {
        requestAnimationFrame(animate);

        // Animate the model
        if (model) {
          model.rotation.y += 0.01; // Rotate the model around the Y-axis
        }

        controls.update();
        renderer.render(scene, camera);
      }

      animate();

      this.onWindowResize = () => {
        camera.aspect = this.$refs.threeContainer.clientWidth / this.$refs.threeContainer.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(this.$refs.threeContainer.clientWidth, this.$refs.threeContainer.clientHeight);
      };

      // this.onScroll = event => {
      //   // Adjust camera position based on scroll direction
      //   if (event.deltaY > 0) {
      //     camera.position.z -= 0.2; // Zoom in
      //   } else {
      //     camera.position.z += 0.3; // Zoom out
      //   }
      // };
    },
  },
};
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

</style>
