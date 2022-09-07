import React from 'react'
import {Creative ,CreativeInfo ,InfoTitle ,InfoDir ,InfoDesc ,Span,Anchor} from './style'
export default function About() {
    return (
        <Creative id="aboutlink">
        <div className="container">
            <CreativeInfo>
                <InfoTitle><Span>This is</Span> Me</InfoTitle>
                <InfoDir>Creative Director</InfoDir>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
                <InfoDesc>
                    Lorem ipsum dolor , Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
            </CreativeInfo>
        </div>
    </Creative>
    )
}
