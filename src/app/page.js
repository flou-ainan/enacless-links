import LinkList from "./components/LinkList";

export default function Home() {
  const config = {
    url_foto_perfil: "https://i.ibb.co/HFYK4t6/perfil.png",
    titulo: "Enacless",
    subtitulo: "Bolsas Exclusivas",
    links:[
      {
        texto: "Grupo Exclusivo - Novidades",
        url: "https://chat.whatsapp.com/CPjCrwm6b3f1wROOfonjFr"
      },{
        texto: "Atendimento Whatsapp",
        url: "https://wa.me/message/UIMF2D2QMBGVB1"
      },{
        texto: "Acessar Catálogo",
        url: "https://wa.me/5535998026142?text=Ol%C3%A1%2C%20pode%20me%20enviar%20o%20cat%C3%A1logo%3F%0A"
      }
    ]
  }
  return (
    <LinkList config={config} />
  );
}
