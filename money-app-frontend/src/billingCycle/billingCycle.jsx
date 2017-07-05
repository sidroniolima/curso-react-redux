import React, { Component } from 'react'

import PageHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

export class BillingCycle extends Component {

    render()
    {
        return (
            <div>
                <PageHeader title='Ciclo de pagamentos' small='Cadastro'/>
                <Content>
                    Ciclo de pagamentos
                </Content>
            </div>
        )
    }
}

export default BillingCycle