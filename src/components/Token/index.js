import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    
`

const QuarterText = styled.h1`
    color: #4ec8ca
`

const PrimaryText = styled.h1`
    color: white;
`

const SecondaryText = styled.h1`
    color: white;
    font-size: 10px;
`

const QuarterContainers = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Token = () => {


    return (
        <MainDiv id="token">
            <QuarterContainers>
                <QuarterText>Tokenomics</QuarterText>
                <PrimaryText>Ecosystem/Interest Fund (50%)</PrimaryText>
                <SecondaryText>This allocation will go to the various
needs of Misfits DeFi. For example, we may allocate tokens for
partnerships which may be used to incentivize new investors and
project sign ups for the Misfits DeFi ecosystem. Other uses will be
for liquidity, rewarding token holders through token airdrops, and
more.</SecondaryText>
            </QuarterContainers>

            {/* <QuarterContainers>
                <QuarterText>Q4 2021</QuarterText>
                <PrimaryText>Development of token</PrimaryText>
                <PrimaryText>KYC/AML</PrimaryText>
            </QuarterContainers>

            <QuarterContainers>
                <QuarterText>Q1 2022</QuarterText>
                <PrimaryText>Misfits DeFi Token Sale</PrimaryText>
            </QuarterContainers>

            <QuarterContainers>
                <QuarterText>Q2 2022</QuarterText>
                <PrimaryText>USA Misfits Delivery Platform Development</PrimaryText>
            </QuarterContainers> */}
        </MainDiv>
    )
}

export default Token