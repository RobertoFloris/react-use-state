const Main = (props) => {
  const { languages } = props;
  return (
    <main>
      <div className="container">
        {languages.map(language => (
          <button key={language.id} type="button" className="btn btn-primary m-3">{language.title}</button>
        ))}
      </div>
    </main>
  )
}

export default Main