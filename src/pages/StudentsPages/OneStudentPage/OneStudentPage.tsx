import { Box } from '@mui/material'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import { useParams } from 'react-router-dom'

const OneStudentPage = () => {
  const { studentId } = useParams()

  return (
    <PageWrapper>
      <Box>OneStudentPage - Student ID: {studentId}</Box>
    </PageWrapper>
  )
}

export default OneStudentPage
