import LinkList from "@/app/components/LinkList";

export default function Home() {
  const config = {
    url_foto_perfil: "https://i.ibb.co/HFYK4t6/perfil.png",
    titulo: "Mariana enacles",
    subtitulo: "Bolsas Clássicas em Crochê",
    links:[
      {
        texto: "Tutoriais Gratuitos - Youtube",
        url: "https://www.youtube.com/watch?v=m6xkmyNA_g4&list=PLmAcT57iO9YVP2bpPNjlvyPISFyhhYk0N"
      },{
        texto: "Grupo Vip Telegram",
        url: "https://t.me/marianaenacles"
      }
    ]
  }
  return (
    <LinkList config={config} />
  );
}
