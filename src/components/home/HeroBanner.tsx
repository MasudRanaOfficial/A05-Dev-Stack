import Banner from "../../assets/banner-stack.png";

export function HeroBanner() {
  
  return (
    <section id="home" className="py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight text-slate-950 md:text-6xl">
            Build Your Ideal{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-700 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="rounded-lg bg-linear-to-r from-orange-500  to-pink-500 px-6 py-3 text-sm font-medium text-white"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-lg border border-slate-200 px-10 py-3 text-sm font-medium text-slate-500"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img src={Banner} alt="Development stack illustration" className="w-full max-w-md object-contain"/>
        </div>
      </div>
    </section>
  );
}