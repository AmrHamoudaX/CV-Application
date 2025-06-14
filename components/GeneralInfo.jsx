function GeneralInfo({info,onChange}){
  function handleSubmit(e){
    e.preventDefault()
  }
  return(
  <div className="section-card">
      <h2> General Info </h2>
      <form onSubmit={handleSubmit}>
      <input name='fullName' value={info.fullName || 'Mark Deez'} onChange={onChange} placeholder="FullName"/>
      <input name='email' value={info.email} onChange={onChange} placeholder="Email Address"/>
      <input name='phoneNumber' value={info.phoneNumber} onChange={onChange} placeholder="Phone Number"/>
      <input name='gitHubUser' value={info.gitHubUser} onChange={onChange} placeholder="GitHub Username"/>
      <input name='linkedInUrl' value={info.linkedInUrl} onChange={onChange} placeholder="LinkedIn Profile URL"/>
      <button type='submit'> Submit </button>
      </form>
  </div>
  )
}


export default GeneralInfo

