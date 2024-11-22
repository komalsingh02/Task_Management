import Sidebar from "../components/Home/Sidebar";

function Home() {
  return (
    <div className="flex h-[94vh] gap-4">
      <div className="w-1/6 border border-pink-500 rounded-xl p-3 flex flex-col justify-between">
        <Sidebar />
      </div>
      <div className="w-5/6 border rounded p-5">Hellow2</div>
    </div>
  );
}

export default Home;
