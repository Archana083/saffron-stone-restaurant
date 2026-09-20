import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, Clock3, MapPin, Star, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FoodCard } from '../components/FoodCard';
import { SectionHeader } from '../components/SectionHeader';
import { categories, gallery, menuItems, type CategoryFilter } from '../data/restaurant';

export function HomePage() {
  const [category, setCategory] = useState<CategoryFilter>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll('.reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [category]);

  const filtered = category === 'All' ? menuItems : menuItems.filter((item) => item.category === category);

  return (
    <>
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content reveal">
          <p className="eyebrow">MODERN INDIAN DINING · MUMBAI</p>
          <h1>
            Where heritage
            <br />
            <em>meets fire.</em>
          </h1>
          <p className="hero-copy">
            A contemporary Indian table built around smoke, spice, seasonality and stories worth staying late for.
          </p>
          <div className="hero-actions">
            <Link className="primary" to="/reserve">
              Book your table <ArrowRight size={17} />
            </Link>
            <Link className="ghost" to="/menu">
              Explore the menu <ArrowDown size={17} />
            </Link>
          </div>
        </div>

        <div className="hero-bottom">
          <span>
            <MapPin size={15} /> Fort, Mumbai
          </span>
          <span>
            <Clock3 size={15} /> Tue–Sun · 12pm–11:30pm
          </span>
        </div>
      </section>

      <section className="intro reveal" id="story">
        <div className="section-kicker">01 — THE STORY</div>
        <div>
          <h2>
            Indian soul.
            <br />
            <em>New expression.</em>
          </h2>
          <p>
            We take familiar flavours and give them room to evolve. Ancient techniques meet modern fire, local produce
            meets a little mischief, and every plate is made to start a conversation.
          </p>
          <Link className="text-link" to="/story">
            Meet the team <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="menu-section reveal" id="menu">
        <SectionHeader
          eyebrow="02 — FROM THE KITCHEN"
          title={
            <>
              Signature <em>plates</em>
            </>
          }
          description="Small menu. Big personality. Made fresh every service."
        />

        <div className="filters">
          {categories.map((option) => (
            <button className={category === option ? 'active' : ''} key={option} onClick={() => setCategory(option)}>
              {option}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filtered.map((item, index) => (
            <FoodCard key={item.id} item={item} delay={index * 70} />
          ))}
        </div>
      </section>

      <section className="quote reveal">
        <div className="quote-mark">“</div>
        <blockquote>
          Some meals fill your stomach.
          <br />
          <em>The good ones stay with you.</em>
        </blockquote>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((item) => (
            <Star key={item} size={16} fill="currentColor" />
          ))}
          <span>4.9 · 800+ guests</span>
        </div>
      </section>

      <section className="gallery-section reveal" id="gallery">
        <SectionHeader
          eyebrow="03 — THE SPACE"
          title={
            <>
              A room made
              <br />
              <em>for lingering.</em>
            </>
          }
          description="Warm stone, low light, and a little theatre."
        />

        <div className="gallery-grid">
          {gallery.map((src, index) => (
            <button className={`gallery-item g${index + 1}`} key={src} onClick={() => setLightbox(index)}>
              <img src={src} alt={`Saffron and Stone interior ${index + 1}`} />
              <span>View</span>
            </button>
          ))}
        </div>
      </section>

      {lightbox !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} aria-label="Close">
            <X />
          </button>
          <img src={gallery[lightbox]} alt="Expanded restaurant view" onClick={(event) => event.stopPropagation()} />
          <button
            className="prev"
            onClick={(event) => {
              event.stopPropagation();
              setLightbox((lightbox - 1 + gallery.length) % gallery.length);
            }}
          >
            <ChevronLeft />
          </button>
          <button
            className="next"
            onClick={(event) => {
              event.stopPropagation();
              setLightbox((lightbox + 1) % gallery.length);
            }}
          >
            <ChevronRight />
          </button>
        </div>
      ) : null}
    </>
  );
}
