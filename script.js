const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const studentNameInput = document.getElementById('studentName');
const displayStudentName = document.getElementById('displayStudentName');
const questionCounter = document.getElementById('questionCounter');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackBox = document.getElementById('feedbackBox');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const scoreMini = document.getElementById('scoreMini');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const resultStudentName = document.getElementById('resultStudentName');
const scoreCircle = document.getElementById('scoreCircle');
const resultMessage = document.getElementById('resultMessage');
const correctAnswersEl = document.getElementById('correctAnswers');
const wrongAnswersEl = document.getElementById('wrongAnswers');
const finalPercentageEl = document.getElementById('finalPercentage');
const saveImageBtn = document.getElementById('saveImageBtn');
const resultCaptureArea = document.getElementById('resultCaptureArea');
const confettiLayer = document.getElementById('confettiLayer');
const resultFloatingImage = document.getElementById('resultFloatingImage');

let currentQuestion = 0;
let score = 0;
let studentName = '';
let shuffledQuestions = [];
let answers = [];
let locked = false;

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildShuffledQuestions() {
  return shuffleArray(questions).map((q) => {
    const correctText = q.options[q.answer];
    const shuffledOptions = shuffleArray(q.options);
    return {
      ...q,
      options: shuffledOptions,
      answer: shuffledOptions.indexOf(correctText)
    };
  });
}

const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
restartBtn.addEventListener('click', restartQuiz);
saveImageBtn.addEventListener('click', saveResultAsImage);

studentNameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') startQuiz();
});

function launchConfetti(amount = 80) {
  confettiLayer.innerHTML = '';
  const colors = ['#00f5d4', '#7c3aed', '#38bdf8', '#f59e0b', '#22c55e', '#ef4444'];

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement('span');
    piece.className = Math.random() > 0.7 ? 'confetti-piece alt' : 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${2.8 + Math.random() * 2.4}s`;
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.transform = `translateY(-20px) rotate(${Math.random() * 360}deg)`;
    confettiLayer.appendChild(piece);
  }

  setTimeout(() => {
    confettiLayer.innerHTML = '';
  }, 5000);
}

function updateResultFloatingImage(percentage) {
  resultFloatingImage.classList.remove('show');

  if (percentage >= 85) {
    resultFloatingImage.src = 'img/trofeu.png';
    resultFloatingImage.alt = 'Troféu de excelente desempenho';
  } else if (percentage >= 70) {
    resultFloatingImage.src = 'img/medalha.png';
    resultFloatingImage.alt = 'Medalha de bom desempenho';
  } else if (percentage >= 50) {
    resultFloatingImage.src = 'img/foguete.png';
    resultFloatingImage.alt = 'Foguete de progresso';
  } else {
    resultFloatingImage.src = 'img/robo-estudando.png';
    resultFloatingImage.alt = 'Robô estudando para revisar mais';
  }

  resultFloatingImage.onload = () => {
    resultFloatingImage.classList.add('show');
  };
}

function startQuiz() {
  const name = studentNameInput.value.trim();
  if (name.length < 5) {
    alert('Digite o nome completo para iniciar o questionário.');
    studentNameInput.focus();
    return;
  }

  studentName = name;
  shuffledQuestions = buildShuffledQuestions();
  answers = Array(shuffledQuestions.length).fill(null);
  displayStudentName.textContent = `Aluno: ${studentName}`;
  startScreen.classList.remove('active');
  quizScreen.classList.add('active');
  renderQuestion();
}

function renderQuestion() {
  locked = answers[currentQuestion] !== null;
  const q = shuffledQuestions[currentQuestion];
  questionCounter.textContent = `Questão ${currentQuestion + 1} de ${shuffledQuestions.length}`;
  questionText.textContent = q.question;
  optionsContainer.innerHTML = '';
  feedbackBox.className = 'feedback';
  feedbackBox.textContent = '';

  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.innerHTML = `<strong>${String.fromCharCode(65 + index)})</strong> ${option}`;

    if (locked) {
      btn.classList.add('locked');
      const selected = answers[currentQuestion];
      if (index === q.answer) btn.classList.add('correct');
      if (selected === index && selected !== q.answer) btn.classList.add('incorrect');
    } else {
      btn.addEventListener('click', () => selectOption(index));
    }

    optionsContainer.appendChild(btn);
  });

  if (locked) {
    showFeedback(answers[currentQuestion] === q.answer);
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.textContent = currentQuestion === shuffledQuestions.length - 1 ? 'Finalizar' : 'Próxima';
  updateProgress();
}

function selectOption(selectedIndex) {
  if (locked) return;
  locked = true;

  const q = shuffledQuestions[currentQuestion];
  answers[currentQuestion] = selectedIndex;
  const isCorrect = selectedIndex === q.answer;

  if (isCorrect) score++;

  const optionButtons = [...document.querySelectorAll('.option')];
  optionButtons.forEach((btn, index) => {
    btn.classList.add('locked');
    if (index === q.answer) btn.classList.add('correct');
    if (index === selectedIndex && selectedIndex !== q.answer) btn.classList.add('incorrect');
  });

  showFeedback(isCorrect);
  scoreMini.textContent = `Acertos: ${score}`;
  nextBtn.disabled = false;
  updateProgress();
}

function showFeedback(isCorrect) {
  const q = shuffledQuestions[currentQuestion];
  feedbackBox.classList.add('show', isCorrect ? 'correct' : 'incorrect');

  if (isCorrect) {
    feedbackBox.innerHTML = `✅ <strong>Resposta correta.</strong><br><br>${q.explanation}`;
  } else {
    feedbackBox.innerHTML = `❌ <strong>Resposta incorreta.</strong><br><strong>Alternativa correta:</strong> ${String.fromCharCode(65 + q.answer)}) ${q.options[q.answer]}<br><br>${q.explanation}`;
  }
}

function nextQuestion() {
  if (answers[currentQuestion] === null) return;

  if (currentQuestion < shuffledQuestions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function updateProgress() {
  const answered = answers.filter((a) => a !== null).length;
  const percent = Math.round((answered / shuffledQuestions.length) * 100);
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `Progresso: ${percent}%`;
  scoreMini.textContent = `Acertos: ${score}`;
}

function showResults() {
  quizScreen.classList.remove('active');
  resultScreen.classList.add('active');

  const total = shuffledQuestions.length;
  const wrong = total - score;
  const percentage = Math.round((score / total) * 100);

  resultStudentName.textContent = `${studentName}, aqui está seu desempenho na revisão.`;
  scoreCircle.textContent = `${percentage}%`;
  correctAnswersEl.textContent = score;
  wrongAnswersEl.textContent = wrong;
  finalPercentageEl.textContent = `${percentage}%`;

  let message = '';
  if (percentage >= 85) {
    message = 'Excelente desempenho! Você demonstrou ótima compreensão dos fundamentos de Deep Learning e está muito bem preparado para a prova.';
  } else if (percentage >= 70) {
    message = 'Bom resultado! Você já domina boa parte do conteúdo, mas ainda vale revisar alguns pontos para ganhar mais segurança.';
  } else if (percentage >= 50) {
    message = 'Você está no caminho certo, mas precisa reforçar os conceitos básicos e praticar mais algumas questões antes da prova.';
  } else {
    message = 'É importante revisar os conceitos fundamentais com calma. Refaça o quiz e observe os feedbacks para consolidar a aprendizagem.';
  }

  resultMessage.textContent = message;

  updateResultFloatingImage(percentage);
  launchConfetti(percentage >= 70 ? 110 : 70);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  shuffledQuestions = [];
  answers = [];
  locked = false;
  scoreMini.textContent = 'Acertos: 0';
  resultScreen.classList.remove('active');
  startScreen.classList.add('active');
  studentNameInput.value = '';
  studentNameInput.focus();
}

function saveResultAsImage() {
  html2canvas(resultCaptureArea, {
    backgroundColor: '#0b1020',
    scale: 2,
    useCORS: true
  }).then((canvas) => {
    const link = document.createElement('a');
    const safeName = studentName.replace(/\s+/g, '_').toLowerCase();
    link.download = `resultado_quiz_${safeName || 'aluno'}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

// Fundo animado com partículas e conexões estilo rede neural
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 78;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Particle {
  constructor() {
    this.reset();
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.55;
    this.vy = (Math.random() - 0.5) * 0.55;
    this.radius = Math.random() * 2 + 1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,245,212,0.85)';
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgba(124,58,237,0.6)';
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 130) {
        const alpha = 1 - distance / 130;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(124,58,237,${alpha * 0.35})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawConnections();
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  initParticles();
});

resizeCanvas();
initParticles();

// Favicon circular via canvas
(function () {
  const img = new Image();
  img.src = 'img/octocat.png';
  img.onload = function () {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(img, 0, 0, size, size);
    const link = document.querySelector("link[rel='icon']");
    if (link) {
      link.href = canvas.toDataURL('image/png');
    }
  };
})();
animate();