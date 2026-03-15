const ITEMS = [
  { id: "rabbit", group: "동물", name: "토끼", symbol: "🐰", counter: "마리" },
  { id: "apple", group: "과일", name: "사과", symbol: "🍎", counter: "개" },
  { id: "strawberry", group: "과일", name: "딸기", symbol: "🍓", counter: "개" },
  { id: "shoe", group: "물건", name: "신발", symbol: "👟", counter: "켤레" },
  { id: "clothes", group: "물건", name: "옷", symbol: "👕", counter: "벌" }
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

const MAX_NUMBER = 5;

const appState = {
  selectedItem: null,
  selectedNumber: null,
  playbackToken: 0
};

let preferredSystemVoice = null;

const itemStep = document.getElementById("item-step");
const numberStep = document.getElementById("number-step");
const playStep = document.getElementById("play-step");
const itemGroups = document.getElementById("item-groups");
const numberGrid = document.getElementById("number-grid");
const selectedItemLabel = document.getElementById("selected-item-label");
const resultLabel = document.getElementById("result-label");
const objectStage = document.getElementById("object-stage");
const statusText = document.getElementById("status-text");
const backToItemsButton = document.getElementById("back-to-items");
const homeButton = document.getElementById("home-button");
const fullscreenButton = document.getElementById("fullscreen-button");

renderItemSelection();
renderNumberSelection();
initSystemTtsVoice();
initFullscreenToggle();
lockZoomGestures();

backToItemsButton.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  showStep("item");
});

homeButton.addEventListener("click", () => {
  resetToHome();
});

function renderItemSelection() {
  const groups = [...new Set(ITEMS.map((item) => item.group))];

  groups.forEach((groupName) => {
    const groupSection = document.createElement("section");
    groupSection.className = "item-group";

    const title = document.createElement("h3");
    title.className = "item-group-title";
    title.textContent = groupName;
    groupSection.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "item-grid";

    ITEMS.filter((item) => item.group === groupName).forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "item-button";
      button.dataset.itemId = item.id;
      button.innerHTML = [
        `<span class="item-symbol" aria-hidden="true">${item.symbol}</span>`,
        `<span class="item-name">${item.name}</span>`
      ].join("");
      button.addEventListener("click", () => selectItem(item.id));
      grid.appendChild(button);
    });

    groupSection.appendChild(grid);
    itemGroups.appendChild(groupSection);
  });
}

function renderNumberSelection() {
  for (let number = 1; number <= MAX_NUMBER; number += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "number-button";
    button.dataset.number = String(number);
    button.innerHTML = `<span class="number-label">${number}</span>`;
    button.addEventListener("click", () => selectNumber(number));
    numberGrid.appendChild(button);
  }
}

function selectItem(itemId) {
  appState.selectedItem = ITEMS.find((item) => item.id === itemId) || null;
  appState.selectedNumber = null;
  syncSelectedButtons(".item-button", itemId, "itemId");
  syncSelectedButtons(".number-button", null, "number");

  if (!appState.selectedItem) {
    return;
  }

  selectedItemLabel.textContent = appState.selectedItem.name;
  showStep("number");
}

function selectNumber(number) {
  if (!appState.selectedItem || number < 1 || number > MAX_NUMBER) {
    return;
  }

  appState.selectedNumber = number;
  syncSelectedButtons(".number-button", String(number), "number");
  playCounting();
}

async function playCounting() {
  const item = appState.selectedItem;
  const number = appState.selectedNumber;

  if (!item || !number) {
    return;
  }

  const token = Date.now();
  appState.playbackToken = token;

  window.speechSynthesis.cancel();
  objectStage.innerHTML = "";
  statusText.textContent = "";
  resultLabel.textContent = `${item.name} ${COUNTER_WORDS[number]}${item.counter}`;
  showStep("play");

  for (let index = 1; index <= number; index += 1) {
    if (appState.playbackToken !== token) {
      return;
    }

    addObjectCard(item, index);
    statusText.textContent = NUMBER_WORDS[index];
    await speak(`${NUMBER_WORDS[index]}`);
    await wait(380);
  }

  if (appState.playbackToken !== token) {
    return;
  }

  const summary = `${item.name} ${COUNTER_WORDS[number]}${item.counter}`;
  statusText.textContent = summary;
  await speak(summary);
}

function addObjectCard(item, index) {
  const card = document.createElement("article");
  card.className = "object-card";
  card.style.animationDelay = `${Math.min(index * 40, 280)}ms`;
  card.innerHTML = `<div class="object-symbol" aria-hidden="true">${item.symbol}</div>`;
  objectStage.appendChild(card);
}

function showStep(step) {
  const steps = {
    item: itemStep,
    number: numberStep,
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
  appState.selectedNumber = null;
  appState.playbackToken = Date.now();
  window.speechSynthesis.cancel();
  objectStage.innerHTML = "";
  statusText.textContent = "";
  resultLabel.textContent = "";
  selectedItemLabel.textContent = "";
  syncSelectedButtons(".item-button", null, "itemId");
  syncSelectedButtons(".number-button", null, "number");
  showStep("item");
}

function syncSelectedButtons(selector, selectedValue, key) {
  document.querySelectorAll(selector).forEach((button) => {
    const currentValue = button.dataset[key];
    button.classList.toggle("selected", currentValue === selectedValue);
  });
}

function speak(text) {
  return new Promise((resolve) => {
    if (!("speechSynthesis" in window)) {
      resolve();
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
    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
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
