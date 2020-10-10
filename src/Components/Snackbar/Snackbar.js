import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from '@material-ui/core';
import { CloseIcon } from '@material-ui/icons/Close';

function SnackbarAlert(props) {
    

    const snackbarCloseHandler = (event, reason) => {
        if(reason === 'clickaway') {
            return;
        }
        props.setOpen(false);
    }
    
    return (
        <div>
            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} open={props.open} autoHideDuration={3000} onClose={snackbarCloseHandler}
                message="Movie added to your watch list" action={
                    <React.Fragment>
                        <IconButton size="small" onClick={snackbarCloseHandler}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    )
}

export default SnackbarAlert;