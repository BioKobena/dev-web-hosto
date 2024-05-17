import * as React from 'react';
import { Dialog, DialogTitle, TextField, Table, Paper, Button, TableRow, TableHead, TableContainer, TableCell, TableBody, Modal, Box, Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function PatientAide() {

    const [openModal, setOpenModal] = React.useState(false);
    const [selectedRow, setSelectedRow] = React.useState(null);


    const [formData, setFormData] = React.useState({
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
        field7: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer les données du formulaire ici
        console.log(formData);
        handleCloseModal();
    };


    const handleRowClick = (row) => {
        setSelectedRow(row);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <h1 className='text-2xl font-semibold text-sky-900 text-center p-4'>Liste des patients à examiner</h1>
            <TableContainer component={Paper} style={{ padding: 5 }} elevation={1} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead >
                        <TableRow hover>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white" }}>Nom & Prénoms</TableCell>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white" }} align="right">Âge</TableCell>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white" }} align="right">Taille</TableCell>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white" }} align="right">Nationalité</TableCell>
                            <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white" }} align="right">Status</TableCell>
                            {/* <TableCell style={{ backgroundColor: "rgb(34 211 238)", color: "white" }} align="right">Actions</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                style={{ cursor: "pointer" }}
                                onClick={() => handleRowClick(row)}
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">
                                    {row.status === 'Pending' ? (
                                        <CircularProgress size={20} />
                                    )
                                        : (
                                            <CheckCircleIcon color="success" />
                                        )
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            width: 800,
                            maxWidth: '90%',
                            border: "none",
                            borderRadius: 5
                        }}
                    >
                        <h1 className='text-2xl text-blue-500 text-center font-semibold'>Prise des constantes</h1>

                        <h2 id="modal-title">{selectedRow && selectedRow.name}</h2>
                        <form onSubmit={handleSubmit}>
                            <Grid>
                                <TextField
                                    sx={{ border: "none" }}
                                    name="field1"
                                    label="Field 1"
                                    variant="standard"
                                    fullWidth
                                    value={formData.field1}
                                    onChange={handleInputChange}
                                    margin="normal"
                                />
                                <TextField
                                    sx={{ border: "none" }}
                                    name="field2"
                                    label="Field 2"
                                    variant="standard"
                                    fullWidth
                                    value={formData.field2}
                                    onChange={handleInputChange}
                                    margin="normal"
                                />
                            </Grid>
                            <TextField
                                name="field3"
                                label="Field 3"
                                variant="standard"
                                fullWidth
                                value={formData.field3}
                                onChange={handleInputChange}
                                margin="normal"
                            />
                            <TextField
                                name="field4"
                                label="Field 4"
                                variant="standard"
                                fullWidth
                                value={formData.field4}
                                onChange={handleInputChange}
                                margin="normal"
                            />
                            <TextField
                                name="field5"
                                label="Field 5"
                                variant="standard"
                                fullWidth
                                value={formData.field5}
                                onChange={handleInputChange}
                                margin="normal"
                            />
                            <TextField
                                name="field6"
                                label="Field 6"
                                variant="standard"
                                fullWidth
                                value={formData.field6}
                                onChange={handleInputChange}
                                margin="normal"
                            />
                            <TextField
                                name="field7"
                                label="Field 7"
                                variant="standard"

                                fullWidth
                                value={formData.field7}
                                onChange={handleInputChange}
                                margin="normal"
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Enregistrer
                            </Button>
                        </form>
                    </Box>
                </Modal>
            </TableContainer>
        </>
    );
}