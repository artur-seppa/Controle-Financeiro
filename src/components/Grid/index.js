import React from "react"
import GridItem from "../GridItem"
import * as C from "./styles"

const Grid = ({item, setItem}) => {
    const onDelete = (ID) => {
        const newArray = item.filter((transaction) => transaction.id !== ID);
        setItem(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    }

    return (
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th width={40}>Descrição</C.Th>
                    <C.Th width={40}>Valor</C.Th>
                    <C.Th width={10}>Tipo</C.Th>
                    <C.Th width={10}></C.Th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                {item?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete}/>
                ))}
            </C.Tbody>
        </C.Table>
    )
}

export default Grid;