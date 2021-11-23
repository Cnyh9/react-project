import React, { useState } from 'react'
import { Container } from '@mui/material';
import { ClientData } from '../components/cash/ClientData';


export const Cash = () => {


    const [loading, setloading] = useState(true)

    return (
        <div>
            <Container>
                {loading
                    ? <ClientData/>
                    : <div></div>
                }
            </Container>
        </div>
    )
}