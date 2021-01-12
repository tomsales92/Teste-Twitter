import styled from 'styled-components';


export const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

 form {
   margin-top: 10px;
 }

 form input {
   height: 25px;
   border: 1px solid #adadad;
   margin: 2px;
   height: 35px;
   width: 250px;
   border-radius: 5px;

   ::placeholder {
     padding-left: 10px;
   }

 }

 button {
   width: 125px;
   border: 0;
   color: #fff;
   background: #1A91DA;
   padding: 10px;
   border-radius: 10px;
   
   :hover {
     background: #2e86ba;
   }
 }
`;

export const Tweet = styled.div`
  width: 90%;
  
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin: 10px;
  margin-top: 10px;


  img {
    width: 100px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  strong {
    font-size: 25px;
  }

  span {
    font-size: 18;
    font-style: italic;

  }
`;