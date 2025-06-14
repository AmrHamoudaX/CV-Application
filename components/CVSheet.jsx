import PracticalExperience from "./PracticalExp" 
import EducationalExp from "./EducationalExp"
import GeneralInfo from "./GeneralInfo"
import { useState } from "react"
import Skills from "./Skills"

function CVSheet(){
  //GeneralInfo
  const [generalInfo, setGeneralInfo] = useState(
  {
  fullName: 'Mark Deez',
  email: 'markdeez@example.com',
  phoneNumber: '00287238428', 
  gitHubUser: 'mark-deez', 
  linkedInUrl: 'linkedin.com/mark-deez'
  }
  )

  const [practicalExp, setPracticalExp] = useState(
    {
      companyName: 'Odin Corporation',
      positionTitle: 'Full Stack Dev',
      mainResponsibility: 'Built both front-end and back-end parts of web applications, managed databases, ensured security, handled deployment, and collaborated with teams to create efficient solutions.',
      dateFrom: '', 
      dateTo: ''
    }
  )
  
  const [educationalInfo, setEducationInfo] = useState(
    {
      degreeName: 'Bachelor of Engineering in Computer Science',
      collegeName: 'Odin Uni',
      yearOfStudy: '2025 - 2026'
    }
  )

  const [skillsInfo, setSkillsInfo] = useState(
    {
      technicalSkills: '',
      softSkills: '', 
      analyticalSkills: ''
    }
  )

  function handleSkills(e){
    setSkillsInfo({
      ...skillsInfo,
      [e.target.name] : e.target.value
    })
  }

  function handlePracticalExp(e) {
    setPracticalExp({
      ...practicalExp,
      [e.target.name] : e.target.value
    })
  }

  function handleGeneralInfo(e) {
    setGeneralInfo({
    ...generalInfo, 
    [e.target.name] : e.target.value
    })
  }

  function handleEducationalInfo(e) {
    setEducationInfo({
      ...educationalInfo,
      [e.target.name] : e.target.value
    })
  }
  return(
<div className='centered-wrapper'>
  <h1 className='title'> CV Generator </h1>
  <p className='slogan'> Craft your resume, shape your future ! </p>
    <div className='main-section'> 
        <GeneralInfo info={generalInfo} onChange={handleGeneralInfo}/>
        <EducationalExp info={educationalInfo} onChange={handleEducationalInfo}/>
        <Skills info={skillsInfo} onChange={handleSkills}/> 
        <PracticalExperience info={practicalExp} onChange={handlePracticalExp}/>
  </div>
  <div className="cv-sheet">
        {/* GeneralInfo */}
        <div  className="section gen-info">
          <h2> {generalInfo.fullName} </h2>
          <p className="center-line">
            Github: {generalInfo.gitHubUser} | {generalInfo.email}
          </p>
          <p className="center-line">
            {generalInfo.phoneNumber} | {generalInfo.linkedInUrl}
          </p>
        </div>
        {/* End GeneralInfo*/}

        {/* Educational Exp*/}
        <div className="section edu-info">
          <h4> EDUCATION </h4>
          <p> 
            {educationalInfo.degreeName}, {educationalInfo.collegeName}
          </p>
          <p> {educationalInfo.yearOfStudy}</p>
        </div>
        {/* End Educational Exp */}

        {/* Skills Info */}
          <div className="section skill-info" >
          <h4> Skills </h4> 
          <p>
          <strong>Technical:</strong> {skillsInfo.technicalSkills}
          </p>
          <p>
          <strong>Soft:</strong> {skillsInfo.softSkills}
          </p>
          <p>
          <strong>Analytical:</strong> {skillsInfo.analyticalSkills}
          </p>

          </div>
        {/* End SkillsInfo */}

        {/* PracticalExperience */}
        <div className="section exp-info" >
          <h4> Experience </h4> 
          <p> 
          <strong>Company:</strong> {practicalExp.companyName}
          </p>
          <p>
          <strong>Duration:</strong> {practicalExp.dateFrom} - {practicalExp.dateTo} 
          </p>
          <p>
          <strong>Role:</strong> {practicalExp.positionTitle}
          </p>
          <p> {practicalExp.mainResponsibility}</p>
        </div>
        {/* End PracticalExperience */}
  </div>
</div>
  )
}

export default CVSheet

