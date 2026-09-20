export type MenuCategory = 'Starters' | 'Mains' | 'Desserts' | 'Drinks';

export type MenuItem = {
  id: string;
  name: string;
  category: MenuCategory;
  price: string;
  description: string;
  image: string;
};

export const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'] as const;
export type CategoryFilter = typeof categories[number];

export const menuItems: MenuItem[] = [
  {
    id: 'smoked-paneer-tikka',
    name: 'Smoked Paneer Tikka',
    category: 'Starters',
    price: '₹495',
    description: 'Charred paneer, smoked paprika, mint chutney',
    image: '/images/paneer-tikka.jpg',
  },
  {
    id: 'malai-chicken',
    name: 'Malai Chicken',
    category: 'Starters',
    price: '₹575',
    description: 'Creamy saffron marinade, coal-roasted, citrus',
    image: '/images/malai-chicken.jpg',
  },
  {
    id: 'royal-dal',
    name: 'Royal Dal',
    category: 'Mains',
    price: '₹395',
    description: 'Slow-cooked black lentils, cultured butter',
    image: '/images/royal-dal.jpg',
  },
  {
    id: 'saffron-biryani',
    name: 'Saffron Biryani',
    category: 'Mains',
    price: '₹625',
    description: 'Aged basmati, saffron, roasted vegetables, raita',
    image: '/images/saffron-biryani.jpg',
  },
  {
    id: 'mango-rasmalai',
    name: 'Mango Rasmalai',
    category: 'Desserts',
    price: '₹345',
    description: 'Soft chenna, Alphonso, pistachio, cardamom',
    image: '/images/mango-rasmalai.jpg',
  },
  {
    id: 'masala-old-fashioned',
    name: 'Masala Old Fashioned',
    category: 'Drinks',
    price: '₹525',
    description: 'Bourbon, jaggery, bitters, toasted spices',
    image: '/images/masala-old-fashioned.jpg',
  },
];

export const gallery = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
];
