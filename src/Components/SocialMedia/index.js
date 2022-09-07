import React  from 'react'
import {Social ,SocialMediaa ,Icon ,SocialPar ,Span ,SpanInfo} from "./styled.js"
// import axios from 'axios'
// import dataa from "../../data.json"
// import d from "../../../public/js/data.json"
export default function SocialMedia() {

    // const [social ,setSocial]=useState([])
    // useEffect(()=>{
    //     axios.get(dataa).then(res=>{
    //         setSocial(res.data.social)
    //     })
    // })
    // const mySocil=social.map(item=>{
    //     return(
    //     <Social key={item.id} items={item.id}>
    //         <Icon className={item.icon}></Icon>
    //         <SocialPar>
    //             <Span>{item.title}</Span>
    //             <SpanInfo>{item.body}</SpanInfo>
    //         </SocialPar>
    //     </Social>
    //     )
    // })

    return (
        <SocialMediaa>
            
     {/* {mySocil} */}

     <Social items="1">
            <Icon className="fa-brands fa-facebook-f"></Icon>
            <SocialPar>
                <Span>Follow Me on</Span>
                <SpanInfo>Social Facebook</SpanInfo>
            </SocialPar>
        </Social>
     <Social items="3">
            <Icon className="fa-brands fa-twitter"></Icon>
            <SocialPar>
                <Span>Tweet Me on</Span>
                <SpanInfo>Social twitter</SpanInfo>
            </SocialPar>
        </Social>
     <Social items="2">
            <Icon className="fa-brands fa-pinterest"></Icon>
            <SocialPar>
                <Span>Pin Me on</Span>
                <SpanInfo>Social Pinterest</SpanInfo>
            </SocialPar>
        </Social>

    </SocialMediaa>
    )
}
