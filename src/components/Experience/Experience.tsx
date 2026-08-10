import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import styles from "./Experience.module.css";
import { experience } from "../../data/resume";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      subtitle="Backend-heavy roles building production Laravel systems, plus full-stack and API work across e-commerce and R&D."
    >
      <div className={styles.list}>
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 40}>
            <article className={styles.item}>
              <div className={styles.side}>
                <span className={styles.period}>{job.period}</span>
                <span className={styles.company}>{job.company}</span>
              </div>
              <div>
                <div className={styles.role}>{job.role}</div>
                <ul className={styles.points}>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
