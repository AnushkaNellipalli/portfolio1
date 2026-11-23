import { useEffect, useRef, useState } from 'react'
import { FaLinkedin, FaGithub, FaHtml5, FaCss3Alt, FaReact, FaPython, FaGitAlt, FaDatabase, FaKey, FaPlug, FaGraduationCap, FaCode, FaBars, FaTimes } from 'react-icons/fa'
import { SiLeetcode, SiJavascript, SiDjango } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { config as c } from './config.js'

const NAV = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Coding', 'Contact']
const SOCIALS = [
  { k: 'LinkedIn', I: FaLinkedin, href: c.social.linkedin },
  { k: 'GitHub', I: FaGithub, href: c.social.github },
  { k: 'LeetCode', I: SiLeetcode, href: c.social.leetcode },
  { k: 'Email', I: MdEmail, href: `mailto:${c.email}` },
]
const SKILLS = [
  ['Frontend', [['HTML5', FaHtml5], ['CSS3', FaCss3Alt], ['JavaScript', SiJavascript], ['React', FaReact]]],
  ['Backend', [['Python', FaPython], ['Django', SiDjango]]],
  ['Database', [['SQL', FaDatabase]]],
  ['API & Security', [['REST APIs', FaPlug], ['API Integration', FaPlug], ['Authentication', FaKey], ['Authorization', FaKey], ['Token-Based Auth', FaKey]]],
  ['Tools', [['Git', FaGitAlt], ['GitHub', FaGithub], ['VS Code', FaCode]]],
]

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return el?.classList.add('in')
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (el.classList.add('in'), io.disconnect()), { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

function Section({ id, title, sub, children }) {
  const ref = useReveal()
  return (
    <section id={id} className="section">
      <div ref={ref} className="wrap reveal">
        <h2>{title}</h2>
        {sub && <p className="sub">{sub}</p>}
        {children}
      </div>
    </section>
  )
}

function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 24)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`nav ${solid ? 'solid' : ''}`}>
      <div className="wrap navin">
        <a href="#home" className="logo">{c.name.split(' ')[0]}<span>.dev</span></a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <FaTimes /> : <FaBars />}</button>
        <nav className={open ? 'open' : ''} aria-label="Primary">
          {NAV.map(n => <a key={n} href={`#${n.toLowerCase()}`} className={active === n.toLowerCase() ? 'on' : ''} onClick={() => setOpen(false)}>{n === 'Coding' ? 'Coding Profiles' : n}</a>)}
        </nav>
      </div>
    </header>
  )
}

function Socials() {
  return <div className="socials">{SOCIALS.map(({ k, I, href }) => <a key={k} href={href} target={k === 'Email' ? undefined : '_blank'} rel="noreferrer noopener" aria-label={k} title={k}><I /></a>)}</div>
}

function Typing() {
  const [i, setI] = useState(0), [n, setN] = useState(0), [del, setDel] = useState(false)
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  useEffect(() => {
    if (reduce) { const t = setInterval(() => setI(x => (x + 1) % c.roles.length), 2200); return () => clearInterval(t) }
    const w = c.roles[i]
    const t = setTimeout(() => {
      if (!del && n < w.length) setN(n + 1)
      else if (!del) setDel(true)
      else if (n > 0) setN(n - 1)
      else { setDel(false); setI((i + 1) % c.roles.length) }
    }, !del && n === w.length ? 1200 : del ? 35 : 70)
    return () => clearTimeout(t)
  }, [n, del, i, reduce])
  return <span className="typing" aria-live="off">{reduce ? c.roles[i] : c.roles[i].slice(0, n)}<i className="caret" /></span>
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap herogrid">
        <div className="heroin">
          <p className="hello">Hello, I'm</p>
          <h1>{c.name}</h1>
          <h2 className="role">{c.title}</h2>
          <p className="typeline"><Typing /></p>
          <p className="lead">I'm a third-year B.Tech ECE student passionate about building modern web applications, creating interactive user experiences, and developing practical solutions using full-stack technologies.</p>
          <div className="cta"><a className="btn primary" href="#projects">Explore My Projects</a><a className="btn ghost" href="#contact">Contact Me</a></div>
          <Socials />
        </div>
        <div className="editor" aria-hidden="true">
          <div className="bar"><b /><b /><b /><span>developer.py</span></div>
<pre>{`class Developer:
    name = "${c.name}"
    stack = ["React", "Django", "SQL"]

    def build(self):
        return "apps people can use"

me = Developer()
me.build()`}</pre>
          <span className="float f1"><FaReact /></span><span className="float f2"><FaPython /></span><span className="float f3"><SiDjango /></span><span className="float f4"><SiJavascript /></span>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" title="About Me">
      <div className="aboutgrid">
        <div className="photo">{c.profilePhoto ? <img src={c.profilePhoto} alt={`Portrait of ${c.name}`} loading="lazy" /> : <span>Add your photo<br /><small>set profilePhoto in config.js</small></span>}</div>
        <div className="prose">
          <p>I'm Anushka Nellipalli, a third-year B.Tech Electronics and Communication Engineering student at JNTU College of Engineering, Kalikiri. I'm passionate about full-stack web development and enjoy building responsive, interactive, and practical web applications.</p>
          <p>I have knowledge of HTML, CSS, JavaScript, React, Python, Django, SQL, REST APIs, and authentication. I have also developed and deployed projects such as an E-Commerce application and a Job Portal.</p>
          <p>I continuously explore new technologies, improve my programming skills, and work towards becoming a skilled software developer.</p>
          <p className="goal"><strong>Looking for:</strong> software development internships where I can apply my technical knowledge, improve my development skills, and contribute to real-world projects.</p>
        </div>
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" title="My Technical Arsenal">
      <div className="skillgrid">
        {SKILLS.map(([cat, items]) => (
          <div className="glass skillcat" key={cat}>
            <h3>{cat}</h3>
            <ul>{items.map(([n, I]) => <li key={n}><I aria-hidden="true" />{n}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Education() {
  const e = c.education
  return (
    <Section id="education" title="My Education">
      <div className="timeline">
        <div className="dot"><FaGraduationCap /></div>
        <div className="glass edu">
          <h3>{e.degree}</h3>
          <p>{e.branch}</p><p>{e.college}</p>
          <span className="badge">{e.status}</span>
        </div>
      </div>
    </Section>
  )
}

function Project({ p }) {
  return (
    <article className="glass project">
      <div className="shot">{p.screenshot ? <img src={p.screenshot} alt={`${p.title} screenshot`} loading="lazy" /> : <div className="ph"><FaReact /><span>Screenshot placeholder</span></div>}</div>
      <div className="pbody">
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="tags">{p.tech.map(t => <span key={t} className="badge">{t}</span>)}</div>
        <ul className="feat">{p.features.map(f => <li key={f}>{f}</li>)}</ul>
        <div className="cta">
          <a className="btn primary" href={p.live} target="_blank" rel="noreferrer noopener">Live Demo</a>
          {p.github ? <a className="btn ghost" href={p.github} target="_blank" rel="noreferrer noopener"><FaGithub /> GitHub</a> : <span className="btn ghost off" aria-disabled="true">GitHub: coming soon</span>}
        </div>
        {p.liveNote && <p className="note">{p.liveNote}</p>}
      </div>
    </article>
  )
}

function Projects() {
  return (
    <Section id="projects" title="My Featured Projects" sub="Here are some of the applications I've built using modern web technologies.">
      <div className="projects">{c.projects.map(p => <Project key={p.title} p={p} />)}</div>
    </Section>
  )
}

function Coding() {
  const l = c.leetcode
  return (
    <Section id="coding" title="Coding & Development">
      <div className="codegrid">
        <div className="glass codecard">
          <FaGithub className="big" /><h3>GitHub</h3>
          <p>My repositories and development activity live here.</p>
          <a className="btn ghost" href={c.social.github} target="_blank" rel="noreferrer noopener">Explore GitHub</a>
        </div>
        <div className="glass codecard">
          <SiLeetcode className="big" /><h3>LeetCode</h3>
          <p>I regularly practice programming problems to improve my logical thinking, coding abilities, and problem-solving skills.</p>
          <dl className="stats">
            <div><dt>Solved</dt><dd>{l.total}</dd></div><div><dt>Easy</dt><dd>{l.easy}</dd></div>
            <div><dt>Medium</dt><dd>{l.medium}</dd></div><div><dt>Hard</dt><dd>{l.hard}</dd></div>
          </dl>
          <small>As of {l.asOf}</small>
          <a className="btn primary" href={c.social.leetcode} target="_blank" rel="noreferrer noopener">View LeetCode Profile</a>
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' })
  const [err, setErr] = useState({}), [done, setDone] = useState(false)
  const on = k => e => setF({ ...f, [k]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const x = {}
    if (!f.name.trim()) x.name = 'Enter your full name.'
    if (!f.email.trim()) x.email = 'Enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) x.email = 'Enter a valid email address, like name@example.com.'
    if (!f.subject.trim()) x.subject = 'Enter a subject.'
    if (f.message.trim().length < 10) x.message = 'Write a message of at least 10 characters.'
    setErr(x); setDone(false)
    if (Object.keys(x).length) return
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${c.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
    setDone(true)
  }
  const F = ({ k, label, type = 'text', area }) => (
    <label key={k}>{label}
      {area ? <textarea rows="5" value={f[k]} onChange={on(k)} aria-invalid={!!err[k]} /> : <input type={type} value={f[k]} onChange={on(k)} aria-invalid={!!err[k]} />}
      {err[k] && <span className="err" role="alert">{err[k]}</span>}
    </label>
  )
  return (
    <Section id="contact" title="Let's Connect" sub="I'm interested in internship opportunities, collaborative projects, and connecting with developers. Feel free to reach out!">
      <div className="contactgrid">
        <div className="glass links">
          <a href={`mailto:${c.email}`}><MdEmail />{c.email}</a>
          <a href={c.social.linkedin} target="_blank" rel="noreferrer noopener"><FaLinkedin />LinkedIn profile</a>
          <a href={c.social.github} target="_blank" rel="noreferrer noopener"><FaGithub />GitHub profile</a>
        </div>
        <form className="glass form" onSubmit={submit} noValidate>
          {F({ k: 'name', label: 'Full Name' })}{F({ k: 'email', label: 'Email Address', type: 'email' })}{F({ k: 'subject', label: 'Subject' })}{F({ k: 'message', label: 'Message', area: true })}
          <button className="btn primary" type="submit">Send Message</button>
          {done && <p className="ok" role="status">Your email app should open with the message ready to send. If it doesn't, write to {c.email} directly.</p>}
        </form>
      </div>
    </Section>
  )
}

export default function App() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    NAV.forEach(n => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <>
      <Navbar active={active} />
      <main><Hero /><About /><Skills /><Education /><Projects /><Coding /><Contact /></main>
      <footer className="footer"><div className="wrap">
        <h3>{c.name}</h3><p>{c.title}</p>
        <nav aria-label="Footer">{NAV.map(n => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav>
        <Socials />
        <p className="small">Designed and developed with passion for technology and creativity.</p>
        <p className="small">© {new Date().getFullYear()} {c.name}. All rights reserved.</p>
      </div></footer>
    </>
  )
}
