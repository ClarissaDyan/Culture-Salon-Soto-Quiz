/**
 * Vector Illustrations & Animated SVGs for "Which Soto Are You?"
 * Duolingo-style cute flat vector aesthetics with thick clean lines,
 * expressive faces, distinct regional ingredients, and animated steam curls.
 *
 * NOTE: Avoids internal SVG filter and defs IDs to prevent Chrome/Safari
 * disappearing element bugs caused by ID collisions or display:none containers.
 */

const SOTO_ILLUSTRATIONS = {
  // 1. Soto Ayam Lamongan (The Reliable Classic)
  getLamonganSVG(size = 200) {
    return `
    <svg class="soto-character soto-lamongan-svg" width="${size}" height="${size}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Animated Steam -->
      <g class="steam-anim">
        <path class="steam-path s1" d="M85 50 C78 35 92 25 85 12" stroke="#E3A426" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.6"/>
        <path class="steam-path s2" d="M100 45 C93 28 108 18 100 5" stroke="#E3A426" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.8"/>
        <path class="steam-path s3" d="M115 50 C108 35 122 25 115 12" stroke="#E3A426" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.6"/>
      </g>

      <!-- Bowl Ground Shadow -->
      <ellipse cx="100" cy="180" rx="65" ry="12" fill="#3A2E27" opacity="0.12" />

      <!-- Bowl Main Group (No SVG filter to guarantee 100% rendering reliability) -->
      <g class="bowl-graphics">
        <!-- Spoon tucked on left -->
        <path d="M55 90 C45 60 30 50 25 45 C22 43 25 40 28 42 C38 48 56 68 62 85 Z" fill="#E8EEF5" stroke="#2E4057" stroke-width="3.5" stroke-linejoin="round" />
        <ellipse cx="27" cy="44" rx="8" ry="12" transform="rotate(-30 27 44)" fill="#E8EEF5" stroke="#2E4057" stroke-width="3.5" />

        <!-- Main Bowl Base -->
        <path d="M30 95 C30 150 60 175 100 175 C140 175 170 150 170 95 Z" fill="#FAF6EE" stroke="#3A2E27" stroke-width="5" stroke-linejoin="round"/>
        <!-- Bowl Rim Bottom Foot -->
        <rect x="75" y="172" width="50" height="8" rx="4" fill="#E3A426" stroke="#3A2E27" stroke-width="4"/>
        
        <!-- Turmeric Rim Accent Line -->
        <path d="M35 108 C55 120 145 120 165 108" stroke="#E3A426" stroke-width="4" stroke-linecap="round"/>

        <!-- Broth Interior (Golden Turmeric Yellow) -->
        <ellipse cx="100" cy="95" rx="68" ry="24" fill="#E3A426" stroke="#3A2E27" stroke-width="5"/>
        <ellipse cx="98" cy="92" rx="58" ry="18" fill="#FFDE59"/>
        
        <!-- Glass noodles swirls -->
        <path d="M55 92 C65 86 75 98 85 92 C95 86 105 96 115 90" stroke="#FFFDF9" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.9"/>
        <path d="M60 97 C70 91 80 102 92 97 C104 92 115 101 125 95" stroke="#FFFDF9" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.85"/>
        
        <!-- Shredded Chicken strips -->
        <rect x="68" y="85" width="22" height="7" rx="3.5" transform="rotate(-15 68 85)" fill="#FFF3D1" stroke="#3A2E27" stroke-width="2.5"/>
        <rect x="88" y="86" width="24" height="7" rx="3.5" transform="rotate(10 88 86)" fill="#FFF3D1" stroke="#3A2E27" stroke-width="2.5"/>
        
        <!-- Calamansi Lime Wedge on Rim -->
        <g transform="translate(138, 76) rotate(15)">
          <path d="M0 16 A16 16 0 0 1 32 16 Z" fill="#7A9B57" stroke="#3A2E27" stroke-width="3"/>
          <path d="M4 14 A12 12 0 0 1 28 14 Z" fill="#A7C957" stroke="#3A2E27" stroke-width="2"/>
          <line x1="16" y1="2" x2="16" y2="14" stroke="#7A9B57" stroke-width="2"/>
        </g>

        <!-- Koya Cracker Crunch Powder Sprinkle (Dots) -->
        <circle cx="95" cy="80" r="2.5" fill="#C1502E"/>
        <circle cx="103" cy="78" r="2" fill="#C1502E"/>
        <circle cx="112" cy="82" r="2.5" fill="#D4A373"/>
        <circle cx="106" cy="86" r="2" fill="#D4A373"/>
        <circle cx="98" cy="88" r="1.8" fill="#C1502E"/>

        <!-- Cute Kawaii Bowl Face -->
        <!-- Eyes: Happy Cheerful Arc Eyes -->
        <path d="M72 132 C75 125 85 125 88 132" stroke="#3A2E27" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <path d="M112 132 C115 125 125 125 128 132" stroke="#3A2E27" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <!-- Rosy Cheeks -->
        <ellipse cx="66" cy="136" rx="6" ry="4" fill="#FF8C8C" opacity="0.65"/>
        <ellipse cx="134" cy="136" rx="6" ry="4" fill="#FF8C8C" opacity="0.65"/>
        <!-- Sweet Smiling Mouth -->
        <path d="M93 138 C93 146 107 146 107 138" stroke="#3A2E27" stroke-width="4" stroke-linecap="round" fill="#C1502E"/>
        <path d="M96 140 Q100 144 104 140" fill="#FFB4B4"/>
      </g>
    </svg>
    `;
  },

  // 2. Soto Betawi (The Indulgent Comfort-Seeker)
  getBetawiSVG(size = 200) {
    return `
    <svg class="soto-character soto-betawi-svg" width="${size}" height="${size}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Silky Steam -->
      <g class="steam-anim">
        <path class="steam-path s1" d="M82 48 C75 35 90 22 82 10" stroke="#E3A426" stroke-width="4.5" stroke-linecap="round" fill="none" opacity="0.6"/>
        <path class="steam-path s2" d="M100 42 C92 25 106 15 98 4" stroke="#E3A426" stroke-width="5.5" stroke-linecap="round" fill="none" opacity="0.8"/>
        <path class="steam-path s3" d="M118 48 C110 35 125 22 118 10" stroke="#E3A426" stroke-width="4.5" stroke-linecap="round" fill="none" opacity="0.6"/>
      </g>

      <!-- Bowl Ground Shadow -->
      <ellipse cx="100" cy="180" rx="65" ry="12" fill="#3A2E27" opacity="0.12" />

      <!-- Bowl Main Group -->
      <g class="bowl-graphics">
        <!-- Rich Red Terracotta Handles -->
        <path d="M26 100 C20 100 15 110 18 120 C22 128 28 124 30 115" stroke="#3A2E27" stroke-width="4.5" stroke-linecap="round" fill="#C1502E"/>
        <path d="M174 100 C180 100 185 110 182 120 C178 128 172 124 170 115" stroke="#3A2E27" stroke-width="4.5" stroke-linecap="round" fill="#C1502E"/>

        <!-- Main Bowl Outer Body -->
        <path d="M28 95 C28 152 60 176 100 176 C140 176 172 152 172 95 Z" fill="#FFFBF5" stroke="#3A2E27" stroke-width="5" stroke-linejoin="round"/>
        <rect x="74" y="173" width="52" height="8" rx="4" fill="#C1502E" stroke="#3A2E27" stroke-width="4"/>
        
        <!-- Cream / Coconut Broth Interior -->
        <ellipse cx="100" cy="95" rx="70" ry="25" fill="#EED596" stroke="#3A2E27" stroke-width="5"/>
        <ellipse cx="98" cy="92" rx="60" ry="18" fill="#FFFDF0"/>

        <!-- Tender Beef Chunks -->
        <rect x="58" y="85" width="22" height="16" rx="5" transform="rotate(12 58 85)" fill="#6E2C18" stroke="#3A2E27" stroke-width="2.5"/>
        <path d="M62 90 L75 88" stroke="#9C442B" stroke-width="2" stroke-linecap="round"/>

        <!-- Fresh Red Tomato Wedge -->
        <g transform="translate(115, 82) rotate(-15)">
          <path d="M0 20 A20 20 0 0 1 30 5 Z" fill="#E63946" stroke="#3A2E27" stroke-width="2.5"/>
          <circle cx="12" cy="12" r="2" fill="#FFF"/>
        </g>

        <!-- Golden Potato Cube -->
        <rect x="90" y="84" width="18" height="15" rx="4" transform="rotate(-8 90 84)" fill="#E9C46A" stroke="#3A2E27" stroke-width="2.5"/>
        
        <!-- Green Scallion Bits -->
        <rect x="78" y="78" width="6" height="4" rx="2" fill="#7A9B57"/>
        <rect x="110" y="74" width="6" height="4" rx="2" fill="#7A9B57"/>

        <!-- Emping Cracker slice on rim -->
        <ellipse cx="148" cy="85" rx="14" ry="10" transform="rotate(25 148 85)" fill="#F4D06F" stroke="#3A2E27" stroke-width="3"/>
        <circle cx="146" cy="84" r="1.5" fill="#C1502E"/>
        <circle cx="151" cy="86" r="1.5" fill="#C1502E"/>

        <!-- Blissfully Cozy Eyes (Closed peaceful sleepy indulgence) -->
        <path d="M70 133 Q80 140 88 133" stroke="#3A2E27" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <path d="M112 133 Q120 140 128 133" stroke="#3A2E27" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <!-- Gentle Rosy Blush -->
        <circle cx="64" cy="136" r="7" fill="#FF9EAA" opacity="0.6"/>
        <circle cx="136" cy="136" r="7" fill="#FF9EAA" opacity="0.6"/>
        <!-- Contented Smile with cute tongue out -->
        <path d="M94 139 C94 148 106 148 106 139" stroke="#3A2E27" stroke-width="4" stroke-linecap="round" fill="#3A2E27"/>
        <path d="M97 142 C97 146 103 146 103 142" fill="#FF8C8C"/>
      </g>
    </svg>
    `;
  },

  // 3. Soto Padang (The Bold Adventurer)
  getPadangSVG(size = 200) {
    return `
    <svg class="soto-character soto-padang-svg" width="${size}" height="${size}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Fiery Wavy Steam -->
      <g class="steam-anim">
        <path class="steam-path s1" d="M84 46 C74 30 94 20 84 6" stroke="#C1502E" stroke-width="4.5" stroke-linecap="round" fill="none" opacity="0.8"/>
        <path class="steam-path s2" d="M100 40 C90 22 110 12 100 0" stroke="#E85D04" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.9"/>
        <path class="steam-path s3" d="M116 46 C106 30 126 20 116 6" stroke="#C1502E" stroke-width="4.5" stroke-linecap="round" fill="none" opacity="0.8"/>
        <!-- Sparkle Star -->
        <path d="M135 30 L138 35 L143 38 L138 41 L135 46 L132 41 L127 38 L132 35 Z" fill="#E3A426"/>
      </g>

      <!-- Bowl Ground Shadow -->
      <ellipse cx="100" cy="180" rx="65" ry="12" fill="#3A2E27" opacity="0.12" />

      <!-- Bowl Main Group -->
      <g class="bowl-graphics">
        <!-- Spicy Deep Bowl -->
        <path d="M28 95 C28 152 60 176 100 176 C140 176 172 152 172 95 Z" fill="#FAF4EB" stroke="#3A2E27" stroke-width="5" stroke-linejoin="round"/>
        <rect x="74" y="173" width="52" height="8" rx="4" fill="#7A2E2E" stroke="#3A2E27" stroke-width="4"/>
        
        <!-- Indonesian Batik Triangle Accents on Bowl -->
        <polygon points="50,110 58,118 42,118" fill="#C1502E"/>
        <polygon points="150,110 158,118 142,118" fill="#C1502E"/>

        <!-- Deep Amber Spiced Broth -->
        <ellipse cx="100" cy="95" rx="70" ry="25" fill="#7A2E2E" stroke="#3A2E27" stroke-width="5"/>
        <ellipse cx="98" cy="92" rx="60" ry="18" fill="#C1502E"/>

        <!-- Crispy Deep-Fried Beef Dendeng (Textured dark crisps) -->
        <rect x="60" y="86" width="28" height="9" rx="3" transform="rotate(-18 60 86)" fill="#4A150D" stroke="#3A2E27" stroke-width="2.5"/>
        <rect x="75" y="90" width="24" height="8" rx="3" transform="rotate(15 75 90)" fill="#5C2415" stroke="#3A2E27" stroke-width="2.5"/>
        
        <!-- Crunchy Golden Potato Sticks (Kentang Kering) -->
        <rect x="105" y="82" width="26" height="5" rx="2.5" transform="rotate(35 105 82)" fill="#F4A261" stroke="#3A2E27" stroke-width="2"/>
        <rect x="112" y="86" width="24" height="5" rx="2.5" transform="rotate(10 112 86)" fill="#E76F51" stroke="#3A2E27" stroke-width="2"/>
        <rect x="110" y="92" width="22" height="5" rx="2.5" transform="rotate(-20 110 92)" fill="#F4A261" stroke="#3A2E27" stroke-width="2"/>

        <!-- Curly Red Chili Slice -->
        <path d="M90 76 C94 72 102 74 100 80 C98 84 92 82 95 86" stroke="#D90429" stroke-width="3" stroke-linecap="round" fill="none"/>

        <!-- Adventurous Face: Confident Wink + Sparkle Eye -->
        <!-- Left Eye: Winking Angle -->
        <path d="M70 134 L80 128 L72 124" stroke="#3A2E27" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <!-- Right Eye: Big Wide Curious Star / Sparkle Eye -->
        <circle cx="120" cy="130" r="7.5" fill="#3A2E27"/>
        <circle cx="118" cy="127" r="2.5" fill="#FFF"/>
        <circle cx="123" cy="132" r="1.2" fill="#FFF"/>

        <!-- Feisty Grin with tooth shine -->
        <path d="M92 138 C92 150 108 150 108 138 Z" fill="#C1502E" stroke="#3A2E27" stroke-width="4"/>
        <path d="M96 138 L104 138" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>
      </g>
    </svg>
    `;
  },

  // 4. Soto Banjar (The Refined Old Soul)
  getBanjarSVG(size = 200) {
    return `
    <svg class="soto-character soto-banjar-svg" width="${size}" height="${size}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Fragrant Spice Steam -->
      <g class="steam-anim">
        <path class="steam-path s1" d="M85 46 C78 32 94 20 86 8" stroke="#2E4057" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.6"/>
        <path class="steam-path s2" d="M100 40 C92 24 108 14 100 2" stroke="#E3A426" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.85"/>
        <path class="steam-path s3" d="M115 46 C108 32 124 20 116 8" stroke="#2E4057" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.6"/>
        <!-- Floating Clove/Aroma icons -->
        <circle cx="70" cy="30" r="3" fill="#BA781E"/>
        <circle cx="130" cy="26" r="2.5" fill="#BA781E"/>
      </g>

      <!-- Bowl Ground Shadow -->
      <ellipse cx="100" cy="180" rx="65" ry="12" fill="#3A2E27" opacity="0.12" />

      <!-- Bowl Main Group -->
      <g class="bowl-graphics">
        <!-- Elegant Royal Porcelain Bowl -->
        <path d="M28 95 C28 152 60 176 100 176 C140 176 172 152 172 95 Z" fill="#F4F7FB" stroke="#2E4057" stroke-width="5" stroke-linejoin="round"/>
        <rect x="74" y="173" width="52" height="8" rx="4" fill="#2E4057" stroke="#2E4057" stroke-width="4"/>
        
        <!-- Royal Indigo Filigree Motif line -->
        <path d="M38 108 Q100 128 162 108" stroke="#2E4057" stroke-width="3" stroke-dasharray="6 4" fill="none"/>

        <!-- Fragrant Golden Spiced Broth -->
        <ellipse cx="100" cy="95" rx="70" ry="25" fill="#BA781E" stroke="#2E4057" stroke-width="5"/>
        <ellipse cx="98" cy="92" rx="60" ry="18" fill="#FFEA85"/>

        <!-- Halved Boiled Egg with perfect golden yolk -->
        <g transform="translate(56, 78) rotate(-10)">
          <ellipse cx="18" cy="14" rx="16" ry="12" fill="#FFFFFF" stroke="#3A2E27" stroke-width="2.5"/>
          <circle cx="18" cy="14" r="8" fill="#FFA500" stroke="#E67E22" stroke-width="1.5"/>
          <circle cx="15" cy="12" r="2.5" fill="#FFF"/>
        </g>

        <!-- Perkedel (Fried Potato Patty) -->
        <ellipse cx="135" cy="90" rx="14" ry="11" transform="rotate(15 135 90)" fill="#B08968" stroke="#3A2E27" stroke-width="2.5"/>
        <path d="M128 88 Q135 85 142 90" stroke="#7F4F24" stroke-width="2" stroke-linecap="round"/>

        <!-- Whole Cinnamon Stick & Star Anise garnish -->
        <rect x="94" y="80" width="22" height="6" rx="3" transform="rotate(-25 94 80)" fill="#7F4F24" stroke="#3A2E27" stroke-width="2"/>
        <!-- Star Anise point -->
        <g transform="translate(98, 92) scale(0.6)">
          <path d="M10 0 L13 7 L20 10 L13 13 L10 20 L7 13 L0 10 L7 7 Z" fill="#582F0E" stroke="#3A2E27" stroke-width="2"/>
        </g>

        <!-- Refined Intellectual Face with Monocle -->
        <!-- Left Eye (calm wise closed eye) -->
        <path d="M72 133 C75 128 85 128 88 133" stroke="#2E4057" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        
        <!-- Right Eye with Gold Monocle! -->
        <circle cx="120" cy="130" r="11" fill="none" stroke="#E3A426" stroke-width="3.5"/>
        <circle cx="120" cy="130" r="4.5" fill="#2E4057"/>
        <circle cx="118" cy="128" r="1.5" fill="#FFF"/>
        <!-- Monocle chain dangling down -->
        <path d="M131 130 C138 136 138 148 134 154" stroke="#E3A426" stroke-width="2.5" stroke-linecap="round" fill="none"/>

        <!-- Thoughtful, poised aristocratic smile -->
        <path d="M94 142 Q100 146 106 142" stroke="#2E4057" stroke-width="4" stroke-linecap="round" fill="none"/>
      </g>
    </svg>
    `;
  },

  // 5. Coto Makassar (The Daring Original)
  getMakassarSVG(size = 200) {
    return `
    <svg class="soto-character soto-makassar-svg" width="${size}" height="${size}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Intense Earthy Roasted Steam -->
      <g class="steam-anim">
        <path class="steam-path s1" d="M82 46 C72 30 92 20 82 6" stroke="#7A2E2E" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.75"/>
        <path class="steam-path s2" d="M100 38 C88 20 110 10 98 -2" stroke="#E3A426" stroke-width="5.5" stroke-linecap="round" fill="none" opacity="0.9"/>
        <path class="steam-path s3" d="M118 46 C108 30 128 20 118 6" stroke="#7A2E2E" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.75"/>
      </g>

      <!-- Bowl Ground Shadow -->
      <ellipse cx="100" cy="180" rx="65" ry="12" fill="#3A2E27" opacity="0.12" />

      <!-- Bowl Main Group -->
      <g class="bowl-graphics">
        <path d="M28 95 C28 152 60 176 100 176 C140 176 172 152 172 95 Z" fill="#3D2619" stroke="#1F120A" stroke-width="5" stroke-linejoin="round"/>
        <rect x="74" y="173" width="52" height="8" rx="4" fill="#7A2E2E" stroke="#1F120A" stroke-width="4"/>
        
        <!-- Brass Rim Inlay -->
        <path d="M38 106 Q100 122 162 106" stroke="#E3A426" stroke-width="3" stroke-linecap="round" opacity="0.8"/>

        <!-- Dark Roasted Peanut Broth -->
        <ellipse cx="100" cy="95" rx="70" ry="25" fill="#2B1405" stroke="#1F120A" stroke-width="5"/>
        <ellipse cx="98" cy="92" rx="60" ry="18" fill="#5A341A"/>

        <!-- Hearty Braised Beef Chunks -->
        <rect x="62" y="86" width="22" height="15" rx="4" transform="rotate(15 62 86)" fill="#6F1D1B" stroke="#1F120A" stroke-width="2.5"/>
        <rect x="86" y="88" width="20" height="14" rx="4" transform="rotate(-10 86 88)" fill="#541514" stroke="#1F120A" stroke-width="2.5"/>

        <!-- Woven Green Diamond Ketupat (Rice Cake) nestled on side -->
        <g transform="translate(132, 74) rotate(20) scale(0.9)">
          <polygon points="18,0 36,18 18,36 0,18" fill="#52B788" stroke="#1F120A" stroke-width="3"/>
          <line x1="9" y1="9" x2="27" y2="27" stroke="#40916C" stroke-width="2.5"/>
          <line x1="27" y1="9" x2="9" y2="27" stroke="#40916C" stroke-width="2.5"/>
        </g>

        <!-- Fresh Scallion & Fried Shallot Crisps -->
        <circle cx="75" cy="80" r="3" fill="#74C69D"/>
        <circle cx="112" cy="82" r="3" fill="#74C69D"/>
        <circle cx="106" cy="76" r="2.5" fill="#D4A373"/>

        <!-- Ultra Cool Character: Sunglasses! -->
        <!-- Sunglasses Frames -->
        <path d="M60 124 L92 124 L88 140 L64 140 Z" fill="#1A1A1A" stroke="#E3A426" stroke-width="2.5"/>
        <path d="M108 124 L140 124 L136 140 L112 140 Z" fill="#1A1A1A" stroke="#E3A426" stroke-width="2.5"/>
        <!-- Glasses Bridge -->
        <path d="M92 128 L108 128" stroke="#E3A426" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Lens Glare Reflection Lines -->
        <line x1="68" y1="127" x2="74" y2="137" stroke="#FFF" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
        <line x1="116" y1="127" x2="122" y2="137" stroke="#FFF" stroke-width="2" stroke-linecap="round" opacity="0.8"/>

        <!-- Confident Smug Smirk -->
        <path d="M94 148 Q103 154 110 146" stroke="#FAF4EB" stroke-width="4" stroke-linecap="round" fill="none"/>
      </g>
    </svg>
    `;
  },

  // Hero Lineup of All 5 Characters Together
  getHeroLineupSVG() {
    return `
    <div class="hero-soto-lineup">
      <div class="lineup-item" data-soto="lamongan" title="Soto Ayam Lamongan">
        ${this.getLamonganSVG(110)}
        <span class="lineup-label">Lamongan</span>
      </div>
      <div class="lineup-item" data-soto="betawi" title="Soto Betawi">
        ${this.getBetawiSVG(110)}
        <span class="lineup-label">Betawi</span>
      </div>
      <div class="lineup-item center-highlight" data-soto="padang" title="Soto Padang">
        ${this.getPadangSVG(125)}
        <span class="lineup-label">Padang</span>
      </div>
      <div class="lineup-item" data-soto="banjar" title="Soto Banjar">
        ${this.getBanjarSVG(110)}
        <span class="lineup-label">Banjar</span>
      </div>
      <div class="lineup-item" data-soto="makassar" title="Coto Makassar">
        ${this.getMakassarSVG(110)}
        <span class="lineup-label">Makassar</span>
      </div>
    </div>
    `;
  },

  // Stylized Indonesia Map SVG highlighting active soto's region
  getIndonesiaMapSVG(activeSotoId) {
    const soto = SOTO_DATA.personalities[activeSotoId] || SOTO_DATA.personalities.lamongan;
    const coords = soto.mapCoordinates;

    // Island highlight logic
    const isSumatra = soto.island === 'sumatra';
    const isJava = soto.island === 'java';
    const isKalimantan = soto.island === 'kalimantan';
    const isSulawesi = soto.island === 'sulawesi';

    return `
    <div class="indonesia-map-container">
      <div class="map-header">
        <span class="map-tag-icon">📍</span>
        <span class="map-title-text">${soto.nameEn} — <strong style="color:var(--color-terracotta);">${soto.regionEn}</strong></span>
      </div>
      
      <svg class="indonesia-map-svg" viewBox="0 0 900 450" xmlns="http://www.w3.org/2000/svg">
        <!-- Ocean base subtle waves -->
        <rect width="900" height="450" rx="16" fill="#EDF4F8" />
        
        <!-- Decorative Latitude / Longitude lines -->
        <line x1="50" y1="225" x2="850" y2="225" stroke="#D3E2EB" stroke-width="1.5" stroke-dasharray="6 6" />
        <text x="60" y="218" fill="#8AA8B8" font-size="11" font-family="sans-serif">EQUATOR / 0°</text>

        <!-- SUMATRA ISLAND -->
        <g class="island-group ${isSumatra ? 'active-island' : ''}">
          <path class="island-shape" d="M 120,110 C 150,90 190,120 220,150 C 260,190 290,260 330,310 C 310,325 280,315 250,290 C 210,240 160,190 130,150 Z" 
                fill="${isSumatra ? '#E3A426' : '#C8D9B8'}" 
                stroke="${isSumatra ? '#7A2E2E' : '#7A9B57'}" 
                stroke-width="${isSumatra ? '3.5' : '2'}" />
          <text x="185" y="195" class="island-label" fill="${isSumatra ? '#7A2E2E' : '#4E6B34'}">Sumatra</text>
        </g>

        <!-- JAVA ISLAND -->
        <g class="island-group ${isJava ? 'active-island' : ''}">
          <path class="island-shape" d="M 345,335 C 380,325 430,335 480,340 C 530,345 565,348 575,360 C 550,370 470,368 410,362 C 370,358 340,350 345,335 Z" 
                fill="${isJava ? '#E3A426' : '#C8D9B8'}" 
                stroke="${isJava ? '#7A2E2E' : '#7A9B57'}" 
                stroke-width="${isJava ? '3.5' : '2'}" />
          <text x="440" y="380" class="island-label" fill="${isJava ? '#7A2E2E' : '#4E6B34'}">Java</text>
        </g>

        <!-- KALIMANTAN (BORNEO) -->
        <g class="island-group ${isKalimantan ? 'active-island' : ''}">
          <path class="island-shape" d="M 430,120 C 490,110 530,140 560,170 C 570,220 540,280 490,285 C 440,280 420,230 405,180 C 400,150 410,130 430,120 Z" 
                fill="${isKalimantan ? '#E3A426' : '#C8D9B8'}" 
                stroke="${isKalimantan ? '#7A2E2E' : '#7A9B57'}" 
                stroke-width="${isKalimantan ? '3.5' : '2'}" />
          <text x="450" y="200" class="island-label" fill="${isKalimantan ? '#7A2E2E' : '#4E6B34'}">Kalimantan</text>
        </g>

        <!-- SULAWESI ISLAND -->
        <g class="island-group ${isSulawesi ? 'active-island' : ''}">
          <path class="island-shape" d="M 610,160 C 630,140 680,130 695,150 C 675,170 655,180 645,210 C 660,230 685,250 670,270 C 655,260 645,240 635,230 C 625,260 645,300 635,315 C 620,310 615,260 618,220 C 600,210 580,200 610,160 Z" 
                fill="${isSulawesi ? '#E3A426' : '#C8D9B8'}" 
                stroke="${isSulawesi ? '#7A2E2E' : '#7A9B57'}" 
                stroke-width="${isSulawesi ? '3.5' : '2'}" />
          <text x="635" y="195" class="island-label" fill="${isSulawesi ? '#7A2E2E' : '#4E6B34'}">Sulawesi</text>
        </g>

        <!-- BALI & NUSA TENGGARA -->
        <g class="island-group">
          <ellipse cx="600" cy="365" rx="14" ry="7" fill="#C8D9B8" stroke="#7A9B57" stroke-width="2"/>
          <ellipse cx="635" cy="368" rx="18" ry="7" fill="#C8D9B8" stroke="#7A9B57" stroke-width="2"/>
          <ellipse cx="680" cy="368" rx="24" ry="8" fill="#C8D9B8" stroke="#7A9B57" stroke-width="2"/>
          <ellipse cx="730" cy="370" rx="22" ry="7" fill="#C8D9B8" stroke="#7A9B57" stroke-width="2"/>
        </g>

        <!-- PAPUA (EAST) -->
        <g class="island-group">
          <path class="island-shape" d="M 770,180 C 810,160 860,190 870,220 C 865,270 820,280 785,260 C 760,240 755,200 770,180 Z" 
                fill="#C8D9B8" stroke="#7A9B57" stroke-width="2"/>
          <text x="795" y="235" class="island-label" fill="#4E6B34">Papua</text>
        </g>

        <!-- ACTIVE REGION PIN -->
        <g class="animated-map-pin" transform="translate(${coords.x}, ${coords.y})">
          <!-- Pulsing Ripple Waves -->
          <circle cx="0" cy="0" r="22" class="pin-ripple-outer" fill="#E3A426" opacity="0.3"/>
          <circle cx="0" cy="0" r="14" class="pin-ripple-inner" fill="#C1502E" opacity="0.5"/>
          
          <!-- Map Pin Shape -->
          <path d="M 0,-30 C -12,-30 -20,-20 -20,-8 C -20,8 0,2 0,2 C 0,2 20,8 20,-8 C 20,-20 12,-30 0,-30 Z" 
                fill="#C1502E" stroke="#FFF" stroke-width="3" filter="drop-shadow(0px 3px 4px rgba(0,0,0,0.3))"/>
          <circle cx="0" cy="-14" r="6.5" fill="#FFF" />
          <circle cx="0" cy="-14" r="3.5" fill="#E3A426" />
        </g>
      </svg>
    </div>
    `;
  },

  // Get character illustration by ID
  getCharacterSVG(sotoId, size = 200) {
    switch(sotoId) {
      case 'lamongan': return this.getLamonganSVG(size);
      case 'betawi': return this.getBetawiSVG(size);
      case 'padang': return this.getPadangSVG(size);
      case 'banjar': return this.getBanjarSVG(size);
      case 'makassar': return this.getMakassarSVG(size);
      default: return this.getLamonganSVG(size);
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SOTO_ILLUSTRATIONS;
}
