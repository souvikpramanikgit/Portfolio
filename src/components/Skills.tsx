import React from 'react'

const skillsData = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Node.js",
    "Express",
    "MongoDB",
    "C++",
    "Java",
    "SQL",
    "AWS",
  ];

const Skills = () => {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Skills</h1>
        <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <span
            key={index}
            className="flex border border-gray-200 dark:border-gray-800 rounded-md px-2 py-1 text-sm bg-gray-500 text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skills