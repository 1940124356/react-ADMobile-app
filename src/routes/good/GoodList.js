import React from 'react'
import './goodlist.scss'
import { KBTabBar,KBHeader } from '@/components/'


import { getgoodlist } from '@/store/actions/goodAction'

//高阶函数
import { connect } from 'react-redux'

//共享state
function mapStateToProps(store){
    return{
        good_list:store.good.list
    }
}

//把action构造器上的方法映射进来
function mapActionToProps(dispatch){
    return {
        goodList:(params)=>dispatch(getgoodlist(params))
    }
}

class GoodList extends React.Component{

    componentDidMount(){

    }
    render(){
        console.log(this.props)
        return (
            <div className="good-goodlist">
                <KBHeader></KBHeader>
                <div className="good_list_cat">
                    <div>213</div>
                    <div>231</div>
                    <div>qwe</div>
                    <div>wqe</div>
                    <div>ewqe</div>
                    <div>wqe</div>
                </div>
                <KBTabBar></KBTabBar>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(GoodList)