import React from "react";
import * as C from './styles'
import ResumeItem from "../ResumeItem";

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from "react-icons/fa"

const Resume = () => {
    return (
        <C.Container>
            <ResumeItem title="Entradas" value="1000" Icon={FaRegArrowAltCircleUp}/>
            <ResumeItem title="Saídas" value="1000" Icon={FaRegArrowAltCircleDown}/>
            <ResumeItem title="Total" value="1000" Icon={FaDollarSign}/>
        </C.Container>
    )
}

export default Resume;