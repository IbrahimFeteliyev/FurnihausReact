import React from 'react'
import { Box, Modal, Typography } from '@mui/material';

function Model(props) {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Modal
                open={props.openModal}
                onClose={props.closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="col-9 col-md-8 col-lg-6" sx={style}>
                    <div className="row">
                        <div className="col-lg-6">
                            <img class="img-fluid" src={props.img} alt="" />

                        </div>   
                        <div className="col-lg-6">
                            <Typography className='mb-3' id="modal-modal-title" variant="h6" component="h2">
                                {props.name}
                            </Typography>
                            <Typography className='mb-3' id="modal-modal-title" variant="h6" component="h2">
                               Price: {props.price}$
                            </Typography>
                        </div>
                    </div>
                </Box>

            </Modal>
        </>

    )
}

export default Model