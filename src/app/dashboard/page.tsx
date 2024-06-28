import Button from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import DashboardTemplate from "@/components/template/dashboard-template";
import { IoIosSearch } from "react-icons/io";
import CardProducts from "@/components/organisms/card";

export default function Dashboard() {
  const data = [
    {
      id: 1,
      title: "Earphone sony",
      category: "elektronik",
      price: 450000,
      image: "/erp3.jpeg",
    },
    {
      id: 2,
      title: "Earphone Galaxy s7",
      category: "elektronik",
      price: 720000,
      image: "/erp1.jpeg",
    },
    {
      id: 3,
      title: "Hoodie Gozeal",
      category: "baju",
      price: 250000,
      image: "/hoddie.jpeg",
    },
    {
      id: 4,
      title: "Keyboard Ultra",
      category: "elektronik",
      price: 500000,
      image: "/keyboard.jpeg",
    },
    {
      id: 5,
      title: "Kemeja Lengan Panjang",
      category: "baju",
      price: 150000,
      image: "/kemeja.jpeg",
    },
    {
      id: 7,
      title: "Celana  Pria",
      category: "celana",
      price: 1750000,
      image: "/celana.jpeg",
    },
  ];

  return (
    <DashboardTemplate>
      <div className="w-full h-max flex flex-col gap-2 ">
        <div>
          <h1 className="text-[1.1rem] font-semibold text-gray-600 ">
            Semua Produk
          </h1>
        </div>
        <div className="w-full h-max flex items-center justify-between ">
          <div className="w-[83%] h-max ">
            <Input
              name="search"
              type="text"
              placeholder="Cari produk"
              color="transparent"
              size="small"
            />
          </div>
          <Button
            icons={<IoIosSearch size={20} className="text-white" />}
            type="button"
            color="purple"
            size="small"
          />
        </div>
        <div className="w-full h-max mt-2">
          <p className="text-[.8rem]">
            Total produk: <span className="font-semibold">0</span>
          </p>
        </div>
        <div className="w-full h-max flex gap-5 justify-between flex-wrap">
          {data.map((item) => (
            <CardProducts
              key={item.id}
              title={item.title}
              id={item.id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </DashboardTemplate>
  );
}
