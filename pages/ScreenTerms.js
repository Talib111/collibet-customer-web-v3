import Image from "next/image";

function ScreenTerms() {
	return (
		<>
			<section className="bg-black font-poppins">
				<div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
					<div className="w-full lg:w-1/2">
						<div className="lg:max-w-lg max-w-full">
							<h1 className="text-3xl font-semibold tracking-wide text-white lg:text-4xl">
								Terms & condition
							</h1>

							<div className="mt-8 space-y-5">
								<p className="flex items-center -mx-2 text-white">
									<span className="mx-2">
										A detailed document outlining the terms and conditions of
										using the tailoring service platform. It may include information
										about the services offered, service provider
										responsibilities, user obligations, payment terms,
										cancellation policy, liability limitations, and dispute
										resolution procedures.
									</span>
								</p>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-center w-full h-96 lg:w-1/2">
						<Image
							width={500}
							height={500}
							className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
							src="/terms.jpg"
							alt="glasses photo"
						/>
					</div>
				</div>
			</section>

			<div className="py-4 px-4 md:py-12 md:px-12 lg:py-22 lg:px-22">
				<h1 className="text-3xl mb-10 font-bold text-gray-900 dark:text-black lg:text-4xl">
					Terms & <span className="text-gray-500 ">condition </span>
				</h1>
				<h3 className="text-xl font-poppins font-bold mb-2">
					1. Services Offered
				</h3>
				<p className="mb-6 ">
					We provide tailoring services for various purposes, including but not
					limited to:
				</p>
				<ul className="list-disc ml-8 mb-6">
					<li>
						<span className="font-bold">Cleaning services:</span> This includes
						general house cleaning, deep cleaning, and specialized cleaning
						tasks.
					</li>
					<li>
						<span className="font-bold">Maintenance services:</span> Our service
						providers can assist with repairs, installations, and other home
						maintenance tasks.
					</li>
					<li>
						<span className="font-bold">Gardening services:</span> We offer
						garden maintenance, landscaping, and other related services.
					</li>
				</ul>

				<h3 className="text-xl font-bold mb-2">
					2. Service Provider Responsibilities
				</h3>
				<p className="mb-6">
					Our service providers are responsible for the following:
				</p>
				<ul className="list-disc ml-8 mb-6">
					<li>
						<span className="font-bold">Professionalism:</span> Service
						providers must conduct themselves in a professional manner and
						adhere to ethical standards.
					</li>
					<li>
						<span className="font-bold">Timeliness:</span> Service providers
						should arrive at the scheduled time and complete the tasks within
						the agreed-upon timeframe.
					</li>
					<li>
						<span className="font-bold">Quality:</span> Our service providers
						strive to deliver high-quality services and meet customer
						expectations.
					</li>
					{/* Add more responsibilities as necessary */}
				</ul>

				<h3 className="text-xl font-bold mb-2">3. User Obligations</h3>
				<p className="mb-6">
					As a user of our tailoring services platform, you have the following
					obligations:
				</p>
				<ul className="list-disc ml-8 mb-6">
					<li>
						<span className="font-bold">Accurate information:</span> Provide
						accurate and up-to-date information when using our services or
						communicating with us.
					</li>
					<li>
						<span className="font-bold">Payment:</span> Make timely payments for
						the services rendered, following the agreed-upon payment terms.
					</li>
					<li>
						<span className="font-bold">Compliance:</span> Abide by any
						applicable laws, regulations, or guidelines when using our platform
						or interacting with service providers.
					</li>
					{/* Add more obligations as necessary */}
				</ul>

				<h3 className="text-xl font-bold mb-2">4. Payment Terms</h3>
				<p className="mb-6">
					Payment for the services provided through our platform should be made
					according to the following terms:
				</p>
				<ul className="list-disc ml-8 mb-6">
					<li>
						<span className="font-bold">Invoicing:</span> Invoices will be
						issued for the services rendered, detailing the amount due and the
						payment deadline.
					</li>
					<li>
						<span className="font-bold">Payment methods:</span> We accept
						various payment methods, including credit cards, debit cards, and
						online payment platforms.
					</li>
					<li>
						<span className="font-bold">Late payments:</span> Late payments may
						incur additional fees or penalties as outlined in our payment terms.
					</li>
					{/* Add more payment terms as necessary */}
				</ul>

				<h3 className="text-xl font-bold mb-2">5. Cancellation Policy</h3>
				<p className="mb-6">Our cancellation policy is as follows:</p>
				<ul className="list-disc ml-8 mb-6">
					<li>
						<span className="font-bold">User cancellation:</span> Users can
						cancel scheduled services by providing a notice within a specified
						timeframe to avoid any cancellation fees.
					</li>
					<li>
						<span className="font-bold">Service provider cancellation:</span>{" "}
						Service providers should provide sufficient notice if they are
						unable to fulfill a scheduled service.
					</li>
					<li>
						<span className="font-bold">Cancellation fees:</span> In certain
						cases, cancellation fees may apply as outlined in our cancellation
						policy.
					</li>
					{/* Add more cancellation policy details as necessary */}
				</ul>

				<h3 className="text-xl font-bold mb-2">6. Liability Limitations</h3>
				<p className="mb-6">Our liability is limited in the following ways:</p>
				<ul className="list-disc ml-8 mb-6">
					<li>
						<span className="font-bold">Service quality:</span> While we strive
						to deliver high-quality services, we cannot guarantee the outcome or
						results of the services provided by service providers.
					</li>
					<li>
						<span className="font-bold">Third-party interactions:</span> We are
						not responsible for any interactions or disputes that may arise
						between users and service providers outside of our platform.
					</li>
					<li>
						<span className="font-bold">Indirect damages:</span> We shall not be
						liable for any indirect, incidental, or consequential damages
						arising from the use of our platform or services.
					</li>
					{/* Add more liability limitations as necessary */}
				</ul>

				<h3 className="text-xl font-bold mb-2">
					7. Dispute Resolution Procedures
				</h3>
				<p className="mb-6">
					In the event of a dispute, we follow the following procedures:
				</p>
				<ul className="list-disc ml-8 mb-6">
					<li>
						<span className="font-bold">Mediation:</span> We encourage parties
						to resolve disputes through mediation or alternative dispute
						resolution methods.
					</li>
					<li>
						<span className="font-bold">Arbitration:</span> If mediation is
						unsuccessful, disputes may be resolved through binding arbitration
						as outlined in our dispute resolution policy.
					</li>
					<li>
						<span className="font-bold">Jurisdiction:</span> Any legal actions
						or claims shall be subject to the jurisdiction and laws of the
						applicable governing authority.
					</li>
				</ul>
			</div>
		</>
	);
}

export default ScreenTerms;
