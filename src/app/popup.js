import * as React from 'react';
import Link from "next/link";
import { FormControl, InputLabel, Select, TextField, MenuItem } from "@mui/material";
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';

export default function PopUp() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Button variant="contained" onClick={handleClickOpen}>Login / Register</Button>
            <Dialog open={open} onClose={handleClose}>
                <div className='flex flex-col justify-center gap-[24px] w-[300px] rounded-lg p-6'>
                    <div className="flex items-center justify-between w-full">
                        <div className="cursor-default font-medium text-[20px]">LogIn</div>
                        <CloseIcon className="cursor-pointer" onClick={handleClose} />
                    </div>
                    <TextField label="ФИО" variant="outlined" />
                    <TextField label="Email" variant="outlined" />
                    <TextField label="Пароль" type="password" />
                    <Link href={"/profile"}>
                        <Button variant="contained">Login / Register</Button>
                    </Link>
                </div>
            </Dialog>
        </React.Fragment>
    )
}