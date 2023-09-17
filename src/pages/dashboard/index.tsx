import Head from 'next/head'
import styles from './styles.module.css'

export default function Dashboard () {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Meu Painel de Tarefas
                </title>
            </Head>
                <h1>Painel</h1>
        </div>
    )
}