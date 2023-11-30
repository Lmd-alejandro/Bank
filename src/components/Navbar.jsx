import Stack from '@mui/material/Stack';
import Img from "../assets/bbva.png"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const Nav = useNavigate()
    return (
        <Stack padding={"10px"} bgcolor={"#3390FF"} >
          <Stack width={"100px"} >
          <img src={Img} ></img>
          </Stack>
          </Stack>
    )
}
export default Navbar