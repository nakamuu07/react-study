import * as React from 'react';
import StyledInput from './styles';

export interface InputProps {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  id?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  max?: number;
  min?: number;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value?: any;
}

const inputDefaultProps: Required<
  Pick<InputProps, 'className' | 'disabled' | 'placeholder' | 'type'>
> = {
  className: '',
  disabled: false,
  placeholder: '',
  type: 'text'
};

const Input: React.FC<InputProps> = ({
  inputRef,
  ...props
}: InputProps) => {
  if ('value' in props) {
    const { value } = props;

    // valueはundefined及びnullを許容しているが、Reactの規約上、設定してはいけない
    return inputRef ? (
      <StyledInput
        {...props}
        ref={inputRef as any}
        value={value === undefined || value === null ? '' : value}
      />
    ) : (
      <StyledInput
        {...props}
        value={value === undefined || value === null ? '' : value}
      />
    );
  }

  return inputRef ? (
    <StyledInput {...props} ref={inputRef as any} />
  ) : (
    <StyledInput {...props} />
  );
};

Input.defaultProps = inputDefaultProps;

export default Input;
