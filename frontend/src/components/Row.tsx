import { FC } from 'react';
import styled from "styled-components";

import { IBookCardProps } from '../interfaces/books';
import Rating from './Rating';

const Row: FC<IBookCardProps> = ({
                                   id,
                                   name,
                                   description,
                                   authorName,
                                   index,
                                   avgRating
                                 }: IBookCardProps) => {
  return (
    <Wrapper>
      <NumberWrapper>
        <Number>{index + 1}</Number>
      </NumberWrapper>
      <TextWrapper>
        <ContainerRow>
        <Title>{name}</Title>
          <Rating rating={avgRating} isSelect={false}/>
        </ContainerRow>
        <Description>{authorName}</Description>
        <Author>{description}</Author>
      </TextWrapper>
    </Wrapper>
  );
}

export default Row;

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: grid;
  grid-template-columns: 46px auto;
  align-items: top;
  gap: 10px;
  width: 100%;
  height: fit-content;
  padding: 10px;
  border-radius: 10px;

  &,
  * {
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
  }
`;

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NumberWrapper = styled.div`
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  display: grid;
  place-content: center;
  place-items: center;
`;

const Number = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.text.secondary};;
`;

const TextWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  align-self: center;
`;

const Title = styled.p`
  font-weight: 600;
  color: #e7e3d4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-right: 40px;
`;

const Author = styled.p`
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-right: 40px;
`;

const Description = styled.p`
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
