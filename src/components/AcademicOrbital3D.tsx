import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { CollegeCrest } from './CollegeCrest';

/**
 * Lightweight, procedural Three.js composite 3D Academic Armillary Monument
 * Styled in Sambhram Royal Blue (#363789), Sambhram Red (#EC3237), and Charcoal (#202124).
 */
export function AcademicOrbital3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [fallbackMode, setFallbackMode] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || window.innerWidth < 768) {
      setFallbackMode(true);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let frameId = 0;

    try {
      const probeCanvas = document.createElement('canvas');
      const gl = probeCanvas.getContext('webgl2') || probeCanvas.getContext('webgl');
      if (!gl) {
        setFallbackMode(true);
        return;
      }
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const gpuStr = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : '';
      const isSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpuStr);
      gl.getExtension('WEBGL_lose_context')?.loseContext();

      const width = container.clientWidth || 320;
      const height = container.clientHeight || 320;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      camera.position.set(0, 0.4, 5.2);

      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      // Lighting rig
      const hemi = new THREE.HemisphereLight(0xe8eaf6, 0x202124, 1.2);
      scene.add(hemi);
      const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
      keyLight.position.set(4, 5, 4);
      scene.add(keyLight);
      const rimLight = new THREE.DirectionalLight(0x9fa8da, 1.0);
      rimLight.position.set(-4, -2, -3);
      scene.add(rimLight);

      // Composite 6-part Academic Armillary Group in Sambhram brand colors
      const armillaryGroup = new THREE.Group();

      const redMat = new THREE.MeshStandardMaterial({
        color: 0xec3237,
        metalness: 0.45,
        roughness: 0.25,
      });
      const blueMat = new THREE.MeshStandardMaterial({
        color: 0x363789,
        metalness: 0.45,
        roughness: 0.35,
      });
      const charcoalMat = new THREE.MeshStandardMaterial({
        color: 0x202124,
        metalness: 0.6,
        roughness: 0.4,
      });

      const outerRing = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.055, 20, 64), redMat);
      outerRing.rotation.x = Math.PI / 5;
      armillaryGroup.add(outerRing);

      const midRing = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.045, 18, 56), blueMat);
      midRing.rotation.y = Math.PI / 3;
      armillaryGroup.add(midRing);

      const innerRing = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.035, 16, 48), charcoalMat);
      innerRing.rotation.z = Math.PI / 4;
      armillaryGroup.add(innerRing);

      const coreIcosahedron = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 0), blueMat);
      armillaryGroup.add(coreIcosahedron);

      const axisRod = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 3.2, 16), charcoalMat);
      axisRod.rotation.z = 0.32;
      armillaryGroup.add(axisRod);

      const orbitalNode = new THREE.Mesh(new THREE.SphereGeometry(0.11, 20, 20), redMat);
      orbitalNode.position.set(1.45, 0, 0);
      outerRing.add(orbitalNode);

      scene.add(armillaryGroup);

      const clock = new THREE.Clock();

      const renderFrame = () => {
        const dt = Math.min(clock.getDelta(), 0.05);
        armillaryGroup.rotation.y += dt * 0.32;
        outerRing.rotation.z += dt * 0.25;
        midRing.rotation.x += dt * 0.3;
        coreIcosahedron.rotation.y -= dt * 0.45;
        renderer?.render(scene, camera);

        if (isSoftwareGl) {
          frameId = window.setTimeout(() => {
            frameId = requestAnimationFrame(renderFrame);
          }, 90);
        } else {
          frameId = requestAnimationFrame(renderFrame);
        }
      };

      renderFrame();

      const handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth || 320;
        const h = container.clientHeight || 320;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(frameId);
        clearTimeout(frameId);
        armillaryGroup.traverse((obj) => {
          if (obj instanceof THREE.Mesh) {
            obj.geometry.dispose();
          }
        });
        redMat.dispose();
        blueMat.dispose();
        charcoalMat.dispose();
        renderer?.dispose();
        if (renderer?.domElement && renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      };
    } catch {
      setFallbackMode(true);
    }
  }, []);

  if (fallbackMode) {
    return (
      <div className="flex flex-col items-center justify-center h-64 w-full rounded-xl bg-white border border-slate-200 p-6 text-center">
        <CollegeCrest size="lg" />
        <p className="mt-4 text-xs font-medium text-[#68778A]">
          Official Sambhram Institutions Emblem
        </p>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      aria-label="Interactive 3D academic orbital emblem"
      className="h-72 w-full rounded-xl bg-[#E8EAF6] border border-[#363789]/15 overflow-hidden"
    />
  );
}
