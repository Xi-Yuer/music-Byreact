import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import {
  HeaderWrapper
} from "./style";

const HYThemeHeaderSmall = memo(function (props) {
  const { title, more='', target='' } = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <Link to={target}>{more}</Link>
    </HeaderWrapper>
  )
})

HYThemeHeaderSmall.defaultProps = {

}

HYThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}

export default HYThemeHeaderSmall;