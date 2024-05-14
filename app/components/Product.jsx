import { Image } from "next/image";
import diary from "../Assets/diary.jpg";
const Product = () => {
  return (
    <div>
      <Image src={diary} alt="diary" />
      <h1>Diary</h1>
    </div>
  );
};

export default Product;
