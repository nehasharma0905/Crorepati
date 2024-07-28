import { Box } from "@mui/material"
import { Grid } from "react-loader-spinner"

export const Loader = (props) => {
    return (
        <Box className={`loader ${props.className ?? ""}`}>
            <Grid
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
            />
        </Box>
    )
}