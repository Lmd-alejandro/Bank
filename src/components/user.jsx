import {Stack, Typography } from "@mui/material";




export default function User({info}) {

    const { userData } = info
    console.log(userData)

    return(
        
        <>
            <Stack direction='row' spacing={2}>
                <Stack>
                    <img src="/src/assets/user-image.png" width={40}/>
                </Stack>
                <Stack justifyContent='flex-end' direction='column'>
                    <Stack>
                        <Typography variant="subtittle1" color='black' fontFamily='roboto' fontWeight={300}>Bienvenid@ de vuelta,</Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="h6" color='black' fontFamily='roboto' fontWeight={500}>{userData.name}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}