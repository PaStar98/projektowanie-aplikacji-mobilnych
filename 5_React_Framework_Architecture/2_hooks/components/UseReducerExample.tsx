import React, { useReducer } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

function factorialize(num: number): number {
  if (num < 0) return 0;
  if (num === 0) return 1;
  if (!Number.isInteger(num)) return 0;
  if (num > 170) return Infinity;

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

const initialValue = 1;

const init = (val: number) => ({ result: val });

type State = {
  result: number;
};

type Action =
    | { type: "FACTORIAL" }
    | { type: "SQRT" }
    | { type: "ADD" }
    | { type: "RESET"; payload: number };

const UseReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer(
      (state: State, action: Action): State => {
        switch (action.type) {
          case "FACTORIAL":
            if (!Number.isInteger(state.result)) {
              alert("Factorial requires an integer. Try adding 1 or resetting.");
              return state;
            }
            return { result: factorialize(state.result) };

          case "SQRT":
            // Guard: Prevent NaN for negative numbers
            if (state.result < 0) return { result: 0 };
            return { result: Math.sqrt(state.result) };

          case "ADD":
            return { result: state.result + 1 };

          case "RESET":
            return init(action.payload);

          default:
            return state;
        }
      },
      initialValue,
      init
  );

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Math Reducer</Text>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Current Result:</Text>
          <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
            {/* Format decimal places for cleaner UI */}
            {Number.isInteger(state.result) ? state.result : state.result.toFixed(4)}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={[styles.button, styles.factorialButton]}
              onPress={() => dispatch({ type: "FACTORIAL" })}
          >
            <Text style={styles.buttonText}>Factorial (!)</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={[styles.button, styles.addButton]}
              onPress={() => dispatch({ type: "ADD" })}
          >
            <Text style={styles.buttonText}>Add 1 (+1)</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={[styles.button, styles.sqrtButton]}
              onPress={() => dispatch({ type: "SQRT" })}
          >
            <Text style={styles.buttonText}>Square Root (√)</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={[styles.button, styles.resetButton]}
              onPress={() => dispatch({ type: "RESET", payload: initialValue })}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.explanationContainer}>
          <Text style={styles.explanationTitle}>Rules & Limits:</Text>
          <Text style={styles.explanation}>• Factorial: Only works on whole numbers.</Text>
          <Text style={styles.explanation}>• Infinity: Occurs if result {'>'} 170!</Text>
          <Text style={styles.explanation}>• Precision: Root is rounded to 4 decimals.</Text>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  resultContainer: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 16,
    marginBottom: 30,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  resultLabel: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: "#888",
    marginBottom: 8,
  },
  result: {
    fontSize: 40,
    fontWeight: "900",
    color: "#007AFF",
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 12, // Note: Ensure your RN version supports gap, otherwise use marginBottom
    marginBottom: 30,
  },
  button: {
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  factorialButton: { backgroundColor: "#FF3B30" },
  addButton: { backgroundColor: "#34C759" },
  sqrtButton: { backgroundColor: "#FF9500" },
  resetButton: { backgroundColor: "#8E8E93" },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  explanationContainer: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 12,
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  explanation: {
    fontSize: 13,
    color: "#555",
    lineHeight: 20,
  },
});

export default UseReducerExample;