import { Layout, Text } from "@ui-kitten/components";
import EventForm from "../components/EventForm";

const ScheduleEventScreen = () => (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <Text category="h1">Schedule a Google Calendar Event</Text> */}
        <EventForm />
    </Layout>
);

export default ScheduleEventScreen;
