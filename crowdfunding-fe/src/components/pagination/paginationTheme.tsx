import { Grid } from "@mui/material";
import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
interface IPaginationType {
  page: number;
  onChange: any | void;
}
const PaginationTheme: React.FC<IPaginationType> = ({ page, onChange }) => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Stack spacing={2} mt={5}>
          <Pagination
            count={10}
            color="primary"
            page={page}
            onChange={onChange}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};
export default PaginationTheme;
