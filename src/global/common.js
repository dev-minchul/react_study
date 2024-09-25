// 중복되는 css값을 변수로 선언해놓은 파일
import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexCenterRow = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const flexCenterColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
