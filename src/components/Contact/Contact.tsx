import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import styles from "./Contact.module.css";
import { profile, contact } from "../../data/resume";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <Reveal>
        <div className={styles.panel}>
          <h3 className={styles.heading}>{contact.heading}</h3>
          <p className={styles.blurb}>{contact.blurb}</p>

          <div className={styles.links}>
            <a className={styles.primary} href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className={styles.secondary} href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className={styles.secondary} href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {/* <a className={styles.secondary} href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Resume (PDF)
            </a> */}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
