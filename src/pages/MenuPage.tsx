import { useMemo, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FoodCard } from '../components/FoodCard';
import { categories, menuItems, type CategoryFilter } from '../data/restaurant';

export function MenuPage() {
  const [category, setCategory] = useState<CategoryFilter>('All');

  const filtered = useMemo(
    () => (category === 'All' ? menuItems : menuItems.filter((item) => item.category === category)),
    [category],
  );

  return (
    <div className="page-panel menu-page reveal">
      <section className="page-hero compact-page-hero">
        <p className="eyebrow">MENU</p>
        <h1>
          Crafted for <em>slow evenings</em>
        </h1>
      </section>

      <section className="feature-banner">
        <div>
          <span className="chip">Chef&apos;s selection</span>
          <h2>Seasonal tasting path</h2>
        </div>
        <p>
          A layered menu built around fire, spice, textural contrast, and a little theatricality—meant to unfold over
          the course of a memorable night.
        </p>
        <button className="primary small-button">
          Reserve tasting menu <ArrowRight size={15} />
        </button>
      </section>

      <section className="menu-filter-wrap">
        <div className="filters wide-filters">
          {categories.map((option) => (
            <button className={category === option ? 'active' : ''} key={option} onClick={() => setCategory(option)}>
              {option}
            </button>
          ))}
        </div>

        <div className="menu-grid expanded-menu-grid">
          {filtered.map((item, index) => (
            <FoodCard key={item.id} item={item} delay={index * 50} />
          ))}
        </div>
      </section>

      <section className="experience-grid reveal">
        <div className="experience-card accent-card">
          <Sparkles size={22} />
          <h3>Fire-led flavours</h3>
          <p>Char, smoke and open flame shape every savoury preparation.</p>
        </div>
        <div className="experience-card">
          <Sparkles size={22} />
          <h3>Local produce</h3>
          <p>Seasonal ingredients sourced with care and treated with restraint.</p>
        </div>
        <div className="experience-card">
          <Sparkles size={22} />
          <h3>Thoughtful pairing</h3>
          <p>Thoughtful spirits, fresh juices and warm spice-led accompaniments.</p>
        </div>
      </section>
    </div>
  );
}
