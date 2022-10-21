export interface FoodTypes {
  title: string;
  tags: string[];
  slug: SlugTypes;
  price: string;
  summary: BlurbTypes;
  image: {
    asset: any;
  };
}

export interface ImageType {}
export interface BlurbTypes {
  en: string;
  es?: string;
  nb?: string;
}
export interface SlugTypes {
  _type: string;
  current: string;
}
