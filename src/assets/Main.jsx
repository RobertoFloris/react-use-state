import { useState } from "react";

const Main = (props) => {

  const { languages } = props;

  const [selectedId, setSelectedId] = useState(1)

  return (
    <main>

      <div className="container">

        {languages.map(language => (
          <button key={language.id} type="button" className={selectedId == language.id ? "btn btn-warning m-3" : "btn btn-primary m-3"} onClick={() => setSelectedId(language.id)} >{language.title}</button>
        ))}

        <div class="card">
          <div class="card-body">

            <div>
              <h2>{languages.find(language => language.id == selectedId).title}</h2>
            </div>

            <div>
              <p>{languages.find(language => language.id == selectedId).description}</p>
            </div>

          </div>
        </div>

      </div>

    </main>
  )
}

export default Main