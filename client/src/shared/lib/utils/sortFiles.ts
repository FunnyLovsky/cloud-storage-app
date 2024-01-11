import { IFile } from "../../../entities/File/types/IFile";

export const sortFiles = (files: IFile[]) => {
    return files.sort((a, b) => (a.type === 'dir' ? -1 : b.type === 'dir' ? 1 : 0))
} 