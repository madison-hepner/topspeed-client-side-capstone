import "./TopSpeed.css"
import "./Home.css"
import { ArticleList } from "./articles/ArticleList"
import { CarCardList } from "./carcards/HomeCardList"

export const Home = () => {
    return (
        <>
        <section className="page__section">
        <div className="space-1"></div>
        <div className="grow">
        <h2 className="page__title">Welcome to Top Speed</h2>
        </div>
        <div className="home__spacer"></div>
        <h4 className="about__header">About</h4>
        <div className="details__comment__spacer"></div>
         <p className="about__text">Top Speed is a car froum that aims to make a place for car enthusiasts to discuss their projects, ask their questions, and connect with others of same interest. Browse the general forum to see all posts made, and browse individual forums to be make-specific. Enjoy! </p>
        <div className="about__spacer"></div>
        <div className="header__spacer"></div>
        
        <CarCardList />

        <div className="header__spacer"></div>
        </section>

        <section className="featured__articles">
                <h3 className="featured__header">Featured</h3>
                <div className="articles__feature__spacer"></div>
                <ArticleList />

        </section>
        </>
    )
}