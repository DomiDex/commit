import PropTypes from 'prop-types';

export default function FormGroup({ children, className = '' }) {
  return <div className={`space-y-6 ${className}`}>{children}</div>;
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
