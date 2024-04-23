import { Box, TableCell, Typography, styled } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
  padding: '40px',
}));

export const BoldText = styled(Typography)(() => ({
    fontWeight: 'bold',
}));

export const StyledTableCell = styled(TableCell)(() => ({
  width: '100px',
  height: '100px',
  display: 'flex',
  marginRight: '20px',
}))

