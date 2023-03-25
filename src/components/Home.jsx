import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';


const theme = createTheme();

export default function Home() {
    
    const cards = {
        items: [

            { ImgUrl: "https://tfipost.com/wp-content/uploads/2022/04/Shinchan_in_hindi_dubbed_show-1024x571.jpg", Title: "ShinChan", Description: "Shin Chan needed loan to go on a trip to Goa with his friends. His loan was approved, and he had great adventures with Action Comin." },
            { ImgUrl: "https://wallpapers.com/images/featured/6ag1ry72uy2s9jmg.jpg", Title: "Doreamon", Description: "Doreamon's time machine was broken due to Nobitas carelessness so he decided to use loaner, now he is having fun in the 24th century. " },
            { ImgUrl: "https://cdn.sonicgang.com/wp-content/uploads/2019/05/Seesheemaru-large-min.jpg", Title: "Sishimaru", Description: "Sishimaru was put on a strict diet by Hatori, so he needed personal loan to buy chocolate roll, 🤫 why fear when loaner is here" }
        ]
    };
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Loaner
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Loaner - makes loan approval system easier. Wanna see if your loan application gets approved? Hop in, enter your details and get the status.
                        </Typography>

                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Our Happy Customers
                    </Typography>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards ? cards.items.map((card, key) => (
                            <Grid item key={key} xs={12} sm={6} md={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={card.ImgUrl}
                                        title={card.Title}

                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {card.Title}
                                        </Typography>
                                        <Typography variant="body2" >
                                            {card.Description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant='outlined' href={window.localStorage.getItem('uid')?"/dashboard":"/signin"} size="small">Apply Loan Now</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )) : <CircularProgress />}
                    </Grid>
                </Container>
            </main>

        </ThemeProvider>
    );
}