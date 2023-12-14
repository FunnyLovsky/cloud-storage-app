import { actionsFile } from ".";
import FileService from "../../../api/service/file";
import { IFile } from "../../../models/IFile";
import { AppDispatch } from "../../store";


const getFiles = (dirId: string) => 
    async (dispatch: AppDispatch) => {
        try {
            dispatch(actionsFile.fileFetching());
            const data = await FileService.getFiles(dirId);
            dispatch(actionsFile.fileFetchingSuccess(data));
            console.log(data)
        } catch (e: any) {
            dispatch(actionsFile.fileFetchingError(e.message))
        }
}

const createDir = (dirId: string | null, name: string) => 
    async (dispatch: AppDispatch) => {
        try {
            dispatch(actionsFile.fileFetching());
            const data = await FileService.createDir(dirId, name);
            dispatch(actionsFile.addFile(data));
            dispatch(actionsFile.addFileSuccess());
        } catch (e: any) {
            dispatch(actionsFile.fileFetchingError(e.message))
        }
}

const backToDir = () => 
    (dispatch: AppDispatch) => {
        dispatch(actionsFile.delToStack())
        dispatch(actionsFile.popPath())
}

const openDirHandler= (currentDir: string, file: IFile, path: string) => 
    (dispatch: AppDispatch) => {
        dispatch(actionsFile.addToStack(currentDir));
        dispatch(actionsFile.setCurrentDir(file._id))
        dispatch(actionsFile.addPath(path));
        dispatch(actionsFile.setPath(file.path))
}

const uploadFile = (dirId: string | null, file: any) => 
    async (dispatch: AppDispatch) => {
        try {
            dispatch(actionsFile.fileFetching());
            const formData = new FormData();
            formData.append('file', file)

            if(dirId) {
                formData.append('parent', dirId);
            }
            const data = await FileService.uploadFile(formData);
            dispatch(actionsFile.addFile(data));
            dispatch(actionsFile.addFileSuccess());
        } catch (e: any) {
            dispatch(actionsFile.fileFetchingError(e.message))
        }
}


export const fileActionCreators = {
    getFiles,
    createDir,
    backToDir,
    openDirHandler,
    uploadFile
}