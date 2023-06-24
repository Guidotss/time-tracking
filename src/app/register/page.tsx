import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <form className="bg-dark_blue p-10 2xl:h-1/2 2xl:w-1/2 shadow-md flex flex-col items-center rounded-lg">
        <h1 className="text-3xl text-white text-center tracking-widest mb-5 mt-5">
          Register
        </h1>
        <input
          className="2xl:w-1/2 mt-10 p-3 rounded-md bg-gray-700 text-white"
          type="text"
          placeholder="Guido Olguin..."
        />
        <input
            className="2xl:w-1/2 mt-10 p-3 rounded-md bg-gray-700 text-white"
            type="password"
            placeholder="**********"
        />
        <button className="bg-soft_orange 2xl:w-[300px] py-2 rounded-lg mt-10 text-slate-50 hover:opacity-[0.8] transition-all">
            Register
        </button>
        <div className="w-full text-end mt-10">
            <Link href="#">
                <span className="text-slate-50 underline">Ya tienes cuenta?</span>
            </Link>
        </div>
      </form>
    </main>
  );
}
