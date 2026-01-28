import { Testimonial, FaqItem, BonusItem } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Júlia Martins",
    role: "Mãe do Pedro (5 anos)",
    before: "O Pedro detestava as aulinhas online, chorava para não fazer.",
    after: "Com as brincadeiras, ele nem percebe que está estudando. Aprendeu as cores e animais em uma semana!",
    image: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Prof. Ana Clara",
    role: "Educação Infantil",
    before: "Era difícil manter a atenção da turma de 4 anos por muito tempo.",
    after: "As dinâmicas de movimento salvaram minhas aulas. As crianças ficam engajadas e pedem mais.",
    image: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Ricardo Alves",
    role: "Pai da Sofia (8 anos)",
    before: "Eu queria ensinar em casa, mas não sou fluente e não sabia por onde começar.",
    after: "O material é tão autoexplicativo que consigo brincar com ela e nós dois aprendemos juntos.",
    image: "https://picsum.photos/100/100?random=12"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Para qual idade é indicado?",
    answer: "O material é ideal para crianças de 3 a 10 anos. As dinâmicas são adaptáveis: mais simples para os pequenos (focadas em oralidade e movimento) e mais elaboradas para os maiores (incluindo escrita básica)."
  },
  {
    question: "Eu (pai/mãe) preciso saber inglês fluente?",
    answer: "Não! Todas as dinâmicas vêm com instruções em português e o vocabulário necessário. Você consegue aplicar mesmo tendo conhecimento básico."
  },
  {
    question: "Serve para professores e escolas?",
    answer: "Com certeza. É uma ferramenta poderosa para 'warm-ups' (aquecimento), quebra-gelo e atividades lúdicas em sala de aula ou reforço escolar."
  },
  {
    question: "Como recebo o material?",
    answer: "O acesso é imediato via e-mail. É um arquivo digital (PDF) que você pode baixar no celular, tablet ou imprimir para usar longe das telas."
  },
  {
    question: "É um curso com vídeo-aulas?",
    answer: "Não. É um banco de atividades práticas para tirar a criança da frente da tela e promover a interação real entre pais, filhos e alunos."
  }
];

export const BONUSES: BonusItem[] = [
  {
    title: "Certificado de Conclusão",
    description: "Um lindo certificado oficial para imprimir, preencher e comprovar o aprendizado do seu pequeno bilíngue.",
    value: "R$ 47,00"
  },
  {
    title: "Guia: Tímidas e Agitadas",
    description: "Estratégias pedagógicas específicas para engajar crianças tímidas e canalizar a energia das mais agitadas.",
    value: "R$ 29,90"
  },
  {
    title: "Kit Flashcards ABC",
    description: "Coleção completa de cartões visuais para imprimir e ensinar o alfabeto e números de forma visual.",
    value: "R$ 35,90"
  }
];