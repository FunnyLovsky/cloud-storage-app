import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFile } from "../../../models/IFile"

interface FileState {
    files: IFile[],
    currentDir: string | null,
    isLoadingFiles: boolean,
    errorFiles: null | string,
    modal: boolean,
}

const initialState: FileState = {
    files: [],
    currentDir: null,
    errorFiles: null,
    isLoadingFiles: false,
    modal: false
}

const fileReducer = createSlice({
    name: 'file',
    initialState,
    reducers: {
        fileFetching(state) {
            state.isLoadingFiles = true
        },

        fileFetchingSuccess(state, action: PayloadAction<IFile[]>) {
            state.isLoadingFiles = false;
            state.files = action.payload;
        },

        fileFetchingError(state, action: PayloadAction<string>) {
            state.isLoadingFiles = false;
            state.errorFiles = action.payload;
        },

        setCurrentDir(state, action: PayloadAction<string>) {
            state.currentDir = action.payload;
        },

        addFile(state, action: PayloadAction<IFile>) {
            state.files.push(action.payload);
        },

        setModal(state, action: PayloadAction<boolean>) {
            state.modal = action.payload;
        }
    }
})

export const actionsFile = fileReducer.actions;

export default fileReducer.reducer