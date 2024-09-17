import fs from 'fs';
import path from 'path';

export function readDirectory(dir: string): string[] {
    const files = fs.readdirSync(dir);
    let paths: string[] = [];

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        paths = paths.concat(readDirectory(filePath));
      } else if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx')) {
        const relativePath = path.relative(dir, filePath);
        const pathWithoutExtension = relativePath.replace(/\.(js|ts|tsx)$/, '');
        paths.push('/' + pathWithoutExtension.replace(/\\/g, '/'));
      }
    });

    return paths;
  }
