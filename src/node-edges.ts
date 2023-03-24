import data from "./data.json";
const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export const initialNodes = data.map((item) => ({
  id: item.address,
  data: { label: item.address },
  position,
}));

console.log(initialNodes);

export const initialEdges = data.reduce((acc, item, idx) => {
  if (idx === 0) return acc;

  const upline = item.upline;
  const self = item.address;
  return [
    ...acc,
    {
      id: `${upline}-${self}`,
      source: upline,
      target: self,
      type: edgeType,
    },
  ];
}, [] as any[]);

// export const initialEdges = [
//   { id: "e12", source: "1", target: "2", type: edgeType, animated: true },
//   { id: "e13", source: "1", target: "3", type: edgeType, animated: true },
//   { id: "e22a", source: "2", target: "2a", type: edgeType, animated: true },
//   { id: "e22b", source: "2", target: "2b", type: edgeType, animated: true },
//   { id: "e22c", source: "2", target: "2c", type: edgeType, animated: true },
//   { id: "e2c2d", source: "2c", target: "2d", type: edgeType, animated: true },
//   { id: "e45", source: "4", target: "5", type: edgeType, animated: true },
//   { id: "e56", source: "5", target: "6", type: edgeType, animated: true },
//   { id: "e57", source: "5", target: "7", type: edgeType, animated: true },
// ];
