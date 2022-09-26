import { Button, Center, Spacer, VStack } from "@chakra-ui/react";
import { Logotype } from "components/brand/Logotype";
import { TextField } from "components/forms";

const Login = () => {
  return (
    <Center>
      <VStack>
        <Logotype />
        <Spacer />
        <TextField
          name="email"
          label="Correo electrónico"
          helperText="Ingresa tu correo electronico"
        />
        <Button> Ingresar </Button>
      </VStack>
    </Center>
  );
};

export default Login;
