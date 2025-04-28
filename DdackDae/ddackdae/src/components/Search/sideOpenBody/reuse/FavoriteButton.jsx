import '@/components/search/sideOpenBody/reuse/reuse.css'
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function FavoriteButton() {
  const [star, setStar] = useState(false);

   // 찜하기 버튼
   const favoriteStar = () => {
    setStar((o) => !o);
  };

  return (
    <div className='FavoriteButton'>
      <FaStar className={`${star ? "favorite" : "notFavorite"}`} onClick={() => favoriteStar()} />
    </div>
  );
}

export default FavoriteButton;
