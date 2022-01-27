import { createContext } from "react";
import TRAVEL_DATA from "./data";

const DataContext = createContext(TRAVEL_DATA);

export default DataContext;