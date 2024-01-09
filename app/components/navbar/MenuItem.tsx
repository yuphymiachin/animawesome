'use client';

interface MenuItemProps {
  onClick: () => void;
  label: string;
  orange?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label,
  orange
}) => {
  return ( 
    <div 
      onClick={onClick} 
      className={orange ? " text-orange-600 px-4 py-3 hover:bg-neutral-100 transition font-bold" : "px-4 py-3 hover:bg-neutral-100 transition font-semibold"}
      
    >
      {label}
    </div>
   );
}
 
export default MenuItem;