import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from "react";

const CardContainer = (props) => {
    const t = props.today;
    const c = props.className;
    const b = props.body;
    const color = ["a"] ;
    return(
<Container today={t} className={c} sx={{borderRadius: '5%', bgcolor: props.color, boxShadow: 10, transform:'scale(0.95)',p:2,margin:2,width:350, height:350}}>
    <h3 align="center">{b["state_name"]?b["state_name"]:"Total"}</h3>
    <Table>
<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
<TableCell component="th" scope="row">
        Active Cases
</TableCell>
<TableCell align="right">
    {t ? b["new_active"] - b["active"] : b["new_active"]}
</TableCell>
</TableRow>

<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
<TableCell component="th" scope="row">
    Positive Cases
</TableCell>
<TableCell align="right">
    {t ? b["new_positive"] - b["positive"]: b["new_positive"]}
</TableCell>
</TableRow>

<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
<TableCell component="th" scope="row">
    Cases Cured
</TableCell>
<TableCell align="right">
    {t ? b["new_cured"] - b["cured"]: b["new_cured"]}
</TableCell>
</TableRow>

<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
<TableCell component="th" scope="row">
    Death Cases
</TableCell>
<TableCell align="right">
    {t ? b["new_death"] - b["death"]:b["new_death"]}
</TableCell>
</TableRow>
</Table>
</Container>
    )}

    export default CardContainer;