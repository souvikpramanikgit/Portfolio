interface WorkExperienceItem {
    startDate: string;
    endDate?: string;
    companyName: string;
    companyLogo?: string;
    jobTitle: string;
    description: string[];
    companyLink?: string;
}

const workExperienceData: WorkExperienceItem[] = [
    {
        startDate: "July 2023",
        endDate: "Sep 2023",
        companyName: "BAMBHARI",
        jobTitle: "Web Development Intern",
        description: [
            "Developed dynamic, responsive web applications using React.js, ensuring optimized user experience across various devices",
            "Implemented reusable components with React Hooks and state management techniques, enhancing code maintainability and scalability",
        ],
    },
    {
        startDate: "Jun 2024",
        endDate: "Sep 2024",
        companyName: "HSR Hi-Tech Solutions",
        jobTitle: "Summer Intern",
        description: [
            "Combining hands-on experience in web development, specializing in Python and SQL,Analyzing and Interpreting complex data sets to extract actionable insights,Contributing to data-driven decision making and strategic planning.",
        ],
    },
];

const WorkExperience = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>Experience</h1>

            <div className="p-1">

                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    {workExperienceData.map((item, index) => (
                        <li key={index} className={`mb-10 ms-4 ${index === workExperienceData.length - 1 ? "mb-0" : ""}`}>
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                {item.startDate} - {item.endDate || "Present"}
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {item.jobTitle} at {item.companyName}
                            </h3>
                            <div className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                <ul>
                                    {item.description.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </div>

                        </li>
                    ))}
                </ol>

            </div>
            


        </div>
    )
}

export default WorkExperience