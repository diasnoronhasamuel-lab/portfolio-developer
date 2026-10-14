import Database from 'better-sqlite3'
import { mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const directory = dirname(fileURLToPath(import.meta.url))
const databasePath = join(directory, '..', 'portfolio.db')
mkdirSync(dirname(databasePath), { recursive: true })

export const db = new Database(databasePath)
db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')

db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    stack TEXT NOT NULL DEFAULT '[]',
    live_url TEXT,
    repo_url TEXT,
    position INTEGER NOT NULL UNIQUE,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`)

const seedProjects = [
  {
    title: 'Barbearia dos Cria (Mangueira, RJ)',
    description: 'Site full stack com front-end em HTML, CSS e JavaScript e back-end em Node.js/Express com SQLite; o formulário de agendamento é salvo via API REST.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'SQLite', 'API REST'],
    live_url: 'https://barbearia-do-cria-da-mangueira.onrender.com',
    repo_url: null,
    position: 1,
  },
  {
    title: 'Portfólio da Patrícia Henriques',
    description: 'Site de portfólio profissional feito sob encomenda.',
    stack: [],
    live_url: 'https://diasnoronhasamuel-lab.github.io/portfolio-patricia-henriques/',
    repo_url: 'https://github.com/diasnoronhasamuel-lab/portfolio-patricia-henriques',
    position: 2,
  },
  {
    title: 'ViaCEP / CRAS Nelson Mandela',
    description: 'Consulta de endereço por CEP com a API ViaCEP, feita com HTML, CSS e JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript', 'API ViaCEP'],
    live_url: null,
    repo_url: null,
    position: 3,
  },
]

if (db.prepare('SELECT COUNT(*) AS count FROM projects').get().count === 0) {
  const insertProject = db.prepare(`
    INSERT INTO projects (title, description, stack, live_url, repo_url, position)
    VALUES (@title, @description, @stack, @live_url, @repo_url, @position)
  `)
  const seed = db.transaction((projects) => {
    for (const project of projects) {
      insertProject.run({ ...project, stack: JSON.stringify(project.stack) })
    }
  })
  seed(seedProjects)
}
