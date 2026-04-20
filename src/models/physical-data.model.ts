export class ValueExponentData {
  value!: number;
  exponent!: number;
}

export class SolarSystemBodyDimension {
  width!: number;
  height!: number;
  breadth!: number;
}

export class PhysicalData {
  mass?: ValueExponentData;
  volume?: ValueExponentData;
  density!: number;
  gravity!: number;
  flattening!: number;
  avgTemp!: number;
  axialTilt!: number;
  meanRadius!: number;
  equaRadius!: number;
  dimension?: SolarSystemBodyDimension;
}
