// ============================================
// ELEMENTOS DO DOM
// ============================================
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const albumCover = document.getElementById('album-cover');
const volumeSlider = document.getElementById('volume-slider');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const progressBar = document.getElementById('progress');
const playlistContainer = document.getElementById('playlist-container');
const playlistElement = document.getElementById('playlist');
const playlistToggleBtn = document.getElementById('playlist-toggle');

// ============================================
// PLAYLIST DE MÚSICAS (COM ESPAÇAMENTO)
// ============================================
const tracks = [
    { src: './musicas/Acende o fogo (Set a fire + Espontâneo) • DROPS.mp3', cover: 'fotos/corazon.jpg', title: 'Acende o Fogo', artist: 'DROPS' },
    { src: 'musicas/Adoração espontânea- Onde estão os filhos_.mp3', cover: 'fotos/noiva.jpg', title: 'Onde estão os Filhos', artist: 'Adoração Espontânea' },
    
    { src: 'musicas/04 - Manancial.mp3', cover: 'fotos/aline.jpeg', title: 'Manancial', artist: 'Aline Barros' },
    { src: 'musicas/1- Casa do Pai.mp3', cover: 'fotos/aline1.jpg', title: 'Casa do Pai', artist: 'Aline Barros' },
    
    { src: 'musicas/05 A Caminhada.mp3', cover: 'fotos/alvaro1.jpg', title: 'A Caminhada', artist: 'Alvaro Tito' },
    { src: 'musicas/Amigo Fiel (Faithful Friend).mp3', cover: 'fotos/amigo_fiel.jpg', title: 'Amigo Fiel', artist: 'Nic e Billman' },
    
    { src: 'musicas/AMBIENTE DE GLÓRIA -  Reuel e Dany Silva _ MEVAM MUSIC _ Live Session.mp3', cover: 'fotos/ambiente_de_gloria.jpg', title: 'Ambiente de Glória', artist: 'Reuel e Dany Silva' },
    { src: 'musicas/Alma Cansada.mp3', cover: 'fotos/cansada.jpg', title: 'Alma Cansada', artist: 'Jair Pires' },
    
    { src: 'musicas/05-Alma  Abatida.mp3', cover: 'fotos/algemas.jpg', title: 'Alma Abatida', artist: 'Mattos Nascimento' },
    { src: 'musicas/04 - Mattos Nascimento - Algemas Caíram.mp3', cover: 'fotos/algemas.jpg', title: 'Algemas Caíram', artist: 'Mattos Nascimento' },
    
    { src: 'musicas/Atrai Meu Coração.mp3', cover: 'fotos/corazon.jpg', title: 'Atrai Meu Coração', artist: 'Filho do Homem' },
    { src: 'musicas/Autoridade e Poder   Marcos Góes.mp3', cover: 'fotos/loc.gif', title: 'Autoridade e Poder', artist: 'Marcos Góes' },
    
    { src: 'musicas/A Tua Palavra.mp3', cover: 'fotos/atuapalavra.jpg', title: 'A Tua Palavra', artist: 'Asafe Borba' },
    { src: 'musicas/01-Até o Fim.mp3', cover: 'fotos/mt.jpg', title: 'Até o Fim', artist: 'Mattos Nascimento' },
    
    { src: 'musicas/A Hora de Partir.mp3', cover: 'fotos/tempo.jpg', title: 'A Hora de Partir', artist: 'Jair Pires' },
    { src: 'musicas/Basta uma palavra Ft Tuca Nascimento.mp3', cover: 'fotos/palavra revelada.jpg', title: 'Basta uma Palavra', artist: 'Tuca e Douglas Nascimento' },
    
    { src: 'musicas/Beija-me Com Tua Glória (Ao Vivo).mp3', cover: 'fotos/beija.jpg', title: 'Beija-me Com Tua Glória', artist: 'Artista Desconhecido' },
    { src: 'musicas/Bem Querer - Marcos Góes.mp3', cover: 'fotos/bem.jpg', title: 'Bem Querer', artist: 'Marcos Góes' },
    
    { src: 'musicas/Be One Music - Rei Do Meu Coração.mp3', cover: 'fotos/rei.jpg', title: 'Rei do Meu Coração', artist: 'Be One Music' },
    { src: 'musicas/39 - Mattos Nascimento - Breve Vem o Dia.mp3', cover: 'fotos/breve.jpg', title: 'Breve Vem o Dia', artist: 'Mattos Nascimento' },
    
    { src: 'musicas/1- Calma - Álvaro Tito.mp3', cover: 'fotos/4.jpg', title: 'Calma', artist: 'Álvaro Tito' },
    { src: 'musicas/Canção de Isaque.mp3', cover: 'fotos/altar.jpg', title: 'Canção de Isaque', artist: 'Judson de Oliveira' },
    
    { src: 'musicas/Cetro De Justiça.mp3', cover: 'fotos/cetro.jpg', title: 'Cetro De Justiça', artist: 'Antonio Cirilo' },
    { src: 'musicas/Confissão (Ao Vivo).mp3', cover: 'fotos/confissão.jpg', title: 'Confissão', artist: 'Judson Oliveira' },
    
    { src: 'musicas/Voz de muitas Águas - Como prometeste.mp3', cover: 'fotos/muitas aguas.jpg', title: 'Como Prometeste', artist: 'Voz de muitas Águas' },
    { src: 'musicas/Dia de Pentecoste (Ao Vivo).mp3', cover: 'fotos/pentecoste.jpg', title: 'Dia de Pentecoste', artist: 'Mattos Nascimento' },
    
    { src: 'musicas/DEUS DE MILAGRES _ THIAGO GODOI & MATTOS NASCIMENTO.mp3', cover: 'fotos/coração.jpg', title: 'Deus de Milagres', artist: 'Thiago Godoi & Mattos Nascimento' },
    { src: 'musicas/03-Deus me Chamou.mp3', cover: 'fotos/mt.jpg', title: 'Deus me Chamou', artist: 'Mattos Nascimento' },
    
    { src: 'musicas/X2Download.app - Glória em Glória - Nic&Rachel Billman [Som do Reino - Vol 1] (128 kbps).mp3', cover: 'fotos/caminho.jpg', title: 'Glória em Glória', artist: 'Nic&Rachel Billman' },
    { src: 'musicas/13.. Quebra tudo Deus 2.mp3', cover: 'fotos/dede.jpg', title: 'Quebra tudo Deus', artist: 'DEDE' },
    
    { src: 'musicas/É Ele (Ao Vivo) • DROPS.mp3', cover: 'fotos/ele.jpg', title: 'É Ele', artist: 'DROPS' },
    { src: 'musicas/És a estrela da manhã.mp3', cover: 'fotos/sol.jpg', title: 'És a estrela da manhã', artist: 'Artista Desconhecido' },
    
    { src: 'musicas/Espírito Santo.mp3', cover: 'fotos/santo.jpg', title: 'Espírito Santo', artist: 'Artista Desconhecido' },
    
    
    { src: 'musicas/01 Estou Contigo.mp3', cover: 'fotos/alvaro.jpg', title: 'Estou Contigo', artist: 'Álvaro' },
    { src: 'musicas/Eu pertenço ao Senhor - Templo Soul.mp3', cover: 'fotos/templo.jpg', title: 'Eu pertenço ao Senhor', artist: 'Templo Soul' },
    
    { src: 'musicas/Gerson Rufino I Eu te escolhi _DVD RECONSTRUÇÃO_ [Clipe Oficial].mp3', cover: 'fotos/10.jpg', title: 'Eu te Escolhi', artist: 'Gerson Rufino' },
    { src: 'musicas/1 Faz outra vez como na primeira vez.mp3', cover: 'fotos/denovo.jpg', title: 'Faz outra vez', artist: 'Gidel Lannes' },
    
    { src: 'musicas/Faz Resplandecer.mp3', cover: 'fotos/resplandecer.jpg', title: 'Faz Resplandecer', artist: 'Artista Desconhecido' },
    { src: 'musicas/02 Fale com Jesus.mp3', cover: 'fotos/shi.jpg', title: 'Fale com Jesus', artist: 'Shirley Carvalhais' },
    
    { src: 'musicas/Fernandinho _ Eis que Estou à Porta (Álbum Único - Live).mp3', cover: 'fotos/porta.jpg', title: 'Eis que Estou à Porta', artist: 'Fernandinho' },
    { src: 'musicas/Fernandinho _ Moisés (Álbum Único - Live).mp3', cover: 'fotos/moises.jpg', title: 'Moisés', artist: 'Fernandinho' },
    
    { src: 'musicas/Formoso Tu És.mp3', cover: 'fotos/casa na rocha.jpg', title: 'Formoso Tu És', artist: 'Artista Desconhecido' },
    { src: 'musicas/Fogo em Teus Olhos - Ao Vivo _ Abdiel Arsenio.mp3', cover: 'fotos/abdiel.jpg', title: 'Fogo em Teus Olhos', artist: 'Abdiel Arsenio' },
    
    { src: 'musicas/Fogo de Deus.mp3', cover: 'fotos/arder.jpg', title: 'Fogo de Deus', artist: 'Artista Desconhecido' },
    { src: 'musicas/O Fogo Arderá.mp3', cover: 'fotos/ardera.jpg', title: 'O Fogo Arderá', artist: 'Artista Desconhecido' },
    
    { src: 'musicas/Pr Gidel lannes, Meu Pai, Ministério Filho do Seu Amor.mp3', cover: 'fotos/adoção.jpg', title: 'Filho do Seu Amor', artist: 'Gidel Lannes' },
    { src: 'musicas/GIDEL E CAROL Louvor Nas tábuas do meu coração.mp3', cover: 'fotos/dentro.jpg', title: 'Louvor Nas tábuas', artist: 'Gidel e Carol' },
    
    { src: 'musicas/24 Com Ele.mp3', cover: 'fotos/gerson.avif', title: 'Com Ele', artist: 'Gerson Rufino' },
    { src: 'musicas/Há Poder no Sangue de Jesus.mp3', cover: 'fotos/fazei em memória de mim.jpg', title: 'Há Poder no Sangue', artist: 'Artista Desconhecido' },
    
    { src: 'musicas/06 -  Hosana.mp3', cover: 'fotos/renascer.jpg', title: 'Hosana', artist: 'Renascer Praise' },
    
    
    { src: 'musicas/Hoje Sou Livre.mp3', cover: 'fotos/livre.jpg', title: 'Hoje Sou Livre', artist: 'Artista Desconhecido' },
    { src: 'musicas/Jerusálem e Eu.mp3', cover: 'fotos/denise.jpg', title: 'Jerusálem e Eu', artist: 'Denise' },
    
    { src: 'musicas/08 - Marcelo Nascimento, Mattos Nascimento - Um Milagre Em Jericó.mp3', cover: 'fotos/jerico.jpg', title: 'Um Milagre Em Jericó', artist: 'Marcelo Nascimento' },
    { src: 'musicas/01-Jesus Tem Misericordia.mp3', cover: 'fotos/misericordia.webp', title: 'Jesus Tem Misericórdia', artist: 'Mattos Nascimento' },
    
    { src: 'musicas/1 Levanta E Anda.mp3', cover: 'fotos/levanta.jpg', title: 'Levanta e Anda', artist: 'Marcelo Nascimento' },
    { src: 'musicas/LUKAS AGUSTINHO I ADORAÇÃO PROFÉTICA.mp3', cover: 'fotos/lukas.jpg', title: 'Adoração Profética', artist: 'Lukas Agostinho' },
    
    { src: 'musicas/Mais Perto.mp3', cover: 'fotos/perto.jpg', title: 'Mais Perto', artist: 'Artista Desconhecido' },
    { src: 'musicas/05 - Mar Bravio.mp3', cover: 'fotos/bravio.jpg', title: 'Mar Bravio', artist: 'Shirley Carvalhais' },
    
    { src: 'musicas/04. Clame o Meu Nome.mp3', cover: 'fotos/marcelo.jpg', title: 'Clame o Meu Nome', artist: 'Marcelo Nascimento' },
    { src: 'musicas/Mauro Henrique - Aonde Está Deus [www.slider.kz].mp3', cover: 'fotos/desperta.jpg', title: 'Aonde Está Deus', artist: 'Mauro Henrique' },
    
    { src: 'musicas/Mauro Henrique - Herege.mp3', cover: 'fotos/Mauro-Henrique.webp', title: 'Herege', artist: 'Mauro Henrique' },
    { src: 'musicas/Melhor Lugar.mp3', cover: 'fotos/melhor lugar.jpg', title: 'Melhor Lugar', artist: 'Artista Desconhecido' },
    
    { src: 'musicas/06 - Me Esvaziar.mp3', cover: 'fotos/nivea.jpg', title: 'Me Esvaziar', artist: 'Nivea Soares' },
    { src: 'musicas/MILAGRES SÃO REAIS.mp3', cover: 'fotos/27.jpg', title: 'Milagres São Reais', artist: 'Artista Desconhecido' },
    
    { src: 'musicas/Mostra-Me Tua Glória.mp3', cover: 'fotos/orla.jpg', title: 'Mostra-Me Tua Glória', artist: 'Alda Célia' },
    { src: 'musicas/Nani Azevedo - Não Temas - DVD Bendito Serei.mp3', cover: 'fotos/temas.jpg', title: 'Não Temas', artist: 'Nani Azevedo' },
    
    { src: 'musicas/1Não Pare.mp3', cover: 'fotos/templo.jpg', title: 'Não Pare', artist: 'Templo Soul' },
    { src: 'musicas/06 - Nossa Canção.mp3', cover: 'fotos/shirley.jpg', title: 'Nossa Canção', artist: 'Shirley Carvalhais' },
    
    { src: 'musicas/tu és soberano.mp3', cover: 'fotos/soberano.jpg', title: 'Tu És Soberano', artist: 'Artista Desconhecido' },
    { src: 'musicas/10 Ousado Amor.mp3', cover: 'fotos/amor.jpg', title: 'Ousado Amor', artist: 'Isaias Saad' },
    
    { src: 'musicas/14 O BOM SAMARITANO.mp3', cover: 'fotos/ungindo.jpg', title: 'O Bom Samaritano', artist: 'Anderson Freire' },
    { src: 'musicas/10 - Mattos Nascimento - O Exilado.mp3', cover: 'fotos/mattos.png', title: 'O Exilado', artist: 'Mattos Nascimento' },
    
    { src: 'musicas/O Carpinteiro (Clipe Oficial) - Alessandro Vilas Boas _ Som do Reino.mp3', cover: 'fotos/carpinteiro.jpg', title: 'O Carpinteiro', artist: 'Alessandro Vilas Boas' },
    { src: 'musicas/O Vento Sopra.mp3', cover: 'fotos/vento.jpg', title: 'O Vento Sopra', artist: 'Artista Desconhecido' },
    
    { src: 'musicas/04-Posso Tudo Suportar.mp3', cover: 'fotos/posso.jpg', title: 'Posso Tudo Suportar', artist: 'Mattos Nascimento' },
    { src: 'musicas/05 Nos Braços do Pai _ Diante do Trono 5 Nos Braços do Pai _ Diante do Trono.mp3', cover: 'fotos/braços.jpg', title: 'Nos Braços do Pai', artist: 'Diante do Trono' },
    
    { src: 'musicas/Por Amor.mp3', cover: 'fotos/kim.jpg', title: 'Por Amor', artist: 'Kim' },
    { src: 'musicas/Paulo Neto _ Simplesmente Sobrenatural.mp3', cover: 'fotos/mão.jpg', title: 'Simplesmente Sobrenatural', artist: 'Paulo Neto' },
    
    { src: 'musicas/paulo e silas.mp3', cover: 'fotos/pauloesilas.jpg', title: 'Paulo e Silas', artist: 'Alisson e Neide' },
    { src: 'musicas/Templo Soul ｜ Pista do Céu.mp3', cover: 'fotos/templo.jpg', title: 'Pista do Céu', artist: 'Templo Soul' },
    
    { src: 'musicas/Quem pode livrar como o Senhor.mp3', cover: 'fotos/livra.jpg', title: 'Quem Pode Livrar', artist: 'Artista Desconhecido' },
    { src: 'musicas/Quero As Aguas.mp3', cover: 'fotos/Quero As Aguas.jpg', title: 'Quero As Águas', artist: 'Thales Roberto' },
    
    { src: 'musicas/Refúgio e Fortaleza.mp3', cover: 'fotos/refugio.jpg', title: 'Refúgio e Fortaleza', artist: 'Mattos Nascimento' },
    { src: 'musicas/Ressuscita (Ao Vivo).mp3', cover: 'fotos/vale.jpg', title: 'Ressuscita', artist: 'Artista Desconhecido' },
    
    { src: 'musicas/- Restitui (Ao Vivo) (128 kbps).mp3', cover: 'fotos/tempo.jpg', title: 'Restitui', artist: 'Davi Sacer' },
    { src: 'musicas/Rugido Do Leão.mp3', cover: 'fotos/Rugido Do Leão.jpg', title: 'Rugido Do Leão', artist: 'Artista Desconhecido' },
    
    { src: 'musicas/SANTO [Espontâneo] - Suzano Selmo (Ao Vivo).mp3', cover: 'fotos/cpeu.jpg', title: 'Santo', artist: 'Suzano Selmo' },
    { src: 'musicas/Templo Soul.Se Segura.mp3', cover: 'fotos/templo.jpg', title: 'Se Segura', artist: 'Templo Soul' },
    
    { src: 'musicas/Segue a Cristo.mp3', cover: 'fotos/SEGUIR.jpg', title: 'Segue a Cristo', artist: 'Artista Desconhecido' },
    { src: 'musicas/Som do Caminho - Eu Voltei.mp3', cover: 'fotos/filho.jpg', title: 'Eu Voltei', artist: 'Som do Caminho' },
    
    { src: 'musicas/Só Tua Glória Me Satisfaz.mp3', cover: 'fotos/gloria.jpg', title: 'Só Tua Glória', artist: 'Artista Desconhecido' },
    { src: 'musicas/35 - Mattos Nascimento - Sou de Deus.mp3', cover: 'fotos/soudeDEUS.jpg', title: 'Sou de Deus', artist: 'Mattos Nascimento' },
    
    { src: 'musicas/Sua Presença é Real   Pastor Antônio Cirilo   Santa Geração na Lagoinha   Diante do Trono.mp3', cover: 'fotos/presença.jpg', title: 'Sua Presença é Real', artist: 'Antônio Cirilo' },
    { src: 'musicas/TE ENCONTREI (Meu Coração Está Ligado ao Teu) - Suzano Selmo.mp3', cover: 'fotos/encontro.jpg', title: 'Te Encontrei', artist: 'Suzano Selmo' },
    
    { src: 'musicas/Te Amar.mp3', cover: 'fotos/20.jpg', title: 'Te Amar', artist: 'Nivea Soares' },
    { src: 'musicas/TE EXALTAMOS + EU QUERO MAIS - Suzano Selmo (Ao Vivo).mp3', cover: 'fotos/trombeta.jpg', title: 'Te Exaltamos', artist: 'Suzano Selmo' },
    
    { src: 'musicas/Templo Soul ｜ Chega (Volume III).mp3', cover: 'fotos/Chega.jpg', title: 'Chega', artist: 'Templo Soul' },
    { src: 'musicas/Templo Soul ｜ Emaús.mp3', cover: 'fotos/emaus.jpg', title: 'Emaús', artist: 'Templo Soul' },
    
    { src: 'musicas/Templo Soul ｜ Tô Legal.mp3', cover: 'fotos/templo.jpg', title: 'Tô Legal', artist: 'Templo Soul' },
    { src: 'musicas/Templo Soul & Ao Cubo 🎵 Venha Filho Meu.mp3', cover: 'fotos/filho meu.jpg', title: 'Venha Filho Meu', artist: 'Templo Soul & Ao Cubo' },
    
    { src: 'musicas/Testemunho Pessoal do Pr. Antônio Cirilo.mp3', cover: 'fotos/leão e cruz.jpg', title: 'Testemunho Pessoal', artist: 'Antônio Cirilo' },
    { src: 'musicas/TESOURO + O TEU OLHAR ME CONQUISTOU.mp3', cover: 'fotos/olhar.jpg', title: 'Tesouro', artist: 'Artista Desconhecido' },
    
    { src: 'musicas/Triunfo.mp3', cover: 'fotos/22.jpg', title: 'Triunfo', artist: 'Artista Desconhecido' },
    { src: 'musicas/Vem Minha Noiva (Ao Vivo).mp3', cover: 'fotos/noiva 1.jpg', title: 'Vem Minha Noiva', artist: 'Artista Desconhecido' },
    
    { src: 'musicas/09-Vencendo Vem Jesus.mp3', cover: 'fotos/matto.jpg', title: 'Vencendo Vem Jesus', artist: 'Mattos Nascimento' },
    { src: 'musicas/Visitação.mp3', cover: 'fotos/aba.jpg', title: 'Visitação', artist: 'Nivea Soares' },
    
    { src: 'musicas/Você tem Azeite_ Você tem Óleo_ _ Clamor Pelas Nações.mp3', cover: 'fotos/azeite.jpg', title: 'Você tem Azeite', artist: 'Clamor Pelas Nações' },
    { src: 'musicas/2-Nunca Pare de Lutar (128 kbps).mp3', cover: 'fotos/guerra.jpg', title: 'Nunca Pare de Lutar', artist: 'Artista Desconhecido' },
    
    { src: 'musicas/Antes Que....mp3', cover: 'fotos/samuel.avif', title: 'Antes Que', artist: 'Samuel Mariano' },
    { src: 'musicas/LAVINNIA - PODER E FOGO (AO VIVO).mp3', cover: 'fotos/Lavinnia.jpg', title: 'Poder e Fogo', artist: 'Lavinnia' }
].sort((a, b) => a.title.localeCompare(b.title));

// ============================================
// VARIÁVEIS DE CONTROLE
// ============================================
let currentTrackIndex = 0;
let isPlaying = false;
let updateProgressInterval;

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

// Formatar tempo (segundos para MM:SS)
function formatTime(seconds) {
    if (isNaN(seconds) || !isFinite(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
}

// Atualizar item ativo na playlist
function updateActivePlaylistItem() {
    const items = document.querySelectorAll('.playlist-item');
    items.forEach((item, index) => {
        if (index === currentTrackIndex) {
            item.classList.add('active');
            // Rolar para o item ativo na playlist
            if (playlistContainer.classList.contains('show')) {
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            item.classList.remove('active');
        }
    });
}

// ============================================
// FUNÇÕES DA PLAYLIST
// ============================================

// Mostrar/ocultar playlist
function togglePlaylist() {
    playlistContainer.classList.toggle('show');
    playlistToggleBtn.classList.toggle('active');
    
    // Atualizar texto do botão
    if (playlistContainer.classList.contains('show')) {
        playlistToggleBtn.innerHTML = '<i class="fas fa-chevron-up"></i><span>Ocultar Playlist</span><i class="fas fa-chevron-up"></i>';
    } else {
        playlistToggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i><span>Playlist (' + tracks.length + ' músicas)</span><i class="fas fa-chevron-down"></i>';
    }
}

// Criar item da playlist (apenas nome e artista)
function createPlaylistItem(track, index) {
    const item = document.createElement('div');
    item.className = 'playlist-item';
    if (index === currentTrackIndex) {
        item.classList.add('active');
    }
    
    item.innerHTML = `
        <div class="playlist-item-info">
            <div class="playlist-item-title">${track.title}</div>
            <div class="playlist-item-artist">${track.artist}</div>
        </div>
    `;
    
    item.addEventListener('click', () => {
        loadTrack(index);
        if (isPlaying) {
            playTrack();
        }
        // Opcional: fechar playlist após selecionar música
        // togglePlaylist();
    });
    
    return item;
}

// Renderizar playlist completa
function renderPlaylist() {
    playlistElement.innerHTML = '';
    tracks.forEach((track, index) => {
        playlistElement.appendChild(createPlaylistItem(track, index));
    });
}

// ============================================
// FUNÇÕES DO PLAYER
// ============================================

// Carregar música
function loadTrack(index) {
    if (index < 0 || index >= tracks.length) return;
    
    currentTrackIndex = index;
    const track = tracks[index];
    
    // Atualizar informações da música
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    
    // Atualizar capa (com fallback)
    albumCover.src = track.cover;
    
    // Carregar áudio
    audioPlayer.src = track.src;
    
    // Atualizar playlist
    updateActivePlaylistItem();
    
    // Atualizar tempo total quando carregado
    audioPlayer.addEventListener('loadedmetadata', () => {
        if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
            totalTimeEl.textContent = formatTime(audioPlayer.duration);
        } else {
            totalTimeEl.textContent = '0:00';
        }
    }, { once: true });
    
    // Resetar barra de progresso
    progressBar.style.width = '0%';
    currentTimeEl.textContent = '0:00';
}

// Tocar música
function playTrack() {
    audioPlayer.play()
        .then(() => {
            isPlaying = true;
            playButton.style.display = 'none';
            pauseButton.style.display = 'flex';
            
            // Iniciar atualização do progresso
            clearInterval(updateProgressInterval);
            updateProgressInterval = setInterval(updateProgress, 500);
        })
        .catch(error => {
            console.error("Erro ao tocar música:", error);
            alert("Erro ao tocar música. Verifique se o arquivo existe.");
        });
}

// Pausar música
function pauseTrack() {
    audioPlayer.pause();
    isPlaying = false;
    playButton.style.display = 'flex';
    pauseButton.style.display = 'none';
    
    // Parar atualização do progresso
    clearInterval(updateProgressInterval);
}

// Próxima música
function nextTrack() {
    let nextIndex = currentTrackIndex + 1;
    if (nextIndex >= tracks.length) {
        nextIndex = 0;
    }
    loadTrack(nextIndex);
    if (isPlaying) {
        playTrack();
    }
}

// Música anterior
function prevTrack() {
    let prevIndex = currentTrackIndex - 1;
    if (prevIndex < 0) {
        prevIndex = tracks.length - 1;
    }
    loadTrack(prevIndex);
    if (isPlaying) {
        playTrack();
    }
}

// Atualizar barra de progresso
function updateProgress() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    
    if (duration && !isNaN(duration)) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        currentTimeEl.textContent = formatTime(currentTime);
        
        // Atualizar tempo total se ainda não estiver definido
        if (totalTimeEl.textContent === '0:00') {
            totalTimeEl.textContent = formatTime(duration);
        }
    }
}

// Controlar volume
function adjustVolume() {
    audioPlayer.volume = volumeSlider.value / 100;
}

// Avançar na música clicando na barra de progresso
function seekTrack(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const duration = audioPlayer.duration;
    
    if (duration && !isNaN(duration)) {
        const seekTime = (clickX / width) * duration;
        audioPlayer.currentTime = seekTime;
        updateProgress();
    }
}

// ============================================
// TRATAMENTO DE ERROS NAS IMAGENS
// ============================================

// Fallback para imagens que não carregam
albumCover.onerror = function() {
    this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="%2340e0d0" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>';
};
// ============================================
// DETECTAR ORIENTAÇÃO DAS IMAGENS PARA NÃO CORTAR
// ============================================

function detectImageOrientation(imgElement) {
    if (!imgElement.complete) {
        // Se a imagem ainda não carregou, aguarde o carregamento
        imgElement.onload = function() {
            applyOrientationClass(this);
        };
    } else {
        applyOrientationClass(imgElement);
    }
}

function applyOrientationClass(imgElement) {
    // Remover classes anteriores
    imgElement.classList.remove('landscape', 'portrait');
    
    // Verificar se a imagem carregou corretamente
    if (imgElement.naturalWidth === 0 || imgElement.naturalHeight === 0) {
        // Se não carregou, usar classe padrão
        imgElement.classList.add('portrait');
        return;
    }
    
    // Determinar orientação
    const isLandscape = imgElement.naturalWidth > imgElement.naturalHeight;
    const isPortrait = imgElement.naturalHeight > imgElement.naturalWidth;
    
    if (isLandscape) {
        imgElement.classList.add('landscape');
    } else if (isPortrait) {
        imgElement.classList.add('portrait');
    } else {
        // Quadrada - usar portrait como padrão
        imgElement.classList.add('portrait');
    }
}

// Modificar a função loadTrack para detectar orientação
function loadTrack(index) {
    if (index < 0 || index >= tracks.length) return;
    
    currentTrackIndex = index;
    const track = tracks[index];
    
    // Atualizar informações da música
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    
    // Carregar áudio
    audioPlayer.src = track.src;
    
    // Atualizar capa COM DETECÇÃO DE ORIENTAÇÃO
    const img = new Image();
    img.onload = function() {
        albumCover.src = track.cover;
        // Aplicar a orientação correta após o carregamento
        setTimeout(() => detectImageOrientation(albumCover), 100);
    };
    img.onerror = function() {
        // Fallback para imagem padrão
        albumCover.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="%2340e0d0" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>';
        albumCover.classList.add('portrait');
    };
    img.src = track.cover;
    
    // Atualizar playlist
    updateActivePlaylistItem();
    
    // Atualizar tempo total quando carregado
    audioPlayer.addEventListener('loadedmetadata', () => {
        if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
            totalTimeEl.textContent = formatTime(audioPlayer.duration);
        } else {
            totalTimeEl.textContent = '0:00';
        }
    }, { once: true });
    
    // Resetar barra de progresso
    progressBar.style.width = '0%';
    currentTimeEl.textContent = '0:00';
}

// Configurar evento de erro na imagem da capa
albumCover.onerror = function() {
    this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="%2340e0d0" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>';
    this.classList.add('portrait');
};

// Detectar orientação da imagem inicial
if (albumCover.complete) {
    detectImageOrientation(albumCover);
} else {
    albumCover.onload = function() {
        detectImageOrientation(this);
    };
}
// ============================================
// EVENT LISTENERS
// ============================================

// Controles do player
playButton.addEventListener('click', playTrack);
pauseButton.addEventListener('click', pauseTrack);
prevButton.addEventListener('click', prevTrack);
nextButton.addEventListener('click', nextTrack);

// Controle de volume
volumeSlider.addEventListener('input', adjustVolume);

// Barra de progresso
document.querySelector('.progress-bar').addEventListener('click', seekTrack);

// Playlist
playlistToggleBtn.addEventListener('click', togglePlaylist);

// Eventos do áudio
audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('ended', nextTrack);

// Teclas de atalho
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return; // Ignorar se estiver em input
    
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            if (isPlaying) pauseTrack();
            else playTrack();
            break;
        case 'ArrowRight':
            if (e.ctrlKey) {
                audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 10);
            } else {
                nextTrack();
            }
            break;
        case 'ArrowLeft':
            if (e.ctrlKey) {
                audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 10);
            } else {
                prevTrack();
            }
            break;
        case 'ArrowUp':
            volumeSlider.value = Math.min(100, parseInt(volumeSlider.value) + 10);
            adjustVolume();
            break;
        case 'ArrowDown':
            volumeSlider.value = Math.max(0, parseInt(volumeSlider.value) - 10);
            adjustVolume();
            break;
        case 'KeyP':
            togglePlaylist();
            break;
    }
});

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Carregar primeira música
    loadTrack(0);
    
    // Renderizar playlist
    renderPlaylist();
    
    // Configurar volume inicial
    audioPlayer.volume = volumeSlider.value / 100;
    
    // Configurar botões iniciais
    pauseButton.style.display = 'none';
    
    // Atualizar texto do botão da playlist
    playlistToggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i><span>Playlist (' + tracks.length + ' músicas)</span><i class="fas fa-chevron-down"></i>';
    
    // Playlist começa oculta
    playlistContainer.classList.remove('show');
    playlistToggleBtn.classList.remove('active');
});

// ============================================
// INICIALIZAÇÃO RÁPIDA (backup)
// ============================================
// Caso o DOMContentLoaded não funcione, esta linha garante a inicialização
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        loadTrack(0);
        renderPlaylist();
    });
} else {
    loadTrack(0);
    renderPlaylist();
}