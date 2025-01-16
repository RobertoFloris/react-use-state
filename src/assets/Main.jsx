const Main = (props) => {
  const { languages } = props;
  return (
    <main>

      <div className="container">

        {languages.map(language => (
          <button key={language.id} type="button" className="btn btn-primary m-3">{language.title}</button>
        ))}

        <div class="card">
          <div class="card-body">

            <div>
              <h2>{languages[0].title}</h2>
            </div>

            <div>
              {languages[0].description}
            </div>

          </div>
        </div>

      </div>

    </main>
  )
}

export default Main