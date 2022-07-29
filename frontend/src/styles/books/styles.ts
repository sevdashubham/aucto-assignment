import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;

export const WaveWrapper = styled.div`
  position: fixed;
  top: 200px;
  width: 100vw;
`;

export const CardWrapper = styled.div`
  padding: 0 20px;
`;

export const CardWrapperContainer = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
    inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(40px);
  margin: 0 auto;
`;

export const CardRowWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 8px;
`;
