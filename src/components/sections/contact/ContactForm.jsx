import { useState } from 'react';
import Input from '../../ui/form/Input';
import TextArea from '../../ui/form/TextArea';
import Select from '../../ui/form/Select';
import Checkbox from '../../ui/form/Checkbox';
import FormGroup from '../../ui/form/FormGroup';

export default function ContactForm() {
  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'project', label: 'Project Discussion' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'other', label: 'Other' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    subscribe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-lg'>
      <FormGroup>
        <Input
          id='name'
          label='Name'
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          id='email'
          type='email'
          label='Email'
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <Select
          id='subject'
          label='Subject'
          options={subjectOptions}
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          required
        />
        <TextArea
          id='message'
          label='Message'
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required
        />
        <Checkbox
          id='subscribe'
          label='Subscribe to newsletter'
          checked={formData.subscribe}
          onChange={handleChange}
        />
        <button
          type='submit'
          className='w-full px-4 py-2 bg-amber-500 text-slate-800 rounded-full hover:bg-amber-400 transition-colors duration-300'
        >
          Send Message
        </button>
      </FormGroup>
    </form>
  );
}
