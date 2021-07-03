import styled from "styled-components";

import Button from "./Button";

const InnerPageContainer = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: ${props => props.theme.textColor2};
`;

function InnerPage() {
  return (
    <InnerPageContainer>
      <Title>Inner Page</Title>
      <Button large>large button</Button>
      <Button btnStyle="2">normal button</Button>
      <Button btnStyle="3">normal button</Button>
    </InnerPageContainer>
  );
}

export default InnerPage;
