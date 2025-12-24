import { FiLoader } from "react-icons/fi";
export default function loading() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
            <div className="text-neon-orange text-5xl text-lime-600 animate-spin"><FiLoader /></div>
        </div>

  )
}
