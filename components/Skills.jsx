function Skills({info,onChange}) {

  function handleSubmit(e){
    e.preventDefault()
  }
  return(
  <div className="section-card">
      <h2> Skills </h2>
      <form onSubmit={handleSubmit}>
      <input name='technicalSkills' value={info.technicalSkills} onChange={onChange} placeholder="Technical Skills (e.g., Java, JavaScript,SQL)"/>
      <input name='softSkills' value={info.softSkills}  onChange={onChange} placeholder=" Soft Skills (e.g., Communication, Teamwork)"/>
      <input name='analyticalSkills' value={info.analyticalSkills}  onChange={onChange} placeholder="Analytical Skills (e.g., Critical Thinking)"/>
      <button type="submit"> Submit </button>
      </form>
  </div>
  )
}

export default Skills
