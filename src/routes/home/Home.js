import React from 'react'
import './home.scss'
import { Carousel } from 'antd-mobile';

import { KBTabBar } from '@/components/'
import { getHomeSlideshow,getCatItems } from '@/store/actions/homeAction'

//引入这个高阶函数
import { connect } from 'react-redux'

//共享state中的数据，可以用this.props进行访问
function mapStateToProps(store){
    return{
        slideshow:store.home.slideshow,
        CatItems:store.home.CatItems
    }
}

//把action生成器方法，映射到props上面
function mapActionToProps(dispatch){
    return {
        init:(params)=>dispatch(getHomeSlideshow(params)),
        catitem:(params)=>dispatch(getCatItems(params))
    }
}

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            imgHeight: 170,
        }
    }
    componentDidMount() {
        this.props.init({})
        this.props.catitem({})
    }
    createClassify(){
        return this.props.CatItems.map((ele,idx)=>(
            <div key={idx}>
                <img src={ele.image_src} alt=""/>
                <span></span>
            </div>
        ))

    }
    render(){
        console.log(this.props)
        let { slideshow }=this.props
        return (
            <div className="kb-home">
                {/* 头部标题 */}
                <div className="home-title">
                    优购商场
                    <div className="title-but">
                        <span>...</span>
                        <span>O</span>
                    </div>
                </div>

                {/* 搜索框 */}
                <div className="search">
                    <div className="search-box">搜索</div>
                </div>

                {/* 轮播图 */}
                <div>
                    <Carousel
                    autoplay={false}
                    infinite
                    >
                    {slideshow.map(val => (
                        <a
                        key={val}
                        href={val.image_src}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={val.image_src}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />
                        </a>
                    ))}
                    </Carousel>
                
                </div>
                
                {/* 分类 */}
                <div className="classify">   
                    {this.createClassify()}
                </div>
                
                {/* 图片列表 */}
                <div className="imgslist">
                    <div>
                       <h1>img</h1>
                       <div className="prefecture">
                           <div></div>
                           <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                           </div>
                       </div>
                    </div>
                </div>
                <KBTabBar></KBTabBar>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(Home)