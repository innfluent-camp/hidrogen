import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';

type TextFieldProps = {
  value?: string;
  name: string;
  label?: string;
  helperText?: string;
  errorText?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const TextField = ({
  value = '',
  name,
  label,
  helperText,
  errorText,
  placeholder,
  onChange = () => {},
}: TextFieldProps) => {
  const isInvalid = !!errorText;

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />

      {isInvalid ? (
        <FormErrorMessage>{errorText}</FormErrorMessage>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
