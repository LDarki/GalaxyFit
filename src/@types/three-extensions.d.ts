declare module "three/examples/jsm/loaders/GLTFLoader" {
  import { Loader } from "three";
  export class GLTFLoader extends Loader {
    load(...args: any[]): any;
  }
}

declare module "three/examples/jsm/controls/OrbitControls" {
  import { Camera, EventDispatcher } from "three";
  export class OrbitControls extends EventDispatcher {
    constructor(object: Camera, domElement: HTMLElement);
    target: any;
    update(): void;
    dispose(): void;
    getAzimuthalAngle(): number;
    enablePan: boolean;
    enableRotate: boolean;
    enableZoom: boolean;
    minPolarAngle: number;
    maxPolarAngle: number;
  }
}
