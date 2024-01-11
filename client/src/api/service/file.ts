import axios, {AxiosProgressEvent} from "axios";
import { API_URL } from "../../shared/api/urls";
import { IFile } from "../../entities/File/types/IFile";



export default class FileService {
    static async getFiles(dirID: string | null)  {
        const params = dirID ? `?parent=${dirID}` : '';
        const response = await axios.get<IFile[]>(`${API_URL}/file` + params, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data
    }

    static async createDir(dirID: string | null, name: string) {
        const response = await axios.post<IFile>(`${API_URL}/file`, {
            name,
            parent: dirID,
            type: 'dir'
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        return response.data
    }

    static async uploadFile(formData: FormData) {
        const response = await axios.post<IFile>(`${API_URL}/upload`, formData, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                if(progressEvent.total) {
                    const percentCompleted = Math.floor((progressEvent.loaded * 100 ) / progressEvent.total);
                    console.log('loading:', percentCompleted)
                }
            }
        });
        
        return response.data
    }

    static async downloadFile(file: IFile) {
        return await fetch(`${API_URL}/download?id=${file._id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    static async deleteFile(file: IFile) {
        const response = await axios.delete(`${API_URL}/file?id=${file._id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data; 
    }
}