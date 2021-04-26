import styled from 'styled-components';
export const Nav = styled.div`
height: 10vh;
background: #6C63FF;
display:flex;
// justify-content:space-between;
// align-items:center;

.logo{
    position:absolute;
    text-decoration:none;
    left:4%;
    top:4%;
    z-index:2;
    color:white;
}
.logo:hover{
    color:#3F3D16;
}
ul{
    display:flex;
    list-style: none;
    width:50%;
    height:100%;
    justify-content:space-around;
    align-items:center;
    margin-left:auto;
}
ul li a{
    color:white;
    text-decoration:none;
    font-size:16px;

}
@media screen and (max-width:768px){
     position:relative;  
    .logo{
        top:40%;
        left:5%;
    }
    ul{
           position:fixed;
           background:#6C63FF;
           height: 100%;
           width:100%;
           flex-direction:column;
           z-index:1;
         clip-path:circle(100px at 90% -17%);
         -webkit-clip-path:circle(100px at 90% -17%);
         transition: all 1s ease-out;
           
    }

    .nav-links.open{
        clip-path:circle(1000px at 90% -17%);
        -webkit-clip-path:circle(1000px at 90% -17%);
        pointer-events:all;
    }
    .line{
            width:30px;
            height:3px;
            background:#fff;
            margin:5px;
     }

     .line:nth-child(3){
         width:15px;
     }
     .cross{
         width:30px;
         height:3px;
         background:#fff;
         
     }
     .cross:first-child{
         transform-origin:40%;
        transform: rotate(45deg);
    }
     .cross:last-child{
         transform-origin: 50%;
         transform: rotate(315deg);
     }

    .harmburger{
         position:absolute;
         cursor:pointer;
         right:5%;
         top:50%;
         transform:translate(-5%, -50%);
          z-index:2; 
      }

}
`






