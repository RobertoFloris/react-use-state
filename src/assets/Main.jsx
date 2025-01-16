import { useState } from "react";

const Main = (props) => {

  const { languages } = props;

  const [selectedId, setSelectedId] = useState(0)

  return (
    <main>

      <div className="container">

        {languages.map(language => (
          <button key={language.id} type="button" className={selectedId == language.id ? "btn btn-warning m-3" : "btn btn-primary m-3"} onClick={() => setSelectedId(language.id)} >{language.title}</button>
        ))}

        <div className="card">
          <div className="card-body">

            {selectedId == 0 ? <p>Nessun linguaggio selezionato</p> :
              <div>

                <div>
                  <h2>{languages.find(language => language.id == selectedId).title}</h2>
                </div>

                <div>
                  <p>{languages.find(language => language.id == selectedId).description}</p>
                </div>

              </div>}

          </div>
        </div>

      </div>

    </main>
  )
}

export default Main