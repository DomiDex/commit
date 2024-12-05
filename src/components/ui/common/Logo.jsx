import Image from 'next/image';

export default function Logo() {
  return (
    <div>
      <Image src={LogoImage} alt='Logo' />
    </div>
  );
}
