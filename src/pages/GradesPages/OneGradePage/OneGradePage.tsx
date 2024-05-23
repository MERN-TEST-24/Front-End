import { Box } from '@mui/material'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import { useParams } from 'react-router-dom'

const OneGradePage = () => {
  const { gradeId } = useParams()

  return (
    <PageWrapper>
      <Box>OneGradePage - Grade ID: {gradeId}</Box>
    </PageWrapper>
  )
}

export default OneGradePage
