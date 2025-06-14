import { useState } from "react"

function PracticalExperience({info, onChange}) {
  const [status, setStatus] = useState('typing')

  function handleSubmit(e){
    e.preventDefault()
    status === 'typing'? setStatus('submitted'):setStatus('typing')
  }

  return(
  <div className="section-card">
<h2> Practical Experience </h2>
      <form onSubmit={handleSubmit}>
        <input disabled={status==='submitted'} name="companyName" value={info.companyName} onChange={onChange}  placeholder="Company Name"/>
        <input disabled={status==='submitted'} name="positionTitle" value={info.positionTitle} onChange={onChange} placeholder="Position Title"/>
        <input disabled={status==='submitted'} name="dateFrom" value={info.dateFrom} onChange={onChange}  type="date" />
        <input disabled={status==='submitted'} name="dateTo" value={info.dateTo} onChange={onChange} type="date" />
        <textarea disabled={status==='submitted'} name="mainResponsibility" value={info.mainResponsibility} onChange={onChange} placeholder="Main Responsibilities" ></textarea>
        {status === 'typing' ?
      <button disabled={status ==='submitted'} type='submit'> Submit </button>:
      <button  type="submit"> Edit </button>
        }
        {status === 'submitted' && <p> Submitted Successfully! </p>}
      </form>
  </div>
  )
}

export default PracticalExperience
