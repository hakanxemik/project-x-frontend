import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from "react";
import { getUser } from '../api';
import moment from "moment";

function ProfileCardFront(props) {

    const [user, setUser] = useState('');

    useEffect(() => {
        getUser().then(response => {
            setUser(response)
          })
    }, [])

    const useStyles = makeStyles((theme) => ({
        content: {
            padding: 0,
        },
        cta: {
            display: 'block',
            textAlign: 'center',
            color: '#fff',
            letterSpacing: '3px',
            fontWeight: 200,
            fontSize: 12,
        },
        title: {
            color: '#fff',
            letterSpacing: '1.5px',
            marginBottom: 0,
            paddingLeft: '5px',
            paddingRight: '5px',
            paddingTop: '-30px'
        },
        bio: {
            fontSize: '14px',
        },
        cardMedia: {
            mixBlendMode: 'exclusion',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '70vw',
            height: '65vh',
            border: '2px solid',
            borderColor: '#34E7E4',
            borderRadius: '25px',
            boxShadow: '0 0 1em black'

        },
        profileImage: {
            objectFit: 'cover',
            width: '125%',
            height: '300px'
        }
    }));

    const styles = useStyles();
    return (
        <Card className={styles.cardMedia}>

            <CardActionArea>
                <CardContent className={styles.content}>
                    <div className={styles.image}>
                        <img className={styles.profileImage} src={props.profileImage ? props.profileImage : 'https://socialup-api.herokuapp.com' + user.avatar}></img>
                    </div>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        minHeight={320}
                        color={'common.white'}
                        textAlign={'center'}

                    >
                        <Box mb={1}>
                            <Grid item xs={12}>
                                <h1 className={styles.title}>{user.firstname}, {moment().diff(user.birthdate, 'years')}</h1>
                                <p className={styles.bio}>{user.bio}</p>
                            </Grid>
                        </Box>

                        <Box mb={2}>

                        </Box>

                        <Box my={2}>

                        </Box>
                    </Box>
                    <Typography className={styles.cta} variant={'overline'}>
                        TAP FÜR MEHR
                        </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default ProfileCardFront;
