import { Source } from './source';

export interface Article {
  description?: string;
  source?: Source;
  title?: string;
  url?: string;
  urlToImage?: string;
}
