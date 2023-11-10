import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "./index";

export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
export const useDispatch = () => useAppDispatch<AppDispatch>();
