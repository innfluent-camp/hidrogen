import { Button, Center, Spacer, VStack } from '@chakra-ui/react';
import { Logotype } from 'components/brand';
import { TextField } from 'components/forms';
import React, { useEffect, useState } from 'react';
import { useValidation } from 'utils/hooks/useValidation';
import * as Yup from 'yup';

const emailSchema = Yup.string().email('Please enter a valid email.');

const Login = () => {
  const [email, setEmail] = useState('');
  const errors = useValidation(email, emailSchema);
  const [emailError, setEmailError] = useState<string>();

  useEffect(() => {
    async function validateEmail() {
      const errors = await emailSchema.validate(email);
      setEmailError(errors);
    }

    validateEmail();
  }, [email]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setEmail(event.target.value);
  };

  return (
    <Center p="10" h="100vh">
      <VStack alignItems="stretch" width="md" gap="2">
        <Logotype height="60px" width="100%" />
        <Spacer />
        <TextField
          name="email"
          value={email}
          label="Correo electrónico"
          helperText="Ingresa tu correo electronico"
          onChange={handleChange}
          errorText={emailError}
        />
        <Button colorScheme="messenger"> Ingresar </Button>
      </VStack>
    </Center>
  );
};

export default Login;
