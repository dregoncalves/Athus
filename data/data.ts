import { AnimationObject } from "lottie-react-native";

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
  title: string;
  titleColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require("../assets/animations/Lottie1.json"),
    title: "Encontre talentos por perto",
    titleColor: "#3B2C00",
    text: "Conecte-se com profissionais da sua região e fortaleça a economia local.",
    textColor: "#A88923",
    backgroundColor: "#FFF6D1", // tom areia claro, combina com o ícone e o estilo
  },
  {
    id: 2,
    animation: require("../assets/animations/Lottie2.json"),
    title: "Contrate com segurança",
    titleColor: "#3A2B28",
    text: "Avaliações e perfis ajudam você a fazer a escolha certa com confiança.",
    textColor: "#B75C30",
    backgroundColor: "#E8D7C0", // azul claro, moderno e suave
  },
  {
    id: 3,
    animation: require("../assets/animations/Lottie3.json"),
    title: "Valorize quem está ao seu lado",
    titleColor: "#4B2E2B",
    text: "Dê visibilidade a quem faz a diferença na quebrada. Juntos somos mais fortes.",
    textColor: "#B9573C",
    backgroundColor: "#FBE5D9", // amarelo pastel alegre, vibrante como o tema da favela viva
  },
];

export default data;
