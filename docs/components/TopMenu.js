import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './Logo';

const TopMenuLayout = styled.div``;

export default function TopMenu({ children }) {
  return (
    <TopMenuLayout>
      <Logo alt={children}>react-animate-me</Logo>
    </TopMenuLayout>
  );
}

TopMenu.propTypes = {
  children: PropTypes.node.isRequired,
};
