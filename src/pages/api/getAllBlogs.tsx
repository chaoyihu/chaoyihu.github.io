import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { readDirectory } from '@/utils/readDirectory';


type PathsResponse = string[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PathsResponse>
) {
  const pagesDir = path.join(process.cwd(), '/src/pages/blogs');

  const paths = readDirectory(pagesDir);
  res.status(200).json(paths);
}
