import { Avatar, Box, Card, CardContent, Divider, Typography, Grid } from "@mui/material";
import ColorText from "../components/ColorText";
import React, { useState, useEffect } from "react";
import LatestVideoCard from "../components/LatestVideoCard";
import AppWidgetSummary from "../app/AppWidgetSummary";
import axios from "axios";
import Chart from 'react-apexcharts'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Dashboard() {
    const [electeur, setElecteur] = useState(0);
    const location = useLocation()
    const [localite, setLocalite] = useState("Boundiali")
    const [hasConnected, setHasConnected] = useState(false);

    useEffect(() => {
        const params = location.state;
        // console.log(params)

        if (params && params.localite && !hasConnected) {
            document.title = `Enrôllement des électeurs de ${params.localite}`
            // setHasConnected(true); // Commentez ou retirez cette ligne
            setLocalite(params.localite);
            toast.success(`Bienvenue sur la page d'enrôllement de ${params.localite}`);
        }
        // console.log(params)
        axios.get('http://192.168.1.54:8000/electeurs')
            .then((data) => {
                setElecteur(data.data.electeurs.length)
            }).catch((error) => {
                console.error(error)
            })
    }, [location.state, hasConnected]);


    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [19, 20, 21, 22, 23, 24, 25, 26]
            }
        },
        series: [
            {
                name: "Semaine du 30 Avril",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    });

    const [secondChart, setSecondChart] = useState({
        options: {},
        series: [44, 55],
        labels: ['Bahili Esli', 'Bio Paul',]
    })

    const containerDataInfo = { display: "flex", justifyContent: "center", alignItems: "center" }
    return (
        <Box>
            <Typography style={{ fontFamily: "Montserrat", fontWeight: "400", textAlign: "center", marginTop: 35 }} sx={styles.pageTitle} variant="h4">
                Bienvenue sur votre espace de connexion de <span style={{ marginTop: 0, color: "#FF7F00", fontWeight: "bold" }}> {localite ? localite : 'Votre localite'} </span>
            </Typography>
            <CardContent>
                <Grid container spacing={3} style={containerDataInfo}>
                    <Grid item xs={19} md={3}>
                        <AppWidgetSummary
                            title="Electeurs"
                            total={electeur > 0 ? electeur : '0'}
                            color="info"
                        />
                    </Grid>
                    <Grid item xs={19} md={3}>
                        <AppWidgetSummary
                            title="Electeurs"
                            total={electeur > 0 ? electeur : '0'}
                            color="info"
                        />
                    </Grid>
                    <Grid item xs={19} md={3}>
                        <AppWidgetSummary
                            title="Electeurs"
                            total={electeur > 0 ? electeur : '0'}
                            color="info"
                        />
                    </Grid>

                    <Grid style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", marginTop: 100 }}>
                        <Chart options={chartData.options} series={chartData.series} type="bar" width={500} height={320} />
                        <Chart options={secondChart.options} series={secondChart.series} type="donut" width="380" />
                    </Grid>
                </Grid>

            </CardContent>

            <ToastContainer />
        </Box>
    );
}

export default Dashboard;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    pageTitle: {
        mb: 2
    },
    columnsContainer: {
        columns: '280px 3',
        maxWidth: 1400
    },
    item: {
        mb: 2,
    },
    divider: {
        my: 2
    },
    videoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
        '&:hover': {
            color: 'primary.main',
            cursor: 'pointer'
        }
    },
    cardAction: {
        mt: 2
    },
    ideaContent: {
        display: 'flex',
    },
    ideaImage: {
        width: 80,
        alignSelf: 'center',
        ml: 5
    },
    ideaQuestion: {
        fontSize: '0.9rem',
        fontWeight: 500,
        my: 2
    },
    avatar: {
        width: '30px',
        height: 'auto',
        marginRight: 1
    },
    postStats: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridAutoRows: '25px'
    },
    postAuthorSection: {
        display: 'flex',
        alignItems: 'center',
        my: 3
    },
    postMeta: {
        mr: 1,
        fontSize: '0.8rem',
        color: 'neutral.normal'
    },
    videoThumbnail: {
        width: 80,
        ml: 'auto'
    },
    commentRow: {
        display: 'flex',
        alignItems: 'flex-start',
        mt: 2
    },
    commentDetailsSection: {
        display: 'flex',
        alignItems: 'center',
    },
    commentText: {
        fontSize: '0.8rem',
        mt: 0.5,
        mr: 2
    },
    insiderImage: {
        width: '100%',
        mt: 1
    }
}
