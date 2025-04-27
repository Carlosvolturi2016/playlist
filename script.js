// Referências aos elementos de áudio e controle
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const currentTrackDisplay = document.getElementById('current-track');
const albumCover = document.getElementById('album-cover');
const volumeSlider = document.getElementById('volume-slider');

const tracks = [
    { src: './musicas/Acende o fogo (Set a fire + Espontâneo) • DROPS.mp3', cover:'fotos/coração em chamas.jpg' , title: 'Acende o Fogo' },
    { src: 'musicas/Adoração espontânea- Onde estão os filhos_.mp3', cover: 'fotos/noiva.jpg', title : 'Onde está os Filhos' },
    { src: 'musicas/04 - Manancial.mp3', cover: 'fotos/aline.jpeg', title : 'Aline Barros- Manancial'},
    { src: 'musicas/1- Casa do Pai.mp3', cover: 'fotos/aline1.jpg',title : 'Aline Barros- casa do pai'},
    { src: 'musicas/05 A Caminhada.mp3', cover: 'fotos/alvaro1.jpg', title : 'Alvaro Tito A Caminhada'},
    { src: 'musicas/01 Estou Contigo.mp3', cover: 'fotos/alvaro.jpg', title : 'Estou Contigo'},
    { src: 'musicas/Amigo Fiel (Faithful Friend).mp3', cover: 'fotos/amigo_fiel.jpg', title : 'Amigo Fiel' },
    { src: 'musicas/AMBIENTE DE GLÓRIA -  Reuel e Dany Silva _ MEVAM MUSIC _ Live Session.mp3', cover: 'fotos/ambiente_de_gloria.jpg', title: 'Ambiente da Glória' },
    { src: 'musicas/Alma Cansada.mp3', cover: 'fotos/cansada.jpg', title : 'Alma Cansada'},
    { src: 'musicas/05-Alma  Abatida.mp3', cover: 'fotos/algemas.jpg', title : 'Mattos Nascimento - Alma  Abatida'},
    { src: 'musicas/04 - Mattos Nascimento - Algemas Caíram.mp3', cover: 'fotos/algemas.jpg', title : 'Mattos Nascimento - Algemas Caíram'},
    { src: 'musicas/Atrai Meu Coração.mp3', cover: 'fotos/corazon.jpg', title : '/Atrai Meu Coração'},
    { src: 'musicas/Autoridade e Poder   Marcos Góes.mp3', cover: 'fotos/loc.gif', title : 'Autoridade e Poder '},
    { src: 'musicas/A Tua Palavra.mp3', cover: 'fotos/atuapalavra.jpg', title : 'A Tua Palavra'},
    { src: 'musicas/01-Até o Fim.mp3', cover: 'fotos/mt.jpg', title : ' Mattos Nascimento -Até o Fim'},
    { src: 'musicas/A Hora de Partir.mp3', cover: 'fotos/tempo.jpg', title : '/A Hora de Partir'},
    { src: 'musicas/Basta uma palavra Ft Tuca Nascimento.mp3', cover: 'fotos/palavra revelada.jpg', title : 'Basta uma Palavra' },
    { src: 'musicas/Beija-me Com Tua Glória (Ao Vivo).mp3', cover: 'fotos/beija.jpg', title : '/Beija-me Com Tua Glória'},
    { src: 'musicas/Bem Querer - Marcos Góes.mp3', cover: 'fotos/bem.jpg', title : 'Bem Querer - Marcos Góes'},
    { src: 'musicas/Be One Music - Rei Do Meu Coração.mp3', cover: 'fotos/rei.jpg', title : 'Rei do meu Coração'},
    { src: 'musicas/39 - Mattos Nascimento - Breve Vem o Dia.mp3', cover: 'fotos/breve.jpg', title : 'Mattos Nascimento - Breve Vem o Dia'},
    { src: 'musicas/1- Calma - Álvaro Tito.mp3', cover: 'fotos/4.jpg', title : 'Calma' },
    { src: 'musicas/Canção de Isaque.mp3', cover: 'fotos/altar.jpg', title : 'Canção de Isaque'},
    { src: 'musicas/Cetro De Justiça.mp3', cover: 'fotos/cetro.jpg', title : 'Cetro De Justiça'},
    { src: 'musicas/Confissão (Ao Vivo).mp3', cover: 'fotos/confissão.jpg', title : 'Confissão (Ao Vivo)'},
    { src: 'musicas/Voz de muitas Águas - Como prometeste.mp3', cover: 'fotos/muitas aguas.jpg', title : 'Como Prometeste' },
    { src: 'musicas/Dia de Pentecoste (Ao Vivo).mp3', cover: 'fotos/pentecoste.jpg', title : 'Dia de Pentecoste (Ao Vivo)'},
    { src: 'musicas/DEUS DE MILAGRES _ THIAGO GODOI & MATTOS NASCIMENTO.mp3', cover: 'fotos/coração.jpg', title : 'DEUS DE MILAGRES'},
    { src: 'musicas/03-Deus me Chamou.mp3', cover: 'fotos/mt.jpg', title : 'Mattos Nascimento - Deus me Chamou'},
    { src: 'musicas/X2Download.app - Glória em Glória - Nic&Rachel Billman [Som do Reino - Vol 1] (128 kbps).mp3', cover: 'fotos/caminho.jpg', title : 'De glória em glória' },
    { src: 'musicas/13.. Quebra tudo Deus 2.mp3', cover: 'fotos/dede.jpg', title : 'DEDE-Quebra tudo Deus'},
    { src: 'musicas/É Ele (Ao Vivo) • DROPS.mp3', cover: 'fotos/ele.jpg', title : 'É Ele'},
    { src: 'musicas/És a estrela da manhã.mp3', cover: 'fotos/sol.jpg', title : 'És a estrela da manhã'},
    { src: 'musicas/Espírito Santo.mp3', cover: 'fotos/santo.jpg', title : 'Espírito Santo'},
    { src: 'musicas/ESTÁS AQUI _ Suzano Selmo.mp3', cover: 'fotos/passos.jpg', title : 'Estás Aqui'},
    { src: 'musicas/01 Estou Contigo.mp3', cover: 'fotos/alvaro.jpg', title : 'Estou Contigo'},
    { src: 'musicas/Eu pertenço ao Senhor - Templo Soul.mp3', cover: 'fotos/templo.jpg', title : 'Eu pertenço ao Senhor - Templo Soul' },
    { src: 'musicas/Gerson Rufino I Eu te escolhi _DVD RECONSTRUÇÃO_ [Clipe Oficial].mp3', cover: 'fotos/10.jpg', title : 'Eu te Escolhi' },
    { src: 'musicas/1 Faz outra vez como na primeira vez.mp3', cover: 'fotos/denovo.jpg', title : '/Faz outra vez como na primeira vez'},
    { src: 'musicas/Faz Resplandecer.mp3', cover: 'fotos/resplandecer.jpg', title : 'Faz Resplandecer'},
    { src: 'musicas/02 Fale com Jesus.mp3', cover: 'fotos/shi.jpg', title : 'Shirley Carvalhais- Fale com Jesus'},
    { src: 'musicas/Fernandinho _ Eis que Estou à Porta (Álbum Único - Live).mp3', cover: 'fotos/porta.jpg', title : 'Eis que Estou à Porta'},
    { src: 'musicas/Fernandinho _ Moisés (Álbum Único - Live).mp3', cover: 'fotos/moises.jpg', title : 'Fernandinho _ Moisés (Álbum Único - Live).mp3'},
    { src: 'musicas/Formoso Tu És.mp3', cover: 'fotos/casa na rocha.jpg', title : '/Formoso Tu És'},
    { src: 'musicas/Fogo em Teus Olhos - Ao Vivo _ Abdiel Arsenio.mp3', cover: 'fotos/abdiel.jpg', title : 'Fogo em Teus Olhos - Ao Vivo _ Abdiel Arsenio'},
    { src: 'musicas/Fogo de Deus.mp3', cover: 'fotos/arder.jpg', title : '/Fogo de Deus.mp3'},
    { src: 'musicas/O Fogo Arderá.mp3', cover: 'fotos/ardera.jpg', title : 'O Fogo Arderá'},
    { src: 'musicas/Pr Gidel lannes, Meu Pai, Ministério Filho do Seu Amor.mp3', cover: 'fotos/adoção.jpg', title : 'Filho do Seu Amor'},
    { src: 'musicas/GIDEL E CAROL Louvor Nas tábuas do meu coração.mp3', cover: 'fotos/dentro.jpg', title : 'Louvor Nas tábuas do meu coração'},
    { src: 'musicas/24 Com Ele.mp3', cover: 'fotos/gerson.avif', title : 'Gerson Rufino-Com Ele'},
    { src: 'musicas/Há Poder no Sangue de Jesus.mp3', cover: 'fotos/fazei em memória de mim.jpg', title : 'Há Poder no Sangue de Jesus'},
    { src: 'musicas/06 -  Hosana.mp3', cover: 'fotos/renascer.jpg', title : 'Renascer Praise -Hosana'},
    { src: 'musicas/Herege [www.slider.kz].mp3', cover: 'fotos/graça.jpg', title : 'Herege' },
    { src: 'musicas/Hoje Sou Livre.mp3', cover: 'fotos/livre.jpg', title : 'Hoje Sou Livre'},
    { src: 'musicas/Jerusálem e Eu.mp3', cover: 'fotos/denise.jpg', title : 'Jerusálem e Eu'},
    { src: 'musicas/08 - Marcelo Nascimento, Mattos Nascimento - Um Milagre Em Jericó.mp3', cover: 'fotos/jerico.jpg', title : 'Mattos Nascimento - Um Milagre Em Jericó'},
    { src: 'musicas/01-Jesus Tem Misericordia.mp3', cover: 'fotos/misericordia.webp', title : 'Mattos Nascimento -Jesus Tem Misericordia'},
    { src: 'musicas/1 Levanta E Anda.mp3', cover: 'fotos/levanta.jpg', title : 'Marcelo Nascimento -Levanta e Anda' },
    { src: 'musicas/LUKAS AGUSTINHO I ADORAÇÃO PROFÉTICA.mp3', cover: 'fotos/lukas.jpg', title : 'Adoração'},
    { src: 'musicas/Mais Perto.mp3', cover: 'fotos/perto.jpg', title : 'Mais Perto'},
    { src: 'musicas/05 - Mar Bravio.mp3', cover: 'fotos/bravio.jpg', title : 'Shiley Carvalhais - Mar Bravio'},
    { src: 'musicas/04. Clame o Meu Nome.mp3', cover: 'fotos/marcelo.jpg', title : 'Marcelo Nascimento -  Clame o Meu Nome'},
    { src: 'musicas/Mauro Henrique - Aonde Está Deus [www.slider.kz].mp3', cover: 'fotos/desperta.jpg', title : 'Aonde está Deus' },
    { src: 'musicas/Mauro Henrique - Herege [www.slider.kz].mp3', cover: 'fotos/graça.jpg', title : 'Herege' },
    { src: 'musicas/Melhor Lugar.mp3', cover: 'fotos/melhor lugar.jpg', title : 'Melhor Lugar'},
    { src: 'musicas/06 - Me Esvaziar.mp3', cover: 'fotos/nivea.jpg', title : 'Nivea Soares Me Esvaziar'},
    { src: 'musicas/MILAGRES SÃO REAIS.mp3', cover: 'fotos/27.jpg', title : 'MILAGRES SÃO REAIS'},
    { src: 'musicas/Mostra-Me Tua Glória.mp3', cover: 'fotos/orla.jpg', title : '/Mostra-Me Tua Glória'},
    { src: 'musicas/Nani Azevedo - Não Temas - DVD Bendito Serei.mp3', cover: 'fotos/temas.jpg', title : 'Não Temas' },
    { src: 'musicas/1Não Pare.mp3', cover: 'fotos/templo.jpg', title : 'Não Pare'},
    { src: 'musicas/06 - Nossa Canção.mp3', cover: 'fotos/shirley.jpg', title : 'Shirley Carvalhais -Nossa Canção'},
    { src: 'musicas/tu és soberano.mp3', cover: 'fotos/soberano.jpg', title : 'tu és soberano.mp3'},
    { src: 'musicas/10 Ousado Amor.mp3', cover: 'fotos/amor.jpg', title : 'ousado amor'},
    { src: 'musicas/14 O BOM SAMARITANO.mp3', cover: 'fotos/ungindo.jpg', title : 'o bom samaritano'},
    { src: 'musicas/10 - Mattos Nascimento - O Exilado.mp3', cover: 'fotos/mattos.png', title : 'Mattos Nascimento - O Exilado'},
    { src: 'musicas/O Carpinteiro (Clipe Oficial) - Alessandro Vilas Boas _ Som do Reino.mp3', cover: 'fotos/carpinteiro.jpg', title : 'O Carpinteiro '},
    { src: 'musicas/O Vento Sopra.mp3', cover: 'fotos/vento.jpg', title : 'O Vento Sopra'},
    { src: 'musicas/04-Posso Tudo Suportar.mp3', cover: 'fotos/posso.jpg', title : 'Mattos Nascimento - Posso Tudo Suportar'},
    { src: 'musicas/05 Nos Braços do Pai _ Diante do Trono 5 Nos Braços do Pai _ Diante do Trono.mp3', cover: 'fotos/braços.jpg', title : ' Nos Braços do Pair'},
    { src: 'musicas/Por Amor.mp3', cover: 'fotos/kim.jpg', title : 'Por AMOR'},
    { src: 'musicas/Paulo Neto _ Simplesmente Sobrenatural.mp3', cover: 'fotos/mão.jpg', title : 'Paulo Neto _ Simplesmente Sobrenatural'},
    { src: 'musicas/paulo e silas.mp3', cover: 'fotos/pauloesilas.jpg', title : 'paulo e silas'},
    { src: 'musicas/Templo Soul ｜ Pista do Céu.mp3', cover: 'fotos/templo.jpg', title : 'Templo Soul ｜ Pista do Céu'},
    { src: 'musicas/Quem pode livrar como o Senhor.mp3', cover: 'fotos/livra.jpg', title : 'Quem pode livrar como o Senhor'},
    { src: 'musicas/Quero As Aguas.mp3', cover: 'fotos/Quero As Aguas.jpg', title : 'Quero As Aguas'},
    { src: 'musicas/Refúgio e Fortaleza.mp3', cover: 'fotos/refugio.jpg', title : 'Refúgio e Fortaleza'},
    { src: 'musicas/Ressuscita (Ao Vivo).mp3', cover: 'fotos/vale.jpg', title : 'Ressuscita (Ao Vivo)'},
    { src: 'musicas/- Restitui (Ao Vivo) (128 kbps).mp3', cover: 'fotos/tempo.jpg', title : 'Restitui' },
    { src: 'musicas/Rugido Do Leão.mp3', cover: 'fotos/Rugido Do Leão.jpg', title : 'Rugido Do Leão'},
    { src: 'musicas/SANTO [Espontâneo] - Suzano Selmo (Ao Vivo).mp3', cover: 'fotos/cpeu.jpg', title : 'SANTO [Espontâneo] - Suzano Selmo (Ao Vivo)'},
    { src: 'musicas/Templo Soul.Se Segura.mp3', cover: 'fotos/templo.jpg', title : 'Templo Soul ｜ Se Segura'},
    { src: 'musicas/Segue a Cristo.mp3', cover: 'fotos/SEGUIR.jpg', title : 'Segue a Cristo '},
    { src: 'musicas/Som do Caminho - Eu Voltei.mp3', cover: 'fotos/filho.jpg', title : 'Som do Caminho - Eu Voltei'},
    { src: 'musicas/Só Tua Glória Me Satisfaz.mp3', cover: 'fotos/gloria.jpg', title : '/Só Tua Glória Me Satisfaz'},
    { src: 'musicas/35 - Mattos Nascimento - Sou de Deus.mp3', cover: 'fotos/soudeDEUS.jpg', title : 'Mattos Nascimento - Sou de Deus'},
    { src: 'musicas/Sua Presença é Real   Pastor Antônio Cirilo   Santa Geração na Lagoinha   Diante do Trono.mp3', cover: 'fotos/presença.jpg', title : 'Sua Presença é Real' },
    { src: 'musicas/TE ENCONTREI (Meu Coração Está Ligado ao Teu) - Suzano Selmo.mp3', cover: 'fotos/encontro.jpg', title : 'Te Encontrei' },
    { src: 'musicas/Te Amar.mp3', cover: 'fotos/20.jpg', title : 'Te amar' },
    { src: 'musicas/TE EXALTAMOS + EU QUERO MAIS - Suzano Selmo (Ao Vivo).mp3', cover: 'fotos/trombeta.jpg', title : 'TE EXALTAMOS + EU QUERO MAIS - Suzano Selmo (Ao Vivo)'},
    { src: 'musicas/Templo Soul ｜ Chega (Volume III).mp3', cover: 'fotos/Chega.jpg', title : 'Templo Soul ｜ Chega (Volume III)'},
    { src: 'musicas/Templo Soul ｜ Emaús.mp3', cover: 'fotos/emaus.jpg', title :'Templo Soul ｜ Emaús' },
    { src: 'musicas/Templo Soul ｜ Tô Legal.mp3', cover: 'fotos/templo.jpg', title : 'Templo Soul ｜ Tô Legal'},
    { src: 'musicas/Templo Soul & Ao Cubo 🎵 Venha Filho Meu.mp3', cover: 'fotos/filho meu.jpg', title : 'Venha Filho Meu'},
    { src: 'musicas/Testemunho Pessoal do Pr. Antônio Cirilo.mp3', cover: 'fotos/leão e cruz.jpg', title : 'testesmunho pessoal' },
    { src: 'musicas/TESOURO + O TEU OLHAR ME CONQUISTOU.mp3', cover: 'fotos/olhar.jpg', title : 'TESOURO + O TEU OLHAR ME CONQUISTOU'},
    { src: 'musicas/Triunfo.mp3', cover: 'fotos/22.jpg', title : 'Triunfar'},
    { src: 'musicas/Vem Minha Noiva (Ao Vivo).mp3', cover: 'fotos/noiva 1.jpg', title : '/Vem Minha Noiva (Ao Vivo)'},
    { src: 'musicas/09-Vencendo Vem Jesus.mp3', cover: 'fotos/matto.jpg', title : 'Mattos Nascimento - Vencendo Vem Jesus'},
    { src: 'musicas/Visitação.mp3', cover: 'fotos/aba.jpg', title : 'Visitação '},
    { src: 'musicas/Você tem Azeite_ Você tem Óleo_ _ Clamor Pelas Nações.mp3', cover: 'fotos/azeite.jpg', title : 'Você tem Azeite_ Você tem Óleo' },
    { src: 'musicas/2-Nunca Pare de Lutar (128 kbps).mp3', cover: 'fotos/guerra.jpg', title : 'Nunca pare de Lutar' }
].sort((a, b) => a.title.localeCompare(b.title)); // Ordena alfabeticamente pelo título

let currentTrackIndex = 0;
let isPlaying = false;

// Função para carregar uma nova faixa
function loadTrack(index) {
    const track = tracks[index];
    if (track) {
        audioPlayer.src = track.src;
        albumCover.src = track.cover;
        currentTrackDisplay.textContent = `Tocando: ${track.title}`;
    }
}

// Função para tocar/pausar a faixa atual
function playPauseTrack() {
    if (isPlaying) {
        audioPlayer.pause();
        playButton.textContent = 'Play';
    } else {
        audioPlayer.play();
        playButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

// Função para avançar para a próxima faixa
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        audioPlayer.play();
    }
}

// Função para voltar para a faixa anterior
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        audioPlayer.play();
    }
}

// Controle de volume
function adjustVolume() {
    audioPlayer.volume = volumeSlider.value;
}

// Eventos de clique para os botões de controle
playButton.addEventListener('click', playPauseTrack);
nextButton.addEventListener('click', nextTrack);
prevButton.addEventListener('click', prevTrack);
volumeSlider.addEventListener('input', adjustVolume);

// Evento para tocar a próxima faixa quando a atual terminar
audioPlayer.addEventListener('ended', nextTrack);

// Carrega a primeira música ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    loadTrack(currentTrackIndex);
});