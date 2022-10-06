import { chakra, IconProps, SystemStyleObject } from '@chakra-ui/react';
import { NavLink, To } from 'react-router-dom';

type SidenavLink = {
  to: To;
  label: string;
  icon: React.FC<IconProps>;
};

const activeStyles: SystemStyleObject = {
  backgroundColor: 'messenger.50', //TODO: Define this color as a design token on the theme, something like accent.50
};

const hoverStyles: SystemStyleObject = {
  backgroundColor: 'messenger.100',
};

const RouterNavlink = chakra(NavLink);
export const SidenavLink = ({ to, icon: Icon, label }: SidenavLink) => {
  return (
    <RouterNavlink
      to={to}
      h="10"
      display="flex"
      alignItems="center"
      borderRadius="md"
      px="3"
      fontWeight="medium"
      gap="3"
      _activeLink={activeStyles}
      _hover={hoverStyles}
    >
      <Icon boxSize="6" />
      {label}
    </RouterNavlink>
  );
};
