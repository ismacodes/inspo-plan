import { Layout, Text, Divider } from "@ui-kitten/components";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { supabase } from "../supabase";
import PostsList from "../components/PostsList";

const InspoScreen = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("posts at init", posts);

    const fetchInspoPosts = async () => {
        try {
            setLoading(true);
            const { data } = await supabase.from("posts").select();
            setPosts(data);
            console.log("posts after set", posts);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchInspoPosts();
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <Layout style={{ flex: 1 }}>
            {/* <Text category="h1">Get Activity Inspiration</Text> */}
            <PostsList posts={posts}/>
        </Layout>
    );
};

export default InspoScreen;
