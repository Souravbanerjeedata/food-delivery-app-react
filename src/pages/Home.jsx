import Categories from "../Category";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-slate-200 px-2">
      <Nav />
      <div className="flex flex-wrap justify-center items-center gap-5 w-full">
        {Categories.map((item) => (
          <div
            key={item.id}
            className="gap-2 w-[80px] h-[90px] bg-white flex flex-col items-center p-5 justify-center text-[8px] font-bold text-gray-600 rounded-lg shadow-md hover:bg-green-200 cursor-pointer transition-all duration-200"
          >
            {item.image}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
