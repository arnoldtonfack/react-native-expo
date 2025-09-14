import Specer from "@/components/Specer";
import ThemeButton from "@/components/ThemeButton";
import ThemedInput from "@/components/ThemedInput";
import ThemeText from "@/components/ThemeText";
import ThemeView from "@/components/ThemeView";
import { Colors } from "@/constant/colors";
import { useUser } from "@/hooks/userUser";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
const Login = () => {
  const { login } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setError(null);
    try {
      await login(email, password);
    } catch (error: any) {
      setError(error.message);
    }
    console.log("====================================");
    console.log("Login button clicked", email, password);
    console.log("Login button clicked");
    console.log("====================================");
  };
  return (
    <ThemeView style={styles.container}>
      <ThemeText title={true} style={styles.titre}>
        Login to your account
      </ThemeText>
      <Specer height={20} />

      <ThemedInput
        placeholder="Email"
        style={{ width: "80%", marginBottom: 10 }}
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <ThemedInput
        placeholder="Password"
        style={{ width: "80%", marginBottom: 10 }}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />

      <ThemeButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ThemeButton>
      {error && <Text style={styles.error}>{error}</Text>}

      <Specer height={10} />
      <Link href="/register">
        <ThemeText style={{ textAlign: "center" }}>Register instead</ThemeText>
      </Link>

    </ThemeView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titre: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 4,
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});
