import Layout from "../components/Layout"
import Row from "react-bootstrap/Row";

export default function RowMap({dataRaw,children}) {
// la idea es que este layout mande la informacion que neciba a los componentes jijos, para poder construir los componentes hijos
    return (
    <Layout>
        <Row xs={1} md={2} className="g-4">
  {dataRaw.map((data, id) => (
        {children}
  ))}
</Row>
</Layout>
    )
}