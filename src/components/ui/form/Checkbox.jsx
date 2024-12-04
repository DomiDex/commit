import PropTypes from 'prop-types';

export default function Checkbox({ id, label, checked, onChange, error }) {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='flex items-center space-x-2'>
        <input
          id={id}
          type='checkbox'
          checked={checked}
          onChange={onChange}
          className={`
            w-4 h-4
            rounded
            border-slate-600
            text-amber-500
            focus:ring-amber-500
            focus:ring-offset-slate-800
            bg-slate-700
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        <label htmlFor={id} className='text-sm font-medium text-slate-200'>
          {label}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} className='text-sm text-red-500'>
          {error}
        </p>
      )}
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
