import { StyleSheet } from 'react-native';
import HooksExamples from '@/components/HooksExamples';
import { View } from '@/components/Themed';
import UserName from "@/Workspace/Zad5/UserName";
import UserSurname from "@/Workspace/Zad5/UserSurname";
import InvitationCard from "@/Workspace/Zad7/InvitationCard";
import DataTimer from "@/Workspace/Zad8/DataTimer";
import {useEffect, useState} from "react";
import DataTimer2 from "@/Workspace/Zad9/DataTimer2";
import RandomNumberGenerator from "@/Workspace/Zad10/RandomNumberGenerator";
import UseStateExample from "@/components/UseStateExample";
import UseEffectExample from "@/components/UseEffectExample";
import UseRefExample from "@/components/UseRefExample";
import ForwardRefExample from "@/components/ForwardRefExample";
import UseReducerExample from "@/components/UseReducerExample";
import UseDeferredValueExample from "@/components/UseDeferredValueExample";
export default function TabOneScreen() {
    const [randomNumber, setRandomNumber] = useState<number>(0);

    return (
        <View style={styles.container}>
            <UseDeferredValueExample />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
