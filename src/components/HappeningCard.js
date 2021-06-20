import React, { Component, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';


import styled, { css } from "styled-components";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';

function HappeningCard(props) {

    const useStyles = makeStyles(() => ({
        content: {
            padding: 24,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white'
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
            letterSpacing: '1px',
            marginBottom: 0,
            paddingLeft: '5px',
            paddingRight: '5px'
        },

        cardMedia: {
            backgroundColor: `${props.happening.category.color}`,
            width: '64vw',
            height: '430px',
            border: '2px solid #34E7E4',
            boxShadow: '0 0 1em black'
        }
    }));

    // Generischer in dem man 
    const styles = useStyles();
    return (
        <Card className={styles.cardMedia}>
            <CardActionArea>
                <CardContent className={styles.content}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        minHeight={360}
                        color={'common.white'}
                        textAlign={'center'}

                    >
                        <Box mb={3}>
                            <Grid item xs={12}>
                                <h1 className={styles.title}>{props.happening.title}</h1>
                                <h3>25.06 um 18:00 Uhr <br />in Bludenz</h3>
                            </Grid>
                        </Box>

                        <Box mb={3}>
                            <Grid item>
                                <AccountCircleOutlinedIcon style={{ verticalAlign: 'middle' }} fontSize={"large"}></AccountCircleOutlinedIcon>
                                        Example
                                    </Grid>
                            <Grid item>
                                <StarOutlinedIcon style={{ verticalAlign: 'middle' }} fontSize={"medium"}></StarOutlinedIcon>
                                    4.9
                                </Grid>
                        </Box>

                        <Box my={3}>
                            <Grid item>
                                <GroupOutlinedIcon style={{ verticalAlign: 'middle' }} fontSize={"large"}></GroupOutlinedIcon>
                                        12 von 15 besetzt
                                    </Grid>
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


export default HappeningCard;
