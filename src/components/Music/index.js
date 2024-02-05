import { chordSheet, chordSheet3, chordSheet4,chordSheet5 } from "./chords";
import thumb1 from "../../assets/thumb.webp";
import thumb2 from "../../assets/thumb2.webp";
import thumb3 from "../../assets/thumb3.webp";
import thumb5 from "../../assets/thumb5.webp";

export const Songs = [
    {
        id:1,
        title:'Navegantes da Vida',
        artist:'Max Willecke',
        key:'Am',
        tag:'Inspiração',
        youtubeLink:'https://www.youtube.com/embed/-h4X0FAoWRg?',
        soundCloundId:'997920277',
        description:'Navegantes da Vida é uma música utilizada em reuniões devocionais, conferências, encontro de amigos, celebrações de Dias Sagrados, ela é envolvente e harmoniosa. Se tornou um hino para a comunidade que se conecta em sua letra em busca do serviço ao próximo, através do amor, respeito e bondade.',
        chord:chordSheet,
        colorTheme:'orange',
        thumbnail:thumb1
    },
    {
        id:2,
        title:'Inexistência',
        artist:'Marcos Gardnalli',
        key:'G',
        tag:'Citação',
        soundCloundId:'101063251',
        youtubeLink:'https://www.youtube.com/embed/-h4X0FAoWRg?',
        description:'A música “Inexistência”  de Marcos e Michel Gardinali virou hit na comunidade bahá´í nos anos 90 e 2000 criando uma alegria e harmonia em conferências nacionais ocorridas em encontros no Soltanieh. Se tornou uma das mais famosas e conhecidas do país. A letra fala sobre a jornada da alma de desprendimento do ego e aproximação de Deus.',
        chord:chordSheet5,
        colorTheme:'yellow',
        thumbnail:thumb3
    },
    {
        id:3,
        title:'Um Só Refrão',
        artist:'Kian Shaikhzadeh e Gabriel Carigé',
        key:'D',
        tag:'História da Fé',
        soundCloundId:'997920277',
        youtubeLink:'https://www.youtube.com/embed/-h4X0FAoWRg?',
        description:'Canção destinada a Mãe espiritual dos bahá’ís do Brasil, Leonora Armstrong. A letra foi inspirada em citações e profecias de ‘Abdu’l-Bahá e o Guardião.',
        chord:chordSheet3,
        colorTheme:'blue',
        thumbnail:thumb5
    },
    {
        id:4,
        title:'Qa´ím',
        artist:' Gabriel Carigé e Kian Shaikhzadeh',
        key:'E',
        tag:'História da Fé',
        soundCloundId:'997920277',
        youtubeLink:'https://www.youtube.com/embed/-h4X0FAoWRg?',
        description:`Qa´im em português significa Prometido. Palavra que se revere ao precursor da Fé Bahá´í , O Báb.
        A letra fala sobre o período de heroismo que viveu O Báb, os babís e os resultados futuros de comunidades vibrantes tentando seguir Seus passos de desprendimento, confiança, fé e amor pela Causa.
        Letra criada por Gabriel e acompanhemento por Kian, é uma canção novíssima que poderá ser utilizado pelas comunidades quando houver celebrações falando sobre Ele.`,
        chord:chordSheet4,
        colorTheme:'orange',
        thumbnail:thumb2
    },
]