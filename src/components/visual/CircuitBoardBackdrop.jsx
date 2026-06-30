const leftTraces = [
  'M0 92 H142 L176 126 H248 L282 160 H430 L466 196 H552',
  'M0 130 H116 L150 164 H230 L266 200 H338 L382 244 H512',
  'M0 172 H92 L128 208 H206 L248 250 H356',
  'M0 252 H72 L110 290 H202 L244 248 H314 L354 208 H468',
  'M0 306 H106 V270 H178 L214 234 H288 L332 190 H494',
  'M0 352 H128 L168 312 H246 L286 272 H374 L420 226 H540',
  'M0 414 H166 L206 374 H314 V330 H392 L436 286 H548',
  'M0 498 H96 L134 536 H218 L260 578 H340 L382 620 H512',
  'M0 562 H156 L196 602 H292 L334 644 H424',
  'M0 638 H86 L126 678 H214 L256 720 H340 L386 766 H518',
  'M0 724 H132 L172 764 H268 L312 808 H400 L440 848 H560',
  'M0 808 H84 L124 848 H212 L248 884 H330',
  'M84 0 V94 H44 V184 H82 V292',
  'M266 0 V92 H324 V168 H286 V274',
  'M420 0 V72 H372 V126 H416 V218',
  'M72 900 V792 H136 V704 H96 V612',
  'M344 900 V824 H286 V742 H328 V650',
  'M470 900 V786 H410 V724 H454 V626',
]

const rightTraces = [
  'M1600 92 H1458 L1424 126 H1352 L1318 160 H1170 L1134 196 H1048',
  'M1600 130 H1484 L1450 164 H1370 L1334 200 H1262 L1218 244 H1088',
  'M1600 172 H1508 L1472 208 H1394 L1352 250 H1244',
  'M1600 236 H1532 L1494 274 H1430 V314 H1372 L1328 270 H1250 L1208 228 H1092',
  'M1600 286 H1510 V248 H1444 L1406 210 H1320 L1278 252 H1174 L1130 296 H1048',
  'M1600 352 H1472 L1432 312 H1354 L1314 272 H1226 L1180 226 H1060',
  'M1600 414 H1434 L1394 374 H1286 V330 H1208 L1164 286 H1052',
  'M1600 470 H1526 L1484 512 H1416 L1378 474 H1324 V430 H1246 L1204 472 H1114',
  'M1600 526 H1504 L1466 566 H1382 L1340 608 H1260 L1218 650 H1088',
  'M1600 582 H1444 L1404 622 H1322 V672 H1258 L1214 716 H1110',
  'M1600 638 H1514 L1474 678 H1386 L1344 720 H1260 L1214 766 H1082',
  'M1600 724 H1468 L1428 764 H1332 L1288 808 H1200 L1160 848 H1040',
  'M1600 808 H1516 L1476 848 H1388 L1352 884 H1270',
  'M1516 0 V94 H1556 V184 H1518 V292',
  'M1334 0 V92 H1276 V168 H1314 V274',
  'M1180 0 V72 H1228 V126 H1184 V218',
  'M1528 900 V792 H1464 V704 H1504 V612',
  'M1256 900 V824 H1314 V742 H1272 V650',
  'M1130 900 V786 H1190 V724 H1146 V626',
  'M1600 38 H1542 V74 H1478 L1444 108 H1378',
  'M1600 760 H1538 V716 H1492 L1458 682 H1390 V620 H1316',
  'M1600 856 H1548 L1512 820 H1454 V772 H1384 L1342 730 H1254',
]

const traces = [...leftTraces, ...rightTraces]

const nodes = [
  [178, 92],
  [430, 160],
  [512, 244],
  [356, 250],
  [232, 270],
  [468, 208],
  [348, 306],
  [548, 286],
  [286, 548],
  [512, 620],
  [424, 644],
  [248, 690],
  [518, 766],
  [400, 808],
  [560, 848],
  [136, 652],
  [286, 692],
  [410, 642],
  [1458, 92],
  [1170, 160],
  [1262, 200],
  [1244, 250],
  [1368, 270],
  [1132, 208],
  [1252, 306],
  [1052, 286],
  [1314, 548],
  [1088, 620],
  [1176, 644],
  [1352, 690],
  [1082, 766],
  [1200, 808],
  [1040, 848],
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
          {traces.map((trace, index) => (
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
