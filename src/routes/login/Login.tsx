import { Button, Center, Spacer, VStack } from '@chakra-ui/react';
import { Logotype } from 'components/brand';
import { TextField } from 'components/forms';

const Login = () => {
  return (
    <Center p="10" h="100vh">
      <VStack alignItems="stretch" width="md" gap="2">
        <Logotype height="60px" width="100%" />
        <Spacer />
        <TextField
          name="email"
          label="Correo electrónico"
          helperText="Ingresa tu correo electronico"
        />
        <Button colorScheme="messenger"> Ingresar </Button>
      </VStack>
    </Center>
  );
};

export default Login;
