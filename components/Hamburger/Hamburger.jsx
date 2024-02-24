import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Basket from '@/assets/basket.png';
import Logo from '@/assets/logo.png';
import Box from '@/assets/box.png';
import Men from '@/assets/hommes2.png';
import Women from '@/assets/femmes.png';
import Child from '@/assets/juniors3.png';
import Maillot from '@/assets/maillots_hommes/psg.png';
import Socket from '@/assets/yellow.jpg';
import Balm from '@/assets/tiger-red.webp';
import styles from './hamburger.module.css';

const Hamburger = ({productsLength}) => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   <></>
  );
};
export default Hamburger;