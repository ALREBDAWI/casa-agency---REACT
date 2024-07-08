import errorSign from '../assets/404.png';

function Error(){
    return(
        <section className='error_wrapper'>
                <img src={errorSign}></img>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <a href='/'>Retourner sur la page d’accueil</a>
        </section>

    )
}

export default Error