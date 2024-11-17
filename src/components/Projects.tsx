import { Button } from './ui/button';

const projectsData = [
    {
      title: "ColorPick Extension",
      description:
        "ColorPick Extension is a tool that allows users to select and copy color codes effortlessly.",
      link: "https://github.com/souvikpramanikgit/ColorPick",
      code: "https://github.com/souvikpramanikgit/ColorPick",
      previewVideo: "/videos/EmojiGitPreview.mp4",
      technologies: ["JavaScript", "Node.js", "Git"],
    },
    {
      title: "NewsHive",
      description:
        "NewsHive is a platform that allows users to browse the latest headlines.",
      link: "https://github.com/souvikpramanikgit/News_web",
      code: "https://github.com/souvikpramanikgit/News_web",
      previewVideo: "/Videos/Newsweb.mp4",
      technologies: [
        "React",
        "CSS",
        "NewsApi",
      ],
    },
    // {
    //   title: "CloudSpace",
    //   description:
    //     "CloudSpace is a platform that allows users to create and share spaces with their friends.",
    //   link: "https://cloud-space.vercel.app/",
    //   code: "https://github.com/yatharth1706/Cloud-Space",
    //   previewVideo: "/videos/CloudSpacePreview.mp4",
    //   technologies: [
    //     "Next.js",
    //     "React",
    //     "MongoDB",
    //     "Express",
    //     "Node.js",
    //     "TypeScript",
    //     "Tailwind CSS",
    //   ],
    // },
    // {
    //   title: "BlogBuddy",
    //   description:
    //     "BlogBuddy is a platform that allows users to create and share blogs with their friends.",
    //   link: "https://blog-buddy-seven.vercel.app/",
    //   code: "https://github.com/yatharth1706/BlogBuddy",
    //   previewVideo: "/videos/BlogBuddyPreview.mp4",
    //   technologies: [
    //     "Next.js",
    //     "React",
    //     "MongoDB",
    //     "Express",
    //     "Node.js",
    //     "TypeScript",
    //     "Tailwind CSS",
    //   ],
    // },
  ];

const Projects = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-100 rounded-md dark:border-gray-800"
          >
            <video
              src={project.previewVideo}
              autoPlay
              muted
              loop
              className="w-full h-full rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="default">View</Button>
                </a>
                <a href={project.code} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Code</Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects