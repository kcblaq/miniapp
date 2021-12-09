import React from "react"
import { makeStyles } from "@mui/styles"


const useStyles = makeStyles ((theme) =>({
    bold:{
       
        color: "red",
        // backgroundColor: "green"
    }
}))

export default function Mailer(){
    const classes = useStyles()
    return (
        <h2 className={classes.bold}> HM and MC, Are'nt thery just amazing with their amazing contacts?  </h2>
    )
}