import styled from 'styled-components'

export const Portfolioo=styled.div`
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
`

export const PrtoTitle=styled.h2`
    text-align: center;
    font-size: 35px
`

export const SpanTitle=styled.span`
    font-weight: normal
`

export const PortUl=styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0
`

export const UlItem=styled.li`
    display: inline-block;
    width: 100px;
    padding: 5px;
    background:${(props)=>props.active==="1"? "#eb5424": ""};
    @media (max-width:575px) {
            display: block;
            margin: auto;
            padding: 5px;
        }
`

export const BoxDivs=styled.div`
    width: 25%;
    float: left;
    font-size: 0;
    position: relative;
    &:hover >p{
        opacity: 1
    };
    @media (max-width:575px) {
        width: 100%;
    };
    @media (min-width:576px) and (max-width : 768px ){
            width: 50%;
    }
`

export const Image=styled.img`
    width: 100%
`

export const OverLay=styled.p`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0
`

export const OverLaySpan=styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
`
