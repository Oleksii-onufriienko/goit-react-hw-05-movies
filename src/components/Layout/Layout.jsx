import { Suspense } from 'react';
import { NavLink, Outlet } from "react-router-dom";

import styled from 'styled-components';

const Header = styled.header`
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const StyledNavLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  padding: 10px;
  cursor: pointer;
  &.active{
    color: orange;
  }
`;

export function Layout() {

    return (
        <>
            <Header>
                <nav>
                    <StyledNavLink to="/">
                           Home
                    </StyledNavLink>
                    <StyledNavLink to ="movies">
                           Movies
                    </StyledNavLink>
                </nav>
            </Header>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
        </>
    );
}