import Image from "next/image";

export const Logo = ({ className }: { className ?: string }) => {
  return (
    <div>
      <Image src={"/icon.png"} alt="logo" height={50} width={200} />
    </div>
  );
};
