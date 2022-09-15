import styled from 'styled-components';

export const Container = styled.div<{ width: number }>`
  margin: 1px;
  padding: 0.5em 0.5em;
  border-radius: 6px;
  box-shadow: 0 1px 4px #4d4d4d;
  background-color: #fffffe;
  width: ${props => props.width}px;
  position: absolute;
  transition: 0.5s;

  &:nth-child(1) {
    left: ${props => props.width*1/4}px;
  }
  &:nth-child(2) {
    left: ${props => props.width*2/4}px;
  }
  &:nth-child(3) {
    left: ${props => props.width*3/4}px;
  }
  &:nth-child(4) {
    left: ${props => props.width*4/4}px;
  }
  &:nth-child(5) {
    left: ${props => props.width*5/4}px;
  }
  &:nth-child(6) {
    left: ${props => props.width*6/4}px;
  }
  &:nth-child(7) {
    left: ${props => props.width*7/4}px;
  }
  &:nth-child(8) {
    left: ${props => props.width*8/4}px;
  }
  &:nth-child(9) {
    left: ${props => props.width*9/4}px;
  }
  &:nth-child(10) {
    left: ${props => props.width*10/4}px;
  }
  &:nth-child(11) {
    left: ${props => props.width*11/4}px;
  }
  &:nth-child(12) {
    left: ${props => props.width*12/4}px;
  }
  &:nth-child(13) {
    left: ${props => props.width*13/4}px;
  }
  &:hover {
    z-index: 9;
    cursor: pointer;
    width: ${props => props.width}px;
    transform: translateX(0) scale(1.1);
  }
`;

export const Number = styled.div<{ fontSize?: number }>`
  font-weight: bolder;
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  line-height: 1;
  margin-left: 3px;
`;

export const Suit = styled.img`
  width: 15%;
`;

export const MarkWrapper = styled.div`
  margin: 0 5px;
`;

export const Mark = styled.img`
  width: 100%;
  align-self: center;
`;

export const Group = styled.div<{ reverse?: boolean }>`
  transform: rotate(${props => props.reverse ? '180deg' : '0deg'});
  line-height: 0;
`;