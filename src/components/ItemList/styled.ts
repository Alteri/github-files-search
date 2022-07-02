import styled from "styled-components";
import { GridStyled } from "../Grid/styled";
import { Colors, Breakpoints } from "../Global";
import { Exit } from "../Icon";
import { Text } from "../Text";

export const ItemListStyled = styled(GridStyled)`
  padding: 8px;

  &:nth-child(even) {
    background: ${Colors.gray};
  }
`;

export const ModalWrapper = styled(GridStyled)`
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  background: ${Colors.white};
  border: 1px solid ${Colors.black};
  border-radius: 4px;
  padding: 16px;
`;

export const ModalHeader = styled.div`
  position: relative;
`;

export const ExitIcon = styled(Exit)`
  position: absolute;
  right: 0;
  top: 0;
`;

export const FileName = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 128px;

  @media (min-width: ${Breakpoints.Desktop}) {
    max-width: 256px;
  }
`;
