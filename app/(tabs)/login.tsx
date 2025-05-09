import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
} from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [lembrar, setLembrar] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.logo}
      />

      <View style={styles.formBox}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="exemplo@gmail.com"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="*************"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <View style={styles.options}>
          <View style={styles.checkboxContainer}>
            <Switch value={lembrar} onValueChange={setLembrar} />
            <Text style={styles.checkboxLabel}>Lembrar-me</Text>
          </View>
          <Text style={styles.link}>Esqueci a senha</Text>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/servicos")}
        >
          <Text style={styles.loginButtonText}>Logar</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Não tem conta?{" "}
          <Text style={styles.link} onPress={() => router.push("/cadastro")}>
            Crie uma!
          </Text>
        </Text>

        <Text style={styles.or}>Ou entre com:</Text>

        <View style={styles.socialContainer}>
          {/* Substituir pelos ícones reais quando tiver */}
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },
  logo: { width: 60, height: 60, marginBottom: 20 },
  formBox: {
    backgroundColor: "#eee",
    width: "90%",
    borderRadius: 20,
    padding: 20,
    alignItems: "stretch",
  },
  label: { fontSize: 14, marginBottom: 4 },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    alignItems: "center",
  },
  checkboxContainer: { flexDirection: "row", alignItems: "center" },
  checkboxLabel: { marginLeft: 8, fontSize: 12 },
  link: { color: "#d4af37", fontSize: 13 },
  loginButton: {
    backgroundColor: "#d4af37",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  loginButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  registerText: { textAlign: "center", fontSize: 13, marginBottom: 10 },
  or: { textAlign: "center", fontSize: 13, marginVertical: 10 },
  socialContainer: { flexDirection: "row", justifyContent: "center", gap: 20 },
  socialIcon: { width: 36, height: 36, marginHorizontal: 10 },
});
