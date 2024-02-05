import { Container } from "./style";
import { Songs } from "../../components/Music";
import SongCardList from "../../components/SongCardList";


export default  function ListSongs(){

    return(
       <Container>
        <div>
           <button>Todas</button>
           <button>História</button>
           <button>Oração</button>
           <button>citação</button>

        </div>

        <div>
            {
                Songs.map(item =>(
                    <SongCardList
                    key={item.id}
                    data={item}
                    />
                ))
            }
        </div>
       </Container> 
    )
}