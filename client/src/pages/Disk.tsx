/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useActions, useAppSelector } from "../store/hooks";
import Container from "../components/ui/Container/Container";
import DiskHeader from "../components/DiskHeader/DiskHeader";

const Disk = () => {

    const {currentDir} = useAppSelector(state => state.fileReducer);
    const {getFiles} = useActions()

    useEffect(() => {
        getFiles(currentDir!)
    }, [currentDir])


    return(
        <Container>
            <DiskHeader/> 
        </Container>
    )
}

export default Disk;