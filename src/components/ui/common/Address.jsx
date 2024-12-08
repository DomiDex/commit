import { MapPinIcon } from '@heroicons/react/24/outline';

export default function Address() {
  return (
    <address className='inline-flex items-center space-x-2 text-slate-50'>
      <MapPinIcon className='w-5 h-5' aria-hidden='true' />
      <p>1234 Main St, Anytown, USA</p>
    </address>
  );
}
