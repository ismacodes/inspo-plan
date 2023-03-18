import { Layout, Text } from "@ui-kitten/components";
import { Input, Button } from "@ui-kitten/components";
import { useState } from "react";
import { StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import { supabase } from "../supabase";

const { height, width } = Dimensions.get("window");

const AddPostScreen = () => {
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);

    const postActivity = async () => {
        setLoading(true);
        const { error } = await supabase.from("posts").insert({
            description: value,
        });
        setLoading(false);
        setValue('');
        if (error) {
            console.log('error uploading post', error)
        }
    };

    if (loading) {
        return <ActivityIndicator />
    }
    
    return (
        <Layout style={styles.container}>
            {/* <Text category="h4">Post an Activity</Text> */}
            <Input
                placeholder="Suggest an activity"
                value={value}
                onChangeText={(nextValue) => setValue(nextValue)}
                style={styles.input}
                multiline={true}
                textStyle={{ minHeight: 64 }}
            />
            <Button style={styles.button} onPress={postActivity}>
                Post
            </Button>
        </Layout>
    );
};

export default AddPostScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "80%",
        marginBottom: height * 0.01,
    },
    button: {
        width: "80%",
    },
});
