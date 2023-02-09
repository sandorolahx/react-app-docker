import React from 'react';
import { useInjection } from 'inversify-react';
import IUserSevice from '../../di/interfaces/IUserSevice';
import TYPES from '../../di/types';
import UserStore from './UserStore';
import { observer } from 'mobx-react-lite';
import { Button, Grid } from '@mui/material';
import clsx from 'clsx';
import { makeStyles, styled } from '@mui/styles';

const useStyles = makeStyles({
    text: {
        color: 'red',
    },
});

const User = observer(() => {
    const userService = useInjection<IUserSevice>(TYPES.UserService);
    const userSore: UserStore = React.useState(() => new UserStore('Don', 'John', 128, 21))[0];
    React.useEffect(userSore.init, []);
    const classes = useStyles();

    return (
        <Grid container direction='column' spacing={2}>
            <Grid item className={clsx(classes.text)}>
                Fullname: {userService.getFullName(userSore.user)}
            </Grid>
            <Grid item>
                Nr of holidays: {userSore.user.nrOfHolidays}
            </Grid>
            <Grid item>
                <Button variant='contained' onClick={() => userSore.increaseNrOfHolidays()}>Increase</Button>
                <MyButton variant='contained' onClick={() => userSore.decreaseNrOfHolidays()}>Decrease</MyButton>
            </Grid>
        </Grid>
    );
});

export default User;


const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});
