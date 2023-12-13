import { actionsFile } from ".";
import FileService from "../../../api/service/file";
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

const backToDir = () => {
    
}

export const fileActionCreators = {
    getFiles,
    createDir,
    backToDir
}