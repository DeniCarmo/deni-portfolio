import HeroBottom from "./hero-section/hero-bottom";
import HeroTop from "./hero-section/hero-top";
import Card from "./shared/card";

function Hero() {
	return (
		<Card>
			<HeroTop />
			<HeroBottom />			
		</Card>
	);
}

export default Hero;