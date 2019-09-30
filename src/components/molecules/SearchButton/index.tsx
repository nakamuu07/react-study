import { ButtonProps } from 'components/atoms/Button';
import * as React from 'react';
import ReactSVG from 'react-svg';
import Button from './styles';

export type SearchButtonProps = ButtonProps;

const SearchButton: React.FC<SearchButtonProps> = (
  props: SearchButtonProps
) => (
  <Button {...props}>
    <ReactSVG
      className="react-svg"
      src="/images/syousai.svg"
      svgClassName="icon"
    />
  </Button>
);

export default SearchButton;
