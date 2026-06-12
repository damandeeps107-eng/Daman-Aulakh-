export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl?: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  priceStart: string;
  features: string[];
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metric?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarUrl: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  timestamp: string;
}
