import { StyleSheet, View,  } from "react-native";
import { Text, List } from "@ui-kitten/components";
import React from "react";
import Post from "./Post";

const PostsList = ({posts}) => {
    const renderItem = ({item, index}) => {
        return <Post item={item}/>;
    }

    return (
    <List
        data={posts}
        renderItem={renderItem}
        style={styles.container}
    />
    );
};

export default PostsList;

const styles = StyleSheet.create({
    container: {

    }
});
