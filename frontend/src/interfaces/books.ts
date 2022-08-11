export interface IBookProps {
  id: string;
  name: string;
  description: string;
  authorId: string;
  rating: number;
}

export interface IBookCardProps {
  id: string;
  name: string;
  description: string;
  authorName: string;
  rating: number;
  index: number;
}

export interface IRating {
  rating: number;
}

export interface IAuthorProps {
  id: string;
  name: string;
}

export interface TextSectionProps {
  title: string;
}
