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

// Bound of the classic mode: its answer grid and reward tiers are tied to it.
const MAX_NUMBER = 5;
const RANDOM_ITEM_COUNT = 6;
const PLACEMENT_GAP = 10;
const RANDOM_PLACEMENT_TRIES = 48;
const REWARD_PARTICLE_COUNT = 18;

const TOUCH_COUNT_CHOICES = [3, 4, 5];
const TOUCH_LAYOUT_CHOICES = [
  { id: "rows", label: "규칙적" },
  { id: "random", label: "무작위" }
];
const QUIZ_TYPE_CHOICES = [
  { id: "quantity", label: "같은 개수" },
  { id: "numeral", label: "숫자" },
  { id: "both", label: "함께" },
  { id: "random", label: "랜덤" },
  { id: "off", label: "없음" }
];
const QUIZ_ASKABLE_TYPES = ["quantity", "numeral", "both"];
const PENALTY_DELAY_CHOICES = [0, 5, 10];
const QUIZ_INPUT_LOCK = 500;
const QUIZ_CORRECT_HOLD = 1200;
const DEMO_STEP_DELAY = 700;
const PROGRESS_LOG_LIMIT = 4000;
const MOVING_AVERAGE_WINDOW = 10;
const TREND_MAX_COLUMNS = 130;

const TOUCH_HINT_DELAY = 3000;
const SETTINGS_STORAGE_KEY = "baby-count-settings";
const PROGRESS_STORAGE_KEY = "baby-count-progress";

const touchSettings = {
  maxCount: 3,
  layout: "rows",
  quizType: "quantity",
  penaltyDelay: 10
};

// Counters accumulate for the life of the install and are never trimmed, so
// per-number accuracy stays exact. Only the bit log used for the trend line is
// bounded, and it is the one thing that can afford to forget.
// Declared here, above the init block that calls loadProgress().
const progress = {
  byNumber: {},
  byType: {},
  total: { ok: 0, count: 0 },
  log: ""
};

const appState = {
  mode: "classic",
  selectedItem: null,
  selectedDisplayItem: null,
  selectedNumber: null,
  lastNumber: null,
  lastItemId: null,
  playbackToken: 0,
  remainingAnswers: [],
  answerAttemptCount: 0,
  suppressObjectTap: false,
  isRevealInProgress: false,
  countedCount: 0,
  countTarget: 0,
  hintTimerId: null,
  quizPhase: false,
  quizAnswered: false,
  quizAnswer: 0,
  quizType: "quantity",
  quizLockUntil: 0,
  penaltyTimerId: null
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

const modeStep = document.getElementById("mode-step");
const itemStep = document.getElementById("item-step");
const playStep = document.getElementById("play-step");
const itemGroups = document.getElementById("item-groups");
const resultLabel = document.getElementById("result-label");
const objectStage = document.getElementById("object-stage");
const answerGrid = document.getElementById("answer-grid");
const tallyStrip = document.getElementById("tally-strip");
const statusText = document.getElementById("status-text");
const fullscreenButton = document.getElementById("fullscreen-button");
const classicModeButton = document.getElementById("mode-classic");
const touchModeButton = document.getElementById("mode-touch");
const countOptions = document.getElementById("count-options");
const layoutOptions = document.getElementById("layout-options");
const quizTypeOptions = document.getElementById("quiz-type-options");
const penaltyOptions = document.getElementById("penalty-options");
const progressSummary = document.getElementById("progress-summary");
const numberAccuracy = document.getElementById("number-accuracy");
const typeAccuracy = document.getElementById("type-accuracy");
const trendChart = document.getElementById("trend-chart");
const clearProgressButton = document.getElementById("clear-progress");

// Startup runs at the bottom of the file, below every declaration it touches:
// these helpers read module-level constants, and calling them from up here would
// hit the temporal dead zone the moment a saved record existed.

// Storage access throws outright in some privacy modes, so every touch of it is
// guarded and simply falls back to the defaults.
function loadTouchSettings() {
  let raw = null;

  try {
    raw = window.localStorage.getItem(SETTINGS_STORAGE_KEY);
  } catch {
    return;
  }

  if (!raw) {
    return;
  }

  try {
    const saved = JSON.parse(raw);

    if (TOUCH_COUNT_CHOICES.includes(saved.maxCount)) {
      touchSettings.maxCount = saved.maxCount;
    }

    if (TOUCH_LAYOUT_CHOICES.some((choice) => choice.id === saved.layout)) {
      touchSettings.layout = saved.layout;
    }

    if (QUIZ_TYPE_CHOICES.some((choice) => choice.id === saved.quizType)) {
      touchSettings.quizType = saved.quizType;
    }

    if (PENALTY_DELAY_CHOICES.includes(saved.penaltyDelay)) {
      touchSettings.penaltyDelay = saved.penaltyDelay;
    }
  } catch {
    // A corrupt entry is no reason to block play.
  }
}

function saveTouchSettings() {
  try {
    window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(touchSettings));
  } catch {
    // Settings simply do not persist here.
  }
}

function createProgressBucket() {
  return { ok: 0, count: 0 };
}

function loadProgress() {
  let raw = null;

  try {
    raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
  } catch {
    return;
  }

  if (!raw) {
    return;
  }

  try {
    const saved = JSON.parse(raw);
    progress.byNumber = sanitizeBuckets(saved.byNumber);
    progress.byType = sanitizeBuckets(saved.byType);

    const total = sanitizeBucket(saved.total);
    progress.total = total || createProgressBucket();
    progress.log = typeof saved.log === "string" ? saved.log.replace(/[^01]/g, "") : "";
  } catch {
    clearProgressState();
  }
}

function sanitizeBuckets(source) {
  const result = {};

  if (!source || typeof source !== "object") {
    return result;
  }

  Object.keys(source).forEach((key) => {
    const bucket = sanitizeBucket(source[key]);

    if (bucket) {
      result[key] = bucket;
    }
  });

  return result;
}

function sanitizeBucket(bucket) {
  if (!bucket || typeof bucket !== "object") {
    return null;
  }

  const ok = Number(bucket.ok);
  const count = Number(bucket.count);

  if (!Number.isFinite(ok) || !Number.isFinite(count) || count < 0 || ok < 0 || ok > count) {
    return null;
  }

  return { ok, count };
}

function saveProgress() {
  try {
    window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // The session still plays; only the history is lost.
  }
}

function clearProgressState() {
  progress.byNumber = {};
  progress.byType = {};
  progress.total = createProgressBucket();
  progress.log = "";
}

function recordQuizResult(quizType, answer, isCorrect) {
  const numberKey = String(answer);

  progress.byNumber[numberKey] = progress.byNumber[numberKey] || createProgressBucket();
  progress.byType[quizType] = progress.byType[quizType] || createProgressBucket();

  [progress.byNumber[numberKey], progress.byType[quizType], progress.total].forEach((bucket) => {
    bucket.count += 1;

    if (isCorrect) {
      bucket.ok += 1;
    }
  });

  progress.log += isCorrect ? "1" : "0";

  if (progress.log.length > PROGRESS_LOG_LIMIT) {
    progress.log = progress.log.slice(progress.log.length - PROGRESS_LOG_LIMIT);
  }

  saveProgress();
}

function clearProgress() {
  clearProgressState();
  saveProgress();
  renderProgressSummary();
}

function initModeSelection() {
  if (classicModeButton) {
    classicModeButton.addEventListener("click", () => enterMode("classic"));
  }

  if (touchModeButton) {
    touchModeButton.addEventListener("click", () => enterMode("touch"));
  }

  renderSettingOptions(countOptions, TOUCH_COUNT_CHOICES.map((value) => ({
    id: String(value),
    label: `1~${value}`
  })), () => String(touchSettings.maxCount), (id) => {
    touchSettings.maxCount = Number(id);
  });

  renderSettingOptions(layoutOptions, TOUCH_LAYOUT_CHOICES, () => touchSettings.layout, (id) => {
    touchSettings.layout = id;
  });

  renderSettingOptions(quizTypeOptions, QUIZ_TYPE_CHOICES, () => touchSettings.quizType, (id) => {
    touchSettings.quizType = id;
  });

  renderSettingOptions(penaltyOptions, PENALTY_DELAY_CHOICES.map((value) => ({
    id: String(value),
    label: value === 0 ? "없음" : `${value}초`
  })), () => String(touchSettings.penaltyDelay), (id) => {
    touchSettings.penaltyDelay = Number(id);
  });

  if (clearProgressButton) {
    clearProgressButton.addEventListener("click", clearProgress);
  }

  renderProgressSummary();
}

function formatAccuracy(bucket) {
  if (!bucket || bucket.count === 0) {
    return "—";
  }

  return `${bucket.ok}/${bucket.count} (${Math.round((bucket.ok / bucket.count) * 100)}%)`;
}

function renderProgressSummary() {
  if (progressSummary) {
    progressSummary.textContent = progress.total.count === 0
      ? "아직 기록이 없어요."
      : `전체 ${formatAccuracy(progress.total)} · 우연 수준 50%`;
  }

  renderNumberAccuracyBars();
  renderTypeAccuracy();
  renderMovingAverageChart();
}

function renderNumberAccuracyBars() {
  if (!numberAccuracy) {
    return;
  }

  numberAccuracy.innerHTML = "";

  // Only numbers that actually came up, so changing the count range never leaves
  // empty rows behind.
  const keys = Object.keys(progress.byNumber)
    .filter((key) => progress.byNumber[key].count > 0)
    .sort((a, b) => Number(a) - Number(b));

  if (keys.length === 0) {
    const empty = document.createElement("p");
    empty.className = "accuracy-empty";
    empty.textContent = "숫자별 기록은 문제를 풀면 쌓여요.";
    numberAccuracy.appendChild(empty);
    return;
  }

  keys.forEach((key) => {
    const bucket = progress.byNumber[key];
    const ratio = bucket.ok / bucket.count;

    const row = document.createElement("div");
    row.className = "accuracy-row";

    const label = document.createElement("span");
    label.className = "accuracy-label";
    label.textContent = key;
    row.appendChild(label);

    const track = document.createElement("span");
    track.className = "accuracy-track";
    const bar = document.createElement("span");
    // One measure across categories, so every bar carries the same hue: a
    // different colour per number would read as a different kind of thing.
    bar.className = "accuracy-bar";
    bar.style.width = `${(ratio * 100).toFixed(1)}%`;
    track.appendChild(bar);
    row.appendChild(track);

    const value = document.createElement("span");
    value.className = "accuracy-value";
    value.textContent = formatAccuracy(bucket);
    row.appendChild(value);

    if (bucket.count < 5) {
      const note = document.createElement("span");
      note.className = "accuracy-note";
      note.textContent = "표본 적음";
      row.appendChild(note);
    }

    numberAccuracy.appendChild(row);
  });
}

function renderTypeAccuracy() {
  if (!typeAccuracy) {
    return;
  }

  typeAccuracy.innerHTML = "";

  QUIZ_ASKABLE_TYPES.forEach((type) => {
    const bucket = progress.byType[type];

    if (!bucket || bucket.count === 0) {
      return;
    }

    const label = QUIZ_TYPE_CHOICES.find((choice) => choice.id === type);
    const row = document.createElement("p");
    row.className = "progress-type-row";
    row.textContent = `${label ? label.label : type} ${formatAccuracy(bucket)}`;
    typeAccuracy.appendChild(row);
  });
}

function computeMovingAverage(log, windowSize) {
  const points = [];

  if (log.length < windowSize) {
    return points;
  }

  let sum = 0;

  for (let index = 0; index < log.length; index += 1) {
    sum += log[index] === "1" ? 1 : 0;

    if (index >= windowSize) {
      sum -= log[index - windowSize] === "1" ? 1 : 0;
    }

    if (index >= windowSize - 1) {
      points.push({ at: index + 1, value: sum / windowSize });
    }
  }

  return points;
}

// Averaging rather than dropping points, so a long history compresses without
// inventing or hiding a swing.
function downsampleSeries(points, maxColumns) {
  if (points.length <= maxColumns) {
    return points;
  }

  const bucketSize = points.length / maxColumns;
  const result = [];

  for (let index = 0; index < maxColumns; index += 1) {
    const start = Math.floor(index * bucketSize);
    const end = Math.min(Math.floor((index + 1) * bucketSize), points.length);
    const slice = points.slice(start, Math.max(end, start + 1));
    const sum = slice.reduce((acc, point) => acc + point.value, 0);

    result.push({
      at: slice[slice.length - 1].at,
      value: sum / slice.length
    });
  }

  return result;
}

const SVG_NS = "http://www.w3.org/2000/svg";

function svgNode(name, attributes) {
  const node = document.createElementNS(SVG_NS, name);

  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, String(value));
  });

  return node;
}

function renderMovingAverageChart() {
  if (!trendChart) {
    return;
  }

  trendChart.innerHTML = "";

  const allPoints = computeMovingAverage(progress.log, MOVING_AVERAGE_WINDOW);

  if (allPoints.length === 0) {
    const note = document.createElement("p");
    note.className = "accuracy-empty";
    note.textContent = `${MOVING_AVERAGE_WINDOW}문제부터 추이가 표시돼요.`;
    trendChart.appendChild(note);
    return;
  }

  const points = downsampleSeries(allPoints, TREND_MAX_COLUMNS);
  const latest = allPoints[allPoints.length - 1];

  const heading = document.createElement("p");
  heading.className = "trend-heading";
  heading.textContent = `최근 ${MOVING_AVERAGE_WINDOW}문제 이동평균 ${Math.round(latest.value * 100)}%`;
  trendChart.appendChild(heading);

  const width = 300;
  const height = 132;
  const pad = { top: 10, right: 12, bottom: 22, left: 34 };
  const plotWidth = width - pad.left - pad.right;
  const plotHeight = height - pad.top - pad.bottom;

  const svg = svgNode("svg", {
    viewBox: `0 0 ${width} ${height}`,
    class: "trend-svg",
    role: "img",
    "aria-label": `10문제 이동평균 추이, 현재 ${Math.round(latest.value * 100)}퍼센트`
  });

  const xFor = (index) => points.length === 1
    ? pad.left + plotWidth / 2
    : pad.left + (index / (points.length - 1)) * plotWidth;
  const yFor = (value) => pad.top + (1 - value) * plotHeight;

  // Axis rules are solid hairlines; the dash is reserved for the threshold below,
  // where dashing actually means something.
  svg.appendChild(svgNode("line", {
    x1: pad.left, y1: pad.top, x2: pad.left, y2: pad.top + plotHeight, class: "trend-axis"
  }));
  svg.appendChild(svgNode("line", {
    x1: pad.left, y1: pad.top + plotHeight, x2: pad.left + plotWidth, y2: pad.top + plotHeight,
    class: "trend-axis"
  }));

  [0, 0.5, 1].forEach((value) => {
    const tick = svgNode("text", {
      x: pad.left - 6, y: yFor(value) + 3.5, class: "trend-tick", "text-anchor": "end"
    });
    tick.textContent = `${value * 100}%`;
    svg.appendChild(tick);
  });

  svg.appendChild(svgNode("line", {
    x1: pad.left, y1: yFor(0.5), x2: pad.left + plotWidth, y2: yFor(0.5), class: "trend-chance"
  }));
  const chanceLabel = svgNode("text", {
    x: pad.left + plotWidth, y: yFor(0.5) - 5, class: "trend-chance-label", "text-anchor": "end"
  });
  chanceLabel.textContent = "우연 50%";
  svg.appendChild(chanceLabel);

  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${xFor(index).toFixed(1)} ${yFor(point.value).toFixed(1)}`)
    .join(" ");
  svg.appendChild(svgNode("path", { d: path, class: "trend-line" }));

  // Only the endpoint is labelled; a value on every point would be unreadable.
  svg.appendChild(svgNode("circle", {
    cx: xFor(points.length - 1), cy: yFor(points[points.length - 1].value), r: 4, class: "trend-endpoint"
  }));

  // Labels come from the full series, not the downsampled buckets, so the axis
  // states the real range.
  [allPoints[0].at, latest.at].forEach((at, index) => {
    const label = svgNode("text", {
      x: index === 0 ? pad.left : pad.left + plotWidth,
      y: height - 6,
      class: "trend-tick",
      "text-anchor": index === 0 ? "start" : "end"
    });
    label.textContent = `${at}번`;
    svg.appendChild(label);
  });

  trendChart.appendChild(svg);
  attachTrendTooltip(svg, points, { xFor, yFor, pad, plotWidth, plotHeight });
}

// Nearest-point readout across the whole plot height, so the parent does not have
// to land on a 4px dot.
function attachTrendTooltip(svg, points, geometry) {
  const tooltip = document.createElement("div");
  tooltip.className = "trend-tooltip";
  tooltip.hidden = true;
  trendChart.appendChild(tooltip);

  const marker = svgNode("circle", { cx: 0, cy: 0, r: 5, class: "trend-marker" });
  marker.setAttribute("visibility", "hidden");
  svg.appendChild(marker);

  const show = (event) => {
    const rect = svg.getBoundingClientRect();

    if (rect.width === 0) {
      return;
    }

    const localX = ((event.clientX - rect.left) / rect.width) * 300;
    let bestIndex = 0;
    let bestDistance = Infinity;

    points.forEach((point, index) => {
      const distance = Math.abs(geometry.xFor(index) - localX);

      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });

    const point = points[bestIndex];
    marker.setAttribute("cx", String(geometry.xFor(bestIndex)));
    marker.setAttribute("cy", String(geometry.yFor(point.value)));
    marker.setAttribute("visibility", "visible");

    tooltip.hidden = false;
    tooltip.textContent = `${point.at}번 · ${Math.round(point.value * 100)}%`;
    tooltip.style.left = `${(geometry.xFor(bestIndex) / 300) * rect.width}px`;
  };

  const hide = () => {
    tooltip.hidden = true;
    marker.setAttribute("visibility", "hidden");
  };

  svg.addEventListener("pointermove", show);
  svg.addEventListener("pointerdown", show);
  svg.addEventListener("pointerleave", hide);
}

function renderSettingOptions(container, choices, getCurrent, apply) {
  if (!container) {
    return;
  }

  container.innerHTML = "";

  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mode-setting-option";
    button.dataset.value = choice.id;
    button.textContent = choice.label;
    button.addEventListener("click", () => {
      apply(choice.id);
      saveTouchSettings();
      syncSettingOptions(container, getCurrent());
    });
    container.appendChild(button);
  });

  syncSettingOptions(container, getCurrent());
}

function syncSettingOptions(container, currentValue) {
  container.querySelectorAll(".mode-setting-option").forEach((button) => {
    const isSelected = button.dataset.value === currentValue;
    button.classList.toggle("selected", isSelected);
    button.setAttribute("aria-pressed", isSelected ? "true" : "false");
  });
}

function enterMode(mode) {
  appState.mode = mode;
  appState.lastNumber = null;
  appState.lastItemId = null;

  const isTouch = mode === "touch";
  answerGrid.hidden = isTouch;
  tallyStrip.hidden = !isTouch;

  // Reserve the tally row up front for the same reason the answer grid is
  // reserved: a stage that resizes mid-round clips objects out of view.
  if (isTouch) {
    renderTallyStrip(touchSettings.maxCount, 0);
  }

  renderItemSelection();
  showStep("item");
}

function pickRandomItems(items, count) {
  const shuffledItems = [...items];

  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffledItems[index], shuffledItems[swapIndex]] = [shuffledItems[swapIndex], shuffledItems[index]];
  }

  return shuffledItems.slice(0, Math.min(count, shuffledItems.length));
}

// Repetition is how counting is learned at this age, so the object just counted
// stays on offer instead of being shuffled away.
function pickItemsForSelection() {
  const lastItem = appState.lastItemId
    ? ITEMS.find((item) => item.id === appState.lastItemId)
    : null;

  if (!lastItem) {
    return pickRandomItems(ITEMS, RANDOM_ITEM_COUNT);
  }

  const others = pickRandomItems(
    ITEMS.filter((item) => item.id !== lastItem.id),
    RANDOM_ITEM_COUNT - 1
  );

  return pickRandomItems([lastItem, ...others], RANDOM_ITEM_COUNT);
}

function renderItemSelection() {
  itemGroups.innerHTML = "";

  pickItemsForSelection().forEach((item) => {
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

  if (appState.mode === "touch") {
    appState.selectedNumber = pickCountTarget(touchSettings.maxCount);
    startTouchRound();
    return;
  }

  appState.selectedNumber = pickCountTarget(MAX_NUMBER);
  playCounting();
}

function pickCountTarget(maxCount) {
  if (maxCount <= 1) {
    return 1;
  }

  let number = appState.lastNumber;

  while (number === appState.lastNumber) {
    number = Math.floor(Math.random() * maxCount) + 1;
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

function startTouchRound() {
  const item = appState.selectedDisplayItem;
  const number = appState.selectedNumber;

  if (!item || !number) {
    return;
  }

  const token = nextPlaybackToken();

  cancelSpeech();
  clearTouchHint();
  clearQuiz();
  objectStage.innerHTML = "";
  objectStage.classList.remove("object-stage--celebrate");
  appState.countedCount = 0;
  appState.countTarget = number;
  appState.isRevealInProgress = false;
  statusText.textContent = item.name;
  resultLabel.textContent = item.name;
  renderTallyStrip(touchSettings.maxCount, 0);
  showStep("play");

  // All objects at once: the child cannot judge a quantity that is still
  // arriving, and the whole set has to be there to be pointed at.
  const cards = [];

  for (let index = 1; index <= number; index += 1) {
    cards.push(addObjectCard(item, index));
  }

  if (touchSettings.layout === "rows") {
    layoutObjectCardsInRows(cards);
  }

  speak(item.name);
  scheduleTouchHint(token);
}

function handleTouchCount(card) {
  if (appState.mode !== "touch" || appState.countTarget === 0 || appState.quizPhase) {
    return;
  }

  if (card.disabled || card.classList.contains("object-card--counted")) {
    return;
  }

  clearTouchHint();

  const step = appState.countedCount + 1;
  appState.countedCount = step;

  // Counted objects leave the pool. Counting the same one twice is the usual
  // error at this age, and taking it off the board rules it out.
  card.disabled = true;
  card.classList.remove("object-card--hint");
  card.classList.add("object-card--counted");

  // The tone is synchronous so the tap always answers instantly, whatever the
  // speech engine decides to do.
  playCountTone(step);
  renderTallyStrip(touchSettings.maxCount, step);

  const token = nextPlaybackToken();
  statusText.textContent = NUMBER_WORDS[step];
  cancelSpeech();
  speak(NUMBER_WORDS[step]);

  if (step >= appState.countTarget) {
    finishTouchRound(token);
    return;
  }

  scheduleTouchHint(token);
}

async function finishTouchRound(token) {
  const item = appState.selectedDisplayItem;
  const cards = Array.from(objectStage.querySelectorAll(".object-card"));

  appState.countTarget = 0;
  appState.lastItemId = appState.selectedItem ? appState.selectedItem.id : null;

  objectStage.classList.add("object-stage--celebrate");
  cards.forEach((card, index) => {
    card.style.setProperty("--reward-delay", `${Math.min(index * 45, 220)}ms`);
    card.classList.add("object-card--celebrate");
  });

  playRoundCompleteChime();
  await wait(420);

  if (appState.playbackToken !== token) {
    return;
  }

  const summary = formatCountSummary(item, appState.selectedNumber);
  statusText.textContent = summary;
  cancelSpeech();
  await speak(summary);

  if (appState.playbackToken !== token) {
    return;
  }

  if (touchSettings.quizType === "off") {
    resetToHome();
    return;
  }

  startQuiz(token);
}

function resolveQuizType() {
  if (touchSettings.quizType !== "random") {
    return touchSettings.quizType;
  }

  const index = Math.floor(Math.random() * QUIZ_ASKABLE_TYPES.length);
  return QUIZ_ASKABLE_TYPES[index];
}

// The distractor carries the difficulty. A gap of 2 or more is discriminable by
// sight; a gap of 1 forces an actual count, so it is only used when the range
// leaves no other option.
function pickDistractor(answer, maxCount) {
  const far = [];
  const near = [];

  for (let value = 1; value <= maxCount; value += 1) {
    if (value === answer) {
      continue;
    }

    if (Math.abs(value - answer) >= 2) {
      far.push(value);
    } else {
      near.push(value);
    }
  }

  const pool = far.length > 0 ? far : near;

  if (pool.length === 0) {
    return answer === 1 ? 2 : answer - 1;
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

async function startQuiz(token) {
  const item = appState.selectedDisplayItem;
  const answer = appState.selectedNumber;

  if (!item || !answer) {
    resetToHome();
    return;
  }

  appState.quizPhase = true;
  appState.quizAnswered = false;
  appState.quizAnswer = answer;
  appState.quizType = resolveQuizType();
  appState.quizLockUntil = Date.now() + QUIZ_INPUT_LOCK;

  // Emptying the tally removes the shortcut: with the dots still filled the
  // child could copy their count straight onto a choice card.
  renderTallyStrip(touchSettings.maxCount, 0);

  objectStage.classList.remove("object-stage--celebrate");
  const referenceCards = Array.from(objectStage.querySelectorAll(".object-card"));
  referenceCards.forEach((card) => {
    card.classList.remove("object-card--celebrate");
    card.style.removeProperty("--reward-delay");
    card.classList.add("object-card--reference");
  });

  const distractor = pickDistractor(answer, touchSettings.maxCount);
  const values = Math.random() < 0.5 ? [answer, distractor] : [distractor, answer];
  const choices = values.map((value) => buildQuizChoice(item, value, value === answer));

  // The prompt is set before laying out: it is taller than a number word, and a
  // status line that grows afterwards would shrink the stage under the cards.
  const prompt = appState.quizType === "quantity" ? "같은 건 어디 있을까요?" : "몇 개일까요?";
  statusText.textContent = prompt;

  choices.forEach((choice) => objectStage.appendChild(choice));
  layoutQuizPhase(referenceCards, choices);

  cancelSpeech();
  speak(prompt);
}

function buildQuizChoice(item, value, isCorrect) {
  const choice = document.createElement("button");
  choice.type = "button";
  choice.className = "quiz-choice";
  choice.dataset.value = String(value);
  choice.dataset.correct = isCorrect ? "true" : "false";

  if (appState.quizType === "quantity") {
    const glyphs = document.createElement("span");
    glyphs.className = "quiz-choice-glyphs";
    glyphs.setAttribute("aria-hidden", "true");

    for (let index = 0; index < value; index += 1) {
      const glyph = document.createElement("span");
      glyph.className = "quiz-choice-glyph";
      glyph.textContent = item.symbol;
      glyphs.appendChild(glyph);
    }

    choice.appendChild(glyphs);
    choice.setAttribute("aria-label", `${item.name} ${value}개`);
  } else {
    const numeral = document.createElement("span");
    numeral.className = "answer-number";
    numeral.textContent = String(value);
    choice.appendChild(numeral);

    if (appState.quizType === "both") {
      const dots = document.createElement("span");
      dots.className = "answer-dots";
      dots.setAttribute("aria-hidden", "true");

      for (let index = 0; index < value; index += 1) {
        const dot = document.createElement("span");
        dot.className = "answer-dot";
        dots.appendChild(dot);
      }

      choice.appendChild(dots);
    }

    choice.setAttribute("aria-label", String(value));
  }

  choice.addEventListener("click", () => handleQuizChoice(choice));
  return choice;
}

// Reference and choices share the stage, so nothing outside it changes height and
// the already-placed objects cannot be clipped by a mid-round resize.
function layoutQuizPhase(referenceCards, choices) {
  const inner = getStageInnerSize();
  const sideBySide = inner.height < 260;
  const referenceBand = sideBySide
    ? { left: 0, top: 0, width: inner.width * 0.34, height: inner.height }
    : { left: 0, top: 0, width: inner.width, height: inner.height * 0.36 };
  const choiceBand = sideBySide
    ? { left: inner.width * 0.36, top: 0, width: inner.width * 0.64, height: inner.height }
    : { left: 0, top: inner.height * 0.4, width: inner.width, height: inner.height * 0.6 };

  layoutCardsInBand(referenceCards, referenceBand);

  const choiceGap = Math.max(PLACEMENT_GAP, Math.round(choiceBand.width * 0.04));
  const choiceWidth = Math.max(
    Math.floor((choiceBand.width - choiceGap) / 2),
    1
  );
  const choiceHeight = Math.max(Math.floor(choiceBand.height * (sideBySide ? 0.82 : 0.86)), 1);
  const choiceTop = choiceBand.top + (choiceBand.height - choiceHeight) / 2;

  choices.forEach((choice, index) => {
    choice.style.width = `${choiceWidth}px`;
    choice.style.height = `${choiceHeight}px`;
    choice.style.left = `${Math.round(choiceBand.left + index * (choiceWidth + choiceGap))}px`;
    choice.style.top = `${Math.round(choiceTop)}px`;
    sizeQuizChoiceContents(choice, choiceWidth, choiceHeight);
  });
}

// Contents are sized from the measured card rather than container units so the
// glyphs cannot spill out of a short card.
function sizeQuizChoiceContents(choice, width, height) {
  const count = Number(choice.dataset.value) || 1;
  const columns = Math.min(count, Math.ceil(Math.sqrt(count)));
  const rows = Math.ceil(count / columns);
  const available = { width: width - 20, height: height - 20 };
  // An emoji's advance box runs about 1.35x its font-size, so the width budget
  // has to be divided by that or the glyphs spill out of the card.
  const glyph = Math.floor(Math.min(
    (available.width / columns - 4) / 1.35,
    (available.height / rows - 4) / 1.05
  ));

  choice.style.setProperty("--quiz-cols", String(columns));
  choice.style.setProperty("--quiz-glyph", `${Math.max(glyph, 13)}px`);
  choice.style.setProperty("--quiz-numeral", `${Math.max(Math.floor(height * 0.4), 22)}px`);
}

function layoutCardsInBand(cards, band) {
  if (cards.length === 0) {
    return;
  }

  const scale = 0.6;
  const cardWidth = cards[0].offsetWidth * scale;
  const gap = Math.max(6, Math.round(cardWidth * 0.12));
  const perRow = Math.max(
    1,
    Math.min(cards.length, Math.floor((band.width + gap) / (cardWidth + gap)))
  );
  const rowCount = Math.ceil(cards.length / perRow);
  const blockHeight = rowCount * cardWidth + (rowCount - 1) * gap;
  const startTop = band.top + Math.max((band.height - blockHeight) / 2, 0);

  for (let row = 0; row < rowCount; row += 1) {
    const rowCards = cards.slice(row * perRow, (row + 1) * perRow);
    const rowWidth = rowCards.length * cardWidth + (rowCards.length - 1) * gap;
    const startLeft = band.left + Math.max((band.width - rowWidth) / 2, 0);

    rowCards.forEach((card, column) => {
      card.style.setProperty("--reference-scale", String(scale));
      setCardBasePosition(card, {
        left: Math.round(startLeft + column * (cardWidth + gap)),
        top: Math.round(startTop + row * (cardWidth + gap))
      });
    });
  }
}

async function handleQuizChoice(choice) {
  if (!appState.quizPhase || appState.quizAnswered) {
    return;
  }

  // A child already tapping when the choices land would otherwise have that tap
  // recorded as an answer.
  if (Date.now() < appState.quizLockUntil) {
    return;
  }

  appState.quizAnswered = true;

  const token = nextPlaybackToken();
  const isCorrect = choice.dataset.correct === "true";

  recordQuizResult(appState.quizType, appState.quizAnswer, isCorrect);
  renderProgressSummary();

  objectStage.querySelectorAll(".quiz-choice").forEach((node) => {
    node.disabled = true;
  });

  if (isCorrect) {
    await playQuizCorrect(choice, token);
    return;
  }

  await playQuizPenalty(choice, token);
}

async function playQuizCorrect(choice, token) {
  const referenceCards = Array.from(objectStage.querySelectorAll(".object-card"));

  choice.classList.add("quiz-choice--correct");
  objectStage.classList.add("object-stage--celebrate");
  referenceCards.forEach((card, index) => {
    card.style.setProperty("--reward-delay", `${Math.min(index * 45, 220)}ms`);
    card.classList.add("object-card--celebrate");
  });

  playRoundCompleteChime();
  statusText.textContent = "맞았어요!";
  cancelSpeech();
  speak("맞았어요!");

  await wait(QUIZ_CORRECT_HOLD);

  if (appState.playbackToken !== token) {
    return;
  }

  resetToHome();
}

async function playQuizPenalty(choice, token) {
  const context = getAudioContext();

  choice.classList.add("quiz-choice--wrong");

  if (context) {
    playTone(context, 220, 0, 0.18, 0.16);
    playTone(context, 165, 0.16, 0.26, 0.16);
  }

  statusText.textContent = "다시 세어 볼까요?";
  cancelSpeech();
  await speak("다시 세어 볼까요?");

  if (appState.playbackToken !== token) {
    return;
  }

  const correctChoice = objectStage.querySelector('.quiz-choice[data-correct="true"]');

  if (correctChoice) {
    correctChoice.classList.add("quiz-choice--reveal");
  }

  await demonstrateCorrectCount(token);

  if (appState.playbackToken !== token) {
    return;
  }

  await waitOutPenalty(token);

  if (appState.playbackToken !== token) {
    return;
  }

  resetToHome();
}

// The correction is the teaching part of the penalty: the app counts the set
// again so the child sees where the answer comes from.
async function demonstrateCorrectCount(token) {
  const cards = Array.from(objectStage.querySelectorAll(".object-card"));

  cards.forEach((card) => card.classList.remove("object-card--counted"));

  for (let index = 0; index < cards.length; index += 1) {
    if (appState.playbackToken !== token) {
      return;
    }

    const step = index + 1;
    cards[index].classList.add("object-card--counted");
    playCountTone(step);
    statusText.textContent = NUMBER_WORDS[step];
    cancelSpeech();
    speak(NUMBER_WORDS[step]);
    await wait(DEMO_STEP_DELAY);
  }

  if (appState.playbackToken !== token) {
    return;
  }

  const summary = formatCountSummary(appState.selectedDisplayItem, appState.quizAnswer);
  statusText.textContent = summary;
  cancelSpeech();
  await speak(summary);
}

// The cost of a wrong answer is time. It has to be visible or the child reads a
// silent screen as a broken app.
function waitOutPenalty(token) {
  const seconds = touchSettings.penaltyDelay;

  if (seconds <= 0) {
    return Promise.resolve();
  }

  const timer = document.createElement("div");
  timer.className = "penalty-timer";
  timer.setAttribute("aria-hidden", "true");
  timer.style.setProperty("--penalty-duration", `${seconds}s`);

  const fill = document.createElement("div");
  fill.className = "penalty-timer-fill";
  timer.appendChild(fill);
  objectStage.appendChild(timer);

  return new Promise((resolve) => {
    appState.penaltyTimerId = window.setTimeout(() => {
      appState.penaltyTimerId = null;
      timer.remove();
      resolve();
    }, seconds * 1000);

    if (appState.playbackToken !== token) {
      clearPenaltyTimer();
      timer.remove();
      resolve();
    }
  });
}

function clearPenaltyTimer() {
  if (appState.penaltyTimerId !== null) {
    window.clearTimeout(appState.penaltyTimerId);
    appState.penaltyTimerId = null;
  }
}

function clearQuiz() {
  clearPenaltyTimer();
  appState.quizPhase = false;
  appState.quizAnswered = false;
  appState.quizAnswer = 0;
  appState.quizLockUntil = 0;
  objectStage.querySelectorAll(".quiz-choice").forEach((node) => node.remove());
  objectStage.querySelectorAll(".penalty-timer").forEach((node) => node.remove());
}

function renderTallyStrip(slotCount, filledCount) {
  if (!tallyStrip) {
    return;
  }

  tallyStrip.innerHTML = "";

  for (let index = 1; index <= slotCount; index += 1) {
    const dot = document.createElement("span");
    dot.className = index <= filledCount ? "tally-dot tally-dot--filled" : "tally-dot";
    tallyStrip.appendChild(dot);
  }
}

function scheduleTouchHint(token) {
  clearTouchHint();

  appState.hintTimerId = window.setTimeout(() => {
    appState.hintTimerId = null;

    if (appState.playbackToken !== token || appState.mode !== "touch") {
      return;
    }

    const next = objectStage.querySelector(".object-card:not(.object-card--counted)");

    if (next) {
      next.classList.add("object-card--hint");
    }
  }, TOUCH_HINT_DELAY);
}

function clearTouchHint() {
  if (appState.hintTimerId !== null) {
    window.clearTimeout(appState.hintTimerId);
    appState.hintTimerId = null;
  }

  objectStage.querySelectorAll(".object-card--hint").forEach((card) => {
    card.classList.remove("object-card--hint");
  });
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

    if (appState.mode === "touch") {
      handleTouchCount(card);
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

  // The rows layout positions every card together once they all exist.
  if (appState.mode !== "touch" || touchSettings.layout === "random") {
    placeObjectCardRandomly(card);
  }

  return card;
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

// Offsets are resolved against the padding box, so the stage padding has to
// come off the range or a card can hang over the rounded edge.
function getStageInnerSize() {
  const stageStyle = window.getComputedStyle(objectStage);
  const padX = Number.parseFloat(stageStyle.paddingLeft) + Number.parseFloat(stageStyle.paddingRight);
  const padY = Number.parseFloat(stageStyle.paddingTop) + Number.parseFloat(stageStyle.paddingBottom);

  return {
    width: Math.max(objectStage.clientWidth - padX, 0),
    height: Math.max(objectStage.clientHeight - padY, 0)
  };
}

// Deterministic layout: the same count always lands in the same places, so a
// small quantity stays perceivable instead of having to be tracked one by one.
function layoutObjectCardsInRows(cards) {
  if (cards.length === 0) {
    return;
  }

  const inner = getStageInnerSize();
  const cardWidth = cards[0].offsetWidth;
  const cardHeight = cards[0].offsetHeight;
  const perRow = Math.max(
    1,
    Math.min(cards.length, Math.floor((inner.width + PLACEMENT_GAP) / (cardWidth + PLACEMENT_GAP)))
  );
  const rowCount = Math.ceil(cards.length / perRow);
  const blockHeight = rowCount * cardHeight + (rowCount - 1) * PLACEMENT_GAP;
  const maxLeft = Math.max(inner.width - cardWidth, 0);
  const maxTop = Math.max(inner.height - cardHeight, 0);
  const startTop = Math.max((inner.height - blockHeight) / 2, 0);

  for (let row = 0; row < rowCount; row += 1) {
    const rowCards = cards.slice(row * perRow, (row + 1) * perRow);
    const rowWidth = rowCards.length * cardWidth + (rowCards.length - 1) * PLACEMENT_GAP;
    const startLeft = Math.max((inner.width - rowWidth) / 2, 0);

    rowCards.forEach((card, column) => {
      setCardBasePosition(card, {
        left: Math.round(clamp(startLeft + column * (cardWidth + PLACEMENT_GAP), 0, maxLeft)),
        top: Math.round(clamp(startTop + row * (cardHeight + PLACEMENT_GAP), 0, maxTop))
      });
    });
  }
}

function placeObjectCardRandomly(card) {
  const inner = getStageInnerSize();
  const maxLeft = Math.max(inner.width - card.offsetWidth, 0);
  const maxTop = Math.max(inner.height - card.offsetHeight, 0);
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
    mode: modeStep,
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
  appState.countedCount = 0;
  appState.countTarget = 0;
  clearTouchHint();
  clearQuiz();
  resetDragState();
  cancelSpeech();
  objectStage.innerHTML = "";
  objectStage.classList.remove("object-stage--celebrate");
  answerGrid.innerHTML = "";
  answerGrid.classList.remove("answer-grid--pending", "answer-grid--locked");

  if (appState.mode === "touch") {
    renderTallyStrip(touchSettings.maxCount, 0);
  }
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
  // Dragging stays a classic-mode affordance. Once a tap is the counting act, a
  // tap swallowed as a drag is a count that never happens.
  if (appState.mode !== "classic") {
    return;
  }

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

// One context for the whole session. Counting taps need a tone per touch, and
// building a context per sound is both costly and unreliable on iOS.
let sharedAudioContext = null;

function getAudioContext() {
  if (sharedAudioContext) {
    if (sharedAudioContext.state === "suspended" && typeof sharedAudioContext.resume === "function") {
      sharedAudioContext.resume().catch(() => {});
    }

    return sharedAudioContext;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  try {
    sharedAudioContext = new AudioContextClass();
  } catch {
    return null;
  }

  return sharedAudioContext;
}

function playTone(context, frequency, startOffset, duration, peakGain = 0.22) {
  const start = context.currentTime + startOffset;
  const end = start + duration;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(peakGain, start + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(end);
}

function playCheerSound() {
  return new Promise((resolve) => {
    const context = getAudioContext();

    if (!context) {
      resolve();
      return;
    }

    const notes = [523.25, 659.25, 783.99, 1046.5];

    notes.forEach((frequency, index) => {
      playTone(context, frequency, index * 0.08, 0.26);
    });

    window.setTimeout(resolve, 520);
  });
}

// Rising pitch as the count grows, so the child hears the quantity increase.
function playCountTone(step) {
  const context = getAudioContext();

  if (!context) {
    return;
  }

  const scale = [523.25, 587.33, 659.25, 698.46, 783.99];
  const frequency = scale[Math.min(Math.max(step - 1, 0), scale.length - 1)];
  playTone(context, frequency, 0, 0.22, 0.24);
}

function playRoundCompleteChime() {
  const context = getAudioContext();

  if (!context) {
    return;
  }

  playTone(context, 783.99, 0, 0.2);
  playTone(context, 1046.5, 0.1, 0.26);
}

loadTouchSettings();
loadProgress();
renderItemSelection();
initModeSelection();
initSystemTtsVoice();
initFullscreenToggle();
initObjectCardDragging();
lockZoomGestures();
showStep("mode");
