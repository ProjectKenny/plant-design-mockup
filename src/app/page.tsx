import React from 'react';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section with Search Bar */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Discover Your Perfect Plants</h1>
          <p>Find the right plants for your space and lifestyle</p>
          
          <div className={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Search for plants, tools, or gardening tips..." 
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* 2-column with gardener and tools */}
      <section className={styles.featuredSection}>
        <div className={styles.columnContainer}>
          <div className={styles.column}>
            <div className={styles.gardenerCard}>
              <div className={styles.gardenerImage}></div>
              <h2>Expert Gardening Advice</h2>
              <p>Our experienced gardeners provide personalized plant care tips and solutions for your garden needs.</p>
              <button className={styles.primaryButton}>Consult an Expert</button>
            </div>
          </div>
          
          <div className={styles.column}>
            <div className={styles.toolsCard}>
              <div className={styles.toolsImage}></div>
              <h2>Premium Gardening Tools</h2>
              <p>Explore our collection of high-quality gardening tools designed for both beginners and professionals.</p>
              <button className={styles.primaryButton}>Shop Tools</button>
            </div>
          </div>
        </div>
      </section>

      {/* "Also seen on" section */}
      <section className={styles.seenOnSection}>
        <h3>As Seen On</h3>
        <div className={styles.logoContainer}>
          <div className={styles.logoItem}>Garden Today</div>
          <div className={styles.logoItem}>Plant Life</div>
          <div className={styles.logoItem}>Home & Garden</div>
          <div className={styles.logoItem}>Green Thumb Weekly</div>
        </div>
      </section>

      {/* 4 Bubbly icons with information */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <div className={styles.infoItem}>
            <div className={styles.bubbleIcon}>🌱</div>
            <h3>10,000+ Plants</h3>
            <p>Extensive collection of indoor and outdoor plants for every space</p>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.bubbleIcon}>🚚</div>
            <h3>Fast Delivery</h3>
            <p>Plants delivered to your doorstep within 3-5 business days</p>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.bubbleIcon}>💧</div>
            <h3>Care Guides</h3>
            <p>Detailed care instructions for each plant in our collection</p>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.bubbleIcon}>♻️</div>
            <h3>Eco-Friendly</h3>
            <p>Sustainable packaging and environmentally conscious practices</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Added as a necessity */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContainer}>
          <h2>Join Our Plant Community</h2>
          <p>Subscribe to receive gardening tips, exclusive offers, and plant care reminders</p>
          <div className={styles.subscribeForm}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className={styles.emailInput}
            />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>
      </section>

      {/* 3-column footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <h3>Shop</h3>
            <ul>
              <li><a href="/">Indoor Plants</a></li>
              <li><a href="/">Outdoor Plants</a></li>
              <li><a href="/">Plant Care Products</a></li>
              <li><a href="/">Gardening Tools</a></li>
              <li><a href="/">Plant Pots & Planters</a></li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h3>Learn</h3>
            <ul>
              <li><a href="/">Plant Care Guides</a></li>
              <li><a href="/">Gardening Blog</a></li>
              <li><a href="/">Workshops & Events</a></li>
              <li><a href="/">Plant Encyclopedia</a></li>
              <li><a href="/">Plant Doctor Q&A</a></li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h3>About Us</h3>
            <ul>
              <li><a href="/about">Our Story</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/sustainability">Sustainability Commitment</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>© 2025 PlantLife. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}