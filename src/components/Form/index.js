import { React, useState } from "react";
import * as C from "./styles";
import { IoHandLeft } from "react-icons/io5";
import Grid from "../Grid";

const Form = ({handleAdd, transactionsList, setTransactionsList}) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!")
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
        }

        /*
            Repassa o valor da transacao a funcao que adiciona 
            o item a transacao do App
        */
        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense
        }

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    }

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </C.InputContent>

                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input value={amount} onChange={(e) => setAmount(e.target.value)} />
                </C.InputContent>

                <C.RadioGroup>
                    <C.Input type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setExpense(!isExpense)} />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>
                    <C.Input type="radio" id="rExpenses" name="group1" onChange={() => setExpense(!isExpense)} />
                    <C.Label htmlFor="rExpenses">Saída</C.Label>
                </C.RadioGroup>

                <C.Button onClick={handleSave}>ADICIONAR</C.Button>
            </C.Container>
            <Grid item={transactionsList} setItem={setTransactionsList}/>
        </>
    )
}

export default Form;