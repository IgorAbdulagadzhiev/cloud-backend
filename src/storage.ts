import { randomUUID } from 'crypto';
import { diskStorage } from 'multer';

const normalizeFileName = (req, file, callback) => {
  const fileExtName = file.originalname.split('.').pop();

  callback(null, `${randomUUID()}.${fileExtName}`);
};

export const fileStorage = diskStorage({
  destination: './uploads',
  filename: normalizeFileName,
});
