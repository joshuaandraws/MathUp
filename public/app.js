// =============================================
// DATA: GRADES & TOPICS
// =============================================
const CURRICULUM = {
  1: [
    { id:'addition', name:'Addition', icon:'➕', desc:'Adding numbers together (1+1=2)' },
    { id:'subtraction', name:'Subtraction', icon:'➖', desc:'Taking numbers away (5-2=3)' },
    { id:'counting', name:'Counting & Numbers', icon:'🔢', desc:'Counting, number recognition, and ordering' }
  ],
  2: [
    { id:'addition2', name:'Addition', icon:'➕', desc:'Adding larger numbers up to 100' },
    { id:'subtraction2', name:'Subtraction', icon:'➖', desc:'Subtracting numbers up to 100' },
    { id:'measurement', name:'Measurement', icon:'📏', desc:'Measuring lengths, comparing sizes' },
    { id:'shapes', name:'Shapes & Geometry', icon:'🔷', desc:'2D and 3D shapes, patterns' }
  ],
  3: [
    { id:'multiplication', name:'Multiplication', icon:'✖️', desc:'Times tables and basic multiplication' },
    { id:'division', name:'Division', icon:'➗', desc:'Splitting numbers into equal groups' },
    { id:'fractions3', name:'Fractions', icon:'½', desc:'Introduction to halves, thirds, fourths' },
    { id:'area', name:'Area & Perimeter', icon:'📐', desc:'Measuring space and borders of shapes' }
  ],
  4: [
    { id:'mult4', name:'Multi-Digit Multiplication', icon:'✖️', desc:'Multiplying bigger numbers' },
    { id:'div4', name:'Long Division', icon:'➗', desc:'Dividing with remainders' },
    { id:'fractions4', name:'Fractions', icon:'½', desc:'Equivalent fractions, comparing fractions' },
    { id:'decimals4', name:'Decimals', icon:'💲', desc:'Tenths and hundredths' }
  ],
  5: [
    { id:'fractions5', name:'Fractions & Mixed Numbers', icon:'½', desc:'Adding, subtracting, multiplying fractions' },
    { id:'decimals5', name:'Decimals & Percentages', icon:'%', desc:'Operations with decimals, intro to percents' },
    { id:'volume', name:'Volume & Geometry', icon:'📦', desc:'Volume of 3D shapes, coordinate planes' }
  ],
  6: [
    { id:'ratios', name:'Ratios & Proportions', icon:'⚖️', desc:'Ratios, rates, unit rates' },
    { id:'percents', name:'Percents', icon:'%', desc:'Percent problems, discounts, tax' },
    { id:'integers', name:'Integers', icon:'±', desc:'Positive and negative numbers' },
    { id:'expressions6', name:'Expressions & Equations', icon:'🔡', desc:'Variables, simple equations' }
  ],
  7: [
    { id:'proportional', name:'Proportional Relationships', icon:'📊', desc:'Proportions, scale factors, similar figures' },
    { id:'linear7', name:'Linear Equations', icon:'📈', desc:'Solving one-step and two-step equations' },
    { id:'geometry7', name:'Geometry', icon:'📐', desc:'Angles, triangles, circles, area & volume' },
    { id:'probability', name:'Probability & Statistics', icon:'🎲', desc:'Chance, data analysis, mean/median/mode' }
  ],
  8: [
    { id:'algebra8', name:'Algebra', icon:'🔡', desc:'Linear equations, inequalities, systems' },
    { id:'functions', name:'Functions', icon:'f(x)', desc:'Function notation, linear functions, slope' },
    { id:'geometry8', name:'Geometry', icon:'📐', desc:'Pythagorean theorem, transformations' },
    { id:'statistics8', name:'Statistics', icon:'📊', desc:'Scatter plots, linear models, data analysis' }
  ],
  9: [
    { id:'algebra1', name:'Algebra I', icon:'🔡', desc:'Polynomials, factoring, quadratics' },
    { id:'geometry9', name:'Geometry', icon:'📐', desc:'Proofs, triangles, circles, trigonometry intro' }
  ],
  10: [
    { id:'algebra2', name:'Algebra II', icon:'🔡', desc:'Complex numbers, rational functions, sequences' },
    { id:'geometry10', name:'Geometry', icon:'📐', desc:'Advanced proofs, coordinate geometry' }
  ],
  11: [
    { id:'precalc', name:'Pre-Calculus', icon:'📉', desc:'Trig functions, vectors, polar coordinates' },
    { id:'stats11', name:'Statistics', icon:'📊', desc:'Probability distributions, hypothesis testing' },
    { id:'calculus11', name:'Intro to Calculus', icon:'∫', desc:'Limits, derivatives, basic integration' }
  ],
  12: [
    { id:'calculus', name:'Calculus', icon:'∫', desc:'Derivatives, integrals, the fundamental theorem' },
    { id:'stats12', name:'AP Statistics', icon:'📊', desc:'Inference, regression, statistical tests' },
    { id:'precalc12', name:'Pre-Calculus Review', icon:'📉', desc:'Functions, trig, conic sections' }
  ]
};

// =============================================
// LESSONS DATA
// =============================================
const LESSONS = {
  addition: {
    title: 'Addition',
    sections: [
      { heading: 'What is Addition?', content: 'Addition means putting numbers together to find out how many there are in total. When you add, the answer is called the <strong>sum</strong>.' },
      { heading: 'Example', type: 'example', content: '3 + 4 = 7\n\nThink of it as: 🍎🍎🍎 + 🍎🍎🍎🍎 = 🍎🍎🍎🍎🍎🍎🍎' },
      { heading: 'The Plus Sign (+)', content: 'The <strong>+</strong> sign means "add" or "plus". When you see it, you combine the numbers on both sides.' },
      { heading: 'Number Line Trick', type: 'tip', content: 'Start at the first number on a number line, then hop forward by the second number. Where you land is your answer!' },
      { heading: 'Practice Problem', type: 'example', content: '5 + 6 = ?\n\nCount on from 5: 6, 7, 8, 9, 10, 11\nAnswer: 11' }
    ]
  },
  subtraction: {
    title: 'Subtraction',
    sections: [
      { heading: 'What is Subtraction?', content: 'Subtraction means taking away a number from another. The answer is called the <strong>difference</strong>.' },
      { heading: 'The Minus Sign (-)', content: 'The <strong>–</strong> sign means "subtract" or "take away". You start with the bigger number and remove the smaller one.' },
      { heading: 'Example', type: 'example', content: '9 - 4 = 5\n\nStart with 9 things, take away 4, and 5 are left.' },
      { heading: 'Counting Back', type: 'tip', content: 'To subtract, start at the big number on a number line and hop BACKWARDS by the amount you\'re subtracting.' }
    ]
  },
  multiplication: {
    title: 'Multiplication',
    sections: [
      { heading: 'What is Multiplication?', content: 'Multiplication is a fast way to add the same number over and over again. Instead of 4+4+4, we write 3 × 4.' },
      { heading: 'Formula', type: 'formula', content: 'a × b = adding "a" exactly "b" times' },
      { heading: 'Example', type: 'example', content: '3 × 4 = 12\n\nThis means: 4 + 4 + 4 = 12\n(three groups of four)' },
      { heading: 'Times Tables Tip', type: 'tip', content: 'Memorizing your times tables (1×1 through 12×12) is the key to making all other math faster!' },
      { heading: 'Another Example', type: 'example', content: '7 × 8 = 56\n\nMemory trick: "5, 6, 7, 8 — 56 = 7 × 8"' }
    ]
  },
  division: {
    title: 'Division',
    sections: [
      { heading: 'What is Division?', content: 'Division splits a number into equal groups. It is the opposite of multiplication.' },
      { heading: 'Formula', type: 'formula', content: 'dividend ÷ divisor = quotient' },
      { heading: 'Example', type: 'example', content: '12 ÷ 4 = 3\n\nIf you have 12 cookies and share them among 4 friends, each friend gets 3 cookies.' },
      { heading: 'Remainders', content: 'When a number doesn\'t divide evenly, the leftover amount is called the <strong>remainder</strong>.' },
      { heading: 'Remainder Example', type: 'example', content: '13 ÷ 4 = 3 remainder 1\n\nWritten as: 3 R1' }
    ]
  },
  algebra8: {
    title: 'Algebra',
    sections: [
      { heading: 'What is Algebra?', content: 'Algebra uses letters (called variables) to represent unknown numbers. Your goal is to find what value makes the equation true.' },
      { heading: 'Solving Equations', content: 'To solve an equation, do the same operation to BOTH sides to isolate the variable.' },
      { heading: 'Formula', type: 'formula', content: 'Whatever you do to one side,\nyou MUST do to the other side' },
      { heading: 'Example: One-Step', type: 'example', content: 'x + 5 = 12\n\nSubtract 5 from both sides:\nx + 5 - 5 = 12 - 5\nx = 7' },
      { heading: 'Example: Two-Step', type: 'example', content: '2x + 3 = 11\n\nStep 1: Subtract 3 from both sides\n2x = 8\n\nStep 2: Divide both sides by 2\nx = 4' },
      { heading: 'Check Your Work!', type: 'tip', content: 'Always plug your answer back into the original equation to verify. 2(4) + 3 = 8 + 3 = 11 ✓' }
    ]
  },
  calculus: {
    title: 'Calculus',
    sections: [
      { heading: 'The Two Big Ideas', content: 'Calculus has two main branches: <strong>Differential Calculus</strong> (derivatives — rates of change) and <strong>Integral Calculus</strong> (integrals — accumulation/area).' },
      { heading: 'Derivatives', content: 'A derivative measures how fast a function is changing at any point — the instantaneous slope of a curve.' },
      { heading: 'Power Rule', type: 'formula', content: 'd/dx [xⁿ] = n·xⁿ⁻¹' },
      { heading: 'Derivative Example', type: 'example', content: 'f(x) = x³\n\nf\'(x) = 3x²\n\n(multiply by exponent, then reduce exponent by 1)' },
      { heading: 'Integrals', content: 'An integral finds the area under a curve (or reverses a derivative). The indefinite integral adds a constant C.' },
      { heading: 'Power Rule for Integrals', type: 'formula', content: '∫ xⁿ dx = xⁿ⁺¹/(n+1) + C' },
      { heading: 'Integral Example', type: 'example', content: '∫ x² dx = x³/3 + C' },
      { heading: 'Fundamental Theorem', type: 'tip', content: 'The Fundamental Theorem of Calculus says derivatives and integrals are inverse operations — they undo each other!' }
    ]
  },
  precalc: {
    title: 'Pre-Calculus',
    sections: [
      { heading: 'What is Pre-Calculus?', content: 'Pre-Calculus bridges Algebra II and Calculus. Key topics include trigonometry, functions, sequences, and an intro to limits.' },
      { heading: 'Trigonometric Functions', content: 'The three main trig functions relate the angles of a right triangle to its side lengths:' },
      { heading: 'SOH CAH TOA', type: 'formula', content: 'sin θ = Opposite/Hypotenuse\ncos θ = Adjacent/Hypotenuse\ntan θ = Opposite/Adjacent' },
      { heading: 'Unit Circle', content: 'The unit circle has radius 1. Every angle θ maps to a point (cos θ, sin θ) on the circle.' },
      { heading: 'Example', type: 'example', content: 'sin(30°) = 1/2\ncos(60°) = 1/2\ntan(45°) = 1' },
      { heading: 'Pythagorean Identity', type: 'formula', content: 'sin²θ + cos²θ = 1' }
    ]
  },
  fractions3: {
    title: 'Fractions',
    sections: [
      { heading: 'What is a Fraction?', content: 'A fraction represents part of a whole. It has two parts: the <strong>numerator</strong> (top) and the <strong>denominator</strong> (bottom).' },
      { heading: 'Formula', type: 'formula', content: 'numerator\n─────────\ndenominator' },
      { heading: 'Example', type: 'example', content: '3/4 means 3 out of 4 equal parts.\n\nIf a pizza is cut into 4 slices and you eat 3, you ate 3/4 of the pizza.' },
      { heading: 'Types of Fractions', type: 'tip', content: 'Proper fraction: numerator < denominator (3/4)\nImproper fraction: numerator ≥ denominator (7/4)\nMixed number: whole + fraction (1¾)' }
    ]
  },
  integers: {
    title: 'Integers & Negative Numbers',
    sections: [
      { heading: 'What are Integers?', content: 'Integers include all whole numbers and their negatives: ..., -3, -2, -1, 0, 1, 2, 3, ...' },
      { heading: 'Number Line', content: 'Positive numbers are to the right of 0. Negative numbers are to the left of 0.' },
      { heading: 'Adding Integers', type: 'example', content: '(-3) + 5 = 2   (move right 5 from -3)\n5 + (-3) = 2\n(-4) + (-2) = -6  (move further left)' },
      { heading: 'Multiplying Negatives', type: 'formula', content: '(+)(+) = +\n(+)(−) = −\n(−)(+) = −\n(−)(−) = +' },
      { heading: 'Tip', type: 'tip', content: '"A negative times a negative is a positive." Two negatives cancel each other out!' }
    ]
  },
  algebra1: {
    title: 'Algebra I',
    sections: [
      { heading: 'Polynomials', content: 'A polynomial is an expression with variables and coefficients. Examples: 3x², x³ + 2x - 5' },
      { heading: 'Factoring Quadratics', type: 'formula', content: 'ax² + bx + c = a(x - r₁)(x - r₂)' },
      { heading: 'Example', type: 'example', content: 'x² + 5x + 6\n\nFind two numbers that multiply to 6 and add to 5:\n  → 2 and 3\n\n= (x + 2)(x + 3)' },
      { heading: 'Quadratic Formula', type: 'formula', content: 'x = (-b ± √(b²-4ac)) / 2a' },
      { heading: 'Quadratic Example', type: 'example', content: 'x² - 5x + 6 = 0\na=1, b=-5, c=6\n\nx = (5 ± √(25-24)) / 2\nx = 3 or x = 2' }
    ]
  },
  functions: {
    title: 'Functions',
    sections: [
      { heading: 'What is a Function?', content: 'A function takes an input (x) and produces exactly one output (y).' },
      { heading: 'Notation', type: 'formula', content: 'f(x) = expression\n\nf(3) means "plug in x = 3"' },
      { heading: 'Slope Formula', type: 'formula', content: 'm = (y₂ - y₁) / (x₂ - x₁)' },
      { heading: 'Example', type: 'example', content: 'f(x) = 2x + 3\n\nf(0) = 3   (y-intercept)\nf(1) = 5\nf(2) = 7\n\nSlope = 2' }
    ]
  },
  probability: {
    title: 'Probability & Statistics',
    sections: [
      { heading: 'Probability', content: 'Probability measures how likely an event is — a number between 0 (impossible) and 1 (certain).' },
      { heading: 'Formula', type: 'formula', content: 'P(event) = favorable outcomes / total outcomes' },
      { heading: 'Example', type: 'example', content: 'Rolling a 4 on a standard die:\nP(4) = 1/6 ≈ 16.7%' },
      { heading: 'Mean, Median, Mode', content: '<strong>Mean:</strong> average (sum ÷ count)\n<strong>Median:</strong> middle value\n<strong>Mode:</strong> most frequent value' },
      { heading: 'Example', type: 'example', content: 'Data: 3, 5, 7, 7, 8\n\nMean: 30/5 = 6\nMedian: 7\nMode: 7' }
    ]
  }
};

function getDefaultLesson(topic, grade) {
  return {
    title: topic.name,
    sections: [
      { heading: `Introduction to ${topic.name}`, content: `This topic covers the core concepts of ${topic.name} at the ${grade}${getOrdinal(grade)} grade level. ${topic.desc}` },
      { heading: 'Key Concepts', type: 'tip', content: `Focus on understanding the fundamental principles of ${topic.name}. Practice regularly and use the hint feature during your quiz!` },
      { heading: 'Study Strategy', content: `For ${topic.name}, work through problems step by step. Show your work, check your answers, and review any mistakes.` },
      { heading: 'Ready to Practice?', type: 'tip', content: `Take the quiz to test your knowledge! Claude AI will generate fresh, varied questions just for you.` }
    ]
  };
}

function getOrdinal(n) {
  const s = ['th','st','nd','rd'], v = n % 100;
  return s[(v-20)%10] || s[v] || s[0];
}

// =============================================
// STATE
// =============================================
let state = {
  username: null,
  userCreatedAt: null,
  grade: null,
  topic: null,
  difficulty: 'easy',
  apiKey: sessionStorage.getItem('mathup_key') || '',
  quiz: {
    questions: [],
    answers: [],      // { questionText, options, correctIndex, chosenIndex, wasCorrect, explanation }
    startTime: null,
    current: 0,
    correct: 0,
    wrong: 0,
    timer: null,
    timeLeft: 60,
    answered: false,
    hintUsed: false
  }
};

// =============================================
// NAV & SCREEN
// =============================================
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  stopTimer();
  showScreen('home');
}

function updateNav() {
  const nav = document.getElementById('topNav');
  const navUser = document.getElementById('navUser');
  const navAvatar = document.getElementById('navAvatar');
  const navUsernameEl = document.getElementById('navUsername');
  const navProfileBtn = document.getElementById('navProfileBtn');

  if (state.username) {
    nav.style.display = 'flex';
    navUser.style.display = 'flex';
    navAvatar.textContent = state.username[0].toUpperCase();
    navUsernameEl.textContent = state.username;
    navProfileBtn.style.display = 'inline-block';
  } else {
    nav.style.display = 'none';
  }
}

// =============================================
// USERNAME SCREEN
// =============================================
async function submitUsername() {
  const input = document.getElementById('usernameInput');
  const errEl = document.getElementById('usernameError');
  const btn = document.getElementById('usernameSubmitBtn');

  const raw = input.value.trim();
  errEl.textContent = '';

  if (!raw) { errEl.textContent = 'Please enter a username.'; return; }
  if (!/^[a-zA-Z0-9_-]{1,20}$/.test(raw)) {
    errEl.textContent = 'Letters, numbers, _ or - only (max 20 chars).';
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Checking...';

  try {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: raw })
    });

    const data = await res.json();

    if (!res.ok) {
      errEl.textContent = data.error || 'Something went wrong. Try again.';
      btn.disabled = false;
      btn.textContent = "Let's Go! 🚀";
      return;
    }

    state.username = data.username;
    state.userCreatedAt = data.createdAt;
    updateNav();

    if (data.isNew) {
      btn.textContent = '✅ Account created!';
    } else {
      btn.textContent = '✅ Welcome back!';
    }

    setTimeout(() => {
      showScreen('home');
      // Show API key modal if not set
      if (!state.apiKey) setTimeout(showApiModal, 500);
    }, 600);

  } catch (e) {
    errEl.textContent = 'Network error. Are you connected?';
    btn.disabled = false;
    btn.textContent = "Let's Go! 🚀";
  }
}

// =============================================
// GRADE SCREEN
// =============================================
function buildGradeGrid() {
  const grid = document.getElementById('gradeGrid');
  grid.innerHTML = '';
  for (let g = 1; g <= 12; g++) {
    const btn = document.createElement('button');
    btn.className = 'grade-btn';
    btn.innerHTML = `<span>${g}<sup>${getOrdinal(g)}</sup><span class="grade-label">Grade</span></span>`;
    btn.onclick = () => selectGrade(g);
    grid.appendChild(btn);
  }
}

function selectGrade(g) {
  state.grade = g;
  buildTopicGrid(g);
  showScreen('topic');
}

// =============================================
// TOPIC SCREEN
// =============================================
function buildTopicGrid(g) {
  const topics = CURRICULUM[g] || [];
  document.getElementById('topicGradeLabel').textContent = `${g}${getOrdinal(g)} Grade`;
  document.getElementById('topicScreenTitle').textContent = `${g}${getOrdinal(g)} Grade Topics`;

  const grid = document.getElementById('topicsGrid');
  grid.innerHTML = '';

  topics.forEach(t => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.innerHTML = `
      <span class="topic-icon">${t.icon}</span>
      <div class="topic-name">${t.name}</div>
      <div class="topic-desc">${t.desc}</div>
    `;
    card.onclick = () => selectTopic(t);
    grid.appendChild(card);
  });

  const helpCard = document.createElement('div');
  helpCard.className = 'topic-card help-card';
  helpCard.innerHTML = `
    <span class="topic-icon">🤔</span>
    <div class="topic-name" style="color:var(--neon-yellow)">Help Me Pick!</div>
    <div class="topic-desc">Not sure what you're studying? Let me describe each topic for you.</div>
  `;
  helpCard.onclick = () => showHelpPicker(g);
  grid.appendChild(helpCard);
}

function showHelpPicker(g) {
  const topics = CURRICULUM[g] || [];
  const grid = document.getElementById('helpPickerGrid');
  grid.innerHTML = '';

  topics.forEach(t => {
    const item = document.createElement('div');
    item.className = 'help-topic-item';
    item.innerHTML = `
      <span class="ht-icon">${t.icon}</span>
      <div>
        <div class="ht-name">${t.name}</div>
        <div class="ht-desc">${t.desc}</div>
      </div>
    `;
    item.onclick = () => selectTopic(t);
    grid.appendChild(item);
  });

  showScreen('help');
}

// =============================================
// TOPIC SELECTION
// =============================================
function selectTopic(t) {
  state.topic = t;
  document.getElementById('quizSetupTitle').textContent = t.name;
  showScreen('quiz-setup');
}

function selectDiff(d, btn) {
  state.difficulty = d;
  document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function showLesson() {
  if (!state.topic || !state.grade) return;
  const lessonData = LESSONS[state.topic.id] || getDefaultLesson(state.topic, state.grade);
  renderLesson(lessonData);
  showScreen('lesson');
}

function startQuizFromLesson() {
  showScreen('quiz-setup');
}

// =============================================
// LESSON RENDERER
// =============================================
function renderLesson(data) {
  document.getElementById('lessonTitle').textContent = data.title;

  const total = data.sections.length;
  document.getElementById('lessonProgressBar').style.width = Math.round((1 / total) * 100) + '%';
  document.getElementById('lessonProgressLabel').textContent = `Section 1 of ${total}`;

  const container = document.getElementById('lessonContent');
  container.innerHTML = '';

  data.sections.forEach(sec => {
    const h = document.createElement('h3');
    h.textContent = sec.heading;
    container.appendChild(h);

    if (sec.type === 'formula') {
      const box = document.createElement('div');
      box.className = 'formula-box';
      box.innerHTML = sec.content.replace(/\n/g, '<br>');
      container.appendChild(box);
    } else if (sec.type === 'example') {
      const box = document.createElement('div');
      box.className = 'example-box';
      box.innerHTML = `<div class="ex-label">📝 Example</div>${sec.content.replace(/\n/g, '<br>')}`;
      container.appendChild(box);
    } else if (sec.type === 'tip') {
      const box = document.createElement('div');
      box.className = 'tip-box';
      box.innerHTML = `<div class="tip-label">💡 Pro Tip</div>${sec.content.replace(/\n/g, '<br>')}`;
      container.appendChild(box);
    } else {
      const p = document.createElement('p');
      p.innerHTML = sec.content.replace(/\n/g, '<br>');
      container.appendChild(p);
    }
  });

  container.addEventListener('scroll', () => {
    const pct = Math.min(100, Math.round((container.scrollTop / (container.scrollHeight - container.clientHeight)) * 100));
    document.getElementById('lessonProgressBar').style.width = pct + '%';
  });

  setTimeout(() => {
    document.getElementById('lessonProgressBar').style.width = '100%';
    document.getElementById('lessonProgressLabel').textContent = 'Complete! ✓';
  }, 2000);
}

// =============================================
// QUIZ ENGINE
// =============================================
async function startQuiz() {
  if (!checkApiKey()) return;

  state.quiz = {
    questions: [],
    answers: [],
    startTime: Date.now(),
    current: 0,
    correct: 0,
    wrong: 0,
    timer: null,
    timeLeft: 60,
    answered: false,
    hintUsed: false
  };

  document.getElementById('scoreCorrect').textContent = '0';
  document.getElementById('scoreWrong').textContent = '0';
  showScreen('quiz');

  document.getElementById('questionText').innerHTML = `
    <div class="question-loading">
      <div class="spinner"></div>
      <span>Generating 10 unique questions with AI...</span>
    </div>
  `;
  document.getElementById('optionsGrid').innerHTML = '';
  document.getElementById('hintBtn').disabled = true;

  try {
    state.quiz.questions = await generateAllQuestions(state.grade, state.topic.name, state.difficulty);
  } catch (e) {
    state.quiz.questions = Array.from({ length: 10 }, (_, i) =>
      fallbackQuestion(state.grade, state.topic.name, state.difficulty, i)
    );
  }

  document.getElementById('hintBtn').disabled = false;
  renderQuestion(0);
}

function renderQuestion(idx) {
  const qData = state.quiz.questions[idx];
  state.quiz.answered = false;
  state.quiz.hintUsed = false;

  document.getElementById('qNum').textContent = idx + 1;
  document.getElementById('questionNumber').textContent = `Question ${idx + 1}`;
  document.getElementById('hintArea').style.display = 'none';
  document.getElementById('hintArea').innerHTML = '';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('hintBtn').disabled = false;

  document.getElementById('questionText').textContent = qData.question;

  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  const letters = ['A','B','C','D'];
  qData.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span>${opt}`;
    btn.onclick = () => selectAnswer(i, btn, qData);
    grid.appendChild(btn);
  });

  startTimer();
}

async function generateAllQuestions(grade, topic, difficulty) {
  const diffDesc = {
    easy: 'straightforward single-step problems',
    medium: 'multi-step problems requiring some thought',
    hard: 'challenging problems requiring deeper understanding'
  }[difficulty];

  const prompt = `Generate exactly 10 multiple choice math questions for a ${grade}th grade student studying ${topic}.
Difficulty: ${difficulty} (${diffDesc})

CRITICAL REQUIREMENTS:
- Every question MUST be completely different from the others — no repetition of the same concept or problem type
- Cover a WIDE VARIETY of distinct subtopics within ${topic} — spread across different areas of the subject
- Each question must test a different skill or concept
- Do NOT reuse the same template, numbers, or phrasing for multiple questions

Respond ONLY with a valid JSON array of exactly 10 objects, each in this format:
[
  {
    "question": "the question text",
    "options": ["option A", "option B", "option C", "option D"],
    "correct": 0,
    "explanation": "brief explanation of how to solve it"
  }
]

The "correct" field is the 0-based index of the correct answer in the options array.
Make every question clear and appropriate for ${grade}th grade.`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': state.apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  if (!response.ok) throw new Error('API error: ' + response.status);

  const data = await response.json();
  const text = data.content[0].text.trim();
  const jsonMatch = text.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error('Invalid response format');

  const parsed = JSON.parse(jsonMatch[0]);
  if (!Array.isArray(parsed) || parsed.length === 0) throw new Error('Expected array');

  while (parsed.length < 10) parsed.push(fallbackQuestion(grade, topic, difficulty, parsed.length));
  return parsed.slice(0, 10);
}

async function getHint() {
  if (state.quiz.answered || state.quiz.hintUsed) return;
  state.quiz.hintUsed = true;
  document.getElementById('hintBtn').disabled = true;

  const q = state.quiz.questions[state.quiz.current];
  if (!q) return;

  const hintArea = document.getElementById('hintArea');
  hintArea.style.display = 'block';
  hintArea.innerHTML = `
    <div class="hint-box">
      <div class="hint-label">💡 Hint</div>
      <div class="ai-loading"><div class="spinner"></div>Getting a hint from Claude...</div>
    </div>
  `;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': state.apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 200,
        messages: [{ role: 'user', content: `Give a helpful hint for this math question WITHOUT giving away the answer:\n\nQuestion: ${q.question}\n\nProvide just 1-2 sentences of guidance that helps the student think through the problem.` }]
      })
    });
    const data = await response.json();
    const hint = data.content[0].text.trim();
    hintArea.innerHTML = `<div class="hint-box"><div class="hint-label">💡 Hint</div><div>${hint}</div></div>`;
  } catch (e) {
    hintArea.innerHTML = `<div class="hint-box"><div class="hint-label">💡 Hint</div><div>Think about the core concept: ${state.topic.desc}. Try working through it step by step!</div></div>`;
  }
}

function selectAnswer(idx, btn, qData) {
  if (state.quiz.answered) return;
  state.quiz.answered = true;
  stopTimer();

  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(b => b.disabled = true);

  const isCorrect = idx === qData.correct;

  if (isCorrect) {
    btn.classList.add('correct');
    state.quiz.correct++;
    document.getElementById('scoreCorrect').textContent = state.quiz.correct;
  } else {
    btn.classList.add('wrong');
    state.quiz.wrong++;
    document.getElementById('scoreWrong').textContent = state.quiz.wrong;
    btns[qData.correct].classList.add('correct');
    showExplanation(qData);
  }

  // Record this answer for saving to DB later
  state.quiz.answers.push({
    questionText: qData.question,
    options: qData.options,
    correctIndex: qData.correct,
    chosenIndex: idx,
    wasCorrect: isCorrect,
    explanation: qData.explanation || ''
  });

  document.getElementById('nextBtn').style.display = 'inline-block';
}

function showExplanation(qData) {
  const hintArea = document.getElementById('hintArea');
  hintArea.style.display = 'block';

  const existingHint = hintArea.querySelector('.hint-box');
  const explainHtml = `
    <div class="explain-box">
      <div class="explain-label">❌ How to Solve It</div>
      <div>${qData.explanation || 'The correct answer is option ' + ['A','B','C','D'][qData.correct] + '. Review the steps carefully!'}</div>
    </div>
  `;

  if (existingHint) {
    hintArea.insertAdjacentHTML('beforeend', explainHtml);
  } else {
    hintArea.innerHTML = explainHtml;
  }
}

function nextQuestion() {
  const next = state.quiz.current + 1;
  if (next >= 10) { showResults(); return; }
  state.quiz.current = next;
  renderQuestion(next);
}

// =============================================
// TIMER
// =============================================
function startTimer() {
  state.quiz.timeLeft = 60;
  updateTimerDisplay(60);

  state.quiz.timer = setInterval(() => {
    state.quiz.timeLeft--;
    updateTimerDisplay(state.quiz.timeLeft);
    if (state.quiz.timeLeft <= 0) { stopTimer(); timeUp(); }
  }, 1000);
}

function stopTimer() {
  if (state.quiz.timer) { clearInterval(state.quiz.timer); state.quiz.timer = null; }
}

function updateTimerDisplay(t) {
  const arc = document.getElementById('timerArc');
  const text = document.getElementById('timerText');
  const circumference = 188.5;

  arc.style.strokeDashoffset = circumference - (t / 60) * circumference;
  text.textContent = t;
  text.className = 'timer-text';

  if (t <= 10) { arc.style.stroke = 'var(--neon-pink)'; text.classList.add('danger'); }
  else if (t <= 20) { arc.style.stroke = 'var(--neon-yellow)'; text.classList.add('warning'); }
  else { arc.style.stroke = 'var(--neon-green)'; }
}

function timeUp() {
  if (state.quiz.answered) return;
  state.quiz.answered = true;
  state.quiz.wrong++;
  document.getElementById('scoreWrong').textContent = state.quiz.wrong;

  const q = state.quiz.questions[state.quiz.current];
  if (q) {
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);
    if (btns[q.correct]) btns[q.correct].classList.add('correct');
    showExplanation(q);

    // Record as timed out (chosenIndex: -1)
    state.quiz.answers.push({
      questionText: q.question,
      options: q.options,
      correctIndex: q.correct,
      chosenIndex: -1,
      wasCorrect: false,
      explanation: q.explanation || ''
    });
  }

  const hintArea = document.getElementById('hintArea');
  hintArea.style.display = 'block';
  hintArea.innerHTML = `<div class="explain-box"><div class="explain-label">⏱️ Time's Up!</div><div>You ran out of time. The correct answer has been highlighted above.</div></div>`;

  document.getElementById('nextBtn').style.display = 'inline-block';
}

// =============================================
// FALLBACK QUESTIONS (offline)
// =============================================
function fallbackQuestion(grade, topic, difficulty, idx) {
  const sets = {
    easy: [
      { question: 'What is 7 × 8?', options: ['54','56','58','64'], correct: 1, explanation: '7 × 8 = 56. Memory trick: 5, 6, 7, 8 — 56 = 7×8.' },
      { question: 'Solve: x + 9 = 15', options: ['x = 5','x = 6','x = 7','x = 8'], correct: 1, explanation: 'Subtract 9 from both sides: x = 15 - 9 = 6.' },
      { question: 'What is 25% of 80?', options: ['15','20','25','30'], correct: 1, explanation: '25% = 1/4. 80 ÷ 4 = 20.' },
      { question: 'Area of a rectangle 6m by 4m?', options: ['20 m²','24 m²','26 m²','28 m²'], correct: 1, explanation: 'Area = length × width = 6 × 4 = 24 m².' },
      { question: 'Simplify: 3/6', options: ['1/3','1/2','2/3','3/4'], correct: 1, explanation: 'Both divide by 3: 3÷3=1, 6÷3=2, so 1/2.' }
    ],
    medium: [
      { question: 'Solve: 2x - 5 = 11', options: ['x = 6','x = 7','x = 8','x = 9'], correct: 2, explanation: 'Add 5: 2x=16. Divide by 2: x=8.' },
      { question: 'What is 15% of 200?', options: ['25','30','35','40'], correct: 1, explanation: '15% = 0.15. 0.15 × 200 = 30.' },
      { question: 'Factor: x² + 7x + 12', options: ['(x+3)(x+4)','(x+2)(x+6)','(x+1)(x+12)','(x+5)(x+2)'], correct: 0, explanation: 'Find two numbers multiplying to 12, adding to 7: 3 and 4. So (x+3)(x+4).' },
      { question: 'Slope of y = 3x + 5?', options: ['5','3','3x','8'], correct: 1, explanation: 'In y = mx + b, m is the slope. Here m = 3.' },
      { question: 'Triangle with angles 50° and 70°, what is the third?', options: ['50°','60°','70°','80°'], correct: 1, explanation: 'Angles sum to 180°. 180 - 50 - 70 = 60°.' }
    ],
    hard: [
      { question: 'Differentiate: f(x) = 4x³ - 2x² + x', options: ['12x² - 4x + 1','12x² - 2x + 1','4x² - 2x + 1','12x - 4x + 1'], correct: 0, explanation: 'Power rule: d/dx[xⁿ]=nxⁿ⁻¹. Result: 12x² - 4x + 1.' },
      { question: 'Find ∫(3x²)dx', options: ['x³ + C','6x + C','3x³ + C','x³/3 + C'], correct: 0, explanation: '∫3x² dx = 3·x³/3 = x³ + C.' },
      { question: 'Solve: log₂(x) = 5', options: ['x = 10','x = 25','x = 32','x = 64'], correct: 2, explanation: 'log₂(x)=5 means 2⁵ = x = 32.' },
      { question: 'What is sin(π/6)?', options: ['√3/2','1/2','√2/2','1'], correct: 1, explanation: 'sin(30°) = sin(π/6) = 1/2.' },
      { question: 'Simplify: (x²-9)/(x-3)', options: ['x+3','x-3','x²-3','x+9'], correct: 0, explanation: 'Factor: (x-3)(x+3). Cancel (x-3): result is x+3.' }
    ]
  };

  const pool = sets[difficulty] || sets.easy;
  return pool[idx % pool.length];
}

// =============================================
// RESULTS
// =============================================
function showResults() {
  stopTimer();
  const { correct } = state.quiz;
  const pct = Math.round((correct / 10) * 100);

  let grade, gradeClass, msg;
  if (pct >= 90) { grade = 'A'; gradeClass = 'grade-A'; msg = "Outstanding! You're crushing it! 🔥 You've mastered this topic — time to level up!"; }
  else if (pct >= 80) { grade = 'B'; gradeClass = 'grade-B'; msg = "Great job! 🌟 You've got a solid grasp. A little more practice and you'll nail it every time!"; }
  else if (pct >= 70) { grade = 'C'; gradeClass = 'grade-C'; msg = "Good effort! 💪 You're on the right track. Review the tricky ones and try again!"; }
  else if (pct >= 60) { grade = 'D'; gradeClass = 'grade-D'; msg = "Keep going! 🚀 Review the lesson and give it another shot. You've got this!"; }
  else { grade = 'F'; gradeClass = 'grade-F'; msg = "Don't give up! 💡 Study the lesson, use hints, and try again. You'll get there!"; }

  document.getElementById('resultGrade').textContent = grade;
  document.getElementById('resultGrade').className = 'grade-badge ' + gradeClass;
  document.getElementById('resultScore').textContent = `${correct}/10 — ${pct}%`;
  document.getElementById('resultCorrect').textContent = correct;
  document.getElementById('resultWrong').textContent = 10 - correct;
  document.getElementById('encouragingMsg').textContent = msg;

  const saveIndicator = document.getElementById('saveIndicator');
  saveIndicator.style.display = 'none';

  showScreen('results');
  if (pct >= 70) setTimeout(launchConfetti, 300);

  // Save to server asynchronously
  saveQuizToServer(grade, pct).then(() => {
    saveIndicator.textContent = '✅ Saved to your profile!';
    saveIndicator.style.display = 'inline-block';
  }).catch(() => {
    saveIndicator.textContent = '⚠️ Could not save (offline mode)';
    saveIndicator.style.display = 'inline-block';
    saveIndicator.style.background = 'rgba(255,230,0,0.08)';
    saveIndicator.style.borderColor = 'rgba(255,230,0,0.3)';
    saveIndicator.style.color = 'var(--neon-yellow)';
  });
}

async function saveQuizToServer(letterGrade, scorePercent) {
  if (!state.username) throw new Error('No username');

  const timeTaken = Date.now() - (state.quiz.startTime || Date.now());

  await fetch('/api/quiz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: state.username,
      grade: state.grade,
      topic: state.topic,
      difficulty: state.difficulty,
      score: state.quiz.correct,
      scorePercent,
      letterGrade,
      timeTaken,
      answers: state.quiz.answers
    })
  }).then(r => { if (!r.ok) throw new Error('Save failed'); });
}

function retakeQuiz() { startQuiz(); }

// =============================================
// PROFILE SCREEN
// =============================================
function showProfile() {
  if (!state.username) return;

  // Populate header immediately
  document.getElementById('profileAvatar').textContent = state.username[0].toUpperCase();
  document.getElementById('profileUsernameDisplay').textContent = state.username;
  document.getElementById('profileJoined').textContent = state.userCreatedAt
    ? 'Member since ' + new Date(state.userCreatedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : '';

  document.getElementById('profileLoading').style.display = 'block';
  document.getElementById('profileContent').style.display = 'none';

  showScreen('profile');
  loadProfile();
}

async function loadProfile() {
  try {
    const res = await fetch(`/api/history?username=${encodeURIComponent(state.username)}`);
    if (!res.ok) throw new Error('Failed to load history');
    const quizzes = await res.json();

    document.getElementById('profileLoading').style.display = 'none';
    document.getElementById('profileContent').style.display = 'block';

    renderStats(quizzes);
    renderGradeBreakdown(quizzes);
    renderTopicStats(quizzes);
    renderQuizHistory(quizzes);
  } catch (e) {
    document.getElementById('profileLoading').innerHTML = `
      <div style="color:var(--neon-pink)">⚠️ Could not load profile data. Check your connection.</div>
    `;
  }
}

function renderStats(quizzes) {
  const total = quizzes.length;
  const avgScore = total ? Math.round(quizzes.reduce((s, q) => s + (q.scorePercent || 0), 0) / total) : 0;
  const bestScore = total ? Math.max(...quizzes.map(q => q.scorePercent || 0)) : 0;
  const totalQuestions = total * 10;

  const grid = document.getElementById('statsGrid');
  grid.innerHTML = `
    <div class="stat-card">
      <div class="stat-icon">🎯</div>
      <div class="stat-value">${total}</div>
      <div class="stat-name">Quizzes Taken</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">📊</div>
      <div class="stat-value">${avgScore}%</div>
      <div class="stat-name">Avg Score</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">🏆</div>
      <div class="stat-value">${bestScore}%</div>
      <div class="stat-name">Best Score</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">✏️</div>
      <div class="stat-value">${totalQuestions}</div>
      <div class="stat-name">Questions Answered</div>
    </div>
  `;
}

function renderGradeBreakdown(quizzes) {
  const counts = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  quizzes.forEach(q => { if (counts[q.letterGrade] !== undefined) counts[q.letterGrade]++; });

  const max = Math.max(...Object.values(counts), 1);
  const colors = { A: 'var(--neon-green)', B: 'var(--neon-blue)', C: 'var(--neon-yellow)', D: '#ff9d00', F: 'var(--neon-pink)' };

  document.getElementById('gradeBreakdown').innerHTML = Object.entries(counts).map(([letter, count]) => `
    <div class="grade-row">
      <span class="grade-row-letter grade-${letter}">${letter}</span>
      <div class="grade-bar-track">
        <div class="grade-bar-fill" style="width:${Math.round((count / max) * 100)}%;background:${colors[letter]}"></div>
      </div>
      <span class="grade-row-count">${count} quiz${count !== 1 ? 'zes' : ''}</span>
    </div>
  `).join('');
}

function renderTopicStats(quizzes) {
  if (!quizzes.length) return;

  const topicCounts = {};
  quizzes.forEach(q => {
    const name = q.topic?.name || 'Unknown';
    const icon = q.topic?.icon || '📚';
    if (!topicCounts[name]) topicCounts[name] = { count: 0, icon };
    topicCounts[name].count++;
  });

  const sorted = Object.entries(topicCounts).sort((a, b) => b[1].count - a[1].count).slice(0, 8);

  // Insert topic stats between grade breakdown and quiz history
  const existing = document.getElementById('topicStatsRow');
  if (existing) existing.remove();

  const gradeBreak = document.getElementById('gradeBreakdown');
  const row = document.createElement('div');
  row.id = 'topicStatsRow';
  row.className = 'topic-stats-row';
  row.innerHTML = sorted.map(([name, { count, icon }]) => `
    <div class="topic-stat-pill">
      ${icon} ${name}
      <span class="tsp-count">${count}</span>
    </div>
  `).join('');
  gradeBreak.parentNode.insertBefore(row, gradeBreak.nextSibling);
}

function renderQuizHistory(quizzes) {
  const list = document.getElementById('quizHistoryList');
  const empty = document.getElementById('quizHistoryEmpty');

  if (!quizzes.length) {
    empty.style.display = 'block';
    list.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  list.innerHTML = quizzes.map(q => buildQuizHistoryCard(q)).join('');
}

function buildQuizHistoryCard(q) {
  const gradeColors = { A:'var(--neon-green)', B:'var(--neon-blue)', C:'var(--neon-yellow)', D:'#ff9d00', F:'var(--neon-pink)' };
  const diffClass = `diff-pill-${q.difficulty || 'easy'}`;
  const date = new Date(q.completedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const mins = Math.floor((q.timeTaken || 0) / 60000);
  const secs = Math.floor(((q.timeTaken || 0) % 60000) / 1000);
  const timeStr = `${mins}m ${secs}s`;

  const answersHtml = (q.answers || []).map((a, i) => {
    const wasCorrect = a.wasCorrect;
    const timedOut = a.chosenIndex === -1;
    const statusIcon = wasCorrect ? '✅' : (timedOut ? '⏱️' : '❌');
    const chosenText = timedOut ? 'Timed out' : (a.options?.[a.chosenIndex] || '?');
    const correctText = a.options?.[a.correctIndex] || '?';

    let ansHtml = '';
    if (wasCorrect) {
      ansHtml = `<span class="ans-correct">✓ ${chosenText}</span>`;
    } else {
      ansHtml = timedOut
        ? `<span class="ans-wrong">Timed out</span> → <span class="ans-right-was">✓ ${correctText}</span>`
        : `<span class="ans-wrong">${chosenText}</span> → <span class="ans-right-was">✓ ${correctText}</span>`;
    }

    return `
      <div class="qhc-q-item">
        <div class="qhc-q-status">${statusIcon}</div>
        <div class="qhc-q-body">
          <div class="qhc-q-text">Q${i + 1}: ${escHtml(a.questionText || '')}</div>
          <div class="qhc-q-ans">${ansHtml}</div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="quiz-history-card" id="qhc-${q.id}">
      <div class="qhc-header" onclick="toggleQuizDetail('${q.id}')">
        <div class="qhc-left">
          <div class="qhc-grade-badge grade-${q.letterGrade}" style="color:${gradeColors[q.letterGrade] || 'var(--text-dim)'}">${q.letterGrade}</div>
          <div class="qhc-info">
            <div class="qhc-topic">${escHtml(q.topic?.icon || '')} ${escHtml(q.topic?.name || 'Quiz')}</div>
            <div class="qhc-meta">
              <span>${q.grade ? q.grade + getOrdinal(q.grade) + ' grade' : ''}</span>
              <span class="diff-pill ${diffClass}">${q.difficulty || ''}</span>
              <span>⏱ ${timeStr}</span>
            </div>
          </div>
        </div>
        <div class="qhc-right">
          <div class="qhc-score">${q.score ?? '?'}/10 · ${q.scorePercent ?? '?'}%</div>
          <div class="qhc-date">${date}</div>
          <div class="qhc-chevron">▼</div>
        </div>
      </div>
      <div class="qhc-questions">
        ${answersHtml || '<div style="color:var(--text-dim);font-size:0.85rem">No question details saved.</div>'}
      </div>
    </div>
  `;
}

function toggleQuizDetail(id) {
  const card = document.getElementById('qhc-' + id);
  if (card) card.classList.toggle('expanded');
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// =============================================
// CONFETTI
// =============================================
function launchConfetti() {
  const colors = ['#39ff14','#ff6ec7','#00f5ff','#ffe600','#bf5fff'];
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.width = (Math.random() * 10 + 6) + 'px';
    el.style.height = (Math.random() * 10 + 6) + 'px';
    el.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
    el.style.animationDelay = (Math.random() * 0.5) + 's';
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }
}

// =============================================
// API KEY
// =============================================
function checkApiKey() {
  if (!state.apiKey) { showApiModal(); return false; }
  return true;
}

function showApiModal() {
  document.getElementById('apiModal').classList.add('active');
  document.getElementById('apiKeyInput').value = state.apiKey;
}

function saveApiKey() {
  const key = document.getElementById('apiKeyInput').value.trim();
  if (!key) { alert('Please enter an API key'); return; }
  state.apiKey = key;
  sessionStorage.setItem('mathup_key', key);
  document.getElementById('apiModal').classList.remove('active');
}

document.getElementById('apiModal').addEventListener('click', function(e) {
  if (e.target === this) this.classList.remove('active');
});

// =============================================
// INIT
// =============================================
buildGradeGrid();
