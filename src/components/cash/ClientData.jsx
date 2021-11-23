import { Button, List, ListItem, ListItemButton } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, removeCustomerAction } from '../../store/customerReduser'
import { fetchCustomers } from '../../asyncActions/customers'
import { addCashAction, getCashAction } from '../../store/cashReduser'
import { CashModal } from './CashModal'



export const ClientData = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    const [showAlert, setShowAlert] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const hideAlert = () => setShowAlert(false)

    const submitHandler = () => {
        const customer = {
            name: inputValue,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
        setInputValue('')
        setShowAlert(false)
        
    }

    
    const addCash = () => {
        dispatch(addCashAction(10))
    }

    const getCash = () => {
        dispatch(getCashAction(10))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div>
            <div style={{marginBottom: 20, fontSize: 40}}>{cash}</div>
            <div>
                <Button onClick={() => addCash()}>Пополнить счет</Button>
                <Button onClick={() => getCash()}>Снять со счета</Button> 
                <Button onClick={() => setShowAlert(true)}>Добавить клиента</Button> 
                <Button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</Button> 
            </div>
            <div style={{marginTop: 20}}>
                {!customers.length
                    ? <div>Клиенты отсутствуют</div>
                    : <List>
                        {customers.map(customer => 
                            <ListItem>
                                <ListItemButton 
                                    onClick={() => removeCustomer(customer)} 
                                    key={customer.id}
                                >
                                    {customer.name}
                                </ListItemButton> 
                            </ListItem>
                        )}
                    </List>
                } 
            </div> 
            <CashModal 
                showAlert={showAlert}
                hideAlert={hideAlert}
                inputValue={inputValue}
                setInputValue={setInputValue}
                submitHandler={submitHandler}
            />
        </div>
    )
}