// Автопроверка наставника для 1.1. Это не образец решения и не замена своим проверкам:
// по условию ученица пишет собственные проверки на node:assert/strict.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { inspect } from 'node:util';

const solution = new URL('../../solutions/01-javascript/1.1.mjs', import.meta.url);
const skip = !existsSync(solution) && 'решения ещё нет: exercises/solutions/01-javascript/1.1.mjs';
const { getAvailableSessions } = skip ? {} : await import(solution);

const sessions = () => [
  { id: 'a', title: 'Рисование', freePlaces: 0 },
  { id: 'b', title: 'Шахматы', freePlaces: 2 },
  { id: 'c', title: 'Музыка', freePlaces: 3 },
];
const ids = list => list.map(session => session.id);

describe('1.1 getAvailableSessions', { skip }, () => {
  it('файл экспортирует функцию getAvailableSessions', () => {
    assert.equal(typeof getAvailableSessions, 'function');
  });

  it('пример из условия: minPlaces = 2 → b, c', () => {
    assert.deepEqual(ids(getAvailableSessions(sessions(), 2)), ['b', 'c']);
  });

  it('точная граница включается: minPlaces = 3 → c', () => {
    assert.deepEqual(ids(getAvailableSessions(sessions(), 3)), ['c']);
  });

  it('пустой массив → пустой результат', () => {
    assert.deepEqual(getAvailableSessions([], 1), []);
  });

  it('нет подходящих занятий → пустой массив', () => {
    assert.deepEqual(getAvailableSessions(sessions(), 4), []);
  });

  it('сохраняет исходный порядок', () => {
    const [a, b, c] = sessions();
    assert.deepEqual(ids(getAvailableSessions([c, a, b], 1)), ['c', 'b']);
  });

  it('не изменяет входной массив и занятия', () => {
    const input = sessions();
    getAvailableSessions(input, 1);
    assert.deepEqual(input, sessions());
  });

  for (const bad of [0, -1, 1.5, NaN, '2']) {
    it(`отклоняет minPlaces = ${inspect(bad)} через RangeError`, () => {
      assert.throws(() => getAvailableSessions(sessions(), bad), RangeError);
    });
  }
});
