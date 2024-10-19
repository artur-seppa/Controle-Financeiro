import { React, useEffect, useState, reduce } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header/index"
import Resume from "./components/Resume";
import Form from "./components/Form";

const App = () => {
    // obtem os valores do JSON de transactions
    const data = localStorage.getItem("transactions");

    // define useState das transacoes recebidas e como atualiza seu valor
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    )
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        /*
            o conjunto de valor de gastos eh obtido da lista de transicao,
            no qual filtramos os valores para pegar os itens que 
            tem expense (true) e depois mapeamos esses itens true
            para pegar o valor de amount (total) deles.
        */
        const amountExpense = transactionsList
            .filter((item) => item.expense)
            .map((transaction) => Number(transaction.amount));

        const amountIncome = transactionsList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);

        setIncome(income);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`);
    }, [transactionsList]);

    /* 
        lida com a adicao de novo valor na lista de transacoes.
        - Eh efetuado a inclusao do novo valor na lista de transacoes
        - Eh renderizado o componente com o novo valor associado
        - o localStorage eh recarregado
    */
    const handleAdd = (transaction) => {
        const newArrayTransaction = [...transactionsList, transaction];
        setTransactionsList(newArrayTransaction);

        localStorage.setItem("transactions", JSON.stringify(newArrayTransaction))
    }
    return (
        <>
            <Header />
            <Resume income={income} expense={expense} total={total}/>
            <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
            <GlobalStyle />
        </>
    )
}

export default App;