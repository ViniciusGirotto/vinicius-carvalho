import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }: any) => {
  return (
    <Card className="h-[500px] group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image  */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={600}
            height={300}
            alt=""
            priority
          />
          {/* btns  */}
          <div className="flex gap-x-4">
            {project.link && (
              <Link
                href={project.link}
                target="blank"
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <Link2Icon className="text-white" />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="blank"
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <Github className="text-white" />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5 ">
          {project.category}
        </Badge>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
