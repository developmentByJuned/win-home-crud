import { Box, Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function AddTask() {
  return (
    <div className="mx-2 my-8 lg:ml-20">
      <h1 className="tracking-wider lg:w-1/2 text-lg">
        Task- Prepare A/B Test
      </h1>
      <div className="mt-4">
        <TextField
          label="Title"
          autoComplete="on"
          className="w-[95%] shadow-md mb-8"
        />
        <div className="h-[40vh] w-[95%]">
          <Box height='100%'>
            <TextField
                      sx={{ flex: 1 }}
              label="Description"
              autoComplete="on"
              className="w-full h-full shadow-md mb-8"


            />
          </Box>
        </div>
      </div>
      <div className="text-center">
      <Button
        color="primary"
        variant="contained"
        size="large"
        sx={{
          borderRadius: "20px",
        }}
        className="bg-primary capitalize my-8 px-20"
      >
        Submit
      </Button>
      </div>
    </div>
  )
}
