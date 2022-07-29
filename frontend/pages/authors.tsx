import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import axios from "../src/services/axios";

import { Container, Content, WaveWrapper, CardWrapper, CardWrapperContainer, CardRowWrapper } from "../src/styles/books/styles";
import { IAuthorProps } from '../src/interfaces/books';
import Background from '../src/components/Background';
import BlobAnimate from '../src/components/BlobAnimate';
import TextSection from '../src/components/TextSection';
import Row from '../src/components/Row';
import RowAuthor from '../src/components/RowAuthor';

interface IResponseServerSide {
  authors: IAuthorProps[];
}

const TITLE = 'Wordsmith';

const Authors: NextPage<IResponseServerSide> = ({ authors }) => (
  <Container>
    <Background/>
    <Head>
      <title>Bookstore</title>
    </Head>
    <Content>
      <WaveWrapper>
        <BlobAnimate />
      </WaveWrapper>
      <TextSection title={TITLE}/>
      <CardWrapper>
        <CardWrapperContainer>
          <CardRowWrapper>
            {authors?.map((author, index) => {
              return (
                <RowAuthor
                  key={author.id}
                  index={index}
                  name={author.name}
                />
              )
            })}
          </CardRowWrapper>
        </CardWrapperContainer>
      </CardWrapper>
    </Content>
  </Container>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: authors } = await axios.get("/authors");
  return {
    props: { authors },
  };
};

export default Authors;
