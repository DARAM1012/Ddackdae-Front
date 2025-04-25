import { FaStar } from "react-icons/fa";

function FavoritButton() {
  return (
    <div>
      <FaStar onClick={() => favoriteStar()} />
    </div>
  );
}

export default FavoritButton;
