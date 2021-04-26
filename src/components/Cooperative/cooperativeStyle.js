import styled from 'styled-components';

export const Div = styled.div`
width:100%;
height:300px;
background-color: #B1D3E0;
margin: 10px;
padding: 0 20px;
color: #3F3D80;
display: flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
text-align:left;
border-radius:10px;
border: 0.0.5rem solid white;
box-shadow:0px 8px 14px rgba(0,0,0,0.25), 0px 6px 6px rgba(0,0,0,0.22), 0px 6px 6px rgba(0,0,0,0.22);

&:hover{
    animation: sideway 0.2s ease-out 0.3s forwards;
}
img{
    height:40px;
    background:#f3f3f3;
    padding:8px;
    border-radius:50%;
}

h1{
    line-height:2.2rem;
    margin-bottom: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: sentence-case;
}

p{
line-height: 1.35rem;
font-size:1.0rem;
}

@media only screen and (min-width: 480px) and (max-width:768px){
   width: 45%;
   margin: 30px 15px;
} 

@media only screen and (min-width:769px){
width:25%;
margin: 30px;
}
@keyframes sideway{
    from{
        background-color:white;
    }
    to{
        background-color:#2787aa;
        color: white;
    }
}

}
`
export const FeatureContainer = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:center;
padding: 15px;
width:100%;
height:fit-content;

@media only screen and (min-width: 480px) and (max-width:768px){
   padding:25px;
} 

@media only screen and (min-width:769px){
 padding:30px
}
`;
export const FeatureLink = styled.a`
text-decoration:none;
}
`;