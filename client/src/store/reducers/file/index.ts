import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFile } from "../../../models/IFile"

interface FileState {
    files: IFile[],
    currentDir: string | null,
    isLoadingFiles: boolean,
    errorFiles: null | string,
    modal: boolean,
    dirStack: string[],
    path: string,
    pathStack: string[]
}

const initialState: FileState = {
    files: [],
    currentDir: null,
    errorFiles: null,
    isLoadingFiles: false,
    modal: false,
    dirStack: [],
    pathStack: [],
    path: ''
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

        addFileSuccess(state) {
            state.isLoadingFiles = false;
        },

        setModal(state, action: PayloadAction<boolean>) {
            state.modal = action.payload;
        },

        addToStack(state, action: PayloadAction<string>) {
            state.dirStack.push(action.payload)
        },

        delToStack(state) {
            state.currentDir = state.dirStack.pop() || null;
        },

        addPath(state, action: PayloadAction<string>) {
            state.pathStack.push(action.payload);
        },

        popPath(state) {
            state.path = state.pathStack.pop() || '';
        },

        setPath(state, action: PayloadAction<string>) {
            state.path = action.payload
        },

        deleteFile(state, action: PayloadAction<string>) {
           state.files = state.files.filter(file => file._id !== action.payload);
        }

    }
})

export const actionsFile = fileReducer.actions;

export default fileReducer.reducer