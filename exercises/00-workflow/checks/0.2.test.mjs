// Автопроверка наставника для 0.2: проверяет только вывод программ.
// Заметку, команды запуска и объяснение проверяет наставник на защите.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../../solutions/00-workflow/', import.meta.url));
const skip = !existsSync(dir + 'debug.mjs') && 'решения ещё нет: exercises/solutions/00-workflow/debug.mjs';
const run = file => execFileSync(process.execPath, [file], { cwd: dir, encoding: 'utf8', timeout: 5000 }).trim();

describe('0.2 Запустить и объяснить ошибку', { skip }, () => {
  it('hello.mjs выводит «Готов к первому заданию»', () => {
    assert.equal(run('hello.mjs'), 'Готов к первому заданию');
  });

  it('исправленный debug.mjs выводит 3', () => {
    assert.equal(run('debug.mjs'), '3');
  });
});
