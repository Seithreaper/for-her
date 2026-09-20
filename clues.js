/* ============================================================
   EDIT THIS FILE. This is the whole treasure hunt.
   Photos/audio go in /media/
   After editing, commit/push. GitHub Pages updates in ~1 minute.
   ============================================================ */

window.HUNT = {
  herName: "amor",
  fromName: "Malcolm",
  title: "Un tesoro para vos",
  subtitle: "Escaneá cada código. Cada uno abre la siguiente pista.",
  language: "es",
  baseUrl: "https://seithreaper.github.io/for-her/",
  finalUnlock: "",

  stops: [
    {
      n: 1,
      title: "Pista 1",
      clue: "Empezamos acá. El siguiente código está donde arranca el día — cerca de donde guardamos las tazas.",
      hint: "Cocina. Pensá en café.",
      image: "",
      audio: ""
    },
    {
      n: 2,
      title: "Pista 2",
      clue: "Bien. Ahora buscá el lugar donde el mundo se apaga un rato y solo quedamos nosotros.",
      hint: "Donde nos sentamos a ver algo juntos.",
      image: "",
      audio: ""
    },
    {
      n: 3,
      title: "Pista 3",
      clue: "Casi. El próximo código está entre páginas — el libro que dejaste a medio leer.",
      hint: "Mesa de luz o estante.",
      image: "",
      audio: ""
    },
    {
      n: 4,
      title: "Pista 4",
      clue: "Último escondite: donde te ves antes de salir. Algo pequeño, pegado al borde.",
      hint: "Espejo o tocador.",
      image: "",
      audio: ""
    },
    {
      n: 5,
      title: "Llegaste",
      final: true,
      clue: "",
      letter: "Amor,\n\nReemplazá este texto con lo que querés que ella lea al final.\n\nPodés pegar fotos abajo en images y un audio si querés que suene algo.\n\nTe quiero.",
      images: [],
      audio: ""
    }
  ]
};
