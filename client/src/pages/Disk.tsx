/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import Container from "../shared/ui/Container/Container";
import DiskHeader from "../components/DiskHeader/DiskHeader";
import { useAppSelector } from "../shared/lib/hooks/useAppSelector";
import { useActions } from "../shared/lib/hooks/useActions";

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