import LinkList from "./components/LinkList";

export default function Home() {
  const config = {
    url_foto_perfil: "https://i.ibb.co/HFYK4t6/perfil.png",
    titulo: "Mariana Enacles",
    subtitulo: "Bolsas Clássicas em Crochê",
    links:[
      {
        texto: "Grupo Exclusivo - Novidades",
        url: ""
      },{
        texto: "Atendimento Whatsapp",
        url: ""
      },{
        texto: "Acessar Catálogo",
        url: ""
      }
    ]
  }
  return (
    <LinkList config={config} />
  );
}
