function SkillTag ({ skill }) {
  return (
    <span className="w-fit h-auto bg-gray-800 text-md font-light text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center justify-center font-arcade">
      {skill}
    </span>
  );
}

export default SkillTag;