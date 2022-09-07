import React  from 'react'
// import axios from 'axios'
import {Portfolioo ,PrtoTitle ,PortUl, SpanTitle,UlItem, BoxDivs,Image,OverLay ,OverLaySpan} from './style'
import one from"../../assets/portfolio-img1.jpg"
import two from"../../assets/portfolio-img2.jpg"
import three from"../../assets/portfolio-img3.jpg"
import four from"../../assets/portfolio-img4.jpg"
import five from"../../assets/portfolio-img5.jpg"
import six from"../../assets/portfolio-img6.jpg"
import seven from"../../assets/portfolio-img8.jpg"
import eight from"../../assets/portfolio-img7.jpg"
// import "../../js/data.json"
// import n from"../../../public/data.json"
export default function Portfolio() {
//     const [images ,setImages]=useState([])
//     useEffect(() => {
//         axios.get("./data.json").then (res => {setImages(res.data.portfolio)})
//     }, [])
// // console.log(n)
//     const myPortfolio=images.map(item=>{
//         return(
//             <BoxDivs key={item.id} id="portlink">
//             <Image src={close} alt=""/>
//             <OverLay>
//                 <OverLaySpan>
//                     Show Image
//                 </OverLaySpan>
//             </OverLay>
//         </BoxDivs>
//         )
//     })

    return (
        <Portfolioo>
            <PrtoTitle><SpanTitle>My</SpanTitle> Portfolio</PrtoTitle>
            <PortUl>
                <UlItem active="1">All</UlItem>
                <UlItem>HTML</UlItem>
                <UlItem>Photoshop</UlItem>
                <UlItem>Wordpress</UlItem>
                <UlItem>Mobile</UlItem>
            </PortUl>
            
            <div className="box">
             {/* {myPortfolio} */}
      
             <BoxDivs id="portlink">
                <Image src={one} alt=""/>
                <OverLay>
                    <OverLaySpan>
                        Show Image
                    </OverLaySpan>
                </OverLay>
            </BoxDivs>  
             <BoxDivs  id="portlink">
                <Image src={two} alt=""/>
                <OverLay>
                    <OverLaySpan>
                        Show Image
                    </OverLaySpan>
                </OverLay>
            </BoxDivs>  
             <BoxDivs  id="portlink">
                <Image src={three} alt=""/>
                <OverLay>
                    <OverLaySpan>
                        Show Image
                    </OverLaySpan>
                </OverLay>
            </BoxDivs>  
             <BoxDivs  id="portlink">
                <Image src={four} alt=""/>
                <OverLay>
                    <OverLaySpan>
                        Show Image
                    </OverLaySpan>
                </OverLay>
            </BoxDivs>  
             <BoxDivs  id="portlink">
                <Image src={five} alt=""/>
                <OverLay>
                    <OverLaySpan>
                        Show Image
                    </OverLaySpan>
                </OverLay>
            </BoxDivs>  
             <BoxDivs  id="portlink">
                <Image src={six} alt=""/>
                <OverLay>
                    <OverLaySpan>
                        Show Image
                    </OverLaySpan>
                </OverLay>
            </BoxDivs>  
             <BoxDivs  id="portlink">
                <Image src={seven} alt=""/>
                <OverLay>
                    <OverLaySpan>
                        Show Image
                    </OverLaySpan>
                </OverLay>
            </BoxDivs>  
             <BoxDivs  id="portlink">
                <Image src={eight} alt=""/>
                <OverLay>
                    <OverLaySpan>
                        Show Image
                    </OverLaySpan>
                </OverLay>
            </BoxDivs>  
            </div>
           
        </Portfolioo>
    )
}
