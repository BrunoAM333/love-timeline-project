/* ═══════════════════════════════════════════
   NOSSA LINHA DO TEMPO — app.js
═══════════════════════════════════════════ */

/* ─── Dados ─── */
function twoPhotos(n){
  const id = String(n).padStart(2,"0");
  return [`assets/photos/${id}/1.jpg`,`assets/photos/${id}/2.jpg`];
}

const LETTERS = [
  { id:1,  date:"19/08/2022, início do meu fim feliz",          title:"A primeira foto juntos",            text:`Naquele instante, talvez a gente ainda não soubesse o tamanho da história que estava começando, mas meu coração já tinha entendido tudo antes de mim.\n\nEssa foto guarda muito mais do que a nossa imagem, ela guarda o início de um sentimento bonito, leve e inevitável.\n\nFoi ali que, sem perceber, você começou a ocupar um espaço muito especial dentro de mim.\nE desde então, cada lembrança sua virou um lugar onde eu gosto de morar.`,  photos:twoPhotos(1)  },
  { id:2,  date:"27/08/2022, primeira festa e eu já sem defesa", title:"Nossa primeira festa juntos",       text:`Essa foi uma daquelas festas que a gente nunca esquece.\n\nEra de dia, na festa da Eng. Biotecnológica, e no meio de tanta gente, o que mais ficou em mim foi a alegria de estar com você.\n\nFoi uma das primeiras vezes em que eu senti que qualquer lugar ficava melhor quando você estava ao meu lado.\nE isso, desde então, nunca mais mudou.`,  photos:twoPhotos(2)  },
  { id:3,  date:"08/10, piquenique surpresa e eu derretido",     title:"O piquenique que eu ganhei dela",   text:`Esse dia tem gosto de carinho.\n\nVocê preparou tudo com tanto amor, com tanto cuidado, que eu me senti abraçado em cada detalhe.\n\nFoi um daqueles momentos em que o tempo parece desacelerar só para a gente aproveitar melhor o que está vivendo.\nEu lembro de você, do seu jeito, da delicadeza daquele gesto, e só consigo pensar que fui muito sortudo por viver isso com você.`,  photos:twoPhotos(3)  },
  { id:4,  date:"29/10, virou namoro e eu fui sem manual",       title:"Comecei a namorar ela, fui ver a família", text:`Esse dia marcou o momento em que meu coração parou de disfarçar.\n\nAssumir você para o mundo foi uma das coisas mais bonitas que eu já fiz, porque amar você nunca pareceu dúvida, só certeza.\n\nConhecer sua família também foi especial, porque significava entrar de verdade no seu mundo.\nE tudo em você, até aquilo que me dava frio na barriga, sempre valeu a pena.`,  photos:twoPhotos(4)  },
  { id:5,  date:"17/12/2022, você conheceu meu mundo",           title:"Ela conhece minha família",         text:`Quando você conheceu a minha família, parecia que dois pedaços importantes da minha vida estavam finalmente se encontrando.\n\nEu queria muito que eles vissem em você tudo aquilo que eu já enxergava com tanta clareza.\nSeu jeito, sua luz, sua doçura.\n\nE ver você ali, fazendo parte da minha história de um jeito tão natural, me fez sentir que a vida estava se encaixando direitinho.`,  photos:twoPhotos(5)  },
  { id:6,  date:"19/01, saudade em modo turbo",                  title:"Primeiras férias separados",        text:`Foi estranho ficar longe de você.\n\nMesmo sabendo que era só por um tempo, a distância fez eu perceber ainda mais o quanto a sua presença faz falta nos meus dias.\n\nFoi nesse período que eu entendi que saudade também é uma forma de amor, talvez uma das mais sinceras.\nPorque sentir sua falta era, no fundo, uma prova de que meu lugar preferido continuava sendo perto de você.`,  photos:twoPhotos(6)  },
  { id:7,  date:"22/02, nerdice romântica oficialmente ativada", title:"Ela ganha uma aliança de DNA",      text:`Talvez pareça um detalhe pequeno, mas para mim esse momento sempre foi cheio de significado.\n\nTe dar aquela aliança foi uma forma de dizer, do meu jeito, que você já estava profundamente ligada à minha vida.\n\nEra um gesto simbólico, mas o sentimento era enorme.\nPorque tudo em você já tinha começado a fazer parte de mim.`,  photos:twoPhotos(7)  },
  { id:8,  date:"24/02, nasceu o Juno",                          title:"A gente consegue o Juno",           text:`O Juno foi a nossa primeira pelúcia juntos.\n\nE desde o primeiro dia, ele virou muito mais do que um bicho de pelúcia — virou memória, carinho, símbolo do nosso jeitinho e das pequenas coisas que só fazem sentido porque são nossas.\n\nEu gosto de pensar que o amor também mora nesses detalhes, nos objetos que ganham alma porque foram vividos junto com alguém especial.\nE o Juno sempre vai ser um pedacinho fofo da nossa história.`,  photos:twoPhotos(8)  },
  { id:9,  date:"12/03/2023, brilho no olhar",                   title:"Primeira vez que ela vê um cavalo", text:`Eu amo lembrar desse dia porque lembro do brilho no seu olhar.\n\nTem algo muito bonito em ver alguém que a gente ama feliz de um jeito tão puro.\nFoi simples, mas foi encantador.\n\nE acho que amar você também passa por isso, por me apaixonar várias vezes ao ver a sua alegria nas coisas mais sinceras.`,  photos:twoPhotos(9)  },
  { id:10, date:"21/03, vergonha e amor em vídeo",               title:"Nosso primeiro vídeo postado",      text:`Esse vídeo não foi só um vídeo — foi o primeiro de muitos que a gente postaria juntos no Instagram.\n\nUm registro do nosso jeitinho, da nossa presença juntos, da forma como a gente já estava construindo memórias com leveza e verdade.\n\nEu adoro pensar que existem pequenos pedaços nossos espalhados por aí, como se fossem provas de que a felicidade realmente existiu ali.\nE existiu. Muito.`,  photos:twoPhotos(10) },
  { id:11, date:"07/04, mais perto do seu mundo",                title:"Conheci sua mãe",                   text:`Conhecer sua mãe foi um dos momentos mais especiais que esse namoro me deu.\n\nE acho que a gente se entendeu tão bem que, de brincadeira ou não, virei o melhor amigo dela.\n\nEu me senti sendo acolhido em um lugar muito importante da sua vida, e isso me fez te amar ainda mais.\nPorque amar você também é amar tudo aquilo que te formou — e quem te formou tem muito bom gosto.`,  photos:twoPhotos(11) },
  { id:12, date:"30/04, dois afetos se encontrando",             title:"Minha segunda mãe te conhecendo",   text:`Esse encontro foi muito especial para mim.\n\nEra como se dois afetos grandes da minha vida estivessem se reconhecendo.\n\nEu queria muito que você fosse vista com o mesmo amor com que eu te via, e no fundo eu já sabia que isso aconteceria.\nPorque você tem essa capacidade bonita de tocar as pessoas com quem você é.`,  photos:twoPhotos(12) },
  { id:13, date:"10/06, delicadeza em forma de lembrança",       title:"Dia dos namorados na igreja",       text:`Esse dia teve uma beleza diferente.\n\nHavia algo de sereno, profundo e quase sagrado em estar com você naquele momento.\n\nFoi um tipo de lembrança que fica guardada em um lugar calmo do coração.\nEu olho para esse dia e penso no quanto nosso amor também tem delicadeza, paz e sentido.`,  photos:twoPhotos(13) },
  { id:14, date:"09/09/2023, nossos mundos se encontrando",      title:"Sua família conhece a minha",       text:`Esse momento foi como juntar oficialmente duas partes da nossa história.\n\nVer nossas famílias se encontrando me deu a sensação de que aquilo que sentíamos já não era mais só nosso, estava ganhando forma no mundo.\n\nFoi bonito perceber que nosso amor já estava construindo pontes, criando laços e deixando de ser apenas começo para virar caminho.`,  photos:twoPhotos(14) },
  { id:15, date:"17/10/2023, orgulho em HD",                     title:"Sua apresentação do CIC",           text:`Eu tenho muito orgulho de você.\n\nVer você se dedicando, se apresentando e brilhando com a sua inteligência e esforço me fez te admirar ainda mais.\n\nFoi um daqueles dias em que eu pensei, com o coração cheio, como é bonito amar uma mulher tão forte, tão capaz e tão especial.\nVocê sempre me encanta, mas nesse dia você também me inspirou.`,  photos:twoPhotos(15) },
  { id:16, date:"02/12/2023, açúcar e aconchego",                title:"Nosso Natal juntos",                text:`Nosso Natal juntos foi aconchego em forma de memória.\n\nFoi um dia com gosto de casa, de carinho e de presença.\n\nEstar com você em uma data tão simbólica deixou tudo mais bonito, mais leve, mais completo.\nSe eu pudesse escolher o verdadeiro espírito de Natal, eu escolheria algo muito parecido com estar ao seu lado.`,  photos:twoPhotos(16) },
  { id:17, date:"04/03, celebrando você em qualquer calendário", title:"Aniversário adiantado",             text:`Pode ter sido adiantado no calendário, mas no meu coração ele chegou exatamente na hora certa.\n\nCelebrar você, de qualquer forma, sempre vai ser especial para mim.\n\nPorque seu aniversário não é só uma data, é a lembrança de que o mundo ficou melhor no dia em que você nasceu.\nE eu sou muito feliz por poder comemorar a sua existência de perto.`,  photos:twoPhotos(17) },
  { id:18, date:"11/01, paz em forma de companhia",              title:"A gente no recanto",                text:`Esse dia me lembra paz.\n\nEra como se o mundo tivesse diminuído o volume só para a gente se ouvir melhor, rir melhor, se sentir melhor.\n\nEu gosto dessas lembranças em que não precisa acontecer nada grandioso, porque a grandeza está justamente em estarmos juntos.\nVocê transforma qualquer lugar em abrigo.`,  photos:twoPhotos(18) },
  { id:19, date:"28/01, paisagem bonita em dobro",               title:"A gente na praia",                  text:`A praia já é bonita por si só, mas com você ela ficou ainda mais memorável.\n\nTem algo no vento, no mar e no seu sorriso que combina de um jeito que eu não sei explicar.\nEu só sei sentir.\n\nE nesse dia eu senti, mais uma vez, que a vida é muito generosa comigo por me permitir viver paisagens bonitas ao seu lado.`,  photos:twoPhotos(19) },
  { id:20, date:"03/08, felizes e fofos",                        title:"A gente engordando juntos",         text:`Talvez essa seja uma das formas mais sinceras de amor moderno.\n\nComer, rir, aproveitar, repetir, e ainda achar tudo isso maravilhoso porque é ao seu lado.\n\nEu adoro que a nossa história também tenha esse lado leve, engraçado e cotidiano.\nPorque amar você não é só viver momentos marcantes, é também amar a rotina gostosa que a gente constrói juntos.`,  photos:twoPhotos(20) },
  { id:21, date:"22/09, spoiler do futuro",                      title:"A IA nos casando",                  text:`Pode até ter sido uma brincadeira, uma imagem, uma criação, mas no fundo mexeu comigo de um jeito bonito.\n\nPorque ver a ideia de um futuro com você nunca me assustou, pelo contrário, sempre me deu paz.\n\nFoi uma daquelas coincidências engraçadas que fazem a gente sorrir, mas também pensar:\ne se for exatamente isso mesmo?`,  photos:twoPhotos(21) },
  { id:22, date:"31/10, o capítulo mais bonito",                 title:"Estamos noivos!",                   text:`Esse é um dos capítulos mais bonitos da nossa história.\n\nO noivado não foi só um pedido, foi uma confirmação.\nA confirmação de que entre tantos caminhos possíveis, eu escolho você.\n\nDe que entre tantos futuros imagináveis, o meu preferido é aquele em que a sua mão continua na minha.`,  photos:twoPhotos(22), special:true },
  { id:23, date:"06/11, brilho, orgulho e amor",                 title:"Defesa da minha noiva",             text:`Esse dia teve brilho.\n\nBrilho do seu esforço, da sua dedicação, da mulher incrível que você é.\n\nVer você defendendo tudo aquilo que construiu me encheu de orgulho e emoção.\nEu olhava para você e pensava como é bonito amar alguém tão inteligente, tão forte e tão cheia de luz.`,  photos:twoPhotos(23) },
  { id:24, date:"07/03, o dia em que o mundo melhorou",          title:"Aniversário dela",                  text:`Hoje é o seu dia, mas a verdade é que o presente foi meu, desde o momento em que você entrou na minha vida.\n\nSeu aniversário sempre vai ser uma data que eu vou celebrar com muito carinho, porque celebrar você nunca é pouco.\n\nVocê é uma das coisas mais lindas que já me aconteceram.\nE se eu pudesse resumir tudo em uma frase, seria esta:\neu sou muito feliz porque você existe.`,  photos:twoPhotos(24), special:true },
];

/* ─── Funções auxiliares ─── */
function seededRot(id, offset){
  const v = ((id * 2654435761 + offset * 40503) >>> 0) % 1000;
  return (v / 1000) * 7.8 - 3.9;
}

/* 
  Layout dos polaroides — 6 esquemas diferentes
  Fotos sempre visivelmente separadas, com variação de posição e rotação.
  left é relativo: foto 0 sempre à esquerda, foto 1 à direita com deslocamento.
*/
const POLAROID_LAYOUTS = [
  // Lado a lado, leve descida no segundo
  [ { top:0,  left:0,   rot:-7 }, { top:22,  left:230, rot: 6  } ],
  // Segundo mais alto, primeira mais inclinada
  [ { top:18, left:0,   rot: 9 }, { top:0,   left:222, rot:-8  } ],
  // Diagonal descendente forte
  [ { top:0,  left:0,   rot:-11}, { top:40,  left:228, rot: 5  } ],
  // Segundo bem mais alto
  [ { top:30, left:8,   rot: 6 }, { top:0,   left:218, rot:-10 } ],
  // Quase simétrico mas com rotações opostas fortes
  [ { top:10, left:0,   rot:-13}, { top:10,  left:232, rot: 11 } ],
  // Primeiro inclinado para cima à esquerda
  [ { top:0,  left:12,  rot: 8 }, { top:28,  left:220, rot:-7  } ],
];

const TAPE_COLORS = [
  "rgba(255,200,220,.78)", "rgba(200,220,255,.78)",
  "rgba(220,255,200,.78)", "rgba(255,240,175,.78)", "rgba(230,200,255,.78)",
];
const CAPTIONS = ["❤", "🥰", "📸", "✨", "😍", "💕", "🌸", "💖"];

/* ─── DOM ─── */
const STORAGE_KEY    = "love_timeline_opened_v15";
const track          = document.getElementById("track");
const reader         = document.getElementById("reader");
const readerBackdrop = document.getElementById("readerBackdrop");
const readerDate     = document.getElementById("readerDate");
const readerTitle    = document.getElementById("readerTitle");
const readerBody     = document.getElementById("readerBody");
const readerPhotos   = document.getElementById("readerPhotos");
const readerBadge    = document.getElementById("readerBadge");
const progressText   = document.getElementById("progressText");
const progressFill   = document.getElementById("progressFill");
const progressEmoji  = document.getElementById("progressEmoji");
const arrowLeft      = document.getElementById("arrowLeft");
const arrowRight     = document.getElementById("arrowRight");
const toastEl        = document.getElementById("toast");
const readerSheet    = document.getElementById("readerSheet");
const closeLetter    = document.getElementById("closeLetter");
const bgMusic        = document.getElementById("bgMusic");
const musicBtn       = document.getElementById("musicBtn");
const daysNum        = document.getElementById("daysNum");

let opened       = loadOpened();
let currentId    = null;
let isAnimating  = false;
let typeTimer    = null;
let musicPlaying = false;

/* ═══════════════════════════════════
   TELA DE ABERTURA
═══════════════════════════════════ */
const intro        = document.getElementById("intro");
const introEnvelope= document.getElementById("introEnvelope");
const introMessage = document.getElementById("introMessage");
const introBtn     = document.getElementById("introBtn");
const introCounter = document.getElementById("introCounter");
const introCounterNum = document.getElementById("introCounterNum");
const appEl        = document.getElementById("app");

function calcDays(){
  const start = new Date(2022, 9, 29); // 29/10/2022
  const now   = new Date();
  return Math.floor((now - start) / (1000 * 60 * 60 * 24));
}

function startIntro(){
  const days = calcDays();
  introCounterNum.textContent = days.toLocaleString("pt-BR");

  // Envelope flutua suavemente (não abre automaticamente)
  introEnvelope.style.animation = "envFloat 3.2s ease-in-out infinite";

  // Mensagem aparece logo após entrar
  setTimeout(()=> introMessage.classList.add("is-visible"), 500);

  // Contador aparece um pouco depois
  setTimeout(()=> introCounter.classList.add("is-visible"), 900);
}

  // Envelope abre ao passar o mouse (interativo mas não automático)
  introEnvelope.addEventListener("mouseenter", ()=>{
    introEnvelope.classList.add("is-open");
    introEnvelope.style.animation = "none";
  });
  introEnvelope.addEventListener("mouseleave", ()=>{
    introEnvelope.classList.remove("is-open");
    introEnvelope.style.animation = "envFloat 3.2s ease-in-out infinite";
  });

  introBtn.addEventListener("click", ()=>{
  intro.classList.add("is-hiding");
  appEl.style.display = "flex";
  appEl.style.flexDirection = "column";
  appEl.style.height = "100vh";

  // Inicia a música automaticamente
  bgMusic.play().then(()=>{
    musicPlaying = true;
    musicBtn.classList.add("is-playing");
  }).catch(()=>{});

  setTimeout(()=> intro.style.display="none", 900);
});

// Começa a tela de intro
startIntro();

/* ═══════════════════════════════════
   CONTADOR DE DIAS (topbar)
═══════════════════════════════════ */
function updateDaysCounter(){
  if(daysNum) daysNum.textContent = calcDays().toLocaleString("pt-BR");
}
updateDaysCounter();
setInterval(updateDaysCounter, 60000);

/* ─── Storage ─── */
function loadOpened(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return new Set();
    return new Set(JSON.parse(raw));
  }catch{ return new Set(); }
}
function saveOpened(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...opened]));
}

/* ─── Lock ─── */
function firstLockedIndex(){
  for(let i=0;i<LETTERS.length;i++) if(!opened.has(LETTERS[i].id)) return i;
  return LETTERS.length;
}
function isLocked(id){
  const idx = LETTERS.findIndex(x=>x.id===id);
  return idx<0 || idx>firstLockedIndex();
}

/* ─── Progress ─── */
function updateProgress(){
  const n = opened.size;
  progressText.textContent = `${n}/24`;
  progressFill.style.width = `${Math.round(n/24*100)}%`;
  const emojis=["💌","💕","💖","💝","💍","✨","🎉"];
  progressEmoji.textContent = emojis[Math.min(Math.floor(n/4),emojis.length-1)];
  progressEmoji.style.transform="scale(1.6) rotate(20deg)";
  setTimeout(()=>progressEmoji.style.transform="",420);
}

/* ─── Toast ─── */
let toastTO;
function showToast(msg, dur=3600){
  clearTimeout(toastTO);
  toastEl.textContent=msg; toastEl.classList.add("is-visible");
  toastTO=setTimeout(()=>toastEl.classList.remove("is-visible"),dur);
}
const MILESTONES={
  1:"💌 A história começa aqui…",
  5:"🌸 5 memórias abertas!",
  10:"💕 Metade do caminho, coração cheio!",
  16:"🌟 16 cartas abertas!",
  22:"💍 O capítulo mais especial!",
  24:"🎉 Chegamos ao fim — e ao começo de tudo!"
};

/* ═══════════════════════════════════
   MÚSICA
═══════════════════════════════════ */
bgMusic.volume = 0.35;
musicBtn.addEventListener("click", ()=>{
  if(musicPlaying){
    bgMusic.pause(); musicPlaying=false; musicBtn.classList.remove("is-playing");
  } else {
    bgMusic.play().catch(()=>{}); musicPlaying=true; musicBtn.classList.add("is-playing");
  }
});

/* ═══════════════════════════════════
   CONFETTI
═══════════════════════════════════ */
const cCvs = document.getElementById("confettiCanvas");
const cCtx = cCvs.getContext("2d");
let cP = [];
function resizeC(){ cCvs.width=window.innerWidth; cCvs.height=window.innerHeight; }
resizeC(); window.addEventListener("resize",resizeC);

const CN=["#e8157a","#f0508e","#f896bc","#ffc2d9","#ff77b8","#fff"];
const CS=["#ffd700","#ffec6e","#ffe082","#fff3a3","#e8157a","#fff","#ffc107"];

function drawHeart(ctx,x,y,s){
  ctx.save(); ctx.translate(x,y); ctx.beginPath();
  ctx.moveTo(0,-s*.3);
  ctx.bezierCurveTo(s*.6,-s,s*1.1,-s*.2,0,s*.6);
  ctx.bezierCurveTo(-s*1.1,-s*.2,-s*.6,-s,0,-s*.3);
  ctx.closePath(); ctx.fill(); ctx.restore();
}
function spawnC(sp,n){ const c=sp?CS:CN; for(let i=0;i<n;i++) cP.push({ x:Math.random()*cCvs.width, y:-10-Math.random()*40, r:4+Math.random()*7, d:2.4+Math.random()*3.4, color:c[Math.floor(Math.random()*c.length)], tilt:Math.random()*12-6, ts:.04+Math.random()*.08, opacity:1, shape:Math.random()>.45?"circle":"heart", angle:Math.random()*Math.PI*2, spin:(Math.random()-.5)*.14 }); }
let cR;
function animC(){
  cCtx.clearRect(0,0,cCvs.width,cCvs.height);
  cP=cP.filter(p=>p.opacity>0.02);
  if(!cP.length){ cancelAnimationFrame(cR); return; }
  cP.forEach(p=>{ p.y+=p.d; p.tilt+=p.ts; p.angle+=p.spin; p.opacity-=.006; cCtx.save(); cCtx.globalAlpha=Math.max(0,p.opacity); cCtx.fillStyle=p.color; cCtx.translate(p.x+Math.sin(p.angle)*3,p.y); cCtx.rotate(p.tilt); if(p.shape==="heart") drawHeart(cCtx,0,0,p.r); else{ cCtx.beginPath(); cCtx.ellipse(0,0,p.r,p.r*.55,0,0,Math.PI*2); cCtx.fill(); } cCtx.restore(); });
  cR=requestAnimationFrame(animC);
}
function triggerConfetti(sp){ cancelAnimationFrame(cR); cP=[]; spawnC(sp,sp?240:150); animC(); }

/* ═══════════════════════════════════
   HEARTS BACKGROUND
═══════════════════════════════════ */
const hCvs=document.getElementById("heartCanvas");
const hCtx=hCvs.getContext("2d");
let hearts=[];
function resizeH(){ hCvs.width=window.innerWidth; hCvs.height=window.innerHeight; }
resizeH(); window.addEventListener("resize",resizeH);
function spawnHeart(){ hearts.push({ x:Math.random()*hCvs.width, y:hCvs.height+20, size:4+Math.random()*9, speed:.45+Math.random()*.95, opacity:.08+Math.random()*.20, drift:(Math.random()-.5)*.55, color:Math.random()>.5?"#e8157a":"#f0508e" }); }
function loopHearts(){ hCtx.clearRect(0,0,hCvs.width,hCvs.height); hearts=hearts.filter(h=>h.y>-30); hearts.forEach(h=>{ h.y-=h.speed; h.x+=h.drift; hCtx.save(); hCtx.globalAlpha=h.opacity; hCtx.fillStyle=h.color; drawHeart(hCtx,h.x,h.y,h.size); hCtx.restore(); }); if(Math.random()<.03) spawnHeart(); requestAnimationFrame(loopHearts); }
loopHearts();

/* ═══════════════════════════════════
   TYPEWRITER
═══════════════════════════════════ */
function typeWrite(el,text,speed=13){
  clearTimeout(typeTimer); el.innerHTML="";
  const cursor=document.createElement("span"); cursor.className="cursor"; el.appendChild(cursor);
  let i=0;
  function tick(){ if(i<text.length){ el.insertBefore(document.createTextNode(text[i]),cursor); i++; typeTimer=setTimeout(tick,text[i-1]==="\n"?85:speed); } else { setTimeout(()=>cursor.remove(),1600); } }
  tick();
}

/* ═══════════════════════════════════
   DRAG SCROLL — smooth with RAF
═══════════════════════════════════ */
function initDragScroll(el){
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let velocity = 0;
  let lastX = 0;
  let rafId = null;
  let isDragging = false; // only true after threshold movement

  // Momentum decay
  function momentumLoop(){
    if(Math.abs(velocity) < 0.5){ velocity = 0; return; }
    el.scrollLeft += velocity;
    velocity *= 0.92;
    rafId = requestAnimationFrame(momentumLoop);
  }

  el.addEventListener("mousedown", e => {
    if(e.button !== 0) return;
    isDown = true; isDragging = false;
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
    lastX = e.pageX;
    velocity = 0;
    cancelAnimationFrame(rafId);
    e.preventDefault();
  });

  window.addEventListener("mouseup", () => {
    if(!isDown) return;
    isDown = false;
    if(isDragging){
      el.dataset.wasDragging = "1";
      // Clear it after a tick so click handler can read it
      setTimeout(()=>{ el.dataset.wasDragging = "0"; }, 80);
    }
    isDragging = false;
    el.classList.remove("is-dragging");
    // Kick off momentum
    if(Math.abs(velocity) > 1) momentumLoop();
  });

  window.addEventListener("mousemove", e => {
    if(!isDown) return;

    const x = e.pageX - el.offsetLeft;
    const walk = x - startX;

    // Only start dragging after 5px threshold
    if(!isDragging && Math.abs(walk) < 5) return;
    isDragging = true;
    el.classList.add("is-dragging");

    velocity = lastX - e.pageX;
    lastX = e.pageX;
    el.scrollLeft = scrollLeft - walk;
    e.preventDefault();
  });

  // Touch
  let tStartX = 0, tScrollLeft = 0, tLastX = 0, tVelocity = 0;
  el.addEventListener("touchstart", e => {
    tStartX = e.touches[0].pageX;
    tScrollLeft = el.scrollLeft;
    tLastX = tStartX; tVelocity = 0;
    cancelAnimationFrame(rafId);
  }, {passive:true});

  el.addEventListener("touchmove", e => {
    const dx = tStartX - e.touches[0].pageX;
    tVelocity = tLastX - e.touches[0].pageX;
    tLastX = e.touches[0].pageX;
    el.scrollLeft = tScrollLeft + dx;
  }, {passive:true});

  el.addEventListener("touchend", () => {
    velocity = tVelocity;
    if(Math.abs(velocity) > 1) momentumLoop();
  });
}

/* ═══════════════════════════════════
   RENDER TIMELINE
═══════════════════════════════════ */
function renderTimeline(){
  track.innerHTML="";

  LETTERS.forEach((L,i)=>{
    const item=document.createElement("div");
    item.className="tl-item";
    item.dataset.id=String(L.id);
    item.classList.add(i%2===0?"is-up":"is-down");
    item.style.animationDelay=`${i*48}ms`;

    const locked  =isLocked(L.id);
    const isOpened=opened.has(L.id);
    if(locked)    item.classList.add("is-locked");
    if(isOpened)  item.classList.add("is-opened");
    if(L.special) item.classList.add("is-special");

    const node=document.createElement("div"); node.className="node";
    const stem=document.createElement("div"); stem.className="stem";

    const card=document.createElement("div");
    card.className="envelope-card";
    card.setAttribute("tabindex","0"); card.setAttribute("role","button");

    const baseRot=seededRot(L.id,i);
    card.style.transform=`rotate(${baseRot}deg)`;
    card.dataset.baseRot=baseRot;

    card.innerHTML=`
      <div class="envelope">
        <div class="envelope__flap-bottom"></div>
        <div class="envelope__flap-left"></div>
        <div class="envelope__flap-right"></div>
        <div class="envelope__letter"></div>
        <div class="envelope__number">#${String(L.id).padStart(2,"0")}</div>
        <div class="envelope__date">${L.date}</div>
        <div class="envelope__label">
          <span class="envelope__label-title">${L.title}</span>
        </div>
        <div class="envelope__stamp">
          <img src="${L.photos[0]||""}" alt="" loading="lazy">
        </div>
        <div class="envelope__flap-top"></div>
        <span class="seal"></span>
      </div>
    `;
    card.querySelector(".envelope__stamp img")
        .addEventListener("error",e=>e.target.removeAttribute("src"));

    card.addEventListener("mouseenter",()=>{ if(!locked) card.style.transform="translateY(-12px) scale(1.03) rotate(0deg)"; });
    card.addEventListener("mouseleave",()=>{ if(!locked && !item.classList.contains("is-opening")) card.style.transform=`rotate(${baseRot}deg)`; });

    const triggerOpen=()=>{
      if(locked||isAnimating) return;
      isAnimating=true;
      item.classList.add("is-opening");
      card.style.transform="translateY(-8px) scale(1.02) rotate(0deg)";
      setTimeout(()=>{
        openReader(L.id, card);
        item.classList.remove("is-opening");
        card.style.transform=`rotate(${baseRot}deg)`;
        isAnimating=false;
      }, 640);
    };
    card.addEventListener("click", e=>{
      // Don't open if we just finished dragging
      if(track.dataset.wasDragging === "1"){ track.dataset.wasDragging="0"; return; }
      triggerOpen();
    });
    card.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); triggerOpen(); } });

    item.appendChild(stem); item.appendChild(node); item.appendChild(card);
    track.appendChild(item);
  });

  initDragScroll(track);
  updateProgress();
  updateArrows();
}

/* ═══════════════════════════════════
   READER — POLAROIDES
═══════════════════════════════════ */
function buildPolaroids(container, letterId, photos){
  container.innerHTML="";
  const layout = POLAROID_LAYOUTS[letterId % POLAROID_LAYOUTS.length];
  const PHOTO_H = 185; // img height
  const PADDING_BOTTOM = 38; // polaroid bottom padding
  const TAPE_H = 11;
  const EXTRA = 20;

  let maxBottom = 0;

  photos.slice(0,2).forEach((p,pi)=>{
    const cfg = layout[pi] || layout[0];

    const wrap = document.createElement("div");
    wrap.className = "polaroid";
    wrap.style.transform = `rotate(${cfg.rot}deg)`;
    wrap.style.top  = `${cfg.top + TAPE_H}px`; // offset for tape
    wrap.style.left = `${cfg.left}px`;
    wrap.style.zIndex = pi === 0 ? 2 : 1;
    wrap.dataset.caption = CAPTIONS[(letterId + pi) % CAPTIONS.length];

    const tape = document.createElement("div");
    tape.className = "polaroid-tape";
    tape.style.background = TAPE_COLORS[(letterId + pi) % TAPE_COLORS.length];
    const tapeRot = ((letterId*7 + pi*13) % 20) - 10;
    tape.style.transform = `translateX(-50%) rotate(${tapeRot}deg)`;

    const img = document.createElement("img");
    img.src=p; img.alt=`Foto ${pi+1}`;
    img.addEventListener("error",()=>img.removeAttribute("src"));

    wrap.appendChild(tape); wrap.appendChild(img);
    container.appendChild(wrap);

    const bottom = cfg.top + TAPE_H + PHOTO_H + PADDING_BOTTOM + EXTRA;
    if(bottom > maxBottom) maxBottom = bottom;
  });

  // Container height = enough for both polaroids + rotation slack
  container.style.height = `${maxBottom + 30}px`;
}

/* ═══════════════════════════════════
   OPEN / CLOSE READER
═══════════════════════════════════ */
function openReader(id, cardEl){
  const isNew = !opened.has(id);
  currentId = id;
  const L = LETTERS.find(x=>x.id===id);
  if(!L) return;

  opened.add(id); saveOpened();

  if(cardEl){
    const rect = cardEl.getBoundingClientRect();
    const ox = rect.left+rect.width/2;
    const oy = rect.top +rect.height/2;
    const sw = Math.min(820,window.innerWidth-24);
    const sh = Math.min(window.innerHeight*.92,940);
    readerSheet.style.transformOrigin=`${ox-(window.innerWidth-sw)/2}px ${oy-(window.innerHeight-sh)/2}px`;
  }

  readerBadge.textContent = L.special
    ? (id===22?"💍 NOIVADO":"🎂 ANIVERSÁRIO")
    : `CARTA #${String(id).padStart(2,"0")}`;
  reader.classList.toggle("is-special",!!L.special);

  readerDate.textContent  = L.date;
  readerTitle.textContent = L.title;
  readerBody.innerHTML    = "";

  buildPolaroids(readerPhotos, id, L.photos||[]);

  reader.classList.add("is-open");
  reader.setAttribute("aria-hidden","false");
  setTimeout(()=>typeWrite(readerBody,L.text,13),360);

  if(isNew) setTimeout(()=>triggerConfetti(!!L.special),400);
  if(isNew && MILESTONES[opened.size])
    setTimeout(()=>showToast(MILESTONES[opened.size]),1300);

  renderTimeline();
  scrollToCard(id);
}

function closeReader(){
  clearTimeout(typeTimer);
  reader.classList.remove("is-open","is-special");
  reader.setAttribute("aria-hidden","true");
  currentId=null;
}

function scrollToCard(id){
  const el=track.querySelector(`.tl-item[data-id="${id}"]`);
  if(el) el.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"});
}

/* ─── Setas ─── */
function updateArrows(){
  const max=track.scrollWidth-track.clientWidth;
  arrowLeft.disabled =track.scrollLeft<=10;
  arrowRight.disabled=track.scrollLeft>=max-10;
}
arrowLeft.addEventListener("click",()=>{
  const w=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--itemW"))||430;
  track.scrollBy({left:-(w+40),behavior:"smooth"});
});
arrowRight.addEventListener("click",()=>{
  const w=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--itemW"))||430;
  track.scrollBy({left: (w+40),behavior:"smooth"});
});
track.addEventListener("scroll",updateArrows);

/* ─── Eventos ─── */
readerBackdrop.addEventListener("click",closeReader);
closeLetter.addEventListener("click",   closeReader);
document.addEventListener("keydown",e=>{
  if(reader.classList.contains("is-open")&&e.key==="Escape") closeReader();
});

/* ─── Reset ─── */
const resetBtn      = document.getElementById("resetBtn");
const confirmModal  = document.getElementById("confirmModal");
const confirmBackdrop = document.getElementById("confirmBackdrop");
const confirmCancel = document.getElementById("confirmCancel");
const confirmOk     = document.getElementById("confirmOk");

resetBtn.addEventListener("click", ()=>{
  confirmModal.classList.add("is-open");
  confirmModal.setAttribute("aria-hidden","false");
});
function closeConfirm(){
  confirmModal.classList.remove("is-open");
  confirmModal.setAttribute("aria-hidden","true");
}
confirmCancel.addEventListener("click", closeConfirm);
confirmBackdrop.addEventListener("click", closeConfirm);

confirmOk.addEventListener("click", ()=>{
  // Limpa progresso
  localStorage.removeItem(STORAGE_KEY);
  opened = new Set();
  closeConfirm();
  closeReader();

  // Volta para a tela de abertura com fade
  appEl.style.transition = "opacity .55s ease";
  appEl.style.opacity = "0";
  setTimeout(()=>{
    appEl.style.display = "none";
    appEl.style.opacity = "";
    appEl.style.transition = "";
    intro.style.display = "";
    intro.classList.remove("is-hiding");
    // Reinicia o estado do envelope
    introEnvelope.classList.remove("is-open");
    introEnvelope.style.animation = "envFloat 3.2s ease-in-out infinite";
    introMessage.classList.remove("is-visible");
    setTimeout(()=> introMessage.classList.add("is-visible"), 500);
    setTimeout(()=> introCounter.classList.add("is-visible"), 900);
    // Para a música
    bgMusic.pause(); bgMusic.currentTime = 0;
    musicPlaying = false; musicBtn.classList.remove("is-playing");
    // Reinicia timeline
    renderTimeline();
  }, 580);
});

/* ─── Init ─── */
renderTimeline();