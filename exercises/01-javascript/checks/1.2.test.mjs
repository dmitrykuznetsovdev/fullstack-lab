// Автопроверка наставника для 1.2. Регрессионные проверки ученица пишет сама.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';

const solution = new URL('../../solutions/01-javascript/1.2.mjs', import.meta.url);
const skip = !existsSync(solution) && 'решения ещё нет: exercises/solutions/01-javascript/1.2.mjs';
const { selectSessions } = skip ? {} : await import(solution);

const sessions = () => [
  { id: 'a', title: 'Рисование', freePlaces: 0 },
  { id: 'b', title: 'Шахматы', freePlaces: 2 },
  { id: 'c', title: 'Музыка', freePlaces: 3 },
];
const ids = list => list.map(session => session.id);

describe('1.2 selectSessions', { skip }, () => {
  it('файл экспортирует функцию selectSessions', () => {
    assert.equal(typeof selectSessions, 'function');
  });

  it('пример из условия: minPlaces = 2 → b, c', () => {
    assert.deepEqual(ids(selectSessions(sessions(), 2)), ['b', 'c']);
  });

  it('точная граница включается: minPlaces = 3 → c', () => {
    assert.deepEqual(ids(selectSessions(sessions(), 3)), ['c']);
  });

  it('результат в исходном порядке, без сортировки', () => {
    assert.deepEqual(ids(selectSessions(sessions(), 1)), ['b', 'c']);
  });

  it('не меняет порядок и содержимое входного массива', () => {
    const input = sessions();
    selectSessions(input, 1);
    assert.deepEqual(input, sessions());
  });
});
