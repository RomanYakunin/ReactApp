import {useLocation,Navigate} from 'react-router-dom';

const RequareAuth =(children)=>{
  // const location=useLocation();
   const auth=false;
   
   /*if (!auth) {
       return <Navigate to='/lk' state={{from: location}}/>
   }*/
   return children;
}
export {RequareAuth};