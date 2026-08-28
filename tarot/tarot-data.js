// 塔罗牌数据 - 22张大阿卡纳牌
const tarotCards = [
  {
    id: 0,
    name: "愚者",
    nameEn: "The Fool",
    number: "0",
    image: "🃏",
    keywords: ["新的开始", "冒险", "天真", "自由"],
    meaningUp: "新的开始，冒险精神，无限可能，纯真无邪。愚者代表着人生的起点，鼓励你勇敢迈出第一步，相信宇宙的指引。",
    meaningRev: "鲁莽行事，缺乏计划，愚昧无知。提醒你要谨慎行事，不要过于冲动，考虑周全后再行动。",
    element: "风",
    keyword: "新的旅程"
  },
  {
    id: 1,
    name: "魔术师",
    nameEn: "The Magician",
    number: "I",
    image: "🎩",
    keywords: ["创造力", "意志", "技巧", "行动"],
    meaningUp: "拥有实现目标所需的一切资源。你具备创造力和意志力，现在是将想法转化为现实的最佳时机。",
    meaningRev: "能力被误用，欺骗，缺乏方向。提醒你注意是否有虚耗精力或被他人在误导的情况。",
    element: "水星",
    keyword: "创造之力"
  },
  {
    id: 2,
    name: "女祭司",
    nameEn: "The High Priestess",
    number: "II",
    image: "🌙",
    keywords: ["直觉", "神秘", "潜意识", "智慧"],
    meaningUp: "倾听内心的声音，你的直觉正在指引你。一些秘密即将揭晓，保持耐心，相信你的第六感。",
    meaningRev: "忽视直觉，缺乏内在智慧，表面现象。提醒你重新连接内心的智慧，不要被表象迷惑。",
    element: "月亮",
    keyword: "内在智慧"
  },
  {
    id: 3,
    name: "皇后",
    nameEn: "The Empress",
    number: "III",
    image: "👑",
    keywords: ["丰饶", "美丽", "母性", "创造"],
    meaningUp: "丰收与创造力的象征。艺术、爱情、生育等方面将有收获。享受生活的丰盛与美好。",
    meaningRev: "创造力受阻，依赖性强，忽视自我。提醒你关注自己的需求，不要过度付出而忽略自己。",
    element: "金星",
    keyword: "丰盛创造"
  },
  {
    id: 4,
    name: "皇帝",
    nameEn: "The Emperor",
    number: "IV",
    image: "⚔️",
    keywords: ["权威", "结构", "控制", "稳定"],
    meaningUp: "建立秩序与规则的时刻。展现领导力，用理性和智慧掌控局面。稳定性和结构带来力量。",
    meaningRev: "过度控制，固执僵化，滥用权力。提醒你平衡控制与灵活，避免独断专行。",
    element: "白羊座",
    keyword: "权威掌控"
  },
  {
    id: 5,
    name: "教皇",
    nameEn: "The Hierophant",
    number: "V",
    image: "🔑",
    keywords: ["传统", "信仰", "指导", "学习"],
    meaningUp: "寻求传统智慧和精神指导。可能会有贵人相助，或在信仰、教育方面有所收获。",
    meaningRev: "打破传统，质疑权威，创新思维。提醒你不必盲从，可以走自己的路。",
    element: "金牛座",
    keyword: "智慧指引"
  },
  {
    id: 6,
    name: "恋人",
    nameEn: "The Lovers",
    number: "VI",
    image: "💕",
    keywords: ["爱情", "选择", "和谐", "联合"],
    meaningUp: "重要的情感选择即将出现。无论是爱情、友谊还是人生抉择，都要跟随内心的声音。",
    meaningRev: "关系失衡，错误选择，价值观冲突。提醒你要反思关系中的问题，做出正确的选择。",
    element: "双子座",
    keyword: "情感选择"
  },
  {
    id: 7,
    name: "战车",
    nameEn: "The Chariot",
    number: "VII",
    image: "🏇",
    keywords: ["胜利", "意志", "征服", "前进"],
    meaningUp: "通过意志力克服困难，取得胜利。坚定目标，克服障碍，你会到达成功的彼岸。",
    meaningRev: "失去控制，方向不明，阻碍重重。提醒你重新审视目标，找回内在平衡。",
    element: "巨蟹座",
    keyword: "意志胜利"
  },
  {
    id: 8,
    name: "力量",
    nameEn: "Strength",
    number: "VIII",
    image: "🦁",
    keywords: ["勇气", "耐心", "内在力量", "慈悲"],
    meaningUp: "用内在的力量而非暴力面对挑战。勇气与耐心的结合将帮助你克服困难。",
    meaningRev: "内心恐惧，缺乏勇气，力量不足。提醒你找到内在的力量源泉，相信自己。",
    element: "狮子座",
    keyword: "内在力量"
  },
  {
    id: 9,
    name: "隐者",
    nameEn: "The Hermit",
    number: "IX",
    image: "🏔️",
    keywords: ["独处", "内省", "智慧", "寻找"],
    meaningUp: "一段内省和独处的时期。远离喧嚣，寻找内心的答案。智慧来自沉默与反思。",
    meaningRev: "过度孤立，逃避现实，固执己见。提醒你适当社交，不要过度封闭自己。",
    element: "处女座",
    keyword: "内在探索"
  },
  {
    id: 10,
    name: "命运之轮",
    nameEn: "Wheel of Fortune",
    number: "X",
    image: "☸️",
    keywords: ["命运", "变化", "机遇", "循环"],
    meaningUp: "命运的转折点，好运即将降临。变化是必然的，接受它，新的机遇在等待你。",
    meaningRev: "厄运，停滞，抗拒变化。提醒你顺应命运的变化，不要顽固抵抗。",
    element: "木星",
    keyword: "命运转折"
  },
  {
    id: 11,
    name: "正义",
    nameEn: "Justice",
    number: "XI",
    image: "⚖️",
    keywords: ["公正", "平衡", "因果", "真理"],
    meaningUp: "公正与平衡的时刻。你的行为将得到公平的回报，因果法则发挥作用。",
    meaningRev: "不公，偏见，逃避责任。提醒你行事要公正，不要逃避应承担的责任。",
    element: "天秤座",
    keyword: "公正平衡"
  },
  {
    id: 12,
    name: "倒吊人",
    nameEn: "The Hanged Man",
    number: "XII",
    image: "🙃",
    keywords: ["牺牲", "等待", "换位思考", "觉悟"],
    meaningUp: "暂时的停顿与牺牲，换一个角度看世界。等待是为了更好的时机，放下执念。",
    meaningRev: "无谓的牺牲，拖延，不愿改变。提醒你停止无效等待，采取行动。",
    element: "海王星",
    keyword: "换位觉悟"
  },
  {
    id: 13,
    name: "死神",
    nameEn: "Death",
    number: "XIII",
    image: "💀",
    keywords: ["结束", "转变", "新生", "放下"],
    meaningUp: "旧事物的终结带来新的开始。放手过去，拥抱改变，新的篇章即将开启。",
    meaningRev: "抗拒改变，停滞不前，恐惧新生。提醒你接受变化，它是成长的必经之路。",
    element: "天蝎座",
    keyword: "蜕变新生"
  },
  {
    id: 14,
    name: "节制",
    nameEn: "Temperance",
    number: "XIV",
    image: "🏺",
    keywords: ["平衡", "耐心", "调和", "和谐"],
    meaningUp: "保持平衡与节制，找到和谐之道。耐心是美德，适度会带来最好的结果。",
    meaningRev: "失衡，极端，缺乏耐心。提醒你回归平衡，避免走极端。",
    element: "射手座",
    keyword: "和谐平衡"
  },
  {
    id: 15,
    name: "恶魔",
    nameEn: "The Devil",
    number: "XV",
    image: "😈",
    keywords: ["束缚", "欲望", "物质", "诱惑"],
    meaningUp: "可能受到某种束缚或诱惑。审视自己的执念，它们可能正在限制你的自由。",
    meaningRev: "挣脱束缚，获得自由，克服诱惑。提醒你放下执念，重获内心自由。",
    element: "摩羯座",
    keyword: "破除束缚"
  },
  {
    id: 16,
    name: "塔",
    nameEn: "The Tower",
    number: "XVI",
    image: "🗼",
    keywords: ["突变", "颠覆", "觉醒", "重建"],
    meaningUp: "突如其来的变化可能带来冲击，但这是必要的打破与重建。旧结构必须倒塌。",
    meaningRev: "避免灾难，延迟变化，内心颠覆。提醒你虽然变化痛苦，但结果是积极的。",
    element: "火星",
    keyword: "破旧立新"
  },
  {
    id: 17,
    name: "星星",
    nameEn: "The Star",
    number: "XVII",
    image: "⭐",
    keywords: ["希望", "灵感", "治愈", "指引"],
    meaningUp: "黑暗后的希望之光。重新找回信心，未来充满希望，灵感正在降临。",
    meaningRev: "失去希望，缺乏信心，迷茫。提醒你相信未来，希望就在前方。",
    element: "水瓶座",
    keyword: "希望之光"
  },
  {
    id: 18,
    name: "月亮",
    nameEn: "The Moon",
    number: "XVIII",
    image: "🌕",
    keywords: ["幻象", "潜意识", "恐惧", "直觉"],
    meaningUp: "面对内心的恐惧和幻象。不要被表象迷惑，相信直觉，穿越迷雾。",
    meaningRev: "走出迷茫，看清真相，克服恐惧。提醒你黑暗终将过去，真相会大白。",
    element: "双鱼座",
    keyword: "穿越迷雾"
  },
  {
    id: 19,
    name: "太阳",
    nameEn: "The Sun",
    number: "XIX",
    image: "☀️",
    keywords: ["快乐", "成功", "活力", "光明"],
    meaningUp: "最积极的牌之一，带来快乐与成功。一切都在向好的方向发展，享受这份光明。",
    meaningRev: "暂时受阻，乐观不足。提醒你不要过于自信，保持清醒的判断力。",
    element: "太阳",
    keyword: "光明快乐"
  },
  {
    id: 20,
    name: "审判",
    nameEn: "Judgement",
    number: "XX",
    image: "📯",
    keywords: ["觉醒", "重生", "反思", "召唤"],
    meaningUp: "灵魂的觉醒与重生。反思过去，接受召唤，迎来人生的新篇章。",
    meaningRev: "自我否定，逃避反省，无法释怀。提醒你勇敢面对过去，才能走向未来。",
    element: "火",
    keyword: "灵魂觉醒"
  },
  {
    id: 21,
    name: "世界",
    nameEn: "The World",
    number: "XXI",
    image: "🌍",
    keywords: ["完成", "成就", "圆满", "旅程"],
    meaningUp: "一个周期的完美结束，达成目标。享受成功的喜悦，准备好迎接新的旅程。",
    meaningRev: "未完成，拖延，缺乏 closure。提醒你完成收尾工作，让这段旅程完美结束。",
    element: "土",
    keyword: "圆满达成"
  }
];

// 牌阵配置
const spreads = {
  single: {
    name: "单张牌阵",
    positions: ["今日指引"],
    maxCards: 1
  },
  three: {
    name: "三张牌阵",
    positions: ["过去", "现在", "未来"],
    maxCards: 3
  },
  celtic: {
    name: "凯尔特十字",
    positions: [
      "现状", "挑战", "基础", "过去",
      "最佳可能", "未来", "自我", "环境",
      "希望与恐惧", "最终结果"
    ],
    maxCards: 10
  }
};
