import Layout from "./../../components/Layout";

/* import {} from "./../react-icons/Icons"; */

export default function About({res}) {
  return (
    <Layout
    title=""
    >
<Content 
  res={res}
/>
    </Layout>
  )
}
function Content() {
  return (
    <div>
        <h1>About</h1>
        <p>Text related to your application</p>
    </div>
  )
}