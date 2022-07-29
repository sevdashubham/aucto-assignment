export interface IBookProps {
  id: string;
  name: string;
  description: string;
  authorId: string;
}

export interface IBookCardProps {
  id: string;
  name: string;
  description: string;
  authorName: string;
  index: number;
}

export interface IAuthorProps {
  id: string;
  name: string;
}

export interface TextSectionProps {
  title: string;
}
