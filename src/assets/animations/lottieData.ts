// Lightweight procedural Lottie JSON animations aligned to Sambhram Red & Royal Blue

export const academicCompassLottie = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 90,
  w: 120,
  h: 120,
  nm: 'AcademicOrbital',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'OuterRing',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: [0] }, { t: 90, s: [360] }] },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: 'el',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [92, 92] },
          nm: 'Ring',
        },
        {
          ty: 'st',
          c: { a: 0, k: [0.925, 0.196, 0.216, 1] }, // Sambhram Red #EC3237
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3 },
          lc: 2,
          d: [
            { n: 'd', nm: 'dash', v: { a: 0, k: 18 } },
            { n: 'g', nm: 'gap', v: { a: 0, k: 12 } },
          ],
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'InnerCore',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: [0] }, { t: 90, s: [-360] }] },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [94, 94, 100] }, { t: 45, s: [104, 104, 100] }, { t: 90, s: [94, 94, 100] }] },
      },
      shapes: [
        {
          ty: 'el',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [54, 54] },
          nm: 'Core',
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.212, 0.216, 0.537, 0.12] },
          o: { a: 0, k: 100 },
        },
        {
          ty: 'st',
          c: { a: 0, k: [0.212, 0.216, 0.537, 1] }, // Royal Blue #363789
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3 },
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: 'CenterRedDot',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: 'el',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [16, 16] },
          nm: 'Center',
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.925, 0.196, 0.216, 1] },
          o: { a: 0, k: 100 },
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
  ],
};

export const admissionProcessLottie = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 90,
  w: 120,
  h: 120,
  nm: 'AdmissionPulse',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'DocumentFrame',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 1, k: [{ t: 0, s: [60, 62, 0] }, { t: 45, s: [60, 56, 0] }, { t: 90, s: [60, 62, 0] }] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: 'rc',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [64, 78] },
          r: { a: 0, k: 10 },
          nm: 'Sheet',
        },
        {
          ty: 'fl',
          c: { a: 0, k: [1, 1, 1, 1] },
          o: { a: 0, k: 100 },
        },
        {
          ty: 'st',
          c: { a: 0, k: [0.212, 0.216, 0.537, 1] }, // Royal Blue #363789
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3.5 },
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'RedRibbon',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 1, k: [{ t: 0, s: [60, 44, 0] }, { t: 45, s: [60, 38, 0] }, { t: 90, s: [60, 44, 0] }] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: 'rc',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [38, 8] },
          r: { a: 0, k: 4 },
          nm: 'Bar1',
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.925, 0.196, 0.216, 1] }, // Sambhram Red #EC3237
          o: { a: 0, k: 100 },
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: 'LineTwo',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 1, k: [{ t: 0, s: [60, 62, 0] }, { t: 45, s: [60, 56, 0] }, { t: 90, s: [60, 62, 0] }] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: 'rc',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [38, 6] },
          r: { a: 0, k: 3 },
          nm: 'Bar2',
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.212, 0.216, 0.537, 0.45] },
          o: { a: 0, k: 100 },
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
  ],
};
