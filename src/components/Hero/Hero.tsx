import styles from "./Hero.module.css";
import Tag from "../ui/Tag";
import Reveal from "../ui/Reveal";
import { profile } from "../../data/resume";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <Reveal>
          <span className={styles.eyebrow}>
            <span className={styles.dot} />
            Open to backend &amp; full-stack Laravel roles
          </span>
        </Reveal>

        <Reveal delay={60}>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.title}>
            <strong>{profile.title}</strong>
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className={styles.positioning}>{profile.positioning}</p>
        </Reveal>

        <Reveal delay={160}>
          <div className={styles.techRow}>
            {profile.heroTech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className={styles.ctaRow}>
            <a className={styles.primaryBtn} href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a className={styles.secondaryBtn} href="#projects">
              View Projects
            </a>
            <a className={styles.secondaryBtn} href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className={styles.secondaryBtn} href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className={styles.meta}>
            <span>📍 {profile.location}</span>
            <span>5+ years experience</span>
            <span>Remote-friendly</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
