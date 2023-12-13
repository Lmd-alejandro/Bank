
import HomeNavbar from "../components/homeNavbar";
import Navbar from "../components/Navbar";
import { Stack } from "@mui/material";
import Balance from "../components/balance";


export default function Home({info}){

    
    return(
        
        <>
            <Stack spacing={10}>
                <Navbar/>
                <HomeNavbar info={info}/>
                <Balance info={info}/>
            </Stack>
            
        </>
        
    )
}