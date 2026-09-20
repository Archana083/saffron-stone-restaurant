import type { MenuItem } from '../data/restaurant';

type FoodCardProps = {
  item: MenuItem;
  delay?: number;
};

export function FoodCard({ item, delay = 0 }: FoodCardProps) {
  return (
    <article className="food-card reveal" style={{ animationDelay: `${delay}ms` }}>
      <div className="food-image">
        <img src={item.image} alt={item.name} />
        <span>{item.category}</span>
      </div>
      <div className="food-meta">
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <strong>{item.price}</strong>
      </div>
    </article>
  );
}
