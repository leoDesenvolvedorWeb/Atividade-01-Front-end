import './Welcome.css'

function Welcome({nome = 'usuário', sobrenome = 'teste'}) {
    // const { nome } { sobrenome } = props;
    return(
        <h1>Olá { nome } { sobrenome } seja bem vindo (a) !</h1>
    )
}


export default Welcome;