import { Container } from "@mui/material";
import { Toolbar } from "@mui/material";
import { AppBar, Select, MenuItem } from "@mui/material";
import React, { useContext} from "react";
import {Link} from 'react-router-dom';
import CryptoState from "../CryptoContext"


//example button as a component

// function Button({text, bg, padding}) {
//   return (
//     <div>
//       <button
//         className={`
//           ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
//           rounded-sm text-white transition ${bg}`}
//       >
//         <span>{text}</span>
//       </button>
//     </div>
//   );
// }


const Header = () => {


  // const { currency, setCurrency } = CryptoState();

  return (
   <>
   {/* Navbar */}
   <AppBar color="transparent" position='static'>
    <Container>
      <Toolbar>
        <div className="px-2">
          <Link to="/"><p className='text-lg bg-gradient-to-tr from-cyan-500 to-blue-500 font-bold cursor-pointer text-[#207020]'>Crypto<span className='text-[#50d920]'>Watch</span></p></Link>
          </div>

          {/* Select  */}
         <Select variant='outlined' className='w-24 h-10 mr-4 text-white'>
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'CAD'}>CAD</MenuItem>
            <MenuItem value={'INR'}>INR</MenuItem>
            <MenuItem value={'GBP'}>GBP</MenuItem>
         </Select>

      </Toolbar>
    </Container>
   </AppBar>
   Header
   </>
  );
}

export default Header;
