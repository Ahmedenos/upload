import styled from 'styled-components'
export const NavSection=styled.div`
    padding: 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
`
export const Logo =styled.div` 
    width: 50%;
    float: left;
    @media (max-width : 991px) {
            width: 100%;
            float: none;
            text-align:center
        }
`

export const LogoText=styled.h2`
    font-size: 30px;
    font-weight: bold
`
export const UlList=styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding:0;
    @media (max-width:991px){
        width: 100%;
        float:  none;
        margin-top: 20px;
        display: block;
        text-align: center
    }
`

export const ListItem= styled.li`
    display: inline-block;
    @medi (max-width:991px){
        display: inline-block;
        text-align: center;
    }
`

export const Anchor =styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
        color: #eb5424
    }

`
