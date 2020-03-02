import React, { useState } from 'react';
import { Paper, FormGroup, RadioGroup, FormControlLabel, Radio, FormLabel, Select, MenuItem, InputLabel, Button, TextareaAutosize, CircularProgress, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Registration = () => {
    const [courseValue, setCourseValue] = useState(1);
    const [selectedCourseValue, setSelectedCourseValue] = useState(0);
    const [dateTime, setDateTime] = useState(moment(new Date()).format("DD-MM-Y"));
    const [textArea, setTextArea] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);

    return (
        <div className="col-md-12" style={{ justifyContent: "center", display: "flex", paddingTop: 30 }}>
            <Paper elevation={2} style={{ width: "50%", alignSelf: "center", padding: 20 }}>
                <FormGroup>
                    <FormLabel component="legend">Course </FormLabel>
                    <RadioGroup aria-label="course" name="course" value={courseValue} onChange={(e) => {
                        setCourseValue(Number(e.target.value))
                        setSelectedCourseValue(0)
                        setTextArea("")
                    }} row>
                        <FormControlLabel value={1} control={<Radio />} label="Technical Report Writing" />
                        <FormControlLabel value={2} control={<Radio />} label="English Literature" />
                        <FormControlLabel value={3} control={<Radio />} label="Computer Sciences" />
                    </RadioGroup>
                </FormGroup>
                {courseValue == 1 &&
                    <div style={{ width: "35%", marginTop: 20 }}>
                        <InputLabel id="demo-simple-select-required-label">Select</InputLabel>
                        <Select
                            style={{ width: "100%" }}
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={selectedCourseValue}
                            onChange={(e) => {
                                setSelectedCourseValue(e.target.value)

                            }}
                        >
                            <MenuItem disabled value={0}>Select Subject</MenuItem>
                            <MenuItem value={1}>Short Reports</MenuItem>
                            <MenuItem value={2}>Annual Reports</MenuItem>
                            <MenuItem value={3}>Presentations</MenuItem>
                        </Select>
                    </div>}
                {courseValue == 2 &&
                    <div style={{ width: "35%", marginTop: 20 }}>
                        <InputLabel id="demo-simple-select-required-label">Select</InputLabel>
                        <Select
                            style={{ width: "100%" }}
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={selectedCourseValue}
                            onChange={(e) => {
                                setSelectedCourseValue(e.target.value)
                            }}
                        >
                            <MenuItem disabled value={0}>Select Subject</MenuItem>
                            <MenuItem value={1}>Poetry</MenuItem>
                            <MenuItem value={2}>Short Stories</MenuItem>
                            <MenuItem value={3}>Drama</MenuItem>
                        </Select>
                    </div>}
                {courseValue == 3 &&
                    <div style={{ width: "35%", marginTop: 20 }}>
                        <InputLabel id="demo-simple-select-required-label">Select</InputLabel>
                        <Select
                            style={{ width: "100%" }}
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={selectedCourseValue}
                            onChange={(e) => {
                                setSelectedCourseValue(e.target.value)
                            }}
                        >
                            <MenuItem disabled value={0}>Select Subject</MenuItem>
                            <MenuItem value={1}>Web Development</MenuItem>
                            <MenuItem value={2}>Desktop Software Development</MenuItem>
                            <MenuItem value={3}>Research and Analysis</MenuItem>
                        </Select>
                    </div>}

                <div style={{ width: "35%", marginTop: 20 }}>
                    <FormLabel component="legend" style={{ marginBottom: 10 }}>Date : </FormLabel>
                    <DatePicker
                        value={dateTime}
                        onSelect={(e) => {
                            if (moment(e).format('DD-MM-Y') == "20-12-2019" || moment(e).format('DD-MM-Y') == "15-01-2020" ||
                                moment(e).format('DD-MM-Y') == "01-02-2020") {
                                alert("Your selected course and subject is not offered beginning from your selected date")
                                setDateTime(moment(new Date()).format("DD-MM-Y"))
                            }
                        }}
                        onChange={(e) => {
                            setDateTime(moment(e).format('DD-MM-Y'))
                        }}

                    />
                </div>
                <div style={{ width: "100%", marginTop: 20 }}>
                    <FormLabel component="legend">Additional Notes</FormLabel>
                    <TextareaAutosize rowsMin={6} placeholder="Additional Notes"
                        value={textArea}
                        style={{ width: "100%", marginTop: 10 }} onChange={(e) => {
                            setTextArea(e.target.value)
                        }}>

                    </TextareaAutosize>
                </div>
                {isLoading ? <CircularProgress /> : <Button variant="contained" color="primary" onClick={() => {
                    setIsLoading(true)
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 3000)

                    if (textArea == "") {
                        if (courseValue == 0 || selectedCourseValue == 0) {
                            alert("Oops! Please fill all the fields")
                            setIsLoading(false)
                        } else {
                            setTimeout(() => {
                                setSuccess(true)
                            }, 3000)
                        }

                    } else {
                        if (textArea.length < 20 || textArea.length > 500) {
                            alert("Oops! Please provide text size between 20 to 500")
                        } else {
                            if (courseValue == 0 || selectedCourseValue == 0) {
                                alert("Oops! Please fill all the fields")
                                setIsLoading(false)
                            } else {
                                setTimeout(() => {
                                    setSuccess(true)
                                }, 3000)
                            }
                        }
                    }

                }}
                    style={{ marginTop: 20, alignSelf: "center", display: "flex" }}> Submit
                    </Button>}

                {isSuccess &&
                    <Dialog open={isSuccess}
                        onClose={() => { setSuccess(false) }}>
                        <DialogTitle id="alert-dialog-title">{"Success"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Your course has been successfully registered.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setSuccess(false)} color="primary">
                                Ok
                        </Button>

                        </DialogActions>

                    </Dialog>}



            </Paper>

        </div>

    );
}
export default Registration;