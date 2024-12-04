import MapIcon from '../../../assets/map.svg';
export default function Address() {
  return (
    <address className='inline-flex items-center space-x-2 text-slate-50 '>
      <img src={MapIcon} alt='' className='w-5 h-5' />
      <p>1234 Main St, Anytown, USA</p>
    </address>
  );
}
