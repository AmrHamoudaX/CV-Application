import { useState } from "react"

function Skills({info,onChange}) {

  const [status, setStatus] = useState('typing')

  function handleSubmit(e){
    e.preventDefault()
    status === 'typing'? setStatus('submitted'):setStatus('typing')
  }

  return(
  <div className="section-card">
      <h2> Skills </h2>
      <form onSubmit={handleSubmit}>
      <input disabled={status==='submitted'} name='technicalSkills' value={info.technicalSkills} onChange={onChange} placeholder="Technical Skills (e.g., Java, JavaScript,SQL)"/>
      <input disabled={status==='submitted'} name='softSkills' value={info.softSkills}  onChange={onChange} placeholder=" Soft Skills (e.g., Communication, Teamwork)"/>
      <input disabled={status==='submitted'} name='analyticalSkills' value={info.analyticalSkills}  onChange={onChange} placeholder="Analytical Skills (e.g., Critical Thinking)"/>
        {status === 'typing' ?
      <button disabled={status ==='submitted'} type='submit'> Submit </button>:
      <button  type="submit"> Edit </button>
        }
        {status === 'submitted' && <p> Submitted Successfully! </p>}
      </form>
  </div>
  )
}

export default Skills
