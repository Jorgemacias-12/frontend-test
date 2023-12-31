export type MenuItem = {
  name: string;
  nodeType: string;
  url: string;
};

export type SocialMedia = {
  name: string;
  iconClass: string;
  url: string;
};


export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}