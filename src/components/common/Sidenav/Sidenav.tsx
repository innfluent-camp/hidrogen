import { Box, Flex, HStack, Spacer } from '@chakra-ui/react';
import { AcademicCapIcon, BeakerIcon, HomeIcon } from 'assets/icons';
import { Logotype } from 'components/brand';
import { Account } from './Account';
import { SidenavLink } from './SidenavLink';

export const Sidenav = () => {
  return (
    <Flex
      position="fixed"
      left="0"
      backgroundColor="gray.50"
      top="0"
      bottom="0"
      w="300px"
      p="7"
      direction="column"
    >
      <Logotype h="8" mb="10" alignSelf="flex-start" />

      <Flex direction="column" gap="3" mb="auto">
        <SidenavLink to="/" label="Home" icon={HomeIcon} />
        <SidenavLink to="/cursos" label="Cursos" icon={AcademicCapIcon} />
        <SidenavLink to="/proyectos" label="Proyectos" icon={BeakerIcon} />
      </Flex>

      <Spacer />
      <Account />
    </Flex>
  );
};
