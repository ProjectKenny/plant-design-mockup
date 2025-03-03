import React from 'react';
import styles from './about.module.css';

export default function AboutUs() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About PlantLife</h1>
          <p>Our journey, mission, and the team behind your favorite plant destination</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2>Our Story</h2>
              <p>
                PlantLife began in 2018 with a simple mission: to make the joy of plants accessible to everyone.
                What started as a small passion project by two friends with a shared love for plants has grown
                into a community of plant enthusiasts and gardening experts dedicated to helping people create
                their own green spaces.
              </p>
              <p>
                Over the years, we've expanded from a small collection of indoor plants to a comprehensive
                resource for all things plant-related, from gardening tools to expert advice and everything in between.
              </p>
            </div>
            <div className={styles.storyImage}></div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionBox}>
            <h2>Our Mission</h2>
            <p>
              We believe that everyone deserves to experience the joy and benefits of living with plants.
              Our mission is to inspire, educate, and equip people with the knowledge and tools they need
              to create and maintain beautiful, thriving green spaces, regardless of their experience level
              or living situation.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2>Meet Our Team</h2>
          <div className={styles.teamGrid}>
            {/* Team Member 1 */}
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}></div>
              <h3>Emma Johnson</h3>
              <p className={styles.memberTitle}>Co-Founder & Plant Expert</p>
              <p>
                With a degree in Botany and over 10 years of experience in plant cultivation,
                Emma leads our plant curation and care guide development.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}></div>
              <h3>Michael Chen</h3>
              <p className={styles.memberTitle}>Co-Founder & Operations Director</p>
              <p>
                Michael brings his background in sustainable business practices to ensure
                that PlantLife operates with environmental responsibility at its core.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}></div>
              <h3>Sarah Rodriguez</h3>
              <p className={styles.memberTitle}>Head of Customer Experience</p>
              <p>
                Sarah ensures that every interaction with PlantLife is helpful, informative,
                and inspiring, from browsing our website to receiving your plants.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}></div>
              <h3>David Kim</h3>
              <p className={styles.memberTitle}>Lead Horticulturist</p>
              <p>
                David oversees our plant nursery and develops innovative growing techniques
                to ensure the health and vitality of every plant we send to your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌱</div>
              <h3>Sustainability</h3>
              <p>
                We prioritize environmentally responsible practices in everything we do,
                from our packaging to our plant cultivation methods.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💚</div>
              <h3>Accessibility</h3>
              <p>
                We believe that plants should be for everyone, regardless of experience
                level, living situation, or budget.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🔍</div>
              <h3>Education</h3>
              <p>
                We're committed to sharing our knowledge and empowering our community
                with the information they need to succeed with plants.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Community</h3>
              <p>
                We foster connections between plant enthusiasts and create spaces
                for sharing experiences, tips, and the joy of growing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Join Our Plant Community</h2>
            <p>
              Whether you're a seasoned plant parent or just getting started, we'd love to have you
              as part of our growing community of plant enthusiasts.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/shop" className={styles.primaryButton}>
                Explore Our Plants
              </a>
              <a href="/contact" className={styles.secondaryButton}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}