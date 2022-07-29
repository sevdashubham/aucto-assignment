import { FC } from 'react';
import styled from "styled-components";
import Link from 'next/link';

import { TextSectionProps } from '../interfaces/books';

const TextSection: FC<TextSectionProps> = ({title}: TextSectionProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>
        <Link href="/">
          <Subtitle>Books</Subtitle>
        </Link>
        <Subtitle>{' | '}</Subtitle>
        <Link href="/authors">
          <Subtitle>Authors</Subtitle>
        </Link>
      </div>
    </Wrapper>
  );
}

export default TextSection

const Wrapper = styled.div`
  position: relative;
  max-width: 380px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 80px 20px;
`;

const Subtitle = styled.a`
  color: #b23850;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  margin: 0;
  cursor: pointer;
  
  :hover {
    color: #e7e3d4;
  }
  
  :active {
    color: #b23850
  }
`;

const Title = styled.h1`
  color: #e7e3d4;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  margin: 0;
`;
