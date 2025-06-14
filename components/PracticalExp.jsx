function PracticalExperience({info, onChange}) {
function handleSubmit(e){
    e.preventDefault()
  }
  return(
  <div className="section-card">
<h2> Practical Experience </h2>
      <form onSubmit={handleSubmit}>
        <input name="companyName" value={info.companyName} onChange={onChange}  placeholder="Company Name"/>
        <input name="positionTitle" value={info.positionTitle} onChange={onChange} placeholder="Position Title"/>
        <input name="dateFrom" value={info.dateFrom} onChange={onChange}  type="date" />
        <input name="dateTo" value={info.dateTo} onChange={onChange} type="date" />
        <textarea name="mainResponsibility" value={info.mainResponsibility} onChange={onChange} placeholder="Main Responsibilities" ></textarea>
        <button type="submit"> Submit </button>
      </form>
  </div>
  )
}

export default PracticalExperience
