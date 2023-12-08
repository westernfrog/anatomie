import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Card(props) {
  const router = useRouter();
  const handleInfo = (module_name) => {
    router.push(`/model?string=${module_name}`);
  };
  return (
    <>
      <div
        className="col-span-6 relative text-neutral-300 lg:flex items-center justify-center"
        onClick={() => handleInfo(props.module_name)}
      >
        <Image
          src={`https://human.biodigital.com${props.url}`}
          width={500}
          height={500}
          className="w-full h-72 object-cover object-center rounded-t-lg lg:rounded-s-lg"
          alt="Title"
        />
        <div className="absolute rounded-lg w-full h-full inset-0 bg-black/20"></div>
        <div className="p-6 bg-neutral-800 rounded-b-lg lg:rounded-e-lg w-full lg:h-full">
          <h1 className="text-xl tracking-tight font-semibold mb-2">
            {props.title}
          </h1>
          <p className="text-sm text-neutral-400">
            {props.desc.slice(0, 180)}...
          </p>
        </div>
      </div>
    </>
  );
}
