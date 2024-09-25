import { styled } from 'styled-components';
import { flexCenter, flexCenterColumn } from '../../global/common';
import { fadeIn } from '../../keyframes/keyframes';

const S = {};

S.StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  border: solid 1px #333;
  font-size: 20px;
`;

// ${} 템플릿 리터널

S.StyledButton = styled.button`
  color : ${(props) => props.color && props.color };
  background-color: orange;
  border: none;
`;

S.StyledButton2 = styled.button`
background-color: ${(props) => props.backgroundColor && props.backgroundColor };
`;



S.styledInput = styled.input`
  width: 200px;
  height: 200px;
  border: none;


`;


S.Wrapper = styled.div`
  ${flexCenterColumn}
& path {
  color : blue
}
`;

S.Form = styled.form`
  ${flexCenterColumn}



/* & 자기 자신을 선택하는 선택자 */
  & input {
    width: 200px;
    border: none;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    margin: 0 0 10px 0;
  }

  span {
    display: block;
    width: 100%;
    text-align: left;
    margin: 0 0 6px 0;
  }

  .button {
    width: 200px;
    background-color: #333;
    color: #fff;
    border: none;
    margin: 20px 0 0 0;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    cursor: pointer;

    animation: ${fadeIn} 2s forwards;
  }
`
S.button = styled.button`
  font-size: ${({theme}) => theme.FONT_SIZE["h1"] };
`
export default S;