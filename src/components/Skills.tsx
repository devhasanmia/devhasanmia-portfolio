import React, { type JSX } from "react";
import {
  SiTypescript,
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiMongoose,
  SiDocker,
  SiVitest,
  SiJest,
  SiGraphql,
  SiJavascript,
  SiReact,
  SiAmazon,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

type Skill = {
  icon: JSX.Element;
  label: string;
};

const skillsData: Record<string, Skill[]> = {
  "3+ Years Experience": [
    { icon: <SiJavascript className="text-yellow-500" />, label: "JavaScript" },
    { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
    { icon: <SiExpress className="text-gray-800" />, label: "Express.js" },
    { icon: <SiRedux className="text-purple-600" />, label: "Redux" },
    { icon: <SiNextdotjs className="text-black" />, label: "Next.js" },
    { icon: <SiMongodb className="text-green-500" />, label: "MongoDB" },
    { icon: <SiMongoose className="text-red-600" />, label: "Mongoose" },
    { icon: <SiReact className="text-green-800" />, label: "Reactjs" },
  ],
  "1+ Years Experience": [
    { icon: <SiPostgresql className="text-sky-700" />, label: "PostgreSQL" },
    { icon: <SiPrisma className="text-black" />, label: "Prisma" },
    { icon: <FaDatabase className="text-indigo-600" />, label: "DBMS & SQL" },
    { icon: <SiDocker className="text-blue-500" />, label: "Docker" },
    { icon: <SiAmazon className="text-orange-500" />, label: "AWS" },
    { icon: <SiVitest className="text-green-600" />, label: "Vitest" },
    { icon: <SiJest className="text-pink-600" />, label: "Jest" },
    { icon: <SiGraphql className="text-pink-500" />, label: "GraphQL" },
  ],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies I have been working with professionally
          </p>
        </div>

        {/* Categories */}
        {Object.entries(skillsData).map(([experience, skills]) => (
          <div key={experience} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              {experience}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {skill.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
