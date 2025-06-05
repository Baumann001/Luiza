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

// O conteúdo das letras que você tinha no HTML, mova para cá, no array 'lyrics'.
// Eu vou manter o exemplo simplificado, mas você pode colar as suas letras completas aqui,
// linha por linha, dentro das aspas e separadas por vírgula.
// Por exemplo:
// const lyrics = [
//   "I'ma care for you",
//   "I'ma care for you, you, you, you",
//   "", // Linha em branco, se houver no original
//   "[Verse 1]",
//   "You make it look like it's magic (Oh, yeah)",
//   "..."
// ];


// Atenção: As letras que você colou no HTML estavam dentro de uma única tag <p>.
// Para que o script funcione corretamente com a rolagem, cada linha da música
// deve ser um item separado no array 'lyrics'. Eu vou usar as letras do seu exemplo
// que você tinha no HTML para te mostrar como ficaria.
const fullLyrics = `I'ma care for you
I'ma care for you, you, you, you

[Verse 1]
You make it look like it's magic (Oh, yeah)
'Cause I see nobody, nobody but you, you, you
I'm never confused
Hey, hey
And I'm so used to bein' used

[Pre-Chorus]
So I love when you call unexpected
'Cause I hate when the moment's expected
So I'ma care for you, you, you
I'ma care for you, you, you, you, yeah

[Chorus]
'Cause girl, you're perfect
You're always worth it
And you deserve it
The way you work it
'Cause girl, you earned it, yeah
Girl, you earned it, yeah

[Verse 2]
You know our love would be tragic (Oh, yeah)
So you don't pay it, don't pay it no mind, mind, mind
We live with no lies
Hey, hey
You're my favorite kind of night

[Pre-Chorus]
So I love when you call unexpected
'Cause I hate when the moment's expected
So I'ma care for you, you, you
I'ma care for you, you, you, you, yeah

[Chorus]
'Cause girl, you're perfect (Girl, you're perfect)
You're always worth it (Always worth it)
And you deserve it (And you deserve it)
The way you work it (The way you work it)
'Cause girl, you earned it, yeah (Earned it)
Girl, you earned it, yeah

[Bridge]
On that lonely night (Lonely night)
We said it wouldn't be love
But we felt the rush (Fell in love)
It made us believe it was only us (Only us)
Convinced we were broken inside, yeah, inside, yeah

[Chorus]
'Cause girl, you're perfect (Girl, you're perfect)
You're always worth it (You're always worth it)
And you deserve it (And you deserve it)
The way you work it (The way you work it)
'Cause girl, you earned it, yeah (You earned it)
Girl, you earned it, yeah (You earned it)

[Outro]
Na-na-na-na-na
Oh-oh-oh
Yeah, yeah
'Cause girl, you're perfect
The way you work it
You deserve it
Girl, you deserve it
Girl, you earned it, yeah, yeah.`.split('\n'); // Isso vai dividir as letras por linha

lyricsContainer.innerHTML = fullLyrics.map(line => `<p>${line}</p>`).join('');


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

    // O intervalo da rolagem das letras está em 3000ms (3 segundos).
    // Talvez você queira ajustar isso para sincronizar melhor com a música.
    intervalId = setInterval(() => {
      currentLine++;
      if (currentLine >= fullLyrics.length) { // Use fullLyrics aqui
        clearInterval(intervalId);
      } else {
        scrollLyrics();
      }
    }, 3000); // Ajuste este tempo para sincronizar com a música

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


// Funções e Intervalo para a animação do coração
function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.innerText = "💗"; // O emoji de coração
    coracao.style.position = "absolute";
    coracao.style.left = Math.random() * window.innerWidth + "px"; // Posição X aleatória
    coracao.style.top = window.innerHeight + "px"; // Começa da parte de baixo da tela
    coracao.style.fontSize = Math.random() * 30 + 20 + "px"; // Tamanho aleatório
    coracao.style.opacity = 0.6;
    coracao.style.animation = "subir 5s linear forwards"; // Aplica a animação CSS
    document.body.appendChild(coracao); // Adiciona o coração ao corpo do documento

    // Remove o coração do DOM após a animação terminar (5 segundos)
    setTimeout(() => coracao.remove(), 5000);
}

// Cria um novo coração a cada 300 milissegundos
setInterval(criarCoracao, 300);