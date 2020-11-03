import React, { Fragment, useState } from 'react';
import "./style.css";

export default function Header(props) {

    const [search, setSearch] = useState ("");

    function buscar(){
        props.history.push("/busca")
    }

    return(

        <Fragment>
        <div className="Header">
            <div className="main-header">
                last.fm
            </div>
            <form onSubmit={buscar}>
            <input type="text" name="query" id="query" placeholder="artista ou álbum" 
            onChange={e => setSearch(e.target.value)}
            />
            <button type="submit">pesquisar</button>
            </form>
        </div>
        </Fragment>
    )
}

/*class Header extends Component {
    render() {
        return <h1>Hello</h1>
    }
}*/
