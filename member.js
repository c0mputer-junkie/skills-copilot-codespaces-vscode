function skillsMember() {
  const member = {
    name: "John",
    age: 20,
    skills: {
      languages: ["JavaScript", "CSS", "HTML"],
      softSkills: ["communication", "teamwork"],
    },
  };

  console.log(member.skills.languages); // ["JavaScript", "CSS", "HTML"]
  console.log(member.skills.softSkills); // ["communication", "teamwork"]
}