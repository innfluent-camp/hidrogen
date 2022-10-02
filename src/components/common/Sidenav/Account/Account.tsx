import { Flex, Image, Text } from '@chakra-ui/react';

export const Account = () => {
  const profilePictureSrc = 'https://bit.ly/dan-abramov';
  const fullName = 'Dan Abramov';
  const email = 'foo@bar.io';

  return (
    <Flex gap="3" align="center">
      <Image src={profilePictureSrc} boxSize="12" borderRadius="full" />

      <Flex fontSize="small" direction="column">
        <Text fontWeight="semibold">{fullName}</Text>
        <Text>{email}</Text>
      </Flex>
    </Flex>
  );
};
