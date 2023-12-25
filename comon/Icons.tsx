import { HiHand } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineCopyright } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaFacebookSquare
} from 'react-icons/fa';

const iconList = {
  FiPhoneCall: FiPhoneCall,
  MdOutlineCopyright: MdOutlineCopyright,
  HiOutlineLocationMarker: HiOutlineLocationMarker,
  MdEmail: MdEmail,
  FaWhatsappSquare: FaWhatsappSquare,
  FaInstagramSquare: FaInstagramSquare,
  FaFacebookSquare: FaFacebookSquare
};

export type IconList = typeof iconList;

interface IProps {
  className?: string;
  color?: string;
  size?: string;
  icon: keyof IconList;
}

export default function Icons({ className, color, size, icon }: IProps) {
  const Icon = iconList[icon];

  return (
    <span className={`flex items-center ${className}`}>
      <Icon {...{ color, size }} />
    </span>
  );
}
