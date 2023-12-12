export interface IFile {
    name: string,
    type: string,
    accessLink: string,
    size: number,
    path: string,
    user: string,
    parent: IFile,
    date: string,
    child: IFile[],
    _id: number
}