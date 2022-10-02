import { chakra } from '@chakra-ui/react';
import { NavLink, To } from 'react-router-dom';

type SidenavLink = {
  to: To;
  label: string;
  icon?: React.ReactNode;
};

const RouterNavlink = chakra(NavLink);
export const SidenavLink = ({ to, icon, label }: SidenavLink) => {
  return (
    <RouterNavlink
      to={to}
      h="10"
      display="flex"
      alignItems="center"
      backgroundColor="messenger.50"
      borderRadius="md"
      px="8"
      fontWeight="bold"
    >
      {icon}
      {label}
    </RouterNavlink>
  );
};
