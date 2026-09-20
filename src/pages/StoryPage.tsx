import { Award, Flame, Leaf, Users } from 'lucide-react';

const milestones = [
  {
    year: '2018',
    title: 'A kitchen built on instinct',
    text: 'Saffron & Stone began as a shared love for slow cooking, generous tables and ingredients with a story.',
  },
  {
    year: '2020',
    title: 'The fire room evolves',
    text: 'We began building a menu around live fire, regional heritage and contemporary plating.',
  },
  {
    year: '2026',
    title: 'A beloved city ritual',
    text: 'Rooted in Mumbai, we now host intimate dinners, celebrations and late-night conversations alike.',
  },
];

export function StoryPage() {
  return (
    <div className="page-panel story-page reveal">
      <section className="page-hero compact-page-hero">
        <p className="eyebrow">OUR STORY</p>
        <h1>
          A house for <em>conversation</em>
        </h1>
      </section>

      <section className="story-grid">
        <div className="story-copy">
          <p>
            We created Saffron & Stone to honour the rituals of Indian dining while giving them a contemporary pulse.
            Our tables are warm, our cuisine expressive, and our corners made for lingering just a little longer.
          </p>
          <p>
            Every dish is built around balance: fragrant spice, depth of smoke, texture, and the comfort of ingredients
            that feel familiar, yet transformed.
          </p>
        </div>

        <div className="story-quote card-panel">
          <span>“</span>
          <p>Food should make room for memory. For laughter. For time well spent.</p>
        </div>
      </section>

      <section className="values-grid">
        <div className="value-card">
          <Flame size={22} />
          <h3>Cooked with fire</h3>
          <p>Charred edges, smoked notes and slow-gentle finishes define our flavour language.</p>
        </div>
        <div className="value-card">
          <Leaf size={22} />
          <h3>Seasonal and local</h3>
          <p>We celebrate produce in rhythm with the market, the weather and the city itself.</p>
        </div>
        <div className="value-card">
          <Users size={22} />
          <h3>Guest-first hospitality</h3>
          <p>Service is warm, attentive and personal—never rushed, always considered.</p>
        </div>
        <div className="value-card">
          <Award size={22} />
          <h3>Crafted details</h3>
          <p>From the tableware to the final garnish, every touch is designed to feel elevated.</p>
        </div>
      </section>

      <section className="timeline card-panel">
        <h2>How it all began</h2>
        <div className="timeline-list">
          {milestones.map((item) => (
            <div className="timeline-item" key={item.year}>
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
