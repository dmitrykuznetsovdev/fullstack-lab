// Автопроверка наставника для 1.3. Свои проверки и объяснение алгоритма ученица готовит сама.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';

const solution = new URL('../../solutions/01-javascript/1.3.mjs', import.meta.url);
const skip = !existsSync(solution) && 'решения ещё нет: exercises/solutions/01-javascript/1.3.mjs';
const { countActiveBookings } = skip ? {} : await import(solution);

const booking = (id, sessionId, status = 'active') => ({ id, sessionId, status });

// Результат — обычный объект; сравниваем собственные поля, чтобы допустить и {} и Object.create(null).
function assertCounts(bookings, expected) {
  const result = countActiveBookings(bookings);
  assert.equal(Object.prototype.toString.call(result), '[object Object]', 'результат должен быть объектом, не Map или массивом');
  assert.deepEqual({ ...result }, expected);
}

describe('1.3 countActiveBookings', { skip }, () => {
  it('файл экспортирует функцию countActiveBookings', () => {
    assert.equal(typeof countActiveBookings, 'function');
  });

  it('пример из условия → {a: 1, b: 1}', () => {
    assertCounts([booking('1', 'a'), booking('2', 'a', 'cancelled'), booking('3', 'b')], { a: 1, b: 1 });
  });

  it('пустой вход → пустой объект', () => {
    assertCounts([], {});
  });

  it('только отменённые записи → пустой объект', () => {
    assertCounts([booking('1', 'a', 'cancelled'), booking('2', 'b', 'cancelled')], {});
  });

  it('несколько записей одного занятия и несколько занятий', () => {
    assertCounts([booking('1', 'a'), booking('2', 'b'), booking('3', 'a'), booking('4', 'a')], { a: 3, b: 1 });
  });

  it('sessionId «constructor» считается как обычный id', () => {
    assertCounts([booking('1', 'constructor'), booking('2', 'constructor')], { constructor: 2 });
  });

  it('не изменяет входной массив и записи', () => {
    const input = [booking('1', 'a'), booking('2', 'a', 'cancelled')];
    countActiveBookings(input);
    assert.deepEqual(input, [booking('1', 'a'), booking('2', 'a', 'cancelled')]);
  });
});
