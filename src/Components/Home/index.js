import React from 'react'
import {HomeDiv ,Information ,HomeTitle ,HomeInfo ,HomeDsc ,MySpan,HomeBtn} from './style.js'
export default function Home() {
    return (
            <HomeDiv>
            <div className="container">
                <Information>
                    <HomeTitle>Ahmed Khaled</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDsc>
                        Iam a professional <MySpan>UX Designer</MySpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDsc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </Information>
            </div>
        </HomeDiv>
    )
}
