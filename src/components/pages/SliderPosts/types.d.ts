export type postProps = {
  videoSrc?: string;
  arrayImages?: string[];
  description?: string;
  tags?: string[];
  dateOfPublication: string;
  totalViewsOfThePost: number;
  hearts: number;
  comments: number;
  saved: number;
  shared: number;
  isSaved: boolean;
  isLiked: boolean;
  idPost: string;
};

export type postComonProps = {
  userId: string;
  username: string;
  profileImageSrc: string;
  following: boolean;
  followers: number;
  totalLikes: number;
  followed: number;
  profileDescription: string;
};


export type arrayOfPosts = [postComonProps, postProps[]][]