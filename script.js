const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('audio');
const lyricsContainer = document.getElementById('lyrics');

// Letras da música (exemplo)
const lyrics = [
  "Primeira linha da música,",
  "Segunda linha da música,",
  "Terceira linha vem depois,",
  "Quarta linha continua,",
  "Quinta linha quase no fim,",
  "Última linha para fechar."
];

lyricsContainer.innerHTML = lyrics.map(line => `<p>${line}</p>`).join('');

let currentLine = 0;
let intervalId;

function scrollLyrics() {
  const lineHeight = lyricsContainer.querySelector('p').offsetHeight;
  lyricsContainer.scrollTop = lineHeight * currentLine;
}

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸';

    intervalId = setInterval(() => {
      currentLine++;
      if (currentLine >= lyrics.length) {
        clearInterval(intervalId);
      } else {
        scrollLyrics();
      }
    }, 3000);

  } else {
    audio.pause();
    playBtn.textContent = '▶';
    clearInterval(intervalId);
  }
});

audio.addEventListener('ended', () => {
  playBtn.textContent = '▶';
  clearInterval(intervalId);
  currentLine = 0;
  lyricsContainer.scrollTop = 0;
});