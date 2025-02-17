//named tuple
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph[0]); // 55.2
console.log(graph[1]); // 41.3

//destructing tuple
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;

console.log(x); // 55.2
console.log(y); // 41.3
