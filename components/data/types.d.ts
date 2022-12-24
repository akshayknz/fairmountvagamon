interface TestimonialProps {
  name: string;
  content: string;
  status: boolean;
  order: number;
  id?: string;
}

interface ProductProps {
  name: string;
  shortDescription: string;
  description: string;
  status: boolean;
  sale: boolean;
  order: number;
  totalCapacity: number;
  peoplePerRoom: number;
  price: number;
  amenities: number[];
  images: MediaProps[];
  videos: MediaProps[];
  id?: string;
  slug: string;
}

interface MediaProps {
  name: string;
  url: string;
  fullPath: string;
}
