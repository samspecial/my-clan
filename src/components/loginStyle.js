import styled from 'styled-components';

export const Form = styled.form`
  padding:2rem 0 4rem 0;
  width:100%;
  margin:0 auto;
  height:100%;

label{
    font-size:0.85rem;
}

input{
  display:block;
  width:100%;
  // padding:0.5rem;
  background:#dbd9d9;
  margin-bottom:10px;
  color:#00223a;
  border:none;
  outline:none;
  font-size:0.75rem;
  padding:0.8rem;
}

input:focus{
  border:1px solid #999;
}

select{
width:50%;
padding:0.4rem 0.5rem;
border:none;
display:inline-block;
}

@media (min-width:480px) and (max-width:768px) {
  padding:1rem 0 2rem 0;
}
@media (max-width:479px){
  padding:0.5rem 0 1rem 0;
}
`;
export const Button = styled.button`
padding:0.5rem 1.4rem;
display:block;
font-size:0.75rem;
color:white;
outline:none;
font-weight:600;
border:none;
border-radius:4px;
background:#00223a;
:hover{
animation: buttonBackground 500ms ease-in-out 500ms forwards;
}
@keyframes buttonBackground{
  from{
    background:#00223a;
    color: white;
  }to{
    background:#B1D3E0;
    color:#00223a;
  }
}
`;
export const SignUpContainer = styled.div`
width:100%;
height:100vh;
padding:2rem 10rem;
display:flex;
align-items:center;
justify-content:center;
background:linear-gradient(to left, #b1d3e0 50%, #E8E2E2 50%);

@media (min-width:480px) and (max-width:768px) {
  padding:1.5rem 4rem;
  height:70vh;
  background:linear-gradient(to left, #b1d3e0 55%, #E8E2E2 45%);
}
@media (max-width:479px){
  flex-direction:column;
  padding:1.5rem 2.5rem;
  height:60vh;
  background:linear-gradient(-45deg, #b1d3e0 55%, #E8E2E2 45%);
}
`;

export const Div = styled.div`
width:50%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;

img{
  display:block;
  padding:10px;
  border-radius:50%;
  background:lightblue;
  margin-bottom:50px;
}

h2{
  font-size:2rem;
  color:#00223a;
  font-weight:700;
  width:250px;
  line-height:1.25;
  text-transform:capitalize;
}
@media (min-width:480px) and (max-width:768px) {
  width:70%;
  img{
    margin-bottom:30px;
  }
  h2{
    font-size:1.5rem;
    line-height:1.35;
    width:200px;
  }
}
@media (max-width:479px){
  width:100%;
  img{
    margin-bottom:20px;
  }

  h2{
    font-size:1rem;
    line-height:1.50;
    width:175px;
    margin-bottom:20px;
  }
}
`;
export const IconLink = styled.a`
padding: 3px;
border-radius: 50%;
display:inline-flex;
flex-flow:row nowrap;
justify-content:center;
align-items:center;
margin-right: 15px;
font-size: 12px;
text-align:center;
width:30px;
height:30px;
color:white;
transition: all 500ms ease-in-out;

&:hover{
  transform: scale(0.95);
}
}
`;