export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'code' | 'list' | 'tip';
  content: string | string[];
  language?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  blocks: ContentBlock[];
  image?: string;
}
