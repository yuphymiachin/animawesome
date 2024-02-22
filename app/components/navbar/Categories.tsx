'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import { TbCat, TbFence } from 'react-icons/tb';
import { LiaFrogSolid } from 'react-icons/lia';
import { VscSnake } from 'react-icons/vsc';
import { LuDog, LuFish, LuPalmtree } from 'react-icons/lu';
import { LiaFishSolid } from "react-icons/lia";
import { PiBird } from 'react-icons/pi';
import { IoHomeOutline } from "react-icons/io5";
import { BsHouseHeart } from 'react-icons/bs';
import { BiWater } from 'react-icons/bi';
import { FaBookDead } from 'react-icons/fa';
import { SiPolars } from 'react-icons/si';
import { GiHighGrass } from 'react-icons/gi';
import { MdOutlinePestControlRodent, MdOutlineWarehouse } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Cats',
    icon: TbCat,
    description: 'These animals are cats!',
  },
  {
    label: 'Dogs',
    icon: LuDog,
    description: 'These animals are dogs!',
  },
  {
    label: 'Rodens',
    icon: MdOutlinePestControlRodent,
    description: 'These animals are rodens!'
  },
  {
    label: 'Fish',
    icon: LiaFishSolid,
    description: 'These animals are fish!',
  },
  {
    label: 'Amphibians',
    icon: LiaFrogSolid,
    description: 'These animals are amphibians!'
  },
  {
    label: 'Birds',
    icon: PiBird,
    description: 'These animals are birds!'
  },
  {
    label: 'Reptiles',
    icon: VscSnake,
    description: 'These animals are reptiles!'
  },
  {
    label: 'Homes',
    icon: IoHomeOutline,
    description: 'These animals live in homes!'
  },
  {
    label: 'Farms',
    icon: TbFence,
    description: 'These animals live in farms!'
  },
  {
    label: 'Shelters',
    icon: BsHouseHeart,
    description: 'These animals live in shelters!'
  },
  {
    label: 'Zoos',
    icon: MdOutlineWarehouse,
    description: 'These animals live in zoos!'
  },
  {
    label: 'Ocean',
    icon: BiWater,
    description: 'These animals live in ocean!'
  },
  {
    label: 'Safari',
    icon: GiHighGrass,
    description: 'These animals live in safari!'
  },
  {
    label: 'Polar',
    icon: SiPolars,
    description: 'These animals live in polar regions!'
  },
  {
    label: 'Tropical',
    icon: LuPalmtree,
    description: 'These animals live in tropical regions!'
  },
  {
    label: 'Endangered',
    icon: FaBookDead,
    description: 'These animals are endangered!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;