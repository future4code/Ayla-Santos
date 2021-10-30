import styled from 'styled-components'

export const PageContainer=styled.div `
width: 100vw;
display: flex;
justify-content: center;
height: 80vh;

`
export const PersonContainer= styled.div `
border: 1px solid black;
    width: 50%;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    padding: 15px;
    height: 80vh;

`

export const PersonImage = styled.img `

width: 25vw;
height:55vh;
display: flex;
justify-content: start;
flex-direction:center;
align-items: start;
margin-left: 50px;



`

export const PersonName = styled.h2 `
display: flex;
justify-content:space-between;
flex-direction:column-reverse;
align-items: flex-end;
text-align: center;
font-size: 20px;
margin-top= 5px;
`

export const PersonBio = styled.p `
display: flex; 
align-itens: flex-start;
flex-direction:column-reverse; 
justify-content: center; 
font-size: 20px;
`

export const ChooseButton = styled.button `


`

export const ContainerListaMatches = styled.div `
    border: 1px solid black;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    width:60%;
    // margin: 0.1em;
`

export const CardImg = styled.div`
width: 15%;
height: 30%;
display: flex;
justify-content: start;
align-items: start;
margin-left: 50px;
`
export const PageContainerMatches = styled.div `
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
height: 80vh;

`