// Сверяет progress/README.md с фактами репозитория: есть ли решение и проходит ли автопроверка.
// «Принято» ставит человек после защиты, из файлов это не выводится, поэтому скрипт не генерирует
// таблицу, а ищет расхождения. Флаги: --check — код 1 при расхождении (CI); --session — для хука SessionStart.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const args = process.argv.slice(2);

// Файл, появление которого означает, что работа по заданию начата. Дополнять, когда у задания появится контракт пути.
const SOLUTIONS = {
  '0.1': 'learning/00-start.md',
  '0.2': 'exercises/solutions/00-workflow/debug.mjs',
  '0.3': 'learning/0.3.md',
  '1.1': 'exercises/solutions/01-javascript/1.1.mjs',
  '1.2': 'exercises/solutions/01-javascript/1.2.mjs',
  '1.3': 'exercises/solutions/01-javascript/1.3.mjs',
};
const STATUSES = ['Не начато', 'В работе', 'На проверке', 'Нужна доработка', 'Принято'];

const readme = readFileSync(root + 'progress/README.md', 'utf8');
const rows = [...readme.matchAll(/^\| (\d\.\d) \| ([^|]+?) \| ([^|]+?) \| (.*?) \|$/gm)]
  .map(([, id, title, status, evidence]) => ({ id, title, status, evidence }));

function grade(id) {
  const stage = readdirSync(root + 'exercises').find(dir => existsSync(`${root}exercises/${dir}/checks/${id}.test.mjs`));
  if (!stage) return null;
  const run = spawnSync(process.execPath, ['--test', `exercises/${stage}/checks/${id}.test.mjs`], { cwd: root, timeout: 60_000 });
  return run.status === 0;
}

const problems = [];
if (rows.length === 0) problems.push('в progress/README.md не найдены строки заданий вида «| 1.1 | … | … | … |»');
for (const id of Object.keys(SOLUTIONS)) {
  if (!rows.some(row => row.id === id)) problems.push(`${id}: нет строки в таблице прогресса`);
}

const lines = [];
for (const row of rows) {
  const file = SOLUTIONS[row.id];
  const hasSolution = Boolean(file && existsSync(root + file));
  const passed = hasSolution ? grade(row.id) : null;

  if (!STATUSES.includes(row.status)) problems.push(`${row.id}: неизвестное состояние «${row.status}», допустимы: ${STATUSES.join(', ')}`);
  if (hasSolution && row.status === 'Не начато') problems.push(`${row.id}: решение ${file} уже есть, а состояние «Не начато»`);
  if (row.status !== 'Не начато' && /^[—-]?$/.test(row.evidence)) problems.push(`${row.id}: состояние «${row.status}» без доказательства`);
  if (row.status === 'Принято' && passed === false) problems.push(`${row.id}: «Принято», но автопроверка падает`);

  if (row.status === 'Не начато' && !hasSolution) continue;
  const facts = [hasSolution ? 'решение есть' : 'решения нет'];
  if (passed !== null) facts.push(`автопроверка ${passed ? '✓' : '✗'}`);
  lines.push(`${row.id} ${row.title}: ${row.status} · ${facts.join(' · ')}`);
}

if (args.includes('--session')) {
  const resume = readme.match(/## Где продолжить\n([\s\S]*?)\n## /)?.[1].trim();
  console.log(`Fullstack Lab — состояние из progress/README.md\n\n${resume ?? '(блок «Где продолжить» не найден)'}\n`);
}
console.log(lines.length ? lines.join('\n') : 'Начатых заданий нет.');
console.log(`Не начато и без решения: ${rows.length - lines.length} из ${rows.length}.`);
if (problems.length) {
  console.log(`\nРасхождения прогресса с фактами:\n- ${problems.join('\n- ')}`);
  if (args.includes('--check')) process.exitCode = 1;
}
