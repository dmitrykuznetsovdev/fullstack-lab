import assert from "node:assert/strict";
import { getAvailableSessions } from "./1.1.mjs";

const sessions = [
  { id: "a", title: "Рисование", freePlaces: 0 },
  { id: "b", title: "Шахматы", freePlaces: 2 },
  { id: "c", title: "Музыка", freePlaces: 3 },
];
const available = getAvailableSessions(sessions, 2);

assert.deepStrictEqual(
  available,
  [sessions[1], sessions[2]]
);

console.log(available);
