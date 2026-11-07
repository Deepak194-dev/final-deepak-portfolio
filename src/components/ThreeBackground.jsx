import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080808, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x080808, 0);
    container.appendChild(renderer.domElement);

    // Particle Embers (Atmospheric Noir Lighting)
    const particleCount = 280;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const goldColor = new THREE.Color(0xC6A15B);
    const redColor = new THREE.Color(0xA4162A);
    const burgundyColor = new THREE.Color(0x5C071B);

    for (let i = 0; i < particleCount; i++) {
      // Distributed in 3D cylindrical volume
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 140;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      // Color variation between gold, blood red and deep burgundy
      const rand = Math.random();
      let c;
      if (rand < 0.45) c = goldColor;
      else if (rand < 0.8) c = redColor;
      else c = burgundyColor;

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      scales[i] = Math.random() * 2.5 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circle particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(255,255,255,0.8)');
    grad.addColorStop(0.7, 'rgba(255,255,255,0.2)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Luxury Geometric Floating Rings
    const ringGeo = new THREE.TorusGeometry(26, 0.15, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xC6A15B,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(20, -10, -20);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    const ringGeo2 = new THREE.TorusGeometry(38, 0.1, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xA4162A,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.position.set(-25, 15, -35);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // Floating 3D Octahedron Core
    const octaGeo = new THREE.OctahedronGeometry(12, 1);
    const octaMat = new THREE.MeshBasicMaterial({
      color: 0xC6A15B,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const octa = new THREE.Mesh(octaGeo, octaMat);
    octa.position.set(35, 10, -30);
    scene.add(octa);

    // Mouse and Scroll tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const handleMouseMove = (e) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.04;
      mouseY = (e.clientY - windowHalfY) * 0.04;
    };

    const handleScroll = () => {
      scrollY = window.scrollY * 0.03;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 0.5;
      camera.position.y = -targetY * 0.5 - scrollY * 0.3;
      camera.lookAt(0, -scrollY * 0.3, 0);

      // Rotate geometric meshes
      ring.rotation.z = elapsedTime * 0.08;
      ring.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.1) * 0.1;
      
      ring2.rotation.y = elapsedTime * 0.05;
      ring2.rotation.x = Math.PI / 4 + Math.cos(elapsedTime * 0.12) * 0.1;

      octa.rotation.x = elapsedTime * 0.15;
      octa.rotation.y = elapsedTime * 0.2;

      // Particle upward drift
      const pos = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] += 0.08; // drift up
        pos[i * 3] += Math.sin(elapsedTime + i) * 0.02; // subtle turbulence

        if (pos[i * 3 + 1] > 70) {
          pos[i * 3 + 1] = -70;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      texture.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
