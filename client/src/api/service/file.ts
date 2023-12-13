import axios from "axios";
import { API_URL } from "../constans";
import { IFile } from "../../models/IFile";

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
}