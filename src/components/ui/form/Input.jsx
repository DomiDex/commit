import PropTypes from 'prop-types';
import { useTheme } from '../../../context/ThemeContext';

/**
 * Reusable input component with built-in accessibility
 *
 * @param {Object} props
 * @param {string} props.id - Unique identifier for the input
 * @param {string} props.label - Label text for the input
 * @param {string} [props.type='text'] - Input type (text, email, password, etc.)
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.value] - Input value
 * @param {function} props.onChange - Change handler function
 * @param {string} [props.error] - Error message to display
 * @param {boolean} [props.required] - Whether the input is required
 */
export default function Input({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
}) {
  const { theme } = useTheme();

  return (
    <div className='flex flex-col space-y-2'>
      <label htmlFor={id} className={`text-sm font-medium ${theme.text}`}>
        {label} {required && <span className='text-amber-500'>*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`
          px-4 py-2
          ${theme.lightBg}
          ${theme.text}
          border
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-amber-500
          placeholder:text-slate-400
          ${error ? 'border-red-500' : 'border-slate-600/50'}
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

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};
