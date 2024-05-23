import AddEntityForm from '../../../components/AddEntityForm/AddEntityForm'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'

export default function AddSubjectPage() {
  return (
    <PageWrapper>
      <AddEntityForm
        apiEndpoint='/api/subject/add'
        entityLabel='Add Subject'
        fields={[
          { name: 'subject_name', label: 'Subject Name', required: true }
        ]}
      />
    </PageWrapper>
  )
}
