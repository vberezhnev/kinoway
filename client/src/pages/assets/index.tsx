import banner from "./banner.png";
import Image from "next/image";

export default function bannerImage() {
  return <Image src={banner} layout="fixed" />;
}
