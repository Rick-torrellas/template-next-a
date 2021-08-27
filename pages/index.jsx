import Layout from "../components/Layout";
import axios from "axios";

/* import {} from "./../react-icons/Icons"; */

export default function Home({res}) {
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
function Content({res}) {
  return (
    <>
    {res.map((Res,i) => {
      return (
    <p key={i}>{Res.name}</p>
      )
    })}
    </>
  )
}

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:3000/api/data/home');
  return {
    props: {res: res.data}
  }
}