import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";
import styles from "./Projects.module.css";
import { projects } from "../../data/resume";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Projects"
      subtitle="Real systems built end-to-end — from data modeling to production deployment."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {projects.map((project) => (
          <Reveal key={project.id}>
            <article className={styles.featured}>
              {project.featured && <span className={styles.badge}>★ Flagship Project</span>}

              <div className={styles.headRow}>
                <div>
                  <h3 className={styles.name}>{project.name}</h3>
                </div>
              </div>
              <p className={styles.subtitle}>{project.subtitle}</p>

              <div className={styles.techRow}>
                {project.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className={styles.pointsGrid}>
                {project.points.map((point, i) => (
                  <div className={styles.point} key={point}>
                    <span className={styles.pointIcon}>{String(i + 1).padStart(2, "0")}</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {project.linkNote && <div className={styles.linkNote}>// {project.linkNote}</div>}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
