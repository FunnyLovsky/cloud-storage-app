export interface IFile {
    name: string,
    type: string,
    accessLink: string,
    size: number,
    path: string,
    user: string,
    parent: IFile,
    child: IFile[]
}