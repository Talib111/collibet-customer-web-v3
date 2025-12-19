import { BoxIcon, BusIcon, FactoryIcon } from 'lucide-react';
import { motion } from "framer-motion"



export const Finisher = () => (
	<section className='pb-4 relative block bg-white'>
		<div className='container mx-auto px-4 lg:pt-24 lg:pb-64'>
			<div className='flex flex-wrap text-center justify-center'>
				<div className='w-full lg:w-6/12 px-4'>
					
					<h2 className="max-w-4xl  mx-auto text-4xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-gray-800 text-center">
					Build <span className="text-pink-600">Something</span>
            </h2>
					<p className='text-lg leading-relaxed mt-4 mb-4 text-gray-800'>
						Put the potentially record low maximum sea ice extent tihs year down
						to low ice. According to the National Oceanic and Atmospheric
						Administration, Ted, Scambos.
					</p>
				</div>
			</div>
			<div className='flex flex-wrap mt-12 justify-center'>
				<div className='w-full lg:w-3/12 px-4 text-center'>
					<div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
					<motion.div whileHover={{ scale: 1.5 }}>
    <BusIcon />
  </motion.div>
					</div>
					<h6 className='text-xl mt-5 font-semibold text-pink-500'>
					Register
					</h6>
					<p className='mt-2 mb-4 text-gray-500'>
					Schedule your Service Request on the Tailoring Serve APP
Google Play Store
iOS App store


					</p>
				</div>
				
				<div className='w-full lg:w-3/12 px-4 text-center'>
					<div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
						
						<motion.div whileHover={{ scale: 1.5 }}>
						<FactoryIcon />
  </motion.div>
					</div>
					<h5 className='text-xl mt-5 font-semibold text-pink-500'>
					On Time Service
					</h5>
					<p className='mt-2 mb-4 text-gray-500'>
					The Technician will reach your premises at the given time to attend the repair job
					</p>
				</div>



				<div className='w-full lg:w-3/12 px-4 text-center'>
					<div className='text-pink-600 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
					<motion.div whileHover={{ scale: 1.5 }}>
					<BoxIcon />
  </motion.div>			
						{' '}
					</div>
					<h5 className='text-xl mt-5 font-semibold text-pink-500'>
					Problem Solved!
					</h5>
					<p className='mt-2 mb-4 text-gray-500'>
					Tailoring Serve introduces smart and World-Class Surveillance Systems.
					</p>
				</div>
			</div>
		</div>
	</section>
);
