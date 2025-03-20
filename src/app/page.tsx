import Image from "next/image";

export default function Home() {

  return <main className={"space-y-4"}>
    <h2 className={"font-medium text-3xl"}>
      this website is under construction, check back later!
    </h2>

    <h2 className={"font-medium text-3xl"}>
      for the time being, see the links to the side :)
    </h2>

    <div className={"mt-20 h-96 flex justify-center items-center"}>
      <div className={"w-60"}>
        <Image src={"/images/pandi.png"} alt={"Panda"} width={400} height={400} />
      </div>
    </div>
  </main>;
}
