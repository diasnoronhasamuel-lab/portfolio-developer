import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Check,
  Code2,
  Layers3,
  Menu,
  MessageCircle,
  Server,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { fallbackProjects } from './data/projects.js'
import { AboutIllustration } from './Ilustracao.jsx'
import './App.css'
import './extras.css'

const whatsappUrl = 'https://wa.me/5521982909408'
const githubUrl = 'https://github.com/diasnoronhasamuel-lab'
const apiUrl = (import.meta.env.VITE_API_URL || 'http://localhost:3001').replace(/\/+$/, '')

const projectImages = import.meta.glob('./assets/projetos/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
const projectImage = (name) => {
  const key = Object.keys(projectImages).find((path) => path.includes(name))
  return key ? projectImages[key] : null
}

const technologyGroups = [
  {
    number: '01',
    title: 'Front-end',
    description: 'Tecnologias usadas para criar interfaces web.',
    icon: Layers3,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Back-end e dados',
    description: 'Serviços, persistência e integrações.',
    icon: Server,
    technologies: ['Node.js', 'Express', 'SQLite', 'APIs REST'],
  },
  {
    number: '03',
    title: 'Ferramentas',
    description: 'Ferramentas usadas no desenvolvimento e publicação.',
    icon: Workflow,
    technologies: ['Git', 'GitHub', 'Vite', 'VS Code', 'Render'],
  },
  {
    number: '04',
    title: 'Em aprendizado',
    description: 'Tecnologias e práticas em estudo.',
    icon: Workflow,
    technologies: ['TypeScript', 'PostgreSQL', 'Testes automatizados'],
  },
]

const riseIn = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegação principal">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Samuel Dias Noronha, início">
          <span className="brand-mark">SN</span>
          <span className="brand-name">Samuel Noronha<span>.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#tecnologias" onClick={closeMenu}>Tecnologias</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a className="nav-contact" href="#contato" onClick={closeMenu}>
            Vamos conversar <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-wrap" id="inicio">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
        }}
      >
        <motion.div className="availability" variants={riseIn}>
          <span className="availability-dot" />
          Desenvolvedor web no Rio de Janeiro
        </motion.div>
        <motion.p className="hero-kicker" variants={riseIn}>
          Desenvolvedor web <span>·</span> React & Node.js
        </motion.p>
        <motion.h1 variants={riseIn}>
          Construindo aplicações web <span>úteis,</span> bem pensadas e acessíveis.
        </motion.h1>
        <motion.p className="hero-description" variants={riseIn}>
          Sou Samuel Dias Noronha, desenvolvedor web no Rio de Janeiro. Crio experiências digitais e aplicações conectadas a serviços e dados.
        </motion.p>
        <motion.div className="hero-actions" variants={riseIn}>
          <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={17} />
            Agendar conversa
            <ArrowUpRight size={16} />
          </a>
          <a className="button button-secondary" href={githubUrl} target="_blank" rel="noreferrer">
            <Code2 size={17} />
            Explorar GitHub
          </a>
        </motion.div>
        <motion.div className="hero-location" variants={riseIn}>
          <span className="location-pin" aria-hidden="true" />
          Rio de Janeiro, Brasil
          <span className="location-divider" />
          Projetos web e aplicações full stack
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-art"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        aria-label="Ilustração abstrata de uma janela de código"
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="art-caption"><span>DESENVOLVIMENTO WEB</span><span>01 / 03</span></div>
        <div className="architecture-card">
          <div className="architecture-top">
            <span className="window-dots"><i /><i /><i /></span>
            <span className="architecture-label">CÓDIGO</span>
            <Code2 size={16} />
          </div>
          <div className="architecture-body">
            <div className="code-line line-muted"><span>01</span><i className="line-long" /></div>
            <div className="code-line"><span>02</span><i className="line-mid violet" /></div>
            <div className="code-line"><span>03</span><i className="line-long blue" /></div>
            <div className="code-line"><span>04</span><i className="line-short green" /></div>
            <div className="code-line"><span>05</span><i className="line-mid" /></div>
            <div className="code-line"><span>06</span><i className="line-long violet" /></div>
            <div className="code-line"><span>07</span><i className="line-short blue" /></div>
            <div className="code-cursor" />
          </div>
          <div className="architecture-footer"><span><span className="live-dot" /> PORTFÓLIO REACT + NODE</span><span>REACT · EXPRESS · SQLITE</span></div>
        </div>
        <div className="float-chip chip-react"><span className="chip-symbol">◉</span> React ecosystem</div>
        <div className="float-chip chip-node"><span className="chip-symbol">⌘</span> Node.js · API</div>
        <div className="art-index"><span>RJ</span><span>RIO DE JANEIRO</span></div>
      </motion.div>
      <a className="scroll-cue" href="#sobre" aria-label="Rolar para a seção Sobre">
        <ArrowDown size={15} />
      </a>
    </section>
  )
}

function About() {
  return (
    <section className="about section-wrap section-block" id="sobre">
      <div className="about-label">
        <span className="eyebrow">01 — SOBRE</span>
        <span className="about-marker"><span /> APRENDENDO NA PRÁTICA</span>
      </div>
      <div className="about-content">
        <h2>Código claro.<br /><span>Sites que funcionam.</span></h2>
        <p>
          Sou desenvolvedor web e aprendo construindo projetos reais. Gosto de entender o problema do cliente, escolher soluções simples e entregar sites que funcionam bem no celular e no computador.
        </p>
        <p>
          Este portfólio é uma aplicação full stack: front-end em React, back-end em Node.js e Express e banco de dados SQLite. Os projetos são servidos por uma API REST e as mensagens do formulário são salvas no banco.
        </p>
        <div className="principles">
          <div><Check size={15} /><span>Aplicações web responsivas</span></div>
          <div><Check size={15} /><span>Integração com APIs REST</span></div>
          <div><Check size={15} /><span>Aprendizado contínuo</span></div>
        </div>
        <div className="architecture-flow">
          <span className="eyebrow">ARQUITETURA</span>
          <div><span>React</span><ArrowRight size={15} /><span>API REST (Express)</span><ArrowRight size={15} /><span>SQLite</span></div>
        </div>
        <AboutIllustration />
      </div>
    </section>
  )
}

function TechnologyCard({ group, index }) {
  const Icon = group.icon

  return (
    <motion.article
      className="tech-card"
      variants={riseIn}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
    >
      <div className="tech-card-top">
        <span className="tech-number">{group.number}</span>
        <span className="tech-icon"><Icon size={18} /></span>
      </div>
      <h3>{group.title}</h3>
      <p>{group.description}</p>
      <div className="tech-tags">
        {group.technologies.map((technology) => (
          <span className="tech-tag" key={technology}>{technology}</span>
        ))}
      </div>
    </motion.article>
  )
}

function Technologies() {
  return (
    <section className="section-wrap section-block technologies" id="tecnologias">
      <SectionHeading
        eyebrow="02 — CAIXA DE FERRAMENTAS"
        title={<>Tecnologia com <span>propósito.</span></>}
        description="As tecnologias que uso hoje e as que estou estudando para evoluir."
      />
      <motion.div
        className="tech-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {technologyGroups.map((group, index) => (
          <TechnologyCard group={group} index={index} key={group.number} />
        ))}
      </motion.div>
    </section>
  )
}

function ProjectVisual({ project }) {
  const isPatricia = project.title.toLowerCase().includes('patrícia')
  const isViaCep = project.title.toLowerCase().includes('viacep')
  const projectStyle = isPatricia ? 'patricia' : isViaCep ? 'viacep' : 'barberia'

  const imageName = isPatricia ? 'patricia' : isViaCep ? 'viacep' : 'barbearia'
  const image = projectImage(imageName)
  if (image) {
    return (
      <div className="project-visual project-visual-image">
        <img src={image} alt={`Captura do projeto ${project.title}`} loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`project-visual project-visual-${projectStyle}`} aria-hidden="true">
      <div className="browser-frame">
        <div className="browser-bar">
          <span className="window-dots"><i /><i /><i /></span>
          <span className="browser-address">{project.live_url ? project.live_url.replace(/^https?:\/\//, '').split('/')[0] : 'consulta de CEP'}</span>
          <ArrowUpRight size={13} />
        </div>
        {isPatricia ? (
          <div className="patricia-preview">
            <div className="preview-nav"><span>PH<span className="preview-accent">.</span></span><i /><i /><i /></div>
            <div className="preview-hero">
              <span>PORTFÓLIO PROFISSIONAL</span>
              <strong>Patrícia<br /><em>Henriques.</em></strong>
              <i className="preview-cta">CONHEÇA O TRABALHO <ArrowRight size={10} /></i>
              <div className="preview-flower">✳</div>
            </div>
          </div>
        ) : isViaCep ? (
          <div className="barber-preview">
            <div className="barber-dashboard">
              <div className="barber-greeting"><span>CONSULTA DE ENDEREÇO</span><strong>Consultar CEP</strong></div>
              <div className="barber-stats"><i /></div>
              <div className="barber-calendar"><span>RESULTADO</span><i /><i /></div>
            </div>
          </div>
        ) : (
          <div className="barber-preview">
            <div className="barber-dashboard">
              <div className="barber-greeting"><span>BARBEARIA DOS CRIA · MANGUEIRA, RJ</span><strong>Agendamento online</strong></div>
              <div className="barber-stats"><i /><i /><i /></div>
              <div className="barber-calendar"><span>ESCOLHA UM HORÁRIO</span><i /><i /><i /></div>
            </div>
          </div>
        )}
      </div>
      <span className="visual-orb" />
    </div>
  )
}

function ProjectCard({ project, index }) {
  const Icon = [Server, Sparkles, Blocks][index] || Code2

  return (
    <motion.article
      className={`project-card project-card-${index + 1}`}
      variants={riseIn}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
    >
      <ProjectVisual project={project} />
      <div className="project-content">
        <div className="project-meta"><span>PROJETO WEB</span><span>CASE {String(project.position).padStart(2, '0')}</span></div>
        <div className="project-title-row">
          <div><span className="project-client">{project.position === 1 ? 'Mangueira, RJ' : project.position === 2 ? 'Portfólio sob encomenda' : 'Consulta de endereço'}</span><h3>{project.title}</h3></div>
          <span className="project-icon"><Icon size={18} /></span>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-stack">
          {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        {project.live_url ? (
          <a className="project-link" href={project.live_url} target="_blank" rel="noreferrer">
            Explorar projeto <ArrowUpRight size={16} />
          </a>
        ) : <span className="project-link project-link-disabled">Sem link disponível no momento</span>}
        {project.repo_url && <a className="project-link" href={project.repo_url} target="_blank" rel="noreferrer">Ver repositório <ArrowUpRight size={16} /></a>}
      </div>
    </motion.article>
  )
}

function Projects({ projects, loading, apiError }) {
  return (
    <section className="section-wrap section-block projects" id="projetos">
      <div className="projects-heading">
        <SectionHeading
          eyebrow="03 — TRABALHOS SELECIONADOS"
          title={<>Projetos que <span>entregam.</span></>}
          description="Projetos reais que construí, de sites para negócios locais a aplicações com API e banco de dados."
        />
        <a className="all-projects-link" href={githubUrl} target="_blank" rel="noreferrer">
          Ver GitHub <ArrowUpRight size={15} />
        </a>
      </div>
      <motion.div
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {loading && <p className="projects-status">Carregando projetos...</p>}
        {apiError && <p className="projects-status">A API está indisponível; exibindo os projetos salvos localmente.</p>}
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.id || project.position} />
        ))}
      </motion.div>
    </section>
  )
}

function Contact() {
  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState({ message: '', error: false })

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10 || message.length > 1000) {
      setFeedback({ message: 'Informe nome, e-mail válido e mensagem entre 10 e 1000 caracteres.', error: true })
      return
    }

    setSending(true)
    setFeedback({ message: '', error: false })
    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Não foi possível enviar a mensagem.')
      form.reset()
      setFeedback({ message: result.message || 'Mensagem enviada com sucesso.', error: false })
    } catch (error) {
      setFeedback({ message: error.message || 'Não foi possível enviar a mensagem. Tente novamente.', error: true })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section-wrap contact-section" id="contato">
      <div className="contact-glow" />
      <span className="eyebrow">04 — PRÓXIMO PASSO</span>
      <h2>Vamos construir algo<br /><span>que faça diferença?</span></h2>
      <p>Preencha o formulário para entrar em contato. Você também pode falar comigo pelo WhatsApp ou GitHub.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Nome<input name="name" autoComplete="name" required maxLength={100} /></label>
        <label>E-mail<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
        <label>Mensagem<textarea name="message" required minLength={10} maxLength={1000} /></label>
        <button className="button button-primary" type="submit" disabled={sending}>
          {sending ? 'Enviando...' : 'Enviar mensagem'} <ArrowUpRight size={16} />
        </button>
        <p className={`form-feedback${feedback.error ? ' form-feedback-error' : ''}`} role="status">{feedback.message}</p>
      </form>
      <a className="button button-primary contact-button" href={whatsappUrl} target="_blank" rel="noreferrer">
        <MessageCircle size={17} /> Falar no WhatsApp <ArrowUpRight size={16} />
      </a>
      <a className="contact-github" href={githubUrl} target="_blank" rel="noreferrer">
        <Code2 size={15} /> github.com/diasnoronhasamuel-lab <ArrowUpRight size={13} />
      </a>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer section-wrap">
      <a className="brand footer-brand" href="#inicio">
        <span className="brand-mark">SN</span>
        <span className="brand-name">Samuel Noronha<span>.</span></span>
      </a>
      <span className="footer-copy">© {new Date().getFullYear()} Samuel Dias Noronha. Feito com intenção.</span>
      <a className="back-to-top" href="#inicio">Voltar ao topo <ArrowDownRight size={14} /></a>
    </footer>
  )
}

function PortfolioPage() {
  const [projects, setProjects] = useState(fallbackProjects)
  const [loading, setLoading] = useState(true)
  const [apiError, setApiError] = useState(false)

  useEffect(() => {
    let active = true
    fetch(`${apiUrl}/api/projects`)
      .then((response) => {
        if (!response.ok) throw new Error('A API não respondeu corretamente.')
        return response.json()
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error('Resposta de projetos inválida.')
        if (active) setProjects(data)
      })
      .catch(() => {
        if (active) {
          setProjects(fallbackProjects)
          setApiError(true)
        }
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => { active = false }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Technologies />
        <div className="section-divider" />
        <Projects projects={projects} loading={loading} apiError={apiError} />
        <Contact />
      </main>
      <Footer />
      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Samuel pelo WhatsApp"
      >
        <MessageCircle size={21} />
      </a>
    </>
  )
}

function AdminPage() {
  const [password, setPassword] = useState('')
  const [messages, setMessages] = useState([])
  const [authorized, setAuthorized] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function loadMessages(event) {
    event.preventDefault()
    setLoading(true)
    setError('')
    setMessages([])
    setAuthorized(false)
    try {
      const response = await fetch(`${apiUrl}/api/admin/messages`, {
        headers: { Authorization: `Bearer ${password}` },
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Não foi possível carregar as mensagens.')
      setMessages(data)
      setAuthorized(true)
    } catch (requestError) {
      setError(requestError.message || 'Não foi possível carregar as mensagens.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="admin-page section-wrap">
      <a className="all-projects-link" href="/">← Voltar ao portfólio</a>
      <span className="eyebrow">ÁREA RESTRITA</span>
      <h1>Mensagens recebidas</h1>
      <p className="admin-intro">Digite a senha configurada no servidor para consultar as mensagens.</p>
      <form className="admin-form" onSubmit={loadMessages}>
        <label>Senha de administrador
          <input type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </label>
        <button className="button button-primary" type="submit" disabled={loading}>{loading ? 'Verificando...' : 'Acessar mensagens'}</button>
      </form>
      {error && <p className="form-feedback form-feedback-error" role="alert">{error}</p>}
      {authorized && (messages.length ? (
        <div className="messages-list">
          {messages.map((message) => (
            <article className="message-card" key={message.id}>
              <h2>{message.name}</h2>
              <a href={`mailto:${message.email}`}>{message.email}</a>
              <p>{message.message}</p>
              <time>{new Date(message.created_at).toLocaleString('pt-BR')}</time>
            </article>
          ))}
        </div>
      ) : <p className="admin-empty">Nenhuma mensagem recebida ainda.</p>)}
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App