import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ListGroup } from '../ListGroup';

/**
 * WizardReviewSteps component for Patternfly React
 */
const WizardReviewSteps = ({ children, className, ...rest }) => {
  const classes = cx('wizard-pf-review-steps', className);
  return (
    <div className={classes} {...rest}>
      <ListGroup componentClass="ul">{children}</ListGroup>
    </div>
  );
};
WizardReviewSteps.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
export default WizardReviewSteps;
