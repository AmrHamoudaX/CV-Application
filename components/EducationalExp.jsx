function EducationalExp({info, onChange}){
  function handleSubmit(e){
    e.preventDefault()
  }
  return(
  <div className="section-card">
      <h2> Educational Experience </h2>
      <form onSubmit={handleSubmit}>
      <input name="degreeName" value={info.degreeName} onChange={onChange} placeholder="Degree Name (e.g. Bachelor of Science)"/>
      <input  name="collegeName" value={info.collegeName} onChange={onChange} placeholder="School/College Name"/>
      <input name="yearOfStudy" value={info.yearOfStudy} onChange={onChange} placeholder="Year of Study"/>
      <button type="submi"> Submit </button>
      </form>

  </div>
  )
}

export default EducationalExp
