import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('canvas');

// Create Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('F0F0F0');

// Add Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Add object in space
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#115585', emissive: '#115585' });
const docdecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({ color: '#b4b4b3', emissive: '#b4b4b3' });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(docdecahedron);
scene.add(box);


// Lights
const light = new THREE.SpotLight(0x006769, 50);
light.position.set(1, 2, 1);
scene.add(light);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.render(scene, camera);


// Add Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;


// Animate
function animate() {
  requestAnimationFrame(animate);

  docdecahedron.rotation.x += 0.01;
  docdecahedron.rotation.y += 0.01;

  box.rotation.y += 0.005;

  controls.update();
  renderer.render(scene, camera);
}


// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})


animate();
