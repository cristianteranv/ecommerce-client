import { Box, Alert, AlertTitle } from "@mui/material";

const Confirmation = () => {
    return (
      <Box m="90px auto" width="80%" height="50vh">
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Your order has been placed successfully. {" "}
          <strong>Enjoy your purchase!</strong>
        </Alert>
      </Box>
    );
  };
  
  export default Confirmation;