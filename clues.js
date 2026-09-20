window.HUNT = {
  herName: "Angela",
  fromName: "Malcolm",
  title: "A map for Angela",
  subtitle: "Twelve years from the day we started. Follow the marks.",
  language: "en",
  baseUrl: "https://seithreaper.github.io/for-her/",
  finalUnlock: "09192014",
  pins: [
    { id: "hearth",  n: 1, x: 72,  y: 198, label: "Cookies" },
    { id: "cliff",   n: 2, x: 168, y: 52,  label: "Game room" },
    { id: "lantern", n: 3, x: 258, y: 128, label: "Bedroom" },
    { id: "den",     n: 4, x: 78,  y: 96,  label: "I’m sorry" },
    { id: "cross",   n: 5, x: 168, y: 158, label: "X" }
  ],
  stops: [
    {
      n: 1, pin: "hearth", title: "The first mark",
      quote: "I always try to make you something with lights.",
      quiz: [{ q: "I built you things for our anniversary. One of them needed plexiglass. Do you remember what it was?", a: ["hologram","a hologram","the hologram","holograms","holographic"], image: "media/holo.jpg" }],
      riddle: "On this map, find the warm shore \u2014 flour, heat, the place you make cookies.",
      clue: "The next mark is at The Place You Make Cookies.",
      hint: "Kitchen. Oven. Mixing bowl.",
      image: "media/love.jpg"
    },
    {
      n: 2, pin: "cliff", title: "The glow",
      quiz: [{ q: "You gave me full reign to do whatever I wanted in this space. What space was it?", a: ["game room","the game room","gameroom","gaming room","the gaming room","man cave"], image: "media/gameroom.jpg", clue: "Game room" }],
      riddle: "On this map, find the room with the glow \u2014 screens, a wheel, the late-night shore.",
      clue: "The next mark is in the game room.",
      hint: "Green lights. Wheel. TV.",
      image: "media/gameroom.jpg"
    },
    {
      n: 3, pin: "lantern", title: "Something with lights",
      quote: "I built you a lightbulb Christmas ornament.",
      riddle: "Find the quiet room on the map \u2014 the one that holds you.",
      clue: "This is where you are comfortable now. Unfortunately I’m the one that made sure you don’t leave this room anymore. I’m sorry.",
      hint: "Her bedroom.",
      image: "media/selfie.jpg"
    },
    {
      n: 4, pin: "den", title: "I’m sorry",
      quote: "I’m sorry.",
      riddle: "You are already in the room.",
      clue: "This is where you are comfortable now. Unfortunately I’m the one that made sure you don’t leave this room anymore. I’m sorry.",
      hint: "Stay. The last mark is still in this room.",
      image: "media/dog.jpg"
    },
    { n: 5, pin: "cross", title: "X marks the spot", riddle: "Put your finger on the X.", final: true, letter: "Angela,\n\nSeptember 19, 2014. Twelve years.\n\nI built you a hunt because I wanted you to find something instead of just being handed a card. You already are the treasure. The codes were just a way to make you walk through our house and our pictures on the way here.\n\nThank you for the mornings, the trips, the sofa, the racing wheel, the dog piled on you, and every ordinary day that turned into a life.\n\nHappy anniversary.\nI love you.\n\nMalcolm", images: ["media/love.jpg","media/falls.jpg","media/selfie.jpg","media/dog.jpg","media/family.jpg","media/bath.jpg"], video: "media/race.mp4" }
  ]
};
