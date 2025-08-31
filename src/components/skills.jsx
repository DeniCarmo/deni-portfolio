import Card from "./shared/card";
import Title from "./shared/title";
import SkillTag from "./skills/skill-tag";

function Skills () {
  const skills = [
    "JavaScript",
    "React.js",
    "Redux Toolkit",
    "styled-components",
    "Vue.js",
    "Nuxt.js",
    "Vuex",
    "Pinia",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Foundation",
    "Node.js",
    "Express",
    "MongoDB",
    "RESTful APIs",
    "TypeScript",
    "Git"
  ]

  return (
    <Card>
			<Title>My Skills</Title>

      <div className="w-full h-auto flex flex-wrap mb-4 justify-start">
        {skills.map((skill, index) => (
          <SkillTag key={index} skill={skill} />
        ))}
      </div>
		</Card>
  );
}

export default Skills;