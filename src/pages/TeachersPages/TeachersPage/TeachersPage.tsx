import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import { useNavigate } from 'react-router-dom'
import ControlsMenu from '../../../components/controlsMenu/ControlsMenu'
import React from 'react'

const TeachersPage: React.FC = () => {
  const navigate = useNavigate()

  const handleAllTeachersClick = () => {
    navigate('/Teachers/all-teachers')
  }

  const handleAddTeacherClick = () => {
    navigate('/Teachers/add-teacher')
  }

  const handleTeacherClick = () => {
    navigate('/Teachers/one-teacher/123')
  }

  const buttons = [
    { label: 'All Teachers', handleClick: handleAllTeachersClick },
    { label: 'Add Teacher', handleClick: handleAddTeacherClick }
  ]

  return (
    <PageWrapper>
      <ControlsMenu
        buttons={buttons}
        showIcon={false}
        title='Teachers functionality'
      />
      <button onClick={handleTeacherClick}>Перейти до викладача 123</button>
    </PageWrapper>
  )
}

export default TeachersPage
