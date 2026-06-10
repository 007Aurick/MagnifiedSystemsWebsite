export const whatWeDoIntro = {
  kicker: 'Magnified Systems',
  title: 'What we do',
  lead:
    'We build wearable impact monitoring that mounts on helmets, measures collision forces in real time, and helps riders know when a hit is serious enough to stop and get checked.',
};

export const focusCards = [
  {
    id: 'product',
    tag: 'The product',
    title: 'Wearable impact intelligence',
    body:
      'A compact sensor clips onto any helmet. Accelerometers and gyroscopes capture every hit, on-board processing classifies severity, and data syncs to the cloud so you can act fast.',
    image: '/Image3.png',
    imageAlt: 'On-helmet sensor module with LED severity indicator',
    featured: true,
  },
  {
    id: 'motorcycle',
    tag: 'Primary focus',
    title: 'Motorcycle helmets',
    body:
      'Most of our work today is built for motorcycle and powersport riders — high-speed impacts, hard hits, and the need for reliable detection without changing how your helmet feels.',
    image: '/Image1.png',
    imageAlt: 'Motorcycle helmet with impact detection sensor',
  },
  {
    id: 'bike',
    tag: 'Primary focus',
    title: 'Bike helmets',
    body:
      'The same module works on bicycle helmets for commuters and road cyclists. From a low-speed tumble to a serious collision, you get a clear signal when it is time to stop riding.',
    image: '/Image3.png',
    imageAlt: 'Helmet-mounted sensor for cyclists',
  },
  {
    id: 'sports',
    tag: 'Coming next',
    title: 'Team sports',
    body:
      'After motorcycle and bike, we are planning expansion into sports — football, hockey, lacrosse, and more. One sensor platform, many helmets.',
    image: '/Startup.png',
    imageAlt: 'Magnified Systems logo',
    comingSoon: true,
  },
];

export const systemCard = {
  tag: 'Under the hood',
  title: 'Signal processing on the edge',
  body:
    'An ESP32-based board filters accelerometer data in real time, detects waveform peaks, and classifies impact severity before anything reaches your dashboard — so alerts are fast and meaningful.',
  image: '/Image2.png',
  imageAlt: 'ESP32 signal processing board schematic',
};
