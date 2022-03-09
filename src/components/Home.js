import "./TopSpeed.css"
import "./Home.css"

export const Home = () => {
    return (
        <>
        <section className="page__section">
        <div className="space-1"></div>
        <div className="grow">
        <h2 className="page__title">Welcome to Top Speed</h2>
        </div>
        <div className="header__spacer"></div>

        <div className="article__box">
         // ARTICLES HERE

        </div>
        <div className="header__spacer"></div>
        </section>

        <section className="featured__articles">
                <h3 className="featured__header">Featured</h3>
                <div className="articles__feature__spacer"></div>

        </section>
        </>
    )
}