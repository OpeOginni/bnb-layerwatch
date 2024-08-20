import { Josefin_Sans } from "next/font/google";
import Link from "next/link"; // Ensure you import Link from next/link if not already imported

const sans = Josefin_Sans({ weight: "700", subsets: ["latin"] });

export default function DappsPage() {
  const dapps = [
    {
      name: "opBNB",
      logo: "./logo/bnb.png",
      link: "dapps/opbnb",
    },
    {
      name: "COMBO",
      logo: "./logo/combo.png",
      link: "dapps/combo",
    },
    {
      name: "Xterio",
      logo: "./logo/xterio.png",
      link: "dapps/xterio",
    },
  ];

  return (
    <main className="flex-1">
      <div className="px-14 max-w-[1400px] mx-auto relative">
        <section
          className={`text-center text-5xl font-bold px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10 ${sans.className}`}
        >
          <h1>dApps</h1>
        </section>
        <section className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch gap-4 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
          {dapps.map((dapp) => (
            <div
              key={dapp.name}
              className="flex flex-col items-center gap-4 p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white"
            >
              <img
                src={dapp.logo}
                alt={dapp.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-900">
                {dapp.name}
              </h2>
              <Link
                href={dapp.link}
                className="text-center text-blue-500 hover:underline text-sm flex flex-row gap-1"
              >
                View dApps
              </Link>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
