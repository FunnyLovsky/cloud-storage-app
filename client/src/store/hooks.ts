import { TypedUseSelectorHook } from "react-redux"
import { RootState } from "./store"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { allActionCreators } from "./reducers/allActionCreators"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators, dispatch)
}