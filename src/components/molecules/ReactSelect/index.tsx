import * as React from 'react';
import { Props } from 'react-select/src/Select';
import StyledReactSelect from './styles';

interface OptionType {
  label: string;
  value: string;
}

export interface ReactSelectProps extends Props {
  options: OptionType[];
  value?: OptionType | null;
}

const ReactSelect: React.FC<ReactSelectProps> = (props: ReactSelectProps) => {
  const { className, isDisabled } = props;

  return (
    <StyledReactSelect
      {...props}
      className={`${className} ${isDisabled ? 'disabled' : ''}`}
    />
  );
};

export default ReactSelect;
