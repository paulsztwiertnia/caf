export type ProjectTag = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
};

export type ProjectItem = {
  id: string;
  thumbnailSrc: string;
  videoSrc: string;
  videoTransition: boolean;
  vimeoUrl: string;
  link: string;
  tags: ProjectTag[];
  alt: string;
  title: string;
  description: string;
  width: number;
  height: number;
  projectDate?: string;
  updatedAt?: string;
  createdAt?: string;
};

const projects: ProjectItem[] = [];
const projectTags: ProjectTag[] = [];

export const getProjects = async () => {
  return {
    featuredProjects: projects,
    projectTags,
  };
};

export const getAllProjects = async () => {
  return {
    allProjects: projects,
    projectTags,
    projectOrderByTagSlug: {} as Record<string, string[]>,
    projectDefaultOrder: [] as string[],
  };
};
