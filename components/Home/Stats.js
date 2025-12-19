import { BellIcon, Blinds, BotIcon, KeyIcon } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
	{ id: 1, name: "Transactions every 24 hours", value: "44 Million" },
	{ id: 2, name: "Assets under holding", value: "$119 Trillion" },
	{ id: 3, name: "New users annually", value: "46,000" },
];

export default function Stats() {
	return (
		<>
			<div className="bg-white py-20 sm:py-32">
				<h2 className="max-w-4xl py-10 mx-auto text-4xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-gray-800 text-center">
					Trusted By The World’s Most
					<span className="text-sky-600"> Innovative Teams</span>
				</h2>

				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
						<motion.img
							whileHover={{ x: 10, y: -10 }}
							transition={{ duration: 0.5 }}
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
							alt="Transistor"
							width={158}
							height={48}
						/>

						<motion.img
							whileHover={{ x: 10, y: -10 }}
							transition={{ duration: 0.5 }}
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
							alt="Transistor"
							width={158}
							height={48}
						/>

						<motion.img
							whileHover={{ x: 10, y: -10 }}
							transition={{ duration: 0.5 }}
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
							alt="Transistor"
							width={158}
							height={48}
						/>

						<motion.img
							whileHover={{ x: 10, y: -10 }}
							transition={{ duration: 0.5 }}
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
							alt="Transistor"
							width={158}
							height={48}
						/>
						<motion.img
							whileHover={{ x: 10, y: -10 }}
							transition={{ duration: 0.5 }}
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
							alt="Transistor"
							width={158}
							height={48}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export const StatsTwo = () => {
	return (
		<div>
			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
						{stats.map((stat) => (
							<div
								key={stat.id}
								className="mx-auto flex max-w-xs flex-col gap-y-4"
							>
								<dt className="text-base leading-7 text-gray-600">
									{stat.name}
								</dt>
								<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
									{stat.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};
export const StatsThree = () => {
	return (
		<div>
			<div className="max-w-[85rem] px-4 py-10 bg-gray-100 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
					<div>
						<KeyIcon />
						<div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
							<div className="bg-gray-400 w-9 h-0.5"></div>
						</div>
						<div className="mt-5">
							<h3 className="text-lg font-semibold text-gray-800 dark:text-green-600">
								Responsive
							</h3>
							<p className="mt-1 text-gray-600 dark:text-gray-800">
								Responsive, and mobile-first project on the web
							</p>
						</div>
					</div>

					<div>
						<BotIcon />
						<div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
							<div className="bg-gray-400 w-9 h-0.5"></div>
						</div>
						<div className="mt-5">
							<h3 className="text-lg font-semibold text-gray-800 dark:text-green-600">
								Customizable
							</h3>
							<p className="mt-1 text-gray-600 dark:text-gray-800">
								Components are easily customized and extendable
							</p>
						</div>
					</div>

					<div>
						<BellIcon />
						<div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
							<div className="bg-gray-400 w-9 h-0.5"></div>
						</div>
						<div className="mt-5">
							<h3 className="text-lg font-semibold text-gray-800 dark:text-green-600">
								Documentation
							</h3>
							<p className="mt-1 text-gray-600 dark:text-gray-800">
								Every component and plugin is well documented
							</p>
						</div>
					</div>

					<div>
						<Blinds />
						<div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
							<div className="bg-gray-400 w-9 h-0.5"></div>
						</div>
						<div className="mt-5">
							<h3 className="text-lg font-semibold text-gray-800 dark:text-red-700">
								24/7 Support
							</h3>
							<p className="mt-1 text-gray-600 dark:text-gray-800">
								Contact us 24 hours a day, 7 days a week
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
