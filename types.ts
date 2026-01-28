export interface Testimonial {
  id: number;
  name: string;
  role: string;
  before: string;
  after: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BonusItem {
  title: string;
  description: string;
  value: string;
}