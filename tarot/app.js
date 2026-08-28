// 应用状态
const state = {
  selectedSpread: null,
  drawnCards: [],
  currentPhase: 'select' // select, question, drawing, reading
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  initSpreadSelection();
  initDrawButton();
  initResetButton();
});

// 牌阵选择
function initSpreadSelection() {
  const cards = document.querySelectorAll('.spread-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.selectedSpread = card.dataset.spread;
      showQuestionSection();
    });
  });
}

// 显示问题输入区
function showQuestionSection() {
  document.getElementById('spreadSelection').style.display = 'none';
  document.getElementById('questionSection').style.display = 'block';
  state.currentPhase = 'question';
}

// 开始抽牌
function initDrawButton() {
  document.getElementById('drawBtn').addEventListener('click', () => {
    startDraw();
  });
}

// 开始抽牌流程
function startDraw() {
  const spread = spreads[state.selectedSpread];
  document.getElementById('questionSection').style.display = 'none';
  document.getElementById('cardArea').style.display = 'block';
  state.currentPhase = 'drawing';
  
  createCardSlots(spread);
}

// 创建牌位
function createCardSlots(spread) {
  const layout = document.getElementById('cardsLayout');
  layout.innerHTML = '';
  layout.className = 'cards-layout ' + state.selectedSpread;
  
  const numCards = spread.maxCards;
  state.drawnCards = [];
  
  // 随机抽取牌
  const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
  for (let i = 0; i < numCards; i++) {
    const card = shuffled[i];
    const isReversed = Math.random() > 0.5; // 50%概率正位/逆位
    state.drawnCards.push({ ...card, isReversed });
    
    // 创建牌位
    const slot = document.createElement('div');
    slot.className = 'card-slot';
    
    if (state.selectedSpread === 'celtic') {
      slot.classList.add(`celtic-${i + 1}`);
    }
    
    slot.innerHTML = `
      <div class="card-wrapper" id="card-${i}">
        <div class="card-back" onclick="flipCard(${i})"></div>
        <div class="card-front">
          <div class="card-image">${card.image}</div>
          <div class="card-name">${card.name}</div>
          <div class="card-number">${card.nameEn}</div>
        </div>
      </div>
      <div class="card-slot-label">${spread.positions[i]}</div>
    `;
    
    layout.appendChild(slot);
  }
}

// 翻牌
function flipCard(index) {
  const card = document.getElementById(`card-${index}`);
  if (!card.classList.contains('flipped')) {
    card.classList.add('flipped');
    
    // 检查是否所有牌都已翻开
    const allFlipped = document.querySelectorAll('.card-wrapper.flipped').length;
    if (allFlipped === state.drawnCards.length) {
      setTimeout(showReading, 1000);
    }
  }
}

// 显示解读
function showReading() {
  document.getElementById('cardArea').style.display = 'none';
  document.getElementById('readingSection').style.display = 'block';
  state.currentPhase = 'reading';
  
  const spread = spreads[state.selectedSpread];
  const content = document.getElementById('readingContent');
  content.innerHTML = '';
  
  // 添加综合解读
  const summary = document.createElement('div');
  summary.className = 'reading-card';
  summary.innerHTML = `
    <h3>🔮 综合解读</h3>
    <p class="meaning">${generateSummary()}</p>
  `;
  content.appendChild(summary);
  
  // 添加每张牌的解读
  state.drawnCards.forEach((card, index) => {
    const cardReading = document.createElement('div');
    cardReading.className = 'reading-card';
    cardReading.innerHTML = `
      <h3>${card.image} ${card.name} ${card.isReversed ? '(逆位)' : '(正位)'}</h3>
      <p class="card-position">位置：${spread.positions[index]} — ${card.keyword}</p>
      <div class="keywords">
        ${card.keywords.map(k => `<span class="keyword-tag">${k}</span>`).join('')}
      </div>
      <p class="meaning ${card.isReversed ? 'reversed' : ''}">
        ${card.isReversed ? card.meaningRev : card.meaningUp}
      </p>
    `;
    content.appendChild(cardReading);
  });
}

// 生成综合解读
function generateSummary() {
  const cards = state.drawnCards;
  const keywords = cards.flatMap(c => c.keywords);
  const uniqueKeywords = [...new Set(keywords)];
  
  let summary = '';
  
  if (state.selectedSpread === 'single') {
    summary = `你今天抽到的是「${cards[0].name}」${cards[0].isReversed ? '（逆位）' : '（正位）'}。`;
    summary += cards[0].meaningUp;
  } else if (state.selectedSpread === 'three') {
    summary = `过去抽到「${cards[0].name}」，现在抽到「${cards[1].name}」，未来抽到「${cards[2].name}」。`;
    summary += '这三张牌告诉你，';
    summary += uniqueKeywords.slice(0, 3).join('、') + '是你当前需要关注的主题。';
    summary += '请结合每张牌的具体解读，理解命运给你的指引。';
  } else {
    summary = `凯尔特十字牌阵为你揭示了完整的命运图景。`;
    summary += '核心主题是：' + uniqueKeywords.slice(0, 2).join('与') + '。';
    summary += '请仔细阅读每张牌的位置解读，它们将为你指明方向。';
  }
  
  return summary;
}

// 重置
function initResetButton() {
  document.getElementById('resetBtn').addEventListener('click', () => {
    location.reload();
  });
}

// 添加键盘快捷键
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    location.reload();
  }
});
