import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ theme, backgroundColor }) => theme[backgroundColor]};
  color: ${props => props.theme.btnColor};
  font-size: 2em;
  padding: ${props => (props.large ? "20" : "10")}px;
`;

function Button(props) {
  const { btnStyle, large } = props;

  const backgroundColor = `btnBgColor${btnStyle}`;

  return (
    <StyledButton backgroundColor={backgroundColor} large={large}>
      {props.children}
    </StyledButton>
  );
}

Button.defaultProps = {
  btnStyle: "1",
};

export default Button;
