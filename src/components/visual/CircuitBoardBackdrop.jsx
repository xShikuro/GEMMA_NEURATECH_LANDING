const leftTraces = [
  'M0 92 H178 L218 132 H392',
  'M0 130 H156 L196 170 H338 L382 214 H492',
  'M0 172 H130 L174 216 H272',
  'M0 306 H106 V270 H232 L282 220 H430',
  'M0 352 H158 L204 306 H348 L392 262 H506',
  'M0 414 H196 L236 374 H314 V318 H448',
  'M0 498 H118 L168 548 H286 L330 592 H476',
  'M0 562 H184 L224 602 H364',
  'M0 638 H86 L138 690 H248 L306 748 H460',
  'M0 724 H164 L204 764 H342 L390 812 H530',
  'M0 808 H112 L154 850 H286',
  'M84 0 V122 H44 V268',
  'M266 0 V126 H324 V236',
  'M420 0 V86 H372 V160',
  'M72 900 V760 H136 V652',
  'M344 900 V802 H286 V692',
  'M470 900 V756 H410 V642',
]

const rightTraces = [
  'M1600 92 H1422 L1382 132 H1208',
  'M1600 130 H1444 L1404 170 H1262 L1218 214 H1108',
  'M1600 172 H1470 L1426 216 H1328',
  'M1600 306 H1494 V270 H1368 L1318 220 H1170',
  'M1600 352 H1442 L1396 306 H1252 L1208 262 H1094',
  'M1600 414 H1404 L1364 374 H1286 V318 H1152',
  'M1600 498 H1482 L1432 548 H1314 L1270 592 H1124',
  'M1600 562 H1416 L1376 602 H1236',
  'M1600 638 H1514 L1462 690 H1352 L1294 748 H1140',
  'M1600 724 H1436 L1396 764 H1258 L1210 812 H1070',
  'M1600 808 H1488 L1446 850 H1314',
  'M1516 0 V122 H1556 V268',
  'M1334 0 V126 H1276 V236',
  'M1180 0 V86 H1228 V160',
  'M1528 900 V760 H1464 V652',
  'M1256 900 V802 H1314 V692',
  'M1130 900 V756 H1190 V642',
]

const traces = [...leftTraces, ...rightTraces]

const nodes = [
  [178, 92],
  [392, 132],
  [338, 170],
  [272, 216],
  [232, 270],
  [430, 220],
  [348, 306],
  [448, 318],
  [286, 548],
  [476, 592],
  [364, 602],
  [248, 690],
  [460, 748],
  [342, 764],
  [530, 812],
  [136, 652],
  [286, 692],
  [410, 642],
  [1422, 92],
  [1208, 132],
  [1262, 170],
  [1328, 216],
  [1368, 270],
  [1170, 220],
  [1252, 306],
  [1152, 318],
  [1314, 548],
  [1124, 592],
  [1236, 602],
  [1352, 690],
  [1140, 748],
  [1258, 764],
  [1070, 812],
  [1464, 652],
  [1314, 692],
  [1190, 642],
]

const dotRows = [
  [192, 34],
  [58, 458],
  [240, 722],
  [1320, 36],
  [1470, 462],
  [1290, 724],
]

function DotMatrix({ x, y }) {
  return (
    <g className="circuit-dot-matrix" transform={`translate(${x} ${y})`}>
      {Array.from({ length: 5 }, (_, row) => (
        Array.from({ length: 7 }, (_, col) => (
          <circle key={`${row}-${col}`} cx={col * 11} cy={row * 11} r="1.35" />
        ))
      ))}
    </g>
  )
}

function Chip({ x, y, size = 76 }) {
  const pinStep = size / 7

  return (
    <g className="circuit-chip" transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width={size} height={size} rx="10" />
      <rect x={size * 0.28} y={size * 0.28} width={size * 0.44} height={size * 0.44} rx="3" />
      {Array.from({ length: 6 }, (_, index) => (
        <line key={`top-${index}`} x1={(index + 1) * pinStep} y1="-11" x2={(index + 1) * pinStep} y2="0" />
      ))}
      {Array.from({ length: 6 }, (_, index) => (
        <line key={`bottom-${index}`} x1={(index + 1) * pinStep} y1={size} x2={(index + 1) * pinStep} y2={size + 11} />
      ))}
      {Array.from({ length: 6 }, (_, index) => (
        <line key={`left-${index}`} x1="-11" y1={(index + 1) * pinStep} x2="0" y2={(index + 1) * pinStep} />
      ))}
      {Array.from({ length: 6 }, (_, index) => (
        <line key={`right-${index}`} x1={size} y1={(index + 1) * pinStep} x2={size + 11} y2={(index + 1) * pinStep} />
      ))}
    </g>
  )
}

export default function CircuitBoardBackdrop() {
  return (
    <div className="circuit-backdrop" aria-hidden="true">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="circuitGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="circuitFade" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="transparent" />
            <stop offset="0.18" stopColor="#1ff5f7" />
            <stop offset="0.82" stopColor="#1ff5f7" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
        </defs>

        <g className="circuit-lines">
          {traces.map((trace, index) => (
            <path key={trace} className={`circuit-trace circuit-trace--${index % 5}`} d={trace} />
          ))}
        </g>

        <g className="circuit-pulses">
          {traces.slice(0, 10).map((trace, index) => (
            <path key={trace} className={`circuit-pulse circuit-pulse--${index % 6}`} d={trace} />
          ))}
        </g>

        <g className="circuit-nodes">
          {nodes.map(([x, y], index) => (
            <circle key={`${x}-${y}`} className={`circuit-node circuit-node--${index % 7}`} cx={x} cy={y} r="6" />
          ))}
        </g>

        {dotRows.map(([x, y]) => (
          <DotMatrix key={`${x}-${y}`} x={x} y={y} />
        ))}

        <Chip x={146} y={330} size={72} />
        <Chip x={1368} y={342} size={82} />

        <g className="circuit-microtext">
          <text x="102" y="248">LEFT BUS</text>
          <text x="246" y="632">SIGNAL ROUTE</text>
          <text x="1240" y="250">VECTOR BUS</text>
          <text x="1118" y="632">NEURAL LINK</text>
        </g>
      </svg>
    </div>
  )
}
