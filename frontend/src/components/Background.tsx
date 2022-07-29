import styled from "styled-components";

export default function Background() {
  return (
    <>
      <Wrapper />
      <Stars />
    </>
  );
}

const Wrapper = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 1200px;
  background: linear-gradient(180deg, #3B8BEB 0%, #88BDBC 100%);
`;

const Stars = styled.div`
  position: absolute;
  width: 100%;
  background-position: top center;
  background-repeat: repeat;
  background-image: url('/stars.svg');
  height: 224px;
  top: 10px;
`;
