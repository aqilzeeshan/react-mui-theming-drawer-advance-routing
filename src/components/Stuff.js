import * as React from 'react';

import {Button,Typography,Box} from '@mui/material';

/*
https://mui.com/system/properties/
https://mui.com/system/getting-started/the-sx-prop/
*/

//See how theme-aware properties are created for sx

const Stuff = ()=>{
    const test = false
    return(
      <div>
        <Typography variant="subtitle1">subtitle</Typography>
        <Typography variant="h3">Theming Example</Typography>
        <Typography
          variant="myVariant"
          sx={{ color: "customRibRed.superLight", m: 2, p: 2 }}
        >
          Hello CodeSandbox
        </Typography>
        <Typography variant="myVariant">Something</Typography>
        <h3>Start editing to see some magic happen!</h3>
        <Button variant="contained" color="secondary">
          hi
        </Button>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          98.3 K
        </Box>
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
          vs. last week
        </Box>
        <Button 
            sx={[
               {
                    width:{
                        xs:100,
                        sm:200,
                        md:300,
                        lg:400,
                        xl:500
                    },
                    m:4,
                    border:5,
                    borderColor:"secondary.main",
                    "&.MuiButton-root":{
                        height:"100px"
                    }
               },
               test && {
                    border:10,
                    borderColor:"primary.main"
               }
            ]} variant="contained">Button1</Button>
      </Box>
      </div>
)
}



export default Stuff