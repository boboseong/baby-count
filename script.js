const ITEMS = [
  { id: "rabbit", name: "토끼", symbol: "🐰", counter: "마리" },
  { id: "pig", name: "돼지", symbol: "🐷", counter: "마리" },
  { id: "puppy", name: "강아지", symbol: "🐶", counter: "마리" },
  { id: "cat", name: "고양이", symbol: "🐱", counter: "마리" },
  { id: "bear", name: "곰", symbol: "🧸", counter: "마리" },
  { id: "fish", name: "물고기", symbol: "🐟", counter: "마리" },
  { id: "bird", name: "새", symbol: "🐦", counter: "마리" },
  { id: "duck", name: "오리", symbol: "🦆", counter: "마리" },
  { id: "cow", name: "소", symbol: "🐮", counter: "마리" },
  { id: "elephant", name: "코끼리", symbol: "🐘", counter: "마리" },
  { id: "turtle", name: "거북이", symbol: "🐢", counter: "마리" },
  { id: "frog", name: "개구리", symbol: "🐸", counter: "마리" },
  { id: "apple", name: "사과", symbol: "🍎", counter: "개" },
  { id: "strawberry", name: "딸기", symbol: "🍓", counter: "개" },
  { id: "banana", name: "바나나", symbol: "🍌", counter: "개" },
  { id: "grape", name: "포도", symbol: "🍇", counter: "송이" },
  { id: "orange", name: "귤", symbol: "🍊", counter: "개" },
  { id: "carrot", name: "당근", symbol: "🥕", counter: "개" },
  { id: "egg", name: "달걀", symbol: "🥚", counter: "개" },
  { id: "icecream", name: "아이스크림", symbol: "🍦", counter: "개" },
  { id: "cookie", name: "쿠키", symbol: "🍪", counter: "개" },
  { id: "bread", name: "빵", symbol: "🍞", counter: "개" },
  { id: "milk", name: "우유", symbol: "🥛", counter: "컵" },
  { id: "cup", name: "컵", symbol: "🥤", counter: "개" },
  { id: "shoe", name: "신발", symbol: "👟", counter: "켤레" },
  { id: "clothes", name: "옷", symbol: "👕", counter: "벌" },
  { id: "hat", name: "모자", symbol: "🧢", counter: "개" },
  { id: "socks", name: "양말", symbol: "🧦", counter: "켤레" },
  { id: "flower", name: "꽃", symbol: "🌸", counter: "송이" },
  { id: "star", name: "별", symbol: "⭐", counter: "개" },
  { id: "tree", name: "나무", symbol: "🌳", counter: "그루" },
  { id: "moon", name: "달", symbol: "🌙", counter: "개" },
  { id: "balloon", name: "풍선", symbol: "🎈", counter: "개" },
  { id: "ball", name: "공", symbol: "⚽", counter: "개" },
  { id: "car", name: "자동차", symbol: "🚗", counter: "대" },
  { id: "train", name: "기차", symbol: "🚂", counter: "대" },
  { id: "bus", name: "버스", symbol: "🚌", counter: "대" },
  { id: "airplane", name: "비행기", symbol: "✈️", counter: "대" },
  { id: "book", name: "책", symbol: "📘", counter: "권" },
  { id: "bag", name: "가방", symbol: "🎒", counter: "개" }
];

const NUMBER_WORDS = {
  1: "하나",
  2: "둘",
  3: "셋",
  4: "넷",
  5: "다섯",
  6: "여섯",
  7: "일곱",
  8: "여덟",
  9: "아홉",
  10: "열",
  11: "열하나",
  12: "열둘"
};

const COUNTER_WORDS = {
  1: "한",
  2: "두",
  3: "세",
  4: "네",
  5: "다섯",
  6: "여섯",
  7: "일곱",
  8: "여덟",
  9: "아홉",
  10: "열",
  11: "열한",
  12: "열두"
};

const REWARD_GROUPS = {
  firstTry: [
    {
      id: "first-try-star",
      tier: "first-try",
      phrase: "한 번에 맞췄어요!",
      speech: "한 번에 맞췄어요!",
      symbols: ["⭐", "✨", "🌟", "💛"]
    },
    {
      id: "first-try-pop",
      tier: "first-try",
      phrase: "와! 바로 정답!",
      speech: "바로 정답이에요!",
      symbols: ["🎉", "✨", "⭐", "💛"]
    }
  ],
  steadyTry: [
    {
      id: "steady-try-balloon",
      tier: "steady-try",
      phrase: "찾았다! 맞았어요!",
      speech: "찾았다! 맞았어요!",
      symbols: ["🎈", "💙", "💛", "💗"]
    },
    {
      id: "steady-try-bounce",
      tier: "steady-try",
      phrase: "통통! 잘했어요!",
      speech: "잘했어요!",
      symbols: ["👏", "✨", "💚", "⭐"]
    }
  ],
  lastTry: [
    {
      id: "last-try-finish",
      tier: "last-try",
      phrase: "끝까지 해냈어요!",
      speech: "끝까지 해냈어요!",
      symbols: ["🌈", "👏", "💚", "✨"]
    }
  ]
};

const MAX_NUMBER = 5;
const RANDOM_ITEM_COUNT = 6;
const PLACEMENT_GAP = 10;
const RANDOM_PLACEMENT_TRIES = 48;
const REWARD_PARTICLE_COUNT = 18;

const appState = {
  selectedItem: null,
  selectedDisplayItem: null,
  selectedNumber: null,
  lastNumber: null,
  playbackToken: 0,
  remainingAnswers: [],
  answerAttemptCount: 0,
  suppressObjectTap: false,
  isRevealInProgress: false
};

function nextPlaybackToken() {
  appState.playbackToken += 1;
  return appState.playbackToken;
}

function getDisplayItem(item) {
  return item;
}

function formatCountSummary(item, number) {
  const displayItem = getDisplayItem(item);
  return `${displayItem.name} ${COUNTER_WORDS[number]} ${displayItem.counter}`;
}

function formatObjectTapSpeech(item, number) {
  const displayItem = getDisplayItem(item);
  return `${displayItem.name} ${NUMBER_WORDS[number]}`;
}

function formatCountingStepSpeech(item, number) {
  const displayItem = getDisplayItem(item);
  return `${displayItem.name} ${NUMBER_WORDS[number]}`;
}

const DRAG_THRESHOLD = 20;

const dragState = {
  card: null,
  pointerId: null,
  startX: 0,
  startY: 0,
  originX: 0,
  originY: 0,
  baseLeft: 0,
  baseTop: 0,
  maxX: 0,
  maxY: 0,
  dragging: false
};

let preferredSystemVoice = null;

const itemStep = document.getElementById("item-step");
const playStep = document.getElementById("play-step");
const itemGroups = document.getElementById("item-groups");
const resultLabel = document.getElementById("result-label");
const objectStage = document.getElementById("object-stage");
const answerGrid = document.getElementById("answer-grid");
const statusText = document.getElementById("status-text");
const fullscreenButton = document.getElementById("fullscreen-button");

renderItemSelection();
initSystemTtsVoice();
initFullscreenToggle();
initObjectCardDragging();
lockZoomGestures();

function pickRandomItems(items, count) {
  const shuffledItems = [...items];

  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffledItems[index], shuffledItems[swapIndex]] = [shuffledItems[swapIndex], shuffledItems[index]];
  }

  return shuffledItems.slice(0, Math.min(count, shuffledItems.length));
}

function renderItemSelection() {
  itemGroups.innerHTML = "";

  pickRandomItems(ITEMS, RANDOM_ITEM_COUNT).forEach((item) => {
    const displayItem = getDisplayItem(item);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "item-button";
    button.dataset.itemId = item.id;
    button.innerHTML = [
      `<span class="item-symbol" aria-hidden="true">${displayItem.symbol}</span>`,
      `<span class="item-name">${displayItem.name}</span>`
    ].join("");
    button.addEventListener("click", () => selectItem(item.id));
    itemGroups.appendChild(button);
  });
}

function selectItem(itemId) {
  appState.selectedItem = ITEMS.find((item) => item.id === itemId) || null;
  appState.selectedDisplayItem = appState.selectedItem ? getDisplayItem(appState.selectedItem) : null;
  syncSelectedButtons(".item-button", itemId, "itemId");

  if (!appState.selectedItem) {
    return;
  }

  appState.selectedNumber = pickCountTarget();
  playCounting();
}

function pickCountTarget() {
  if (MAX_NUMBER <= 1) {
    return 1;
  }

  let number = appState.lastNumber;

  while (number === appState.lastNumber) {
    number = Math.floor(Math.random() * MAX_NUMBER) + 1;
  }

  appState.lastNumber = number;
  return number;
}

async function playCounting() {
  const item = appState.selectedDisplayItem;
  const number = appState.selectedNumber;

  if (!item || !number) {
    return;
  }

  const token = nextPlaybackToken();
  appState.isRevealInProgress = true;

  resetDragState();
  cancelSpeech();
  objectStage.innerHTML = "";
  answerGrid.innerHTML = "";
  appState.remainingAnswers = Array.from({ length: MAX_NUMBER }, (_, index) => index + 1);
  appState.answerAttemptCount = 0;
  appState.suppressObjectTap = false;
  statusText.textContent = item.name;
  resultLabel.textContent = item.name;
  showStep("play");
  // Reserve the answer row before placing any object, otherwise the stage
  // shrinks mid-round and already-placed objects get clipped out of view.
  renderAnswerButtons();
  answerGrid.classList.add("answer-grid--pending");

  try {
    await speak(item.name);

    if (appState.playbackToken !== token) {
      return;
    }

    await wait(240);

    for (let index = 1; index <= number; index += 1) {
      if (appState.playbackToken !== token) {
        return;
      }

      addObjectCard(item, index);
      const countPhrase = formatCountingStepSpeech(item, index);
      statusText.textContent = countPhrase;
      await speak(countPhrase);
      await wait(380);
    }

    if (appState.playbackToken !== token) {
      return;
    }

    const summary = formatCountSummary(item, number);
    statusText.textContent = summary;
    await speak(summary);

    if (appState.playbackToken !== token) {
      return;
    }

    answerGrid.classList.remove("answer-grid--pending");
  } finally {
    if (appState.playbackToken === token) {
      appState.isRevealInProgress = false;
    }
  }
}

function renderAnswerButtons() {
  if (!answerGrid) {
    return;
  }

  answerGrid.innerHTML = "";

  appState.remainingAnswers.forEach((number) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.dataset.number = String(number);
    button.innerHTML = [
      `<span class="answer-number">${number}</span>`,
      `<span class="answer-dots" aria-hidden="true">${'<span class="answer-dot"></span>'.repeat(number)}</span>`
    ].join("");
    button.addEventListener("click", () => handleAnswer(number, button));
    answerGrid.appendChild(button);
  });
}

async function handleAnswer(number, button) {
  if (!appState.selectedNumber) {
    return;
  }

  if (
    answerGrid.classList.contains("answer-grid--locked") ||
    answerGrid.classList.contains("answer-grid--pending")
  ) {
    return;
  }

  answerGrid.classList.add("answer-grid--locked");
  appState.answerAttemptCount += 1;

  const token = nextPlaybackToken();
  cancelSpeech();
  statusText.textContent = NUMBER_WORDS[number];
  await speak(NUMBER_WORDS[number]);

  if (appState.playbackToken !== token) {
    return;
  }

  if (number === appState.selectedNumber) {
    await playCorrectReward(button, token, appState.answerAttemptCount);
    if (appState.playbackToken !== token) {
      return;
    }
    resetToHome();
    return;
  }

  appState.remainingAnswers = appState.remainingAnswers.filter((value) => value !== number);
  button.classList.add("answer-button--wrong");
  button.disabled = true;
  answerGrid.classList.remove("answer-grid--locked");

  const retryPhrase = "다시 골라보세요.";
  statusText.textContent = retryPhrase;
  speak(retryPhrase);
}

async function playCorrectReward(button, token, attemptCount) {
  const reward = pickRewardVariant(attemptCount);
  const overlay = createInstantReward(reward);
  const cards = Array.from(objectStage.querySelectorAll(".object-card"));

  statusText.textContent = reward.phrase;
  button.classList.add("correct-answer");
  objectStage.classList.add("object-stage--celebrate");
  cards.forEach((card, index) => {
    card.style.setProperty("--reward-delay", `${Math.min(index * 45, 220)}ms`);
    card.classList.add("object-card--celebrate");
  });
  playStep.appendChild(overlay);

  const soundPromise = playCheerSound();
  const speechPromise = speak(reward.speech);

  await wait(1500);
  await Promise.allSettled([soundPromise, speechPromise]);

  if (appState.playbackToken !== token) {
    return;
  }

  overlay.remove();
  objectStage.classList.remove("object-stage--celebrate");
  cards.forEach((card) => {
    card.classList.remove("object-card--celebrate");
    card.style.removeProperty("--reward-delay");
  });
  answerGrid.classList.remove("answer-grid--locked");
}

function pickRewardVariant(attemptCount) {
  const rewardGroup = getRewardGroup(attemptCount);
  const rewardIndex = Math.floor(Math.random() * rewardGroup.length);
  return rewardGroup[rewardIndex];
}

function getRewardGroup(attemptCount) {
  if (attemptCount <= 1) {
    return REWARD_GROUPS.firstTry;
  }

  if (attemptCount >= MAX_NUMBER) {
    return REWARD_GROUPS.lastTry;
  }

  return REWARD_GROUPS.steadyTry;
}

function createInstantReward(reward) {
  const overlay = document.createElement("div");
  overlay.className = `instant-reward instant-reward--${reward.id} instant-reward--${reward.tier}`;
  overlay.dataset.rewardTier = reward.tier;
  overlay.setAttribute("aria-hidden", "true");

  const message = document.createElement("div");
  message.className = "instant-reward-message";
  message.textContent = reward.phrase;
  overlay.appendChild(message);

  const displayItem = appState.selectedDisplayItem;
  const symbols = displayItem ? [displayItem.symbol, ...reward.symbols] : reward.symbols;

  for (let index = 0; index < REWARD_PARTICLE_COUNT; index += 1) {
    const particle = document.createElement("span");
    particle.className = "instant-reward-particle";
    particle.textContent = symbols[index % symbols.length];
    particle.style.setProperty("--x", `${randomBetween(-42, 42)}vw`);
    particle.style.setProperty("--y", `${randomBetween(-34, 26)}vh`);
    particle.style.setProperty("--spin", `${randomBetween(-70, 70)}deg`);
    particle.style.setProperty("--delay", `${index * 34}ms`);
    particle.style.setProperty("--size", `${randomBetween(1.3, 2.7).toFixed(2)}rem`);
    overlay.appendChild(particle);
  }

  return overlay;
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function addObjectCard(item, index) {
  const displayItem = getDisplayItem(item);
  const card = document.createElement("button");
  card.type = "button";
  card.className = "object-card";
  card.dataset.dragX = "0";
  card.dataset.dragY = "0";
  card.style.animationDelay = `${Math.min(index * 40, 280)}ms`;
  card.innerHTML = `<div class="object-symbol" aria-hidden="true">${displayItem.symbol}</div>`;
  card.addEventListener("click", () => {
    if (!appState.selectedNumber || appState.suppressObjectTap) {
      return;
    }

    if (appState.isRevealInProgress) {
      nudgeCard(card);
      return;
    }

    const phrase = formatObjectTapSpeech(item, appState.selectedNumber);
    cancelSpeech();
    statusText.textContent = phrase;
    speak(phrase);
  });
  objectStage.appendChild(card);
  placeObjectCardRandomly(card);
}

function nudgeCard(card) {
  const symbol = card.querySelector(".object-symbol");

  if (!symbol) {
    return;
  }

  symbol.classList.remove("object-symbol--nudge");
  void symbol.offsetWidth;
  symbol.classList.add("object-symbol--nudge");
  symbol.addEventListener(
    "animationend",
    () => symbol.classList.remove("object-symbol--nudge"),
    { once: true }
  );
}

function placeObjectCardRandomly(card) {
  // Offsets are resolved against the padding box, so the stage padding has to
  // come off the range or a card can hang over the rounded edge.
  const stageStyle = window.getComputedStyle(objectStage);
  const padX = Number.parseFloat(stageStyle.paddingLeft) + Number.parseFloat(stageStyle.paddingRight);
  const padY = Number.parseFloat(stageStyle.paddingTop) + Number.parseFloat(stageStyle.paddingBottom);
  const maxLeft = Math.max(objectStage.clientWidth - padX - card.offsetWidth, 0);
  const maxTop = Math.max(objectStage.clientHeight - padY - card.offsetHeight, 0);
  const existingBoxes = Array.from(objectStage.querySelectorAll(".object-card"))
    .filter((existingCard) => existingCard !== card)
    .map(getCardPlacementBox);

  let bestCandidate = createRandomPlacement(maxLeft, maxTop);
  let bestScore = -1;

  for (let attempt = 0; attempt < RANDOM_PLACEMENT_TRIES; attempt += 1) {
    const candidate = createRandomPlacement(maxLeft, maxTop);
    const candidateBox = {
      left: candidate.left,
      top: candidate.top,
      width: card.offsetWidth,
      height: card.offsetHeight
    };

    if (!existingBoxes.some((box) => doBoxesOverlap(candidateBox, box, PLACEMENT_GAP))) {
      setCardBasePosition(card, candidate);
      return;
    }

    const score = getPlacementDistanceScore(candidateBox, existingBoxes);

    if (score > bestScore) {
      bestScore = score;
      bestCandidate = candidate;
    }
  }

  setCardBasePosition(card, bestCandidate);
}

function createRandomPlacement(maxLeft, maxTop) {
  return {
    left: Math.round(Math.random() * maxLeft),
    top: Math.round(Math.random() * maxTop)
  };
}

function setCardBasePosition(card, position) {
  card.style.left = `${position.left}px`;
  card.style.top = `${position.top}px`;
}

function getCardPlacementBox(card) {
  return {
    left: Number.parseFloat(card.style.left) || 0,
    top: Number.parseFloat(card.style.top) || 0,
    width: card.offsetWidth,
    height: card.offsetHeight
  };
}

function doBoxesOverlap(a, b, gap = 0) {
  return (
    a.left < b.left + b.width + gap &&
    a.left + a.width + gap > b.left &&
    a.top < b.top + b.height + gap &&
    a.top + a.height + gap > b.top
  );
}

function getPlacementDistanceScore(candidate, boxes) {
  if (boxes.length === 0) {
    return Number.POSITIVE_INFINITY;
  }

  const candidateCenter = {
    x: candidate.left + candidate.width / 2,
    y: candidate.top + candidate.height / 2
  };

  return Math.min(
    ...boxes.map((box) => {
      const center = {
        x: box.left + box.width / 2,
        y: box.top + box.height / 2
      };

      return Math.hypot(candidateCenter.x - center.x, candidateCenter.y - center.y);
    })
  );
}

function showStep(step) {
  const steps = {
    item: itemStep,
    play: playStep
  };

  Object.entries(steps).forEach(([key, section]) => {
    const isActive = key === step;
    section.hidden = !isActive;
    section.classList.toggle("active", isActive);
  });
}

function resetToHome() {
  appState.selectedItem = null;
  appState.selectedDisplayItem = null;
  appState.selectedNumber = null;
  nextPlaybackToken();
  appState.remainingAnswers = [];
  appState.answerAttemptCount = 0;
  appState.suppressObjectTap = false;
  appState.isRevealInProgress = false;
  resetDragState();
  cancelSpeech();
  objectStage.innerHTML = "";
  answerGrid.innerHTML = "";
  answerGrid.classList.remove("answer-grid--pending", "answer-grid--locked");
  statusText.textContent = "";
  resultLabel.textContent = "";
  renderItemSelection();
  syncSelectedButtons(".item-button", null, "itemId");
  showStep("item");
}

function syncSelectedButtons(selector, selectedValue, key) {
  document.querySelectorAll(selector).forEach((button) => {
    const currentValue = button.dataset[key];
    button.classList.toggle("selected", currentValue === selectedValue);
  });
}

function initObjectCardDragging() {
  if (!objectStage) {
    return;
  }

  objectStage.addEventListener("pointerdown", handleCardPointerDown);
  objectStage.addEventListener("pointermove", handleCardPointerMove);
  objectStage.addEventListener("pointerup", handleCardPointerEnd);
  objectStage.addEventListener("pointercancel", handleCardPointerEnd);
  objectStage.addEventListener("lostpointercapture", handleCardPointerEnd);
}

function handleCardPointerDown(event) {
  const card = event.target.closest(".object-card");

  if (!card || !objectStage || dragState.card) {
    return;
  }

  const stageRect = objectStage.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const originX = Number(card.dataset.dragX || 0);
  const originY = Number(card.dataset.dragY || 0);

  dragState.card = card;
  dragState.pointerId = event.pointerId;
  dragState.startX = event.clientX;
  dragState.startY = event.clientY;
  dragState.originX = originX;
  dragState.originY = originY;
  dragState.baseLeft = cardRect.left - stageRect.left - originX;
  dragState.baseTop = cardRect.top - stageRect.top - originY;
  dragState.maxX = Math.max(stageRect.width - cardRect.width - dragState.baseLeft, 0);
  dragState.maxY = Math.max(stageRect.height - cardRect.height - dragState.baseTop, 0);
  dragState.dragging = false;

  if (typeof card.setPointerCapture === "function") {
    card.setPointerCapture(event.pointerId);
  }
}

function handleCardPointerMove(event) {
  if (!dragState.card || dragState.pointerId !== event.pointerId) {
    return;
  }

  const deltaX = event.clientX - dragState.startX;
  const deltaY = event.clientY - dragState.startY;

  if (!dragState.dragging) {
    const distance = Math.hypot(deltaX, deltaY);

    if (distance < DRAG_THRESHOLD) {
      return;
    }

    dragState.dragging = true;
    appState.suppressObjectTap = true;
    dragState.card.classList.add("dragging");
  }

  event.preventDefault();

  const nextX = clamp(dragState.originX + deltaX, -dragState.baseLeft, dragState.maxX);
  const nextY = clamp(dragState.originY + deltaY, -dragState.baseTop, dragState.maxY);
  applyCardPosition(dragState.card, nextX, nextY);
}

function handleCardPointerEnd(event) {
  if (!dragState.card || dragState.pointerId !== event.pointerId) {
    return;
  }

  if (dragState.dragging) {
    window.setTimeout(() => {
      appState.suppressObjectTap = false;
    }, 0);
  } else {
    appState.suppressObjectTap = false;
  }

  resetDragState();
}

function resetDragState() {
  if (!dragState.card) {
    return;
  }

  if (
    dragState.pointerId !== null &&
    typeof dragState.card.hasPointerCapture === "function" &&
    dragState.card.hasPointerCapture(dragState.pointerId)
  ) {
    try {
      dragState.card.releasePointerCapture(dragState.pointerId);
    } catch {
      // Pointer capture can already be gone after a browser-level cancellation.
    }
  }

  dragState.card.classList.remove("dragging");
  dragState.card = null;
  dragState.pointerId = null;
  dragState.startX = 0;
  dragState.startY = 0;
  dragState.originX = 0;
  dragState.originY = 0;
  dragState.baseLeft = 0;
  dragState.baseTop = 0;
  dragState.maxX = 0;
  dragState.maxY = 0;
  dragState.dragging = false;
}

function applyCardPosition(card, x, y) {
  card.dataset.dragX = String(x);
  card.dataset.dragY = String(y);
  card.style.transform = `translate(${x}px, ${y}px)`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function cancelSpeech() {
  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
}

function speak(text) {
  return new Promise((resolve) => {
    let settled = false;

    const finish = () => {
      if (settled) {
        return;
      }

      settled = true;
      resolve();
    };

    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance !== "function") {
      finish();
      return;
    }

    refreshPreferredSystemVoice();

    const utterance = new SpeechSynthesisUtterance(text);
    if (preferredSystemVoice) {
      utterance.voice = preferredSystemVoice;
      utterance.lang = preferredSystemVoice.lang || "ko-KR";
    } else {
      utterance.lang = "ko-KR";
    }

    utterance.rate = 0.82;
    utterance.pitch = 1.05;
    utterance.onend = finish;
    utterance.onerror = finish;

    window.setTimeout(finish, 1600);

    try {
      window.speechSynthesis.speak(utterance);
    } catch {
      finish();
    }
  });
}

function initSystemTtsVoice() {
  if (!("speechSynthesis" in window)) {
    return;
  }

  refreshPreferredSystemVoice();

  if (typeof window.speechSynthesis.addEventListener === "function") {
    window.speechSynthesis.addEventListener("voiceschanged", refreshPreferredSystemVoice);
  }
}

function initFullscreenToggle() {
  if (!fullscreenButton) {
    return;
  }

  const root = document.documentElement;
  const supported = Boolean(root.requestFullscreen || root.webkitRequestFullscreen);

  if (!supported) {
    fullscreenButton.hidden = true;
    return;
  }

  fullscreenButton.addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", syncFullscreenButtonState);
  document.addEventListener("webkitfullscreenchange", syncFullscreenButtonState);
  syncFullscreenButtonState();
}

function toggleFullscreen() {
  const root = document.documentElement;
  const active = Boolean(document.fullscreenElement || document.webkitFullscreenElement);

  if (active) {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
      return;
    }

    if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }

    return;
  }

  if (root.requestFullscreen) {
    root.requestFullscreen().catch(() => {});
    return;
  }

  if (root.webkitRequestFullscreen) {
    root.webkitRequestFullscreen();
  }
}

function syncFullscreenButtonState() {
  if (!fullscreenButton) {
    return;
  }

  const active = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
  fullscreenButton.textContent = active ? "전체화면 해제" : "전체화면";
  fullscreenButton.setAttribute("aria-pressed", active ? "true" : "false");
}

function lockZoomGestures() {
  let lastTouchEnd = 0;

  document.addEventListener(
    "touchend",
    (event) => {
      const now = Date.now();

      if (now - lastTouchEnd <= 320) {
        event.preventDefault();
      }

      lastTouchEnd = now;
    },
    { passive: false }
  );

  ["gesturestart", "gesturechange", "gestureend"].forEach((eventName) => {
    document.addEventListener(
      eventName,
      (event) => {
        event.preventDefault();
      },
      { passive: false }
    );
  });

  document.addEventListener("dblclick", (event) => {
    event.preventDefault();
  });

  window.addEventListener(
    "wheel",
    (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    },
    { passive: false }
  );
}

function refreshPreferredSystemVoice() {
  const voices = window.speechSynthesis.getVoices();
  preferredSystemVoice = pickSystemVoice(voices);
}

function pickSystemVoice(voices) {
  if (!Array.isArray(voices) || voices.length === 0) {
    return null;
  }

  const korean = voices.filter((voice) => String(voice.lang).toLowerCase().startsWith("ko"));
  const localKorean = korean.find((voice) => voice.localService);

  if (localKorean) {
    return localKorean;
  }

  if (korean.length > 0) {
    return korean[0];
  }

  const localAny = voices.find((voice) => voice.localService);
  return localAny || voices[0] || null;
}

function wait(duration) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
}

function playCheerSound() {
  return new Promise((resolve) => {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
      resolve();
      return;
    }

    let context;

    try {
      context = new AudioContextClass();
    } catch {
      resolve();
      return;
    }

    const now = context.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5];

    notes.forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const start = now + index * 0.08;
      const end = start + 0.26;

      oscillator.type = "triangle";
      oscillator.frequency.setValueAtTime(frequency, start);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.22, start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, end);

      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(start);
      oscillator.stop(end);
    });

    window.setTimeout(() => {
      if (typeof context.close === "function") {
        context.close().catch(() => {});
      }
      resolve();
    }, 520);
  });
}
