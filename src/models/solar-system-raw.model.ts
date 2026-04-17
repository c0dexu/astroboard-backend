export class SolarSystemBodyRaw {
  id!: string;
  name!: string;
  englishName!: string;
  isPlanet!: boolean;
  moons!: MoonRaw[] | null;

  semimajorAxis!: number;
  perihelion!: number;
  aphelion!: number;
  eccentricity!: number;
  inclination!: number;

  mass!: MassRaw;
  vol!: VolumeRaw;

  density!: number;
  gravity!: number;
  escape!: number;

  meanRadius!: number;
  equaRadius!: number;
  polarRadius!: number;
  flattening!: number;

  dimension!: string;
  sideralOrbit!: number;
  sideralRotation!: number;

  aroundPlanet!: AroundPlanetRaw | null;

  discoveredBy!: string;
  discoveryDate!: string;
  alternativeName!: string;

  axialTilt!: number;
  avgTemp!: number;
  mainAnomaly!: number;
  argPeriapsis!: number;
  longAscNode!: number;

  bodyType!: string;
}

export class MoonRaw {
  moon!: string;
  rel!: string;
}

export class MassRaw {
  massValue!: number;
  massExponent!: number;
}

export class VolumeRaw {
  volValue!: number;
  volExponent!: number;
}

export class AroundPlanetRaw {
  planet!: string;
  rel!: string;
}
