import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Spinner = ({
  loading,
  size,
  inline,
  children,
  inverse,
  className,
  ...props
}) => {
  if (loading) {
    const classes = cx(className, 'spinner', `spinner-${size}`, {
      'spinner-inline': inline,
      'spinner-inverse': inverse
    });

    return <div className={classes} {...props} />;
  }

  return children || null;
};

Spinner.propTypes = {
  loading: PropTypes.bool,
  inline: PropTypes.bool,
  inverse: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  children: PropTypes.node,
  className: PropTypes.string
};

Spinner.defaultProps = {
  loading: false,
  size: 'md',
  inline: false,
  inverse: false,
  className: ''
};

export default Spinner;
