export interface IBookProps {
  id: string;
  name: string;
  description: string;
  authorId: string;
  avgRating: number;
}

export interface IBookCardProps {
  id: string;
  name: string;
  description: string;
  authorName: string;
  avgRating: number;
  index: number;
}

export interface IRating {
  rating: number;
}

export interface IAuthorProps {
  id: string;
  name: string;
}

export interface IReviewProps {
  id: string,
  bookId: string,
  rating: number,
  reviewText: string,
}

export interface IReviewCompProps {
  bookId: string,
}

export interface TextSectionProps {
  title: string;
}
