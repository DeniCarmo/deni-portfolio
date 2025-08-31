function HeroBottom() {
	return (
		<div className="w-full h-auto mt-6 flex flex-col items-center justify-center gap-4 text-center">
			<p className="text-gray-300">
				Bringing designs to life with code, one pixel at a time. Specializing in React.js and Tailwind CSS to create stunning, responsive web applications that captivate users and deliver seamless experiences.
			</p>

			<div className="flex items-center justify-center gap-4">
				<button className="px-4 py-2 rounded-lg mt-4 border-2 border-green-400 text-green-400 bg-transparent font-semibold shadow-[0_0_8px_2px_rgba(34,197,94,0.7)] hover:shadow-[0_0_16px_4px_rgba(34,197,94,1)] transition cursor-pointer">
					See Projects
				</button>
				<button className="px-4 py-2 rounded-lg mt-4 ml-4 border-2 border-green-400 text-green-400 bg-transparent font-semibold shadow-[0_0_8px_2px_rgba(34,197,94,0.7)] hover:shadow-[0_0_16px_4px_rgba(34,197,94,1)] transition cursor-pointer">
					Let's Talk
				</button>
			</div>
		</div>
	);
}

export default HeroBottom;