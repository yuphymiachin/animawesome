'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import { TbCat, TbFence } from 'react-icons/tb';
import { LiaFrogSolid } from 'react-icons/lia';
import { VscSnake } from 'react-icons/vsc';
import { LuDog, LuFish, LuPalmtree } from 'react-icons/lu';
import { PiBird } from 'react-icons/pi';
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
    description: 'This animal is a cat!',
  },
  {
    label: 'Dogs',
    icon: LuDog,
    description: 'This animal is a dog!',
  },
  {
    label: 'Rodens',
    icon: MdOutlinePestControlRodent,
    description: 'This animal is a roden!'
  },
  {
    label: 'Fish',
    icon: LuFish,
    description: 'This animal is a fish!',
  },
  {
    label: 'Birds',
    icon: PiBird,
    description: 'This animal is a bird!'
  },
  {
    label: 'Reptiles',
    icon: VscSnake,
    description: 'This animal is a reptile!'
  },
  {
    label: 'Amphibians',
    icon: LiaFrogSolid,
    description: 'This animal is an amphibian!'
  },
  {
    label: 'Farms',
    icon: TbFence,
    description: 'This animal is in a farm!'
  },
  {
    label: 'Shelters',
    icon: BsHouseHeart,
    description: 'This animal is in a shelter!'
  },
  {
    label: 'Zoos',
    icon: MdOutlineWarehouse,
    description: 'This animal is in a zoo!'
  },
  {
    label: 'Ocean',
    icon: BiWater,
    description: 'This animal lives in ocean!'
  },
  {
    label: 'Safari',
    icon: GiHighGrass,
    description: 'This animal lives in safari!'
  },
  {
    label: 'Polar',
    icon: SiPolars,
    description: 'This animal lives in polar regions!'
  },
  {
    label: 'Tropical',
    icon: LuPalmtree,
    description: 'This animal lives in tropical regions!'
  },
  {
    label: 'Endangered',
    icon: FaBookDead,
    description: 'This animal is endangered!'
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