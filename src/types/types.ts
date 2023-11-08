export interface navLinkI {
  id: string;
  title: string;
}

export interface techI {
  name: string;
  icon: string;
}

export interface tagI {
  name: string;
  color: string;
}

export interface projectsI {
  name: string;
  description: string;
  tags: tagI[];
  image: string;
  source_code_link: string;
  offcial_website?:string;
}
