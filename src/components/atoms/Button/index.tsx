import * as React from 'react';
import StyledButton from './styles';

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  name?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
  style?: object;
  type?: 'button' | 'submit' | 'reset';
}

const buttonDefaultProps: Required<
  Pick<ButtonProps, 'children' | 'className' | 'disabled' | 'style' | 'type'>
> = {
  children: null,
  className: '',
  disabled: false,
  style: {},
  type: 'button'
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => (
  <StyledButton {...props} />
);

Button.defaultProps = buttonDefaultProps;

export default Button;
