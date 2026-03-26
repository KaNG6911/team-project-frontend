'use client'

import { useState, useEffect } from 'react'

type Difficulty = 'easy' | 'medium' | 'hard'

interface IslandData {
  id: number
  name: string
  color: string
  glowColor: string
  cx: number
  cy: number
}

const islandPositions: IslandData[] = [
  {
    id: 1,
    name: 'Цэцгийн арал',
    color: '#4ade80',
    glowColor: 'rgba(74,222,128,0.7)',
    cx: 150,
    cy: 110,
  },
  {
    id: 2,
    name: 'Хүрхрээний арал',
    color: '#38bdf8',
    glowColor: 'rgba(56,189,248,0.7)',
    cx: 450,
    cy: 210,
  },
  {
    id: 3,
    name: 'Галт уулын арал',
    color: '#f97316',
    glowColor: 'rgba(249,115,22,0.7)',
    cx: 160,
    cy: 330,
  },
  {
    id: 4,
    name: 'Мөсний арал',
    color: '#a78bfa',
    glowColor: 'rgba(167,139,250,0.7)',
    cx: 450,
    cy: 440,
  },
  {
    id: 5,
    name: 'Одны арал',
    color: '#fbbf24',
    glowColor: 'rgba(251,191,36,0.7)',
    cx: 170,
    cy: 560,
  },
]

const difficultyConfig = {
  easy: {
    label: 'Амархан',
    bg: '#4ade80',
    text: '#14532d',
    emoji: '😊',
    stars: '⭐',
  },
  medium: {
    label: 'Дундаж',
    bg: '#fbbf24',
    text: '#713f12',
    emoji: '🤔',
    stars: '⭐⭐',
  },
  hard: {
    label: 'Хэцүү',
    bg: '#a855f7',
    text: '#ffffff',
    emoji: '😤',
    stars: '⭐⭐⭐',
  },
}

/* ── Individual Island SVG drawings ── */

function Island1Flower({ hovered }: { hovered: boolean }) {
  return (
    <g>
      <ellipse cx="0" cy="52" rx="60" ry="13" fill="rgba(0,60,160,0.3)" />
      {/* Rock base */}
      <ellipse cx="0" cy="44" rx="56" ry="18" fill="#7c6b4a" />
      <ellipse cx="0" cy="36" rx="52" ry="22" fill="#8b7355" />
      {/* Grass terrain */}
      <ellipse cx="0" cy="16" rx="50" ry="28" fill="#22c55e" />
      <ellipse cx="0" cy="8" rx="46" ry="22" fill="#16a34a" />
      {/* Grass bumps */}
      <ellipse cx="-18" cy="2" rx="16" ry="10" fill="#15803d" />
      <ellipse cx="17" cy="0" rx="15" ry="9" fill="#15803d" />
      <ellipse cx="0" cy="-2" rx="18" ry="11" fill="#166534" />
      {/* Tree trunk + foliage */}
      <rect x="9" y="-22" width="4" height="18" fill="#92400e" />
      <ellipse cx="11" cy="-25" rx="11" ry="13" fill="#166534" />
      <ellipse cx="11" cy="-29" rx="8" ry="9" fill="#15803d" />
      {/* Flowers */}
      <g
        style={{
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'transform 0.35s',
        }}
      >
        <circle cx="-24" cy="-8" r="5.5" fill="#f9a8d4" />
        <circle cx="-24" cy="-8" r="3" fill="#fbbf24" />
        <circle cx="22" cy="-6" r="5.5" fill="#fb7185" />
        <circle cx="22" cy="-6" r="3" fill="#fbbf24" />
        <circle cx="-6" cy="-15" r="5" fill="#c084fc" />
        <circle cx="-6" cy="-15" r="3" fill="#fbbf24" />
        <circle cx="7" cy="-22" r="4.5" fill="#f9a8d4" />
        <circle cx="7" cy="-22" r="2.5" fill="#fbbf24" />
        <line
          x1="-24"
          y1="-2"
          x2="-24"
          y2="6"
          stroke="#15803d"
          strokeWidth="1.5"
        />
        <line
          x1="22"
          y1="0"
          x2="22"
          y2="8"
          stroke="#15803d"
          strokeWidth="1.5"
        />
        <line
          x1="-6"
          y1="-9"
          x2="-6"
          y2="-2"
          stroke="#15803d"
          strokeWidth="1.5"
        />
      </g>
      <ellipse cx="-14" cy="10" rx="9" ry="4" fill="rgba(255,255,255,0.12)" />
    </g>
  )
}

function Island2Waterfall({ hovered }: { hovered: boolean }) {
  return (
    <g>
      <ellipse cx="0" cy="52" rx="60" ry="13" fill="rgba(0,60,160,0.3)" />
      <ellipse cx="0" cy="44" rx="56" ry="18" fill="#6b7280" />
      <ellipse cx="0" cy="36" rx="52" ry="22" fill="#78716c" />
      <ellipse cx="0" cy="14" rx="50" ry="28" fill="#84cc16" />
      <ellipse cx="0" cy="6" rx="46" ry="22" fill="#65a30d" />
      {/* Cliff / mountain */}
      <polygon points="-12,8 -30,-30 10,-28" fill="#9ca3af" />
      <polygon points="-2,-2  -22,-34  14,-26" fill="#d1d5db" />
      <polygon points="-4,-2  -20,-36  10,-28" fill="#e5e7eb" />
      {/* Waterfall stream */}
      <g opacity={hovered ? 1 : 0.8} style={{ transition: 'opacity 0.3s' }}>
        <rect
          x="-7"
          y="-28"
          width="5"
          height="34"
          fill="rgba(186,230,253,0.85)"
          rx="2"
        />
        <rect
          x="-5"
          y="-28"
          width="3"
          height="34"
          fill="rgba(224,242,254,0.6)"
          rx="1"
        />
        <ellipse cx="-5" cy="8" rx="9" ry="4" fill="rgba(56,189,248,0.55)" />
        <ellipse cx="-5" cy="7" rx="7" ry="3" fill="rgba(186,230,253,0.7)" />
      </g>
      {/* Trees */}
      <rect x="20" y="-10" width="4" height="16" fill="#92400e" />
      <ellipse cx="22" cy="-13" rx="11" ry="13" fill="#166534" />
      <rect x="30" y="-4" width="3" height="12" fill="#78350f" />
      <ellipse cx="31" cy="-6" rx="9" ry="11" fill="#15803d" />
      {/* Sunset glow */}
      <ellipse cx="0" cy="-38" rx="22" ry="9" fill="rgba(251,146,60,0.18)" />
      <ellipse cx="-14" cy="10" rx="9" ry="4" fill="rgba(255,255,255,0.1)" />
    </g>
  )
}

function Island3Volcano({ hovered }: { hovered: boolean }) {
  return (
    <g>
      <ellipse cx="0" cy="52" rx="60" ry="13" fill="rgba(120,20,0,0.3)" />
      <ellipse cx="0" cy="44" rx="56" ry="18" fill="#57534e" />
      <ellipse cx="0" cy="36" rx="52" ry="20" fill="#44403c" />
      {/* Dark terrain */}
      <ellipse cx="0" cy="14" rx="50" ry="28" fill="#292524" />
      <ellipse cx="0" cy="6" rx="46" ry="22" fill="#1c1917" />
      {/* Lava cracks on ground */}
      <path
        d="M -20 20 Q -8 10 4 18 Q 14 24 24 14"
        stroke="#f97316"
        strokeWidth="2.5"
        fill="none"
        opacity="0.75"
      />
      <path
        d="M -16 30 Q -4 22 6 28"
        stroke="#ef4444"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      {/* Volcano cone */}
      <polygon points="0,-44 -34,14 34,14" fill="#44403c" />
      <polygon points="0,-44 -30,12 30,12" fill="#57534e" />
      {/* Lava stripes on cone */}
      <path
        d="M -8 -22 Q -14 -6 -18 12"
        stroke="#f97316"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M  7 -20 Q  12 -4  15 12"
        stroke="#dc2626"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Crater rim */}
      <ellipse cx="0" cy="-44" rx="11" ry="5.5" fill="#1c1917" />
      <ellipse cx="0" cy="-44" rx="9" ry="4" fill="#dc2626" />
      <ellipse cx="0" cy="-44" rx="7" ry="3" fill="#f97316" />
      {/* Eruption plume */}
      <g
        style={{
          transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
          transition: 'transform 0.3s',
        }}
      >
        <ellipse cx="-3" cy="-53" rx="6" ry="8" fill="rgba(249,115,22,0.85)" />
        <ellipse cx="4" cy="-58" rx="5" ry="7" fill="rgba(239,68,68,0.7)" />
        <ellipse cx="-1" cy="-64" rx="4" ry="5.5" fill="rgba(251,146,60,0.6)" />
        <ellipse cx="2" cy="-68" rx="3" ry="4" fill="rgba(253,186,116,0.4)" />
        <circle cx="-9" cy="-56" r="2.5" fill="#fbbf24" opacity="0.9" />
        <circle cx="10" cy="-53" r="2" fill="#f97316" opacity="0.8" />
        <circle cx="1" cy="-68" r="2" fill="#fde68a" opacity="0.7" />
      </g>
      <ellipse cx="-14" cy="10" rx="9" ry="4" fill="rgba(255,80,0,0.1)" />
    </g>
  )
}

function Island4Ice({ hovered }: { hovered: boolean }) {
  return (
    <g>
      <ellipse cx="0" cy="52" rx="60" ry="13" fill="rgba(100,150,220,0.3)" />
      <ellipse cx="0" cy="44" rx="56" ry="18" fill="#93c5fd" />
      <ellipse cx="0" cy="36" rx="52" ry="22" fill="#bfdbfe" />
      <ellipse cx="0" cy="14" rx="50" ry="28" fill="#dbeafe" />
      <ellipse cx="0" cy="6" rx="46" ry="22" fill="#bfdbfe" />
      {/* Snow bumps */}
      <ellipse cx="-17" cy="4" rx="16" ry="9" fill="white" />
      <ellipse cx="15" cy="2" rx="14" ry="8" fill="#bfdbfe" />
      <ellipse cx="0" cy="-2" rx="18" ry="10" fill="#f8fafc" />
      {/* Ice crystal spikes */}
      <g
        style={{
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'transform 0.35s',
        }}
      >
        <polygon
          points="-5,-40  -13,-10  3,-10"
          fill="#bfdbfe"
          opacity="0.92"
        />
        <polygon points="5,-34   -2,-8   13,-8" fill="#dbeafe" opacity="0.85" />
        <polygon points="-20,-26 -26,-5 -14,-5" fill="#e0f2fe" opacity="0.88" />
        <polygon points="19,-22  13,-4   25,-4" fill="#bae6fd" opacity="0.82" />
        <line
          x1="-6"
          y1="-38"
          x2="-9"
          y2="-28"
          stroke="white"
          strokeWidth="1.2"
          opacity="0.7"
        />
        <line
          x1="6"
          y1="-32"
          x2="4"
          y2="-22"
          stroke="white"
          strokeWidth="1.2"
          opacity="0.7"
        />
      </g>
      {/* Snowman */}
      <circle cx="24" cy="10" r="7.5" fill="white" />
      <circle cx="24" cy="0" r="5.5" fill="white" />
      <circle cx="22" cy="-2" r="1.2" fill="#1e3a8a" />
      <circle cx="26" cy="-2" r="1.2" fill="#1e3a8a" />
      <path
        d="M 21 1 Q 24 3 27 1"
        stroke="#f97316"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Snowflake decor */}
      <text x="-32" y="-22" fontSize="11" fill="rgba(147,197,253,0.75)">
        ❄
      </text>
      <text x="29" y="-26" fontSize="9" fill="rgba(186,230,253,0.65)">
        ❄
      </text>
      <ellipse cx="-14" cy="10" rx="9" ry="4" fill="rgba(255,255,255,0.2)" />
    </g>
  )
}

function Island5Star({ hovered }: { hovered: boolean }) {
  return (
    <g>
      <ellipse cx="0" cy="52" rx="60" ry="13" fill="rgba(80,20,120,0.3)" />
      <ellipse cx="0" cy="44" rx="56" ry="18" fill="#1e1b4b" />
      <ellipse cx="0" cy="36" rx="52" ry="22" fill="#312e81" />
      <ellipse cx="0" cy="14" rx="50" ry="28" fill="#1e1b4b" />
      <ellipse cx="0" cy="6" rx="46" ry="22" fill="#0f0e30" />
      {/* Saturn planet */}
      <ellipse cx="-20" cy="-10" rx="14" ry="14" fill="#7c3aed" />
      <ellipse cx="-20" cy="-10" rx="12" ry="12" fill="#8b5cf6" />
      {/* Ring around saturn */}
      <ellipse cx="-20" cy="-10" rx="24" ry="7" fill="rgba(196,181,253,0.35)" />
      <ellipse cx="-20" cy="-10" rx="22" ry="6" fill="rgba(167,139,250,0.2)" />
      <ellipse cx="-20" cy="-10" rx="12" ry="12" fill="#8b5cf6" />
      {/* Rocket */}
      <g
        style={{
          transform: hovered
            ? 'translate(2px,-7px) rotate(-8deg)'
            : 'translate(0,0) rotate(0deg)',
          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          transformOrigin: '22px -20px',
        }}
      >
        <rect x="18" y="-36" width="8" height="20" fill="#e2e8f0" rx="4" />
        <polygon points="18,-36 22,-48 26,-36" fill="#f87171" />
        <rect x="13" y="-24" width="5" height="7" fill="#93c5fd" rx="2" />
        <rect x="25" y="-24" width="5" height="7" fill="#93c5fd" rx="2" />
        <ellipse
          cx="22"
          cy="-17"
          rx="4"
          ry="3.5"
          fill="#f97316"
          opacity="0.9"
        />
        <ellipse
          cx="22"
          cy="-13"
          rx="3"
          ry="4.5"
          fill="#fbbf24"
          opacity="0.7"
        />
      </g>
      {/* Terrain stars */}
      <circle cx="-4" cy="-4" r="2" fill="#fbbf24" />
      <circle cx="11" cy="3" r="1.5" fill="#fde68a" />
      <circle cx="-30" cy="4" r="2" fill="#fbbf24" />
      <circle cx="36" cy="1" r="1.5" fill="#fde68a" />
      {/* Cosmic swirl */}
      <path
        d="M 5 16 Q 16 8 28 16 Q 38 24 28 30"
        stroke="rgba(196,181,253,0.28)"
        strokeWidth="2"
        fill="none"
      />
      <ellipse cx="-14" cy="10" rx="9" ry="4" fill="rgba(167,139,250,0.12)" />
    </g>
  )
}

function IslandSVG({ id, hovered }: { id: number; hovered: boolean }) {
  if (id === 1) return <Island1Flower hovered={hovered} />
  if (id === 2) return <Island2Waterfall hovered={hovered} />
  if (id === 3) return <Island3Volcano hovered={hovered} />
  if (id === 4) return <Island4Ice hovered={hovered} />
  return <Island5Star hovered={hovered} />
}

/* ── Background decorative figures (clouds, fish, shells, bubbles) ── */
const BG_FIGURES = [
  { type: 'cloud', x: 520, y: 55, s: 0.85, op: 0.14 },
  { type: 'cloud', x: 75, y: 160, s: 0.7, op: 0.13 },
  { type: 'cloud', x: 370, y: 290, s: 0.75, op: 0.12 },
  { type: 'cloud', x: 48, y: 455, s: 0.6, op: 0.12 },
  { type: 'cloud', x: 535, y: 510, s: 0.72, op: 0.13 },
  { type: 'fish', x: 490, y: 375, s: 1.0, op: 0.18, flip: false },
  { type: 'fish', x: 82, y: 245, s: 0.8, op: 0.16, flip: true },
  { type: 'fish', x: 310, y: 505, s: 0.7, op: 0.16, flip: false },
  { type: 'shell', x: 338, y: 88, s: 1.0, op: 0.18 },
  { type: 'shell', x: 232, y: 186, s: 0.8, op: 0.16 },
  { type: 'shell', x: 495, y: 145, s: 0.72, op: 0.16 },
  { type: 'shell', x: 102, y: 395, s: 0.82, op: 0.15 },
  { type: 'shell', x: 358, y: 575, s: 0.68, op: 0.14 },
  { type: 'bubble', x: 262, y: 58, r: 10, op: 0.11 },
  { type: 'bubble', x: 428, y: 322, r: 7, op: 0.11 },
  { type: 'bubble', x: 142, y: 562, r: 9, op: 0.11 },
  { type: 'bubble', x: 512, y: 242, r: 6, op: 0.09 },
  { type: 'bubble', x: 68, y: 315, r: 8, op: 0.1 },
]

export default function AdventureMap() {
  const [hoveredIsland, setHoveredIsland] = useState<number | null>(null)
  const [selectedIsland, setSelectedIsland] = useState<IslandData | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const W = 600,
    H = 660

  // Build smooth bezier road through island bases
  const roadPath = (() => {
    const pts = islandPositions.map((p) => ({ x: p.cx, y: p.cy + 50 }))
    let d = `M ${pts[0].x} ${pts[0].y}`
    for (let i = 1; i < pts.length; i++) {
      const p = pts[i - 1],
        c = pts[i]
      const cpx1 = p.x + (c.x - p.x) * 0.45
      const cpy1 = p.y + (c.y - p.y) * 0.1
      const cpx2 = c.x - (c.x - p.x) * 0.45
      const cpy2 = c.y - (c.y - p.y) * 0.1
      d += ` C ${cpx1} ${cpy1} ${cpx2} ${cpy2} ${c.x} ${c.y}`
    }
    return d
  })()

  // Footprint positions (manually tuned along road)
  const footprints = [
    [268, 152],
    [312, 168],
    [356, 192],
    [355, 238],
    [308, 264],
    [256, 282],
    [224, 338],
    [270, 370],
    [336, 392],
    [360, 448],
    [312, 476],
    [255, 502],
  ]

  return (
    <div
      className="min-h-screen overflow-hidden relative flex flex-col"
      style={{
        background:
          'linear-gradient(170deg, #480485  0%, #a83cf0 35%, #0db004 65%, #186906 100%)',
      }}
    >
      {/* Background SVG layer */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Ocean wave at bottom */}
          <path
            d="M 0 590 Q 150 565 300 582 Q 450 599 600 575 L 600 660 L 0 660 Z"
            fill="rgba(10,32,110,0.45)"
          />
          <path
            d="M 0 615 Q 200 592 400 612 Q 500 622 600 600 L 600 660 L 0 660 Z"
            fill="rgba(7,22,85,0.38)"
          />

          {/* Decorative bg figures */}
          {mounted &&
            BG_FIGURES.map((f, i) => {
              if (f.type === 'cloud')
                return (
                  <g
                    key={i}
                    transform={`translate(${f.x},${f.y}) scale(${f.s})`}
                    opacity={f.op}
                  >
                    <ellipse cx="0" cy="0" rx="28" ry="15" fill="white" />
                    <ellipse cx="-17" cy="-6" rx="18" ry="13" fill="white" />
                    <ellipse cx="15" cy="-5" rx="20" ry="12" fill="white" />
                    <ellipse cx="0" cy="-10" rx="15" ry="12" fill="white" />
                  </g>
                )
              if (f.type === 'fish')
                return (
                  <g
                    key={i}
                    transform={`translate(${f.x},${f.y}) scale(${(f as any).flip ? -f.s! : f.s!},${f.s})`}
                    opacity={f.op}
                  >
                    <ellipse cx="0" cy="0" rx="21" ry="10" fill="white" />
                    <polygon points="-21,0 -32,-10 -32,10" fill="white" />
                    <circle
                      cx="13"
                      cy="-3"
                      r="2.5"
                      fill="rgba(255,255,255,0.3)"
                    />
                  </g>
                )
              if (f.type === 'shell')
                return (
                  <g
                    key={i}
                    transform={`translate(${f.x},${f.y}) scale(${f.s})`}
                    opacity={f.op}
                  >
                    <path d="M 0 0 Q 13 -9 20 0 Q 13 9 0 0 Z" fill="white" />
                    <path
                      d="M 0 0 Q 8 -5 12 0 Q 8 5 0 0 Z"
                      fill="rgba(255,255,255,0.45)"
                    />
                    <path
                      d="M 4 -6 Q 10 0 4 6"
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <path
                      d="M 8 -4 Q 13 0 8 4"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="1"
                      fill="none"
                    />
                  </g>
                )
              if (f.type === 'bubble')
                return (
                  <circle
                    key={i}
                    cx={(f as any).x}
                    cy={(f as any).y}
                    r={(f as any).r}
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity={f.op}
                  />
                )
              return null
            })}

          {/* Tiny twinkling dots */}
          {mounted &&
            [...Array(28)].map((_, i) => (
              <circle
                key={`star-${i}`}
                cx={((i * 57 + 38) % 555) + 22}
                cy={((i * 79 + 28) % 610) + 18}
                r={1.2}
                fill="white"
                opacity={0.12 + (i % 5) * 0.04}
                style={{
                  animation: `twinkle ${2.5 + (i % 4) * 0.5}s ease-in-out infinite`,
                  animationDelay: `${(i * 0.28) % 3}s`,
                }}
              />
            ))}
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center pt-5 pb-3 shrink-0"></div>

      {/* Map */}
      <div
        className="relative flex-1 mx-auto w-full mt-15"
        style={{ maxWidth: '620px' }}
      >
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-full"
          style={{ display: 'block' }}
        >
          {/* ── Road ── */}
          {/* Soft outer glow */}
          <path
            d={roadPath}
            fill="none"
            stroke="rgba(147,197,253,0.12)"
            strokeWidth="32"
            strokeLinecap="round"
          />
          {/* Road border */}
          <path
            d={roadPath}
            fill="none"
            stroke="rgba(186,230,253,0.22)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Road surface */}
          <path
            d={roadPath}
            fill="none"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          {/* Dashed center line */}
          <path
            d={roadPath}
            fill="none"
            stroke="rgba(255,255,255,0.38)"
            strokeWidth="3.5"
            strokeDasharray="18 14"
            strokeLinecap="round"
            style={{ animation: 'dashMove 4s linear infinite' }}
          />
          {/* Footprints */}
          {footprints.map(([fx, fy], i) => (
            <text
              key={`fp-${i}`}
              x={fx}
              y={fy}
              fontSize="13"
              textAnchor="middle"
              style={{ opacity: 0.3, userSelect: 'none' }}
            >
              👣
            </text>
          ))}

          {/* ── Islands ── */}
          {islandPositions.map((island) => {
            const isHov = hoveredIsland === island.id
            return (
              <g
                key={island.id}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredIsland(island.id)}
                onMouseLeave={() => setHoveredIsland(null)}
                onClick={() => {
                  setSelectedIsland(island)
                  setSelectedDifficulty(null)
                }}
              >
                {/* Glow halo under island */}
                {isHov && (
                  <ellipse
                    cx={island.cx}
                    cy={island.cy + 52}
                    rx="55"
                    ry="18"
                    fill={island.glowColor}
                    style={{ filter: 'blur(8px)', opacity: 0.5 }}
                  />
                )}

                {/* Island group with float + hover lift */}
                <g
                  transform={`translate(${island.cx}, ${island.cy})`}
                  style={{
                    filter: isHov
                      ? `drop-shadow(0 0 18px ${island.glowColor}) drop-shadow(0 0 36px ${island.glowColor})`
                      : 'drop-shadow(0 6px 18px rgba(0,0,0,0.5))',
                    transition: 'filter 0.3s',
                  }}
                >
                  <g
                    style={{
                      animation: `float${island.id} 3.2s ease-in-out infinite`,
                      animationDelay: `${(island.id - 1) * 0.55}s`,
                    }}
                  >
                    <g
                      style={{
                        transform: isHov
                          ? 'translateY(-10px) scale(1.13)'
                          : 'translateY(0) scale(1)',
                        transition:
                          'transform 0.38s cubic-bezier(0.34,1.56,0.64,1)',
                        transformOrigin: '0 0',
                      }}
                    >
                      <IslandSVG id={island.id} hovered={isHov} />
                    </g>
                  </g>

                  {/* Number badge */}
                  <circle cx="-42" cy="-36" r="13" fill={island.color} />
                  <circle
                    cx="-42"
                    cy="-36"
                    r="11"
                    stroke="white"
                    strokeWidth="2"
                    fill="rgba(255,255,255,0.18)"
                  />
                  <text
                    x="-42"
                    y="-31"
                    fontSize="13"
                    fontWeight="900"
                    fill="white"
                    textAnchor="middle"
                    style={{ fontFamily: 'system-ui' }}
                  >
                    {island.id}
                  </text>

                  {/* Name label */}
                  <rect
                    x="-54"
                    y="58"
                    width="108"
                    height="22"
                    rx="11"
                    fill="rgba(0,0,0,0.48)"
                  />
                  <rect
                    x="-54"
                    y="58"
                    width="108"
                    height="22"
                    rx="11"
                    fill="none"
                    stroke={island.color}
                    strokeWidth="1.2"
                    opacity="0.55"
                  />
                  <text
                    x="0"
                    y="74"
                    fontSize="11"
                    fontWeight="700"
                    fill="white"
                    textAnchor="middle"
                    style={{ fontFamily: 'system-ui' }}
                  >
                    {island.name}
                  </text>

                  {/* Hover sparkles */}
                  {isHov && (
                    <>
                      <text
                        x="52"
                        y="-46"
                        fontSize="16"
                        style={{ animation: 'sparkle 0.8s ease-out forwards' }}
                      >
                        ✨
                      </text>
                      <text
                        x="56"
                        y="-18"
                        fontSize="13"
                        style={{
                          animation: 'sparkle 0.8s ease-out forwards',
                          animationDelay: '0.12s',
                        }}
                      >
                        ⭐
                      </text>
                      <text
                        x="50"
                        y="12"
                        fontSize="14"
                        style={{
                          animation: 'sparkle 0.8s ease-out forwards',
                          animationDelay: '0.24s',
                        }}
                      >
                        💫
                      </text>
                    </>
                  )}
                </g>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Modal */}
      {selectedIsland && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{
            background: 'rgba(0,0,0,0.68)',
            backdropFilter: 'blur(10px)',
          }}
          onClick={() => setSelectedIsland(null)}
        >
          <div
            className="relative rounded-3xl p-6 w-full text-center"
            style={{
              maxWidth: '300px',
              background: 'linear-gradient(150deg, #0f172a 0%, #1e3a8a 100%)',
              border: `2px solid ${selectedIsland.color}`,
              boxShadow: `0 0 55px ${selectedIsland.glowColor}, 0 28px 65px rgba(0,0,0,0.65)`,
              animation: 'popIn 0.42s cubic-bezier(0.34,1.56,0.64,1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIsland(null)}
              className="absolute top-3 right-4 text-white text-2xl font-black"
              style={{ opacity: 0.5 }}
            >
              ×
            </button>

            {/* Island preview */}
            <div className="flex justify-center mb-1">
              <svg width="130" height="105" viewBox="-65 -55 130 110">
                <IslandSVG id={selectedIsland.id} hovered={true} />
              </svg>
            </div>

            <h2 className="text-xl font-black text-white mb-0.5">
              {selectedIsland.name}
            </h2>
            <p
              className="text-sm mb-4 font-semibold"
              style={{ color: selectedIsland.color }}
            >
              Түвшнээ сонгоорой!
            </p>

            {!selectedDifficulty ? (
              <div className="flex flex-col gap-3">
                {(
                  Object.entries(difficultyConfig) as [
                    Difficulty,
                    typeof difficultyConfig.easy,
                  ][]
                ).map(([key, cfg]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedDifficulty(key)}
                    className="rounded-2xl py-3 px-5 font-black text-base flex items-center justify-between"
                    style={{
                      background: cfg.bg,
                      color: cfg.text,
                      boxShadow: '0 4px 16px rgba(0,0,0,0.38)',
                      border: '2px solid rgba(255,255,255,0.28)',
                      transition: 'transform 0.12s',
                    }}
                    onMouseDown={(e) =>
                      (e.currentTarget.style.transform = 'scale(0.96)')
                    }
                    onMouseUp={(e) =>
                      (e.currentTarget.style.transform = 'scale(1)')
                    }
                  >
                    <span>
                      {cfg.emoji} {cfg.label}
                    </span>
                    <span>{cfg.stars}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div>
                <div className="text-5xl mb-3">🎉</div>
                <p className="text-white font-black text-lg mb-1">
                  {difficultyConfig[selectedDifficulty].emoji}{' '}
                  {difficultyConfig[selectedDifficulty].label} түвшин
                </p>
                <p className="text-blue-300 text-sm mb-5">
                  Тоглоом эхлэх гэж байна...
                </p>
                <button
                  onClick={() => setSelectedIsland(null)}
                  className="font-black px-8 py-3 rounded-2xl text-lg"
                  style={{
                    background: '#4ade80',
                    color: '#14532d',
                    boxShadow: '0 4px 20px rgba(74,222,128,0.5)',
                    transition: 'transform 0.12s',
                  }}
                  onMouseDown={(e) =>
                    (e.currentTarget.style.transform = 'scale(0.96)')
                  }
                  onMouseUp={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                >
                  🚀 Тоглох!
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.08;
          }
          50% {
            opacity: 0.42;
          }
        }
        @keyframes dashMove {
          to {
            stroke-dashoffset: -64;
          }
        }
        @keyframes sparkle {
          0% {
            opacity: 0;
            transform: scale(0) translateY(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.3) translateY(-13px);
          }
          100% {
            opacity: 0;
            transform: scale(0.5) translateY(-24px);
          }
        }
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.72) translateY(28px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        @keyframes float4 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }
        @keyframes float5 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  )
}
