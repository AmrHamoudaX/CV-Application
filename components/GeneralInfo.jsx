import { useState } from "react"

function GeneralInfo({info,onChange}){
  const [status, setStatus] = useState('typing')

  function handleSubmit(e){
    e.preventDefault()
    status === 'typing'? setStatus('submitted'):setStatus('typing')
  }

  return(
  <div className="section-card">
      <h2> General Info </h2>
      <form onSubmit={handleSubmit}>
      <input disabled={status==='submitted'} name='fullName' value={info.fullName} onChange={onChange} placeholder="FullName"/>
      <input disabled={status==='submitted'} name='email' value={info.email} onChange={onChange} placeholder="Email Address"/>
      <input disabled={status==='submitted'} name='phoneNumber' value={info.phoneNumber} onChange={onChange} placeholder="Phone Number"/>
      <input disabled={status==='submitted'} name='gitHubUser' value={info.gitHubUser} onChange={onChange} placeholder="GitHub Username"/>
      <input disabled={status==='submitted'} name='linkedInUrl' value={info.linkedInUrl} onChange={onChange} placeholder="LinkedIn Profile URL"/>
        {status === 'typing' ?
      <button disabled={status ==='submitted'} type='submit'> Submit </button>:
      <button  type="submit"> Edit </button>
        }
        {status === 'submitted' && <p> Submitted Successfully! </p>}
      </form>
  </div>
  )
}


export default GeneralInfo

