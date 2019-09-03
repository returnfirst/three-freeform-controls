import * as THREE from "three";
import { DEFAULT_RADIAL_SEGMENTS } from "../utils/constants";

export default class Cylinder extends THREE.Mesh {
  constructor(color: string) {
    super();
    this.geometry = new THREE.CylinderGeometry(1, 1, 1, DEFAULT_RADIAL_SEGMENTS);
    this.material = new THREE.MeshBasicMaterial({ color });
  }
}
