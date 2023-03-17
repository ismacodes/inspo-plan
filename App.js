import React from "react";
import * as eva from "@eva-design/eva";
import {
    ApplicationProvider,
    IconRegistry,
    Layout,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import AppNavigator from "./components/AppNavigator";
import Header from "./components/Header";

export default () => (
    <>
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1, position: "relative" }}>
                    <IconRegistry icons={EvaIconsPack} />
                    <Header />
                    <AppNavigator />
                </SafeAreaView>
            </Layout>
        </ApplicationProvider>
    </>
);
