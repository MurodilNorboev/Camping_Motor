import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

export default function BasicModalDialogusedCar() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button
       startDecorator={<DownloadRoundedIcon />}
        onClick={() => setOpen(true)}
      >
       Download PDF
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} sx={{
        zIndex: 99999
      }}> 
        <ModalDialog>
        <div style={{ cursor: 'pointer',width:"100%",display:'flex',justifyContent:"end",height:'0px' }} onClick={() => setOpen(false)}>
            <p style={{margin:'-45px -35px 0px 0px',fontSize:'20px'}}>X</p>
          </div>
          <DialogTitle sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>Create new project</DialogTitle>
          <DialogContent>Fill in the information of the project.</DialogContent>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input required />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}