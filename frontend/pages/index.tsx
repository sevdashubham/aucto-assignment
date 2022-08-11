import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import axios from "../src/services/axios";

import { Container, Content, WaveWrapper, CardWrapper, CardWrapperContainer, CardRowWrapper } from "../src/styles/books/styles";
import { IAuthorProps, IBookProps } from '../src/interfaces/books';
import Background from '../src/components/Background';
import BlobAnimate from '../src/components/BlobAnimate';
import TextSection from '../src/components/TextSection';
import Row from '../src/components/Row';
import Review from '../src/components/Review';

interface IResponseServerSide {
  books: IBookProps[];
  authors: IAuthorProps[];
}

const TITLE = 'Best sellers';

const Books: NextPage<IResponseServerSide> = ({ books, authors }) => (
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
            {books?.map((book, index) => {
              const authorIndex = authors.findIndex(author => author.id === book.authorId);
              return (
                <>
                <Row
                  key={book.id}
                  id={book.id}
                  index={index}
                  name={book.name}
                  avgRating={book.avgRating}
                  description={book.description}
                  authorName={authorIndex > -1 ? authors[authorIndex].name: ''}
                />
                <Review bookId={book.id}/>
                </>
              )
            })}
          </CardRowWrapper>
        </CardWrapperContainer>
      </CardWrapper>
    </Content>
  </Container>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: books } = await axios.get("/books");
  const { data: authors } = await axios.get("/authors");
  return {
    props: { books, authors },
  };
};

export default Books;
