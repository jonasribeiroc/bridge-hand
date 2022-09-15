import styled from 'styled-components';
import { Type } from '.';

const position = {
  'N': {
    top: '10px',
    right: null,
    bottom: null,
    left: 'calc(50% - 280px)',
  },
  'E': {
    top: 'calc(50% - 104px)',
    right: '538px',
    bottom: null,
    left: null,
  },
  'S': {
    top: null,
    right: null,
    bottom: '218px',
    left: 'calc(50% - 280px)',
  },
  'W': {
    top: 'calc(50% - 104px)',
    right: null,
    bottom: null,
    left: '-20px',
  },
};

export const Container = styled.div<{ type: Type }>`
  position: absolute;
  top: ${props => position[props.type].top};
  right: ${props => position[props.type].right};
  bottom: ${props => position[props.type].bottom};
  left: ${props => position[props.type].left};
`;

export const Total = styled.div<{ type: Type }>`
  font-family: fantasy;
  position: absolute;
  background-color: #ff8209;
  border-radius: 14px;
  padding: 4px 10px 0px 10px;
  color: white;
  width: 10px;
  text-align: center;
  right: -20px;
`;