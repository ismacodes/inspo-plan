import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import { Text, Card } from "@ui-kitten/components";

const {height, width} = Dimensions.get('window');

const Post = ({ item }) => {
    return (
        <Card style={styles.card}>
            <View>
                <Text>{item.description}</Text>
                <Text />
                <Text appearance='hint'>{item.created_at}</Text>
            </View>
        </Card>
    );
};

export default Post;

const styles = StyleSheet.create({
    card: {
        marginVertical: height * .01,
        marginHorizontal: height * .01,
        borderRadius: '20%',
    },
});
