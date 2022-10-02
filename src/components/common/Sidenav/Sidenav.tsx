import { Box, Flex } from '@chakra-ui/react';
import { Logotype } from 'components/brand';
import { Account } from './Account';
import { SidenavLink } from './SidenavLink';

export const Sidenav = () => {
  return (
    <Box
      position="fixed"
      left="0"
      backgroundColor="gray.50"
      top="0"
      bottom="0"
      w="300px"
      p="7"
    >
      <Flex direction="column">
        <Logotype h="8" mb="4" alignSelf="flex-start" />
        <SidenavLink to="/" label="Home" />

        <Account />
      </Flex>
    </Box>
  );
};
