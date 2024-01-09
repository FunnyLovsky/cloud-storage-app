import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { allActionCreators } from "../../../store/reducers/allActionCreators"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators, dispatch)
}