function HeroTop() {
	return (
		<div className="w-full h-auto min-h-[200px] flex flex-col md:flex-row items-center justify-center gap-6">
			<div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_20px_5px_rgba(168,85,247,0.7)]">
				<img
					src=""
					className="w-full h-full object-cover"
					alt="Hero Picture"
					title="Hero Picture"
					loading="lazy"
				/>
			</div>

			<div>
				<h1 className="text-4xl text-white font-medium mb-2 font-arcade tracking-wider">Hello, I'm Deni</h1>
				<p className="text-lg text-gray-300 font-medium font-montserrat">Front-end developer e gamer nas horas vagas</p>
			</div>
		</div>
	);
}

export default HeroTop;