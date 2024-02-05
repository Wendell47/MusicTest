/* eslint-disable react/prop-types */
import { Container } from "./style";

export default function SongCardList({data}){
    return(
        <Container>
            <span>{data.id}</span>
              <img src={data.thumbnail} alt={data.title} />
                         <div>
                       
                        <h4>{data.title}</h4>
                        <p>{data.artist}</p>
                       
                        <div className="Tags">
                       
                        <button>{data.tag}</button>
                        
                        </div>

                         </div>
        </Container>
    )
}