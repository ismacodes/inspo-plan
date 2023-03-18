import { StyleSheet, View, Dimensions } from "react-native";
import { useState } from "react";
import { Text, Input, Button } from "@ui-kitten/components";
import DateTimePicker from "@react-native-community/datetimepicker";

const { height, width } = Dimensions.get("window");

const EventForm = () => {
    const [guest, setGuest] = useState("");
    // const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());

    return (
        <View style={styles.container}>
            <Text style={{fontSize: height * .035, margin: height * .025}}>Schedule an Event</Text>
            {/* <DateTimePicker
                mode="date"
                value={date}
                style={styles.input}
                onChange={(event, date) => setDate(date)}
            /> */}
            <DateTimePicker
                mode="datetime"
                value={startTime}
                style={styles.input}
                onChange={(event, date) => setStartTime(date)}
            />
            <DateTimePicker
                mode="datetime"
                value={endTime}
                style={styles.input}
                onChange={(event, date) => setEndTime(date)}
            />
            <Input
                placeholder="Add Guest Email"
                value={guest}
                onChangeText={(nextValue) => setGuest(nextValue)}
                style={styles.guestAndButton}
                size="medium"
            />
            <Button style={styles.guestAndButton}>Create Event</Button>
        </View>
    );
};

export default EventForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        // width: height * 0.3,
        // backgroundColor: 'red'
        marginTop: height * 0.01,
    },
    guestAndButton: {
        width: height * 0.25,
        marginBottom: height * 0.01,
        marginTop: height * 0.01,
    },
});
