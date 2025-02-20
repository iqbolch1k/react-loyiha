import './PagesMain.css'
const titles = [
    {
        id: 1,
        name: 'Getting Started',
        text: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
        title: 'Browse Airticle'
    },
    {
        id: 2,
        name: 'Sales Questions',
        text: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
        title: 'Browse Airticle'
    },
    {
        id: 3,
        name: 'Uses Guides',
        text: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
        title: 'Browse Airticle'
    },
    {
        id: 4,
        name: 'Getting Started',
        text: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
        title: 'Browse Airticle'
    },
    {
        id: 5,
        name: 'Getting Started',
        text: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
        title: 'Browse Airticle'
    },
    {
        id: 6,
        name: 'Getting Started',
        text: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
        title: 'Browse Airticle'
    }

]
function PagesMain() {
    return (
        <div className='PagesMain'>
            <h1>Browse Questions by Category</h1>
            <div className='PagesItems'>
                {titles.map(item => {
                    return (
                        item.id == 6 ?
                            <div className='PagesItem' key={item.id}>
                                <h3>{item.name}</h3>
                                <p>{item.text}</p>
                                <h4 className='aTag'><a href="#">{item.title}</a></h4>
                            </div>
                            : <div className='PagesItem' key={item.id}>
                                <h3>{item.name}</h3>
                                <p>{item.text}</p>
                                <h4>{item.title}</h4>
                            </div>
                    );
                })}
            </div>
        </div>
    );
}
export default PagesMain
