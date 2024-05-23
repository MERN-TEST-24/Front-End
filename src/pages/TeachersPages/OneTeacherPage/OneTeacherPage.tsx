import { Box } from '@mui/material'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import { useParams } from 'react-router-dom'

const OneTeacherPage = () => {
  const { teacherId } = useParams()

  return (
    <PageWrapper>
      <Box>OneTeacherPage - Teacher ID: {teacherId}</Box>
    </PageWrapper>
  )
}

export default OneTeacherPage
