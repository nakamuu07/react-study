import * as React from 'react';
import P from './styles';
import Input, { InputProps } from '../../atoms/Input';

export interface SearchInputProps extends InputProps {
  isRightSettingSearchIcon?: boolean;
  wrapperClassName?: string;
}

const searchInputDefaultProps: Required<
  Pick<SearchInputProps, 'isRightSettingSearchIcon' | 'wrapperClassName'>
> = {
  isRightSettingSearchIcon: false,
  wrapperClassName: ''
};

const SearchInput: React.SFC<SearchInputProps> = ({
  className,
  isRightSettingSearchIcon,
  wrapperClassName,
  ...props
}: SearchInputProps) => (
  <P
    className={`${wrapperClassName} ${isRightSettingSearchIcon ? 'right' : ''}`}
  >
    <Input {...props} className={`search-input ${className}`} />
  </P>
);

SearchInput.defaultProps = searchInputDefaultProps;

export default SearchInput;
