import { Box } from '@mui/material'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import { useParams } from 'react-router-dom'

const OneSubjectPage = () => {
  const { subjectId } = useParams()

  return (
    <PageWrapper>
      <Box>OneSubjectPage - Subject ID: {subjectId}</Box>
    </PageWrapper>
  )
}

export default OneSubjectPage
