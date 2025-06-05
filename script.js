<script>
    function criarCoracao() {
      const coracao = document.createElement("div");
      coracao.innerText = "💗";
      coracao.style.position = "absolute";
      coracao.style.left = Math.random() * window.innerWidth + "px";
      coracao.style.top = Math.random() * window.innerHeight + "px";
      coracao.style.fontSize = Math.random() * 30 + 20 + "px";
      coracao.style.opacity = 0.6;
      coracao.style.animation = "subir 5s linear infinite";
      document.body.appendChild(coracao);

      setTimeout(() => coracao.remove(), 5000);
    }

    setInterval(criarCoracao, 300);

  </script>