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

const cards = [1, 2, 3];

const theme = createTheme();

export default function Home() {
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
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image="https://tfipost.com/wp-content/uploads/2022/04/Shinchan_in_hindi_dubbed_show-1024x571.jpg"
                                        title="ShinChan"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Shin Chan
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Shin Chan needed loan to go on a trip to Goa with his friends. His loan was approved, and he had great adventures with Action Comin.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button target="_blank" href='https://en.wikipedia.org/wiki/Crayon_Shin-chan' size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

        </ThemeProvider>
    );
}