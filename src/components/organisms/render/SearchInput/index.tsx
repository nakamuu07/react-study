import { FieldProps } from 'formik';
import * as React from 'react';
import SearchInputComponent, {
  SearchInputProps as SearchInputComponentProps
} from '../../../molecules/SearchInput';

export interface SearchInputProps
  extends FieldProps,
    SearchInputComponentProps {}

const SearchInput: React.FC<SearchInputProps> = ({
  field,
  form,
  ...props
}: SearchInputProps) => <SearchInputComponent {...field} {...props} />;

export default SearchInput;
