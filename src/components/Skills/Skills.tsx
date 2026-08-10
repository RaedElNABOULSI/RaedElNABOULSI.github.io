import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";
import styles from "./Skills.module.css";
import { skillGroups } from "../../data/resume";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technology I build with"
      subtitle="Backend architecture and database design first, with the frontend and DevOps range to ship end-to-end."
    >
      <div className={styles.grid}>
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 60}>
            <div className={styles.card}>
              <div className={styles.cardLabel}>{group.label}</div>
              <div className={styles.tagWrap}>
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
