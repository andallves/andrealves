'use client';

import * as Styled from './styles';
import { useState } from 'react';

import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseMenu } from '@styled-icons/material-outlined/Close';

import { Logo } from '../Logo';
import { MenuLink } from '../MenuLink';
import { SocialMidia } from '../SocialMidia';

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Styled.Button
        showMenu={showMenu}
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Open/Close menu"
      >
        {showMenu ? (
          <CloseMenu aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container showMenu={showMenu} onClick={() => setShowMenu(false)}>
        <Styled.Navbar>
          <Logo />
          <MenuLink />
          <SocialMidia />
        </Styled.Navbar>
      </Styled.Container>
    </>
  );
};
