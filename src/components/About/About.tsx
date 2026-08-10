import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import styles from "./About.module.css";
import { profile, education } from "../../data/resume";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Backend-first, full-stack capable">
      <div className={styles.grid}>
        <Reveal>
          <p className={styles.summary}>{profile.summary}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className={styles.factList}>
            <div className={styles.fact}>
              <span className={styles.factLabel}>Location</span>
              <span className={styles.factValue}>{profile.location}</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factLabel}>Focus</span>
              <span className={styles.factValue}>Laravel &amp; PHP backend systems</span>
            </div>
            {education.map((e) => (
              <div className={styles.fact} key={e.program}>
                <span className={styles.factLabel}>{e.period}</span>
                <span className={styles.factValue}>
                  {e.program} — {e.school}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
