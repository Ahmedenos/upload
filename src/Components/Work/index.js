import React  from 'react'
import {WorkDiv ,WorkTitle, Span,Part ,Icon ,PartTitle ,Line ,PartDes} from "./style.js"
// import axios from 'axios';

export default function Work() {
    // const [data ,setData]=useState([])
    // useEffect(() => {
    //     axios.get('data.json').then((res) => { setData(res.data.works)} )
    //   },[]);
    //   const myWorkList=data.map((item)=>{
    //    return (
    //     <Part first={item.id} key={item.id}>
    //     <Icon className={item.icon_name}></Icon>
    //     <PartTitle>{item.title}</PartTitle>
    //     <Line/>
    //     <PartDes>
    //         {item.body}
    //     </PartDes>
    // </Part>
    // )
    // })
    return (
       <WorkDiv id="worklink">
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>  
                 {/* {myWorkList} */}
                 <Part  first="1">  
                    <Icon className="icon fa fa-chain fa-2x"></Icon>
                    <PartTitle>"Mobile Ux"</PartTitle>
                    <Line/>
                    <PartDes>
                        {/* {item.body} */}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        . Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </PartDes>
                </Part>
                 <Part  >  
                    <Icon className="icon fa fa-bolt fa-2x"></Icon>
                    <PartTitle>"Mobile Ux"</PartTitle>
                    <Line/>
                    <PartDes>
                        {/* {item.body} */}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        . Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </PartDes>
                </Part>
                 <Part  >  
                    <Icon className="icon fa fa-tachometer fa-2x"></Icon>
                    <PartTitle>"Mobile Ux"</PartTitle>
                    <Line/>
                    <PartDes>
                        {/* {item.body} */}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        . Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </PartDes>
                </Part>
            </div>
        </WorkDiv>
    )
}
