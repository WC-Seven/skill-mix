import Container from "../components/Container"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"
export default function Home() {
    const clients = [
        new Client('Bia', 10, '1'),
        new Client('Bryan', 3, '2'),
        new Client('Dri', 32, '3'),
        new Client('Veia', 100, '4'),
    ]

    return (
        <Container>
            <Layout title="Formulário de Cadastro">
                <Table objects={clients}></Table>
            </Layout>
        </Container>
    )
}
