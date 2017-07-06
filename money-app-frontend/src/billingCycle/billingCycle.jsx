import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PageHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import BillingCycleList from './billingCycleList'
import Form from './billingCycleForm'
import { selectTab, showTabs } from '../common/tab/tabActions'
import { create } from './billingCycleActions'

export class BillingCycle extends Component {

    componentWillMount()
    {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render()
    {
        return (
            <div>
                <PageHeader title='Ciclo de pagamentos' small='Cadastro'/>
                <Content>
                    <Tabs>
                        
                        <TabsHeader>
                        
                            <TabHeader label='Listar' icon='bars' target='tabList'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Editar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>                            
                        
                        </TabsHeader>
                        
                        <TabsContent>
                            
                            <TabContent id='tabList'>
                                <BillingCycleList />
                            </TabContent>
                            
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create}/>
                            </TabContent>

                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>                            
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = distaptch => 
    bindActionCreators( { selectTab, showTabs, create }, distaptch)

export default connect(null, mapDispatchToProps) (BillingCycle)