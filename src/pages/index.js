import Image from "next/image";
import { Inter } from "next/font/google";
import ViewAll from "./viewAll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-w-screen flex-col items-center justify-between p-24">
      <h1 className="text-25xl font-bold font-sans hover:font-serif">
        List of Task
      </h1>
      <button className="p-3 bg-red-300 w-300">Add Task</button>
      <div className=" w-full flex flex-nowrap ">
        <ViewAll />
        <ViewAll />
        <ViewAll />
        <ViewAll />
      </div>
    </main>
  );
}
