import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const Trellocard = () => {
    return (
        <Card>
        <Typography gutterBottom>
          Word of the Day
        </Typography>
    </Card>
    );
}

const style = {
    container: {
        borderRadius: 20,
    },
};

export default Trellocard;