export interface NavLink {
  name: string;
  href: string;
}

export interface ProductItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  colSpan?: number;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
}

export interface ValueProp {
  id: number;
  title: string;
  description: string;
  iconPath: string;
}