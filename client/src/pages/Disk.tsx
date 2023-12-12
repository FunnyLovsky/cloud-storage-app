/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useActions, useAppSelector } from "../store/hooks";
import Container from "../components/ui/Container/Container";
import DiskHeader from "../components/DiskHeader/DiskHeader";
import FileList from "../components/FileList/FileList";
import Loader from "../components/ui/Loader/Loader";

const Disk = () => {

    const {currentDir, isLoadingFiles} = useAppSelector(state => state.fileReducer);
    const {getFiles} = useActions()

    useEffect(() => {
        getFiles(currentDir!)
    }, [currentDir])

    if(isLoadingFiles) {
        return(
            <Loader/>
        )
    }

    return(
        <Container>
            <DiskHeader/>
            <FileList/>
        </Container>
    )
}

export default Disk;