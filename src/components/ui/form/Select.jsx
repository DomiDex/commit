import PropTypes from 'prop-types';

/**
 * Reusable select component with built-in accessibility
 *
 * @param {Object} props
 * @param {string} props.id - Unique identifier for the select
 * @param {string} props.label - Label text for the select
 * @param {Array<{value: string, label: string}>} props.options - Array of options
 * @param {string} props.value - Selected value
 * @param {function} props.onChange - Change handler function
 * @param {string} [props.error] - Error message to display
 * @param {boolean} [props.required] - Whether the select is required
 */
export default function Select({
  id,
  label,
  options,
  value,
  onChange,
  error,
  required = false,
}) {
  return (
    <div className='flex flex-col space-y-2'>
      <label htmlFor={id} className='text-sm font-medium text-slate-200'>
        {label} {required && <span className='text-amber-500'>*</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className={`
          px-4 py-2
          bg-slate-700
          border
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-amber-500
          ${error ? 'border-red-500' : 'border-slate-600'}
        `}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        <option value=''>Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className='text-sm text-red-500'>
          {error}
        </p>
      )}
    </div>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};
