function setup() {
  createCanvas(400, 400);
}
let xJogador = [0, 0, 0, 0];
let yJogador = [75, 150, 225, 300];
let jogador = ["👾", "👺", "🤑","🤖"];
let quantidade = jogador.length;
let teclas = ["a","s","f","g"];

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#30FF01");
  } else {
    background("#FA1100");
  }
}
function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[0] > 350) {
      text("xJogador 1 venceu!!", 30, 200);
      noLoop();
    }
  }
}


function keyReleased() {
  for (let i =0 ; i < quantidade ; i++){
     if (key === teclas[i]) {
    xJogador[i] += random(20);
    }
  }
}
