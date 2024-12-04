import PropTypes from 'prop-types';

/**
 * Reusable textarea component with built-in accessibility
 *
 * @param {Object} props
 * @param {string} props.id - Unique identifier for the textarea
 * @param {string} props.label - Label text for the textarea
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} props.value - Textarea value
 * @param {function} props.onChange - Change handler function
 * @param {string} [props.error] - Error message to display
 * @param {boolean} [props.required] - Whether the textarea is required
 * @param {number} [props.rows=4] - Number of visible text lines
 */
export default function TextArea({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  rows = 4,
}) {
  return (
    <div className='flex flex-col space-y-2'>
      <label htmlFor={id} className='text-sm font-medium text-slate-200'>
        {label} {required && <span className='text-amber-500'>*</span>}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`
          px-4 py-2
          bg-slate-700
          border
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-amber-500
          placeholder:text-slate-400
          resize-none
          ${error ? 'border-red-500' : 'border-slate-600'}
        `}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className='text-sm text-red-500'>
          {error}
        </p>
      )}
    </div>
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
};
