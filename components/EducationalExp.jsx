import { useState } from "react"

function EducationalExp({info, onChange}){
  const [status, setStatus] = useState('typing')

  function handleSubmit(e){
    e.preventDefault()
    status === 'typing'? setStatus('submitted'):setStatus('typing')
  }
  return(
  <div className="section-card">
      <h2> Educational Experience </h2>
      <form onSubmit={handleSubmit}>
      <input disabled={status==='submitted'} name="degreeName" value={info.degreeName} onChange={onChange} placeholder="Degree Name (e.g. Bachelor of Science)"/>
      <input disabled={status==='submitted'} name="collegeName" value={info.collegeName} onChange={onChange} placeholder="School/College Name"/>
      <input disabled={status==='submitted'}  name="yearOfStudy" value={info.yearOfStudy} onChange={onChange} placeholder="Year of Study"/>
        {status === 'typing' ?
      <button disabled={status ==='submitted'} type='submit'> Submit </button>:
      <button  type="submit"> Edit </button>
        }
        {status === 'submitted' && <p> Submitted Successfully! </p>}
      </form>

  </div>
  )
}

export default EducationalExp
