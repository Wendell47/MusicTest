

// Importando o React e o ChordSheetJS
import { useState } from 'react';
import ChordSheetJS from 'chordsheetjs';

// Criando um componente funcional
function Chord() {
  // Criando um estado para armazenar a folha de acordes em formato ChordPro
  const [chordPro, setChordPro] = useState(`{title: Let it be}
{subtitle: The Beatles}
{key: C}

Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
[C]Whisper words of [G]wisdom, let it [F]be [C/E] [Dm] [C]`);

  // Criando um estado para armazenar a música analisada pelo ChordProParser
  const [song, setSong] = useState(null);

  // Criando uma função para lidar com a mudança de valor do input
  const handleChange = (event) => {
    // Atualizando o estado com o valor do input
    setChordPro(event.target.value);
  };

  // Criando uma função para lidar com o clique do botão
  const handleClick = () => {
    // Criando uma instância do ChordProParser
    const parser = new ChordSheetJS.ChordProParser();
    // Analisando a folha de acordes em formato ChordPro em uma música
    const song = parser.parse(chordPro);
    // Atualizando o estado com a música analisada
    setSong(song);
  };

  // Criando uma função para renderizar a música formatada em HTML
  const renderSong = () => {
    // Verificando se o estado da música não é nulo
    if (song) {
      // Criando uma instância do HtmlTableFormatter
      const formatter = new ChordSheetJS.HtmlTableFormatter();
      // Formatando a música em uma string HTML
      const html = formatter.format(song);
      // Retornando um elemento JSX que renderiza o HTML
      return <div dangerouslySetInnerHTML={{ __html: html }} />;
    }
    // Retornando um elemento JSX vazio se o estado da música for nulo
    return <div />;
  };

  // Retornando o elemento JSX principal do componente
  return (
    <div className="Chord">
      <h1>Exemplo de código em React para usar o ChordSheetJS e o ChordProParser</h1>
      <p>Insira uma folha de acordes em formato ChordPro no campo abaixo e clique no botão para ver o resultado.</p>
      <textarea value={chordPro} onChange={handleChange} rows="10" cols="50" />
      <button onClick={handleClick}>Analisar</button>
      {renderSong()}
    </div>
  );
}

// Exportando o componente
export default Chord;

