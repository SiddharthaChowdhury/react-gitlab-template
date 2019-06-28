import React from 'react';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './breadcrumb.scss'

export const Breadcrumb: React.FC<any> = () => {
    return(
        <Paper elevation={0} className={"paper"}>
			<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumb">
				<Link color="inherit" href="/">Account</Link>
				<Link color="inherit" href="/">Department</Link>
				<Link color="inherit" href="/">Project</Link>
				<Typography color="textPrimary">Particular</Typography>
			</Breadcrumbs>
      </Paper>
    );
}