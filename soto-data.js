/**
 * Data store for "Which Soto Are You?" (你是哪一種梭多？)
 * Bilingual support: English (en) & Traditional Chinese Taiwan (zh)
 */

const SOTO_DATA = {
  // Translations for interface chrome
  ui: {
    en: {
      siteTitle: "Which Soto Are You?",
      siteSubtitle: "Discover your Indonesian soup personality!",
      introHook: "Indonesia has one iconic soup dish that every region reinvented with its own spirit and flair. Take this quick 8-question quiz to find out which regional soto matches your soul!",
      startQuizBtn: "Start Quiz 🍲",
      questionOf: "Question",
      of: "of",
      prevBtn: "← Back",
      nextBtn: "Next →",
      retakeBtn: "Retake Quiz ↺",
      shareBtn: "Share Result 📋",
      exploreBtn: "Explore All 5 Sotos 🗺️",
      allSotosTitle: "The 5 Soto Personalities of Indonesia",
      allSotosSubtitle: "Each bowl tells a story of trade, spices, and regional pride.",
      closeBtn: "Close ✕",
      resultHeadline: "Your Soto Personality",
      regionLabel: "Origin Region",
      funFactLabel: "Did you know?",
      flavorTraitsLabel: "Signature Traits",
      qrModalTitle: "Scan to Take the Quiz Live!",
      qrModalDesc: "Scan with your phone camera to take this quiz on your mobile device.",
      qrCloseBtn: "Close",
      copiedToast: "Result copied to clipboard!",
      shareTitle: "Which Soto Are You?",
      shareText: "I took the quiz and I got {sotoName}! Which Indonesian Soto are you?",
      soundOn: "Indonesian Song & Sound: On 🔊",
      soundOff: "Indonesian Song & Sound: Muted 🔇",
      credits: "Indonesian Soto Personality Quiz",
      tieBreakerBadge: "Flavor Decider Match",
      musicPlay: "🎵 Play Indonesian Song",
      musicPause: "⏸️ Pause Song",
      musicLabel: "Indonesian Folk Song: Rasa Sayange 🎶",
      carouselHint: "👆 Tap any bowl for secret ingredients • Swipe to explore ➔",
      inspectModalTitle: "Soto Profile & Cultural Essentials",
      brothLabel: "🍲 Broth Signature",
      ingredientsLabel: "🥢 Key Ingredients & Essentials",
      cultureLabel: "🌴 How Locals Enjoy It",
      takeQuizMatchBtn: "Take Quiz to Match! 🍲",
      feature1: "✨ 8 Quick Questions",
      feature2: "🗺️ Explore Indonesia",
      feature3: "🎉 Your Soto Match",
      nowPlayingLabel: "Music:",
      nowPlayingTitle: "Rasa Sayange",
      nowPlayingSub: "(Indonesian Folk Song)",
      nowPlayingActive: "• Playing 🔊",
      nowPlayingPaused: "• Tap 🔊 to Play"
    },
    zh: {
      siteTitle: "你是哪一種梭多？",
      siteSubtitle: "測出你的印尼靈魂風味！",
      introHook: "印尼有一道國民湯品「梭多」（Soto），群島上的每個地區都用自己的風土與香料將它重新演繹。回答 8 個趣味問題，找出哪一碗梭多最能代表你的真實性格！",
      startQuizBtn: "開始測驗 🍲",
      questionOf: "問題",
      of: "/",
      prevBtn: "← 上一題",
      nextBtn: "下一題 →",
      retakeBtn: "重新測驗 ↺",
      shareBtn: "分享測驗結果 📋",
      exploreBtn: "認識全部 5 款梭多 🗺️",
      allSotosTitle: "印尼 5 大代表性梭多",
      allSotosSubtitle: "每一碗熱湯，都蘊含著跨海貿易、香料與在地文化的歷史故事。",
      closeBtn: "關閉 ✕",
      resultHeadline: "你的梭多性格",
      regionLabel: "發源地區",
      funFactLabel: "你知道嗎？",
      flavorTraitsLabel: "性格關鍵字",
      qrModalTitle: "現場掃描 QR Code 立即測驗！",
      qrModalDesc: "用手機相機掃描下方條碼，立刻在手機上參與測驗！",
      qrCloseBtn: "關閉",
      copiedToast: "結果已複製到剪貼簿！",
      shareTitle: "你是哪一種梭多？",
      shareText: "我測出來是【{sotoName}】！來看看你是哪一種印尼梭多？",
      soundOn: "印尼民謠配樂與音效：開啟 🔊",
      soundOff: "印尼民謠配樂與音效：靜音 🔇",
      credits: "印尼梭多風味性格測驗",
      tieBreakerBadge: "關鍵風味裁決",
      musicPlay: "🎵 播放印尼民謠",
      musicPause: "⏸️ 暫停民謠",
      musicLabel: "印尼經典民謠：Rasa Sayange 🎶",
      carouselHint: "👆 點擊任一梭多查看靈魂食材 • 左右滑動探索 ➔",
      inspectModalTitle: "梭多風味檔案與靈魂配料",
      brothLabel: "🍲 靈魂湯頭特色",
      ingredientsLabel: "🥢 核心配料與靈魂食材",
      cultureLabel: "🌴 在地道地吃法",
      takeQuizMatchBtn: "立刻測驗看你是不是這碗！🍲",
      feature1: "✨ 8 題直覺測驗",
      feature2: "🗺️ 探索印尼風土",
      feature3: "🎉 專屬性格解析",
      nowPlayingLabel: "背景配樂：",
      nowPlayingTitle: "Rasa Sayange",
      nowPlayingSub: "（印尼傳統民謠）",
      nowPlayingActive: "• 播放中 🔊",
      nowPlayingPaused: "• 點擊 🔊 播放"
    }
  },

  // The 5 Soto Personalities
  personalities: {
    lamongan: {
      id: "lamongan",
      tag: "The Reliable Classic",
      tagZh: "值得信賴的經典款",
      nameEn: "Soto Ayam Lamongan",
      nameZh: "拉夢根雞肉梭多",
      badgeColor: "#E3A426",
      regionEn: "Lamongan, East Java",
      regionZh: "東爪哇 · 拉夢根",
      island: "java",
      mapCoordinates: { x: 495, y: 345 },
      traitsEn: ["Balanced", "Comforting", "Dependable", "Universally Loved"],
      traitsZh: ["恰到好處", "溫暖療癒", "值得信賴", "人見人愛"],
      brothEn: "Clear, golden chicken broth simmered for hours with fresh turmeric, lemongrass, ginger, shallots, and aromatic kaffir lime leaves.",
      brothZh: "以鮮土雞、鮮薑黃、香茅、南薑、紅蔥頭與青檸葉慢火慢熬的澄澈金黃雞清湯，清甜鮮美。",
      essentialsEn: [
        { icon: "🍗", name: "Shredded Free-Range Chicken", desc: "Tender chicken simmered in spiced broth, then shredded fine." },
        { icon: "🧄", name: "Crunchy Koya Powder", desc: "The soul of Lamongan: finely crushed fried garlic + savory shrimp crackers." },
        { icon: "🍜", name: "Soun Glass Noodles & Cabbage", desc: "Light, slurpable mung bean noodles and crisp shredded cabbage." },
        { icon: "🍋", name: "Fresh Calamansi Lime", desc: "Squeezed fresh at the table to lift the golden broth with bright acidity." },
        { icon: "🥚", name: "Boiled Eggs & Fried Shallots", desc: "Topped with sliced hard-boiled egg and golden fried shallots (bawang goreng)." }
      ],
      essentialsZh: [
        { icon: "🍗", name: "慢燉手撕雞絲", desc: "原湯燜煮入味的嫩雞肉，手撕成絲，吸飽薑黃香氣。" },
        { icon: "🧄", name: "靈魂 Koya 蝦餅蒜粉", desc: "拉夢根的註冊商標：炸蒜頭與印尼香脆蝦餅研磨成的神級調味粉！" },
        { icon: "🍜", name: "滑順冬粉與高麗菜絲", desc: "吸滿鮮美湯汁的彈牙綠豆冬粉，佐以爽脆鮮甜的現切高麗菜絲。" },
        { icon: "🍋", name: "現擠印尼酸柑小青檸", desc: "食用前擠入一瓣新鮮青檸檬汁，瞬間激發湯頭明亮果酸層次。" },
        { icon: "🥚", name: "切片水煮蛋與炸紅蔥酥", desc: "經典標配滷蛋切片，鋪上噴香酥脆的傳統炸紅蔥酥（Bawang Goreng）。" }
      ],
      cultureEn: "Served roadside at bustling warungs across Java with warm steamed rice and spicy sambal cabe rawit.",
      cultureZh: "爪哇島街頭巷尾最普遍的靈魂美食，通常搭配一大碗熱騰騰的白飯，並依個人口味拌入火辣的鳥眼辣椒醬（Sambal）。",
      visualEn: "Golden turmeric broth, shredded chicken, glass noodles, topped with koya (crunchy garlic-prawn cracker powder).",
      visualZh: "金黃薑黃雞湯、鮮嫩雞絲、冬粉，撒上靈魂配料「Koya」（炸蒜蝦餅粉）。",
      blurbEn: "You're the friend everyone counts on. Warm, familiar, and quietly perfect — just like the golden broth that made this soto Indonesia's most iconic comfort food.",
      blurbZh: "你是大家都會依靠的朋友。溫暖、熟悉又恰到好處——就像這碗讓所有人一試成主顧的黃金湯頭一樣。",
      funFactEn: "Koya, the crunchy topping, is made from ground fried garlic and dried shrimp/crackers — it's what makes Lamongan soto instantly recognizable.",
      funFactZh: "「Koya」這種酥脆配料是用炸蒜頭和蝦餅磨成粉製成的，是東爪哇梭多最具代表性的特色。"
    },

    betawi: {
      id: "betawi",
      tag: "The Indulgent Comfort-Seeker",
      tagZh: "極致享受的生活家",
      nameEn: "Soto Betawi",
      nameZh: "梭多巴達威",
      badgeColor: "#C1502E",
      regionEn: "Jakarta",
      regionZh: "雅加達",
      island: "java",
      mapCoordinates: { x: 375, y: 325 },
      traitsEn: ["Rich", "Cozy", "Indulgent", "Loves Treating Themselves"],
      traitsZh: ["濃郁醇厚", "極致舒適", "懂得享受", "犒賞自我"],
      brothEn: "Luxurious creamy broth uniquely crafted with both rich coconut milk (santan) and cow's milk, infused with clove, nutmeg, and galangal.",
      brothZh: "雅加達獨門創舉：同時融合香濃椰奶（Santan）與新鮮牛奶（或淡奶），加入丁香、肉豆蔻慢熬成絲滑濃郁的奶白醇湯。",
      essentialsEn: [
        { icon: "🥩", name: "Braised Beef Shank & Offal", desc: "Tender chunks of beef brisket, shank, and sometimes tripe simmered to melt-in-mouth softness." },
        { icon: "🥥", name: "Coconut & Dairy Milk Dual Broth", desc: "Rich and velvety, creating a warm decadent mouthfeel." },
        { icon: "🍅", name: "Fresh Red Tomatoes", desc: "Juicy, tangy tomato wedges that cut through the richness of the milk broth." },
        { icon: "🥔", name: "Fried Potato Cubes", desc: "Crispy-edged diced potatoes that soak up the spiced creamy soup." },
        { icon: "🍘", name: "Emping Melinjo Crackers", desc: "Bittersweet crunchy crackers crushed straight into the bowl." }
      ],
      essentialsZh: [
        { icon: "🥩", name: "慢燉牛腩牛雜", desc: "精心燉煮至軟爛多汁的牛腩、牛筋與精選牛雜，肉香四溢。" },
        { icon: "🥥", name: "椰奶與鮮乳雙重奶香湯頭", desc: "絲滑濃郁的質地，帶有肉豆蔻與丁香的微甜溫潤木質芬芳。" },
        { icon: "🍅", name: "新鮮多汁紅番茄", desc: "切片番茄的天然微酸，精準平衡了奶香的濃重，清爽解膩。" },
        { icon: "🥔", name: "金黃酥炸馬鈴薯丁", desc: "先炸後泡入濃湯的馬鈴薯塊，外微酥內鬆綿，吸飽精華。" },
        { icon: "🍘", name: "苦甜買麻藤樹籽餅（Emping）", desc: "略帶回甘微苦的傳統炸樹籽脆餅，捏碎泡入湯中格外香脆有層次。" }
      ],
      cultureEn: "A Jakarta specialty born from multi-ethnic trade; enjoyed during lunchtime in Batavia's historic alleys, often topped with acar pickles and sweet soy sauce.",
      cultureZh: "誕生於巴達維亞（今雅加達）多元文化交融的港口市集，老饕習慣加一匙甜醬油（Kecap Manis）與酸黃瓜（Acar）拌飯同享。",
      visualEn: "Creamy white-yellow broth (coconut milk + dairy milk), tender beef, tomato, potato.",
      visualZh: "椰奶與鮮奶交織的奶白湯頭，搭配燉得軟嫩的牛肉、番茄與馬鈴薯。",
      blurbEn: "You believe comfort is worth chasing. Rich, creamy, and a little decadent — you know when to indulge and you never apologize for it.",
      blurbZh: "你相信舒適感值得被追求。濃郁、香醇又帶點奢華——你知道何時該犒賞自己，而且從不後悔。",
      funFactEn: "Soto Betawi is one of the few sotos that uses BOTH coconut milk and cow's milk (or cream) in the broth — a Jakarta twist that makes it unusually rich.",
      funFactZh: "梭多巴達威是少數同時使用椰奶「和」牛奶（或鮮奶油）熬煮湯頭的梭多，這種雅加達式的做法讓它格外濃郁香醇。"
    },

    padang: {
      id: "padang",
      tag: "The Bold Adventurer",
      tagZh: "大膽無畏的探險者",
      nameEn: "Soto Padang",
      nameZh: "梭多巴東",
      badgeColor: "#C1502E",
      regionEn: "West Sumatra",
      regionZh: "西蘇門答臘",
      island: "sumatra",
      mapCoordinates: { x: 235, y: 220 },
      traitsEn: ["Bold", "Exciting", "Textural", "Doesn't Play It Safe"],
      traitsZh: ["大膽強烈", "層次多變", "口感酥脆", "永不安於平淡"],
      brothEn: "Deep amber clear beef broth packed with robust Minangkabau spices: star anise, cardamom, cinnamon, cloves, coriander, and fiery chili oil.",
      brothZh: "深褐琥珀色的重磅香料清湯，融入八角、豆蔻、肉桂、丁香與芫荽籽，辛香撲鼻、霸氣濃烈。",
      essentialsEn: [
        { icon: "🥓", name: "Dendeng Sapi (Two-step Crispy Beef)", desc: "Beef simmered with spices until tender, sliced thin, and flash-fried to bacon-like crispness!" },
        { icon: "🥔", name: "Perkedel Kentang / Crunchy Sticks", desc: "Golden fried potato patties and crispy matchstick potatoes for signature crunch." },
        { icon: "🍜", name: "Soun & Crispy Vermicelli", desc: "Steamed rice glass noodles paired with crunchy fried noodles." },
        { icon: "🌶️", name: "Sambal Balado / Cabe Merah", desc: "Pounded red chili relish for bold, fiery West Sumatran heat." },
        { icon: "🍘", name: "Pink/Red Kerupuk Merah", desc: "Traditional West Sumatran pink tapioca crackers floating on top." }
      ],
      essentialsZh: [
        { icon: "🥓", name: "雙工法極脆牛肉乾（Dendeng）", desc: "先以香料深燉至軟爛，再切薄片高溫油炸至如培根般極致香脆！" },
        { icon: "🥔", name: "印尼馬鈴薯餅與酥脆薯籤", desc: "綿密油潤的 Perkedel 薯泥餅，搭配撒在頂部的金黃酥脆炸薯籤。" },
        { icon: "🍜", name: "冬粉與酥炸米粉", desc: "滑順的冬粉鋪底，上面點綴炸得膨鬆酥脆的米粉，口感對比強烈。" },
        { icon: "🌶️", name: "鮮紅米南佳保辣醬（Sambal）", desc: "以紅辣椒與紅蔥頭手舂製成的大膽辣醬，辣香直衝腦門。" },
        { icon: "🍘", name: "巴東粉紅蝦餅（Kerupuk Merah）", desc: "西蘇門答臘招牌的粉紅色薄脆餅，泡在辣湯裡半脆半潤最好吃！" }
      ],
      cultureEn: "Iconic staple of West Sumatra's famed Minangkabau cuisine. Eaten with a pile of steamed rice and dipped crackers for maximum textural explosion.",
      cultureZh: "西蘇門答臘米南佳保族的驕傲之作，口感講究「脆、爽、辣、甘」，是巴東餐廳裡最讓人驚艷的熱湯料理。",
      visualEn: "Clear deeply-spiced broth, thin crispy fried beef strips, crunchy potato sticks (perkedel/kentang goreng), fried noodles.",
      visualZh: "濃郁辛香的深色湯底，搭配薄脆香酥的炸牛肉絲、酥脆馬鈴薯與炸米粉。",
      blurbEn: "You go big or go home. Crispy textures, deep spice, no boring choices — you're the one who orders the most interesting thing on the menu.",
      blurbZh: "你做什麼事都全力以赴。酥脆的口感、濃烈的香料——你永遠是那個點菜單上最特別料理的人。",
      funFactEn: "The beef in Soto Padang is deep-fried until crispy AFTER being simmered — a two-step cooking process unique to this style.",
      funFactZh: "梭多巴東裡的牛肉會先燉煮入味，再經過油炸至酥脆——這種「先燉後炸」的雙重工法是巴東梭多的獨門特色。"
    },

    banjar: {
      id: "banjar",
      tag: "The Refined Old Soul",
      tagZh: "低調優雅的老靈魂",
      nameEn: "Soto Banjar",
      nameZh: "梭多班查爾",
      badgeColor: "#2E4057",
      regionEn: "South Kalimantan (Borneo)",
      regionZh: "南加里曼丹（婆羅洲）",
      island: "kalimantan",
      mapCoordinates: { x: 505, y: 240 },
      traitsEn: ["Elegant", "Thoughtful", "A Little Formal", "Appreciates Fine Details"],
      traitsZh: ["高雅細緻", "沈穩體貼", "氣質優雅", "講究細節"],
      brothEn: "Sublimely fragrant golden clear broth perfumed with royal Sultanate spices: cinnamon bark, whole cloves, nutmeg, cardamom, and a splash of condensed milk.",
      brothZh: "南加里曼丹蘇丹國宮廷等級的金黃香料湯，以肉桂棒、整顆丁香、肉豆蔻與白豆蔻燉製，帶有高貴的木質甘甜芬芳。",
      essentialsEn: [
        { icon: "🥢", name: "Royal Spice Symphony", desc: "Whole cinnamon, star anise, nutmeg, and cloves create a signature tea-like perfume." },
        { icon: "🥚", name: "Sliced Duck / Chicken Eggs", desc: "Traditionally made with rich local duck eggs, halved to display golden yolks." },
        { icon: "🥔", name: "Perkedel Kentang (Potato Cake)", desc: "Fluffy seasoned mashed potato patties with golden-brown crust." },
        { icon: "🍙", name: "Ketupat Rice Diamonds", desc: "Served with fragrant pressed rice cakes instead of loose rice, cut into bite-sized cubes." },
        { icon: "🌿", name: "Chinese Celery (Seledri)", desc: "Finely minced fresh aromatic celery and crisp shallots." }
      ],
      essentialsZh: [
        { icon: "🥢", name: "宮廷四重奏香料", desc: "整根肉桂棒、八角、肉豆蔻與丁香原粒，散發如茶道般悠遠的暖香。" },
        { icon: "🥚", name: "金黃蛋黃水煮蛋切片", desc: "在地傳統使用婆羅洲土產鹹鴨蛋或水煮鴨蛋，蛋黃脂香濃郁。" },
        { icon: "🥔", name: "鬆軟圓形印尼馬鈴薯餅", desc: "以蒜碎、白胡椒調味的馬鈴薯泥揉成圓餅，裹蛋液慢煎而成。" },
        { icon: "🍙", name: "傳統菱形粽米糕（Ketupat）", desc: "以椰葉編織蒸熟的緊實米糕，切成小塊取代白飯浸潤高湯。" },
        { icon: "🌿", name: "新鮮細芹菜與青檸", desc: "撒上大量香氣濃郁的印尼小芹菜碎與青檸汁，平衡香料厚度。" }
      ],
      cultureEn: "Originated in the Banjar Sultanate along Borneo's rivers. Traditionally served at Banjar weddings, formal banquets, and floating river markets (pasar terapung).",
      cultureZh: "源自婆羅洲南部的班查爾蘇丹國水上城鎮，常出現在當地的傳統婚宴與知名的水上市場（Pasar Terapung），極具儀式感。",
      visualEn: "Golden clear broth fragrant with cinnamon/clove/nutmeg, boiled egg halves, perkedel (potato patty), served with ketupat.",
      visualZh: "洋溢肉桂、丁香與肉豆蔻芬芳的金黃清湯，配水煮蛋、馬鈴薯餅與菱形米糕（Ketupat）。",
      blurbEn: "You have old-soul elegance. Warm spices like cinnamon and clove run through you — refined, fragrant, and quietly sophisticated.",
      blurbZh: "你擁有老靈魂般的優雅氣質。肉桂與丁香般溫暖的香氣流淌其中——細膩、芬芳，帶著低調的講究。",
      funFactEn: "Soto Banjar's spice blend (cinnamon, clove, nutmeg) reflects centuries of Middle Eastern and Indian trade influence in the Banjar sultanate.",
      funFactZh: "梭多班查爾使用的肉桂、丁香、肉豆蔻等香料，反映了班查爾蘇丹國數百年來與中東、印度貿易往來的深遠影響。"
    },

    makassar: {
      id: "makassar",
      tag: "The Daring Original",
      tagZh: "獨樹一幟的先鋒派",
      nameEn: "Coto Makassar",
      nameZh: "哥多錫肉湯",
      badgeColor: "#7A2E2E",
      regionEn: "Makassar, South Sulawesi",
      regionZh: "南蘇拉威西 · 望加錫",
      island: "sulawesi",
      mapCoordinates: { x: 645, y: 275 },
      traitsEn: ["Daring", "Unconventional", "Deep", "Unforgettable"],
      traitsZh: ["勇於突破", "不落俗套", "深邃濃烈", "過目難忘"],
      brothEn: "Deep, earthy dark broth made by slow-cooking beef with toasted ground peanuts, rice water, galangal, lemongrass, and up to 40 secret herbs.",
      brothZh: "以烘焙花生磨碎成蓉，混入淘米水、南薑、香茅與多達40種秘製香料，長時間熬煮出如黑巧克力般深邃濃稠的甘醇湯底。",
      essentialsEn: [
        { icon: "🥜", name: "Roasted Ground Peanut Paste", desc: "Fresh peanuts dry-roasted and ground to impart signature nuttiness and thick broth body." },
        { icon: "🥩", name: "Braised Beef & Premium Offal", desc: "Generous cuts of beef, liver, lung, and tripe simmered in earthen clay pots until savory and tender." },
        { icon: "🌶️", name: "Sambal Taoco (Fermented Bean Chili)", desc: "Unique fermented soybean (taoco) chili paste that adds umami and tang." },
        { icon: "🍙", name: "Ketupat Daun Kelapa", desc: "Served with miniature diamond woven rice cakes sliced at your table." },
        { icon: "🧅", name: "Fried Shallots & Spring Onions", desc: "A generous blanket of aromatic alliums to cut through the heavy peanut broth." }
      ],
      essentialsZh: [
        { icon: "🥜", name: "慢火烘焙研磨花生蓉", desc: "特選熟花生炒香後細磨成膏，賦予湯底無可比擬的濃稠度與堅果濃香。" },
        { icon: "🥩", name: "陶鍋厚燉牛腩與牛雜", desc: "遵循古法在陶鍋中久燉的牛腱肉、牛肚、牛肝與牛肺，肉質軟爛入味。" },
        { icon: "🌶️", name: "獨門發酵豆醬辣椒（Sambal Taoco）", desc: "望加錫特有的發酵黃豆（Taoco）辣醬，酸香鹹辣，鮮度爆棚。" },
        { icon: "🍙", name: "椰葉編織米糕（Ketupat）", desc: "哥多錫肉湯絕不搭配普通白飯，必定搭配緊實有彈性的菱形米糕。" },
        { icon: "🧅", name: "厚重酥炸紅蔥頭與蔥花", desc: "上桌前覆蓋滿滿的香蔥與紅蔥酥，熱湯一沖，鑊氣撲鼻。" }
      ],
      cultureEn: "The pride of South Sulawesi seafaring Bugis culture since the 16th century kingdom of Gowa. Traditionally simmered in porous clay pots called 'kuali tanah'.",
      cultureZh: "南蘇拉威西航海民族布吉斯人（Bugis）自16世紀戈瓦王國傳承至今的瑰寶，堅持用特製陶鍋熬煮，風味深邃雄渾。",
      visualEn: "Thick dark peanut-and-spice broth, beef and offal, served with ketupat (pressed rice cake) instead of rice.",
      visualZh: "濃稠深色的烘焙花生香料濃湯，燉牛肉搭配傳統菱形編織米糕（Ketupat）。",
      blurbEn: "You're not for everyone — and you like it that way. Deep, dark, intensely flavorful, you leave a stronger impression than anyone else in the room.",
      blurbZh: "你不是討好每個人的類型——而你也樂在其中。濃厚、深邃、風味強烈，你總是比任何人都令人印象深刻。",
      funFactEn: "Coto Makassar's broth gets its signature thickness and depth from ground toasted peanuts and up to 40 spices — some recipes are guarded family secrets.",
      funFactZh: "哥多錫肉湯獨特的濃稠口感來自研磨過的烘焙花生，搭配多達40種香料熬煮而成——有些配方甚至是代代相傳的家族秘方。"
    }
  },

  // 8 Quiz Questions
  questions: [
    {
      id: 1,
      titleEn: "Weekend Plans",
      titleZh: "週末計畫",
      textEn: "It's a free weekend. What are you actually doing?",
      textZh: "難得的週末假期，你會怎麼度過？",
      options: [
        {
          soto: "lamongan",
          icon: "🛋️",
          textEn: "Staying in, doing something familiar and cozy",
          textZh: "待在家裡，做點熟悉又舒服的事"
        },
        {
          soto: "betawi",
          icon: "🍰",
          textEn: "Treating myself — good food, maybe a nap after",
          textZh: "好好犒賞自己——吃頓好料，再睡個回籠覺"
        },
        {
          soto: "padang",
          icon: "🧗",
          textEn: "Trying something new and slightly risky",
          textZh: "嘗試新事物，帶點小冒險"
        },
        {
          soto: "banjar",
          icon: "🏛️",
          textEn: "Something quiet and well-planned, maybe cultural",
          textZh: "安靜且有規劃的活動，可能還帶點文化氣息"
        },
        {
          soto: "makassar",
          icon: "🚀",
          textEn: "Whatever nobody else is doing",
          textZh: "做點別人都不會做的事"
        }
      ]
    },
    {
      id: 2,
      titleEn: "Friends Describe You",
      titleZh: "朋友眼中的你",
      textEn: "Your friends would describe you as...",
      textZh: "朋友會用什麼形容你？",
      options: [
        {
          soto: "lamongan",
          icon: "🤝",
          textEn: "The reliable one",
          textZh: "值得信賴的人"
        },
        {
          soto: "betawi",
          icon: "✨",
          textEn: "The one who enjoys life's little luxuries",
          textZh: "懂得享受生活小確幸的人"
        },
        {
          soto: "padang",
          icon: "🔥",
          textEn: "The bold one who speaks their mind",
          textZh: "敢言直率、勇於表達的人"
        },
        {
          soto: "banjar",
          icon: "📖",
          textEn: "The thoughtful, detail-oriented one",
          textZh: "細膩、注重細節的人"
        },
        {
          soto: "makassar",
          icon: "⚡",
          textEn: "The unpredictable, unforgettable one",
          textZh: "令人印象深刻、難以捉摸的人"
        }
      ]
    },
    {
      id: 3,
      titleEn: "Pick a Texture",
      titleZh: "挑選口感",
      textEn: "Pick a texture that speaks to you.",
      textZh: "選一個最吸引你的口感。",
      options: [
        {
          soto: "lamongan",
          icon: "🥣",
          textEn: "Smooth and familiar",
          textZh: "滑順又熟悉"
        },
        {
          soto: "betawi",
          icon: "🥛",
          textEn: "Creamy and rich",
          textZh: "濃郁綿密"
        },
        {
          soto: "padang",
          icon: "🥨",
          textEn: "Crispy and crunchy",
          textZh: "酥脆有嚼勁"
        },
        {
          soto: "banjar",
          icon: "🍃",
          textEn: "Light and fragrant",
          textZh: "輕盈又香氣四溢"
        },
        {
          soto: "makassar",
          icon: "🍫",
          textEn: "Thick and intense",
          textZh: "濃厚又強烈"
        }
      ]
    },
    {
      id: 4,
      titleEn: "Decision-Making Style",
      titleZh: "做決定的風格",
      textEn: "How do you usually make decisions?",
      textZh: "你通常是怎麼做決定的？",
      options: [
        {
          soto: "lamongan",
          icon: "🛡️",
          textEn: "I go with the safe, tried-and-true option",
          textZh: "我會選擇安全、經過驗證的選項"
        },
        {
          soto: "betawi",
          icon: "💖",
          textEn: "I go with whatever feels the most satisfying",
          textZh: "我會選擇讓自己最滿足的選項"
        },
        {
          soto: "padang",
          icon: "🎯",
          textEn: "I trust my gut and go bold",
          textZh: "我相信直覺，勇敢做決定"
        },
        {
          soto: "banjar",
          icon: "📐",
          textEn: "I plan carefully and consider every detail",
          textZh: "我會仔細規劃，考慮每個細節"
        },
        {
          soto: "makassar",
          icon: "🌪️",
          textEn: "I do whatever feels right, rules be damned",
          textZh: "我只做感覺對的事，才不管規則"
        }
      ]
    },
    {
      id: 5,
      titleEn: "Pick a Flavor",
      titleZh: "挑選風味",
      textEn: "Pick a flavor profile.",
      textZh: "選一個你喜歡的風味。",
      options: [
        {
          soto: "lamongan",
          icon: "🍲",
          textEn: "Comforting and familiar",
          textZh: "溫暖又熟悉"
        },
        {
          soto: "betawi",
          icon: "🥥",
          textEn: "Rich and indulgent",
          textZh: "濃郁又奢華"
        },
        {
          soto: "padang",
          icon: "🌶️",
          textEn: "Bold and spicy",
          textZh: "大膽又辛香"
        },
        {
          soto: "banjar",
          icon: "🌿",
          textEn: "Warm and fragrant spices",
          textZh: "溫潤又芬芳的香料"
        },
        {
          soto: "makassar",
          icon: "🥜",
          textEn: "Deep, intense, and unusual",
          textZh: "深邃、濃烈又獨特"
        }
      ]
    },
    {
      id: 6,
      titleEn: "Comfort Food Craving",
      titleZh: "療癒靈魂美食",
      textEn: "When you're stressed, what do you crave?",
      textZh: "壓力大的時候，你會想吃什麼？",
      options: [
        {
          soto: "lamongan",
          icon: "🏡",
          textEn: "Something warm and simple, like home",
          textZh: "溫暖又簡單，像家的味道"
        },
        {
          soto: "betawi",
          icon: "👑",
          textEn: "Something rich enough to feel like a reward",
          textZh: "濃郁到讓人覺得像犒賞自己"
        },
        {
          soto: "padang",
          icon: "🥓",
          textEn: "Something with a satisfying crunch",
          textZh: "吃起來要有滿足的酥脆感"
        },
        {
          soto: "banjar",
          icon: "☕",
          textEn: "Something fragrant that feels a bit special",
          textZh: "香氣獨特、帶點特別感的食物"
        },
        {
          soto: "makassar",
          icon: "🔮",
          textEn: "Something nobody else would think to order",
          textZh: "別人絕對想不到會點的東西"
        }
      ]
    },
    {
      id: 7,
      titleEn: "If You Were a Spice",
      titleZh: "如果你是一種香料",
      textEn: "If you were a spice, which one?",
      textZh: "如果你是一種香料，你會是？",
      options: [
        {
          soto: "lamongan",
          icon: "🟡",
          textEn: "Turmeric — warm, golden, dependable",
          textZh: "薑黃——溫暖、金黃、值得信賴"
        },
        {
          soto: "betawi",
          icon: "🥥",
          textEn: "Coconut milk — rich, smooth, comforting",
          textZh: "椰奶——濃郁、滑順、療癒人心"
        },
        {
          soto: "padang",
          icon: "🌶️",
          textEn: "Chili — bold, sharp, unforgettable",
          textZh: "辣椒——大膽、鮮明、令人難忘"
        },
        {
          soto: "banjar",
          icon: "🥢",
          textEn: "Cinnamon — elegant, fragrant, refined",
          textZh: "肉桂——優雅、芬芳、精緻"
        },
        {
          soto: "makassar",
          icon: "🌰",
          textEn: "Black pepper & toasted peanut — deep, intense",
          textZh: "黑胡椒與烤花生——深邃、濃烈"
        }
      ]
    },
    {
      id: 8,
      titleEn: "Travel Style (Decider)",
      titleZh: "旅行風格（關鍵題）",
      textEn: "If you visited Indonesia, what would you look for?",
      textZh: "如果你去印尼旅行，你最想體驗什麼？",
      isDecider: true,
      options: [
        {
          soto: "lamongan",
          icon: "🏪",
          textEn: "A cozy local warung everyone recommends",
          textZh: "大家都推薦的溫馨在地小吃攤"
        },
        {
          soto: "betawi",
          icon: "🍽️",
          textEn: "A rich, indulgent meal worth splurging on",
          textZh: "值得好好犒賞自己的豐盛美食"
        },
        {
          soto: "padang",
          icon: "🍢",
          textEn: "Street food that surprises you with texture",
          textZh: "口感令人驚喜的街頭小吃"
        },
        {
          soto: "banjar",
          icon: "🛶",
          textEn: "A quiet, culturally rich experience",
          textZh: "安靜又富有文化底蘊的體驗"
        },
        {
          soto: "makassar",
          icon: "🧭",
          textEn: "Something off the beaten path, not in guidebooks",
          textZh: "不在旅遊書上、獨一無二的秘境體驗"
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SOTO_DATA;
}
