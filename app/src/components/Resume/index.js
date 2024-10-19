import React from "react";
import * as C from './styles'
import ResumeItem from "../ResumeItem";

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from "react-icons/fa"

const Resume = ({income, expense, total}) => {
    return (
        <C.Container>
            <ResumeItem title="Entradas" value={income} Icon={FaRegArrowAltCircleUp}/>
            <ResumeItem title="Saídas" value={expense} Icon={FaRegArrowAltCircleDown}/>
            <ResumeItem title="Total" value={total} Icon={FaDollarSign}/>
        </C.Container>
    )
}

export default Resume;