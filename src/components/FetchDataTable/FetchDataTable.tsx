import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CircularProgress from '@mui/material/CircularProgress'
import { useHTTP } from '../../hooks/http.hook'

interface FetchDataTableProps {
  apiEndpoint: string
  columns: { field: string; headerName: string }[]
  tableLabel: string
}

export default function FetchDataTable({
  apiEndpoint,
  columns,
  tableLabel,
}: FetchDataTableProps) {
  const { request } = useHTTP();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData: any = await request(apiEndpoint, 'GET')
        setData(responseData)
        setLoading(false)
      } catch (err) {
        setError('An error occurred while fetching data')
        setLoading(false)
      }
    };

    fetchData();
  }, [apiEndpoint, request])

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center">
        {error}
      </Typography>
    );
  }

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          {tableLabel}
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.field} sx={{ fontWeight: 'bold' }}>{column.headerName}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} sx={{ backgroundColor: index % 2 ? '#f5f5f5' : '' }}>
                  {columns.map((column) => (
                    <TableCell key={column.field}>{row[column.field]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
