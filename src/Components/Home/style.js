import styled from 'styled-components'
import home from "../../assets/home-bg.jpg"
export const HomeDiv =styled.div`
    height: 500px;
    background: url(${home});
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`

export const Information=styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)

`
export const HomeTitle=styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    @media (max-width:768px) {
            font-size: 40px;
            color: #fff
        }
     @media (max-width:575px) {
                font-size: 30px;
            }
        }
    `
export const HomeInfo=styled.h2`
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
    @media (max-width:768px) {
        font-size: 20px
    }
`
export const HomeDsc=styled.p`
     font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px;
    @media (max-width:768px) {
        font-size: 15px
    }
`
export const MySpan=styled.span`
    color:#000
`
export const HomeBtn=styled.button`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    &:hover{
        background: #fff;
        color: #eb5424
    }
`